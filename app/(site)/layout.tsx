import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

/** Every normal page: nav on top, footer below. The coming-soon page sits outside this group. */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
}
