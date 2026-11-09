import { NextResponse, type NextRequest } from "next/server";

/**
 * Coming-soon gate.
 *
 * While COMING_SOON is true, every page on the live site (Vercel production) shows the
 * /coming-soon page instead. The address bar keeps the URL people typed or scanned.
 *
 * - Local `npm run dev` and `npm start` always show the full site, so you can keep working.
 * - Try the gate locally: `FORCE_COMING_SOON=1 npm start`.
 * - See the full live site yourself: set SITE_PREVIEW_KEY in Vercel, then open
 *   https://sef101.com/?preview=<that key> once. A cookie keeps it open on that device for 30 days.
 * - Open the site to everyone: set COMING_SOON to false and redeploy.
 */
const COMING_SOON = true;

const PREVIEW_COOKIE = "sef_preview";

export function middleware(req: NextRequest) {
  const live = process.env.VERCEL_ENV === "production" || process.env.FORCE_COMING_SOON === "1";
  if (!COMING_SOON || !live) return NextResponse.next();

  const { pathname, searchParams } = req.nextUrl;
  if (pathname === "/coming-soon") return NextResponse.next();

  const key = process.env.SITE_PREVIEW_KEY;
  if (key) {
    if (searchParams.get("preview") === key) {
      const clean = req.nextUrl.clone();
      clean.searchParams.delete("preview");
      const res = NextResponse.redirect(clean);
      res.cookies.set(PREVIEW_COOKIE, key, {
        httpOnly: true,
        sameSite: "lax",
        secure: req.nextUrl.protocol === "https:",
        maxAge: 60 * 60 * 24 * 30,
        path: "/",
      });
      return res;
    }
    if (req.cookies.get(PREVIEW_COOKIE)?.value === key) return NextResponse.next();
  }

  const gate = req.nextUrl.clone();
  gate.pathname = "/coming-soon";
  gate.search = "";
  return NextResponse.rewrite(gate);
}

export const config = {
  // Pages only: skip Next.js internals and any file with an extension (images, robots.txt, icons).
  matcher: ["/((?!_next/|_vercel/|.*\\.[a-zA-Z0-9]+$).*)"],
};
