/**
 * Business details used across the site.
 * Anything left as an empty string is hidden on the page, so you can fill
 * these in as they become ready.
 */
type SiteConfig = {
  name: string;
  fullName: string;
  owner: string;
  url: string;
  email: string;
  phone: string;
  textNumber: string;
  bookingUrl: string;
  quoteFormEndpoint: string;
  serviceArea: string;
  hours: string;
};

export const site: SiteConfig = {
  name: "SEF",
  fullName: "Software & Electronics Firm",
  owner: "Yusef",
  url: "https://sef101.com",
  email: "contact@sef101.com",

  /** Business phone for calls, e.g. "(312) 555-0100". Empty = hidden. */
  phone: "",

  /** Business number for texts (Google Voice). Text only for now, so it isn't listed as a phone. */
  textNumber: "(224) 432-0446",

  /** Free booking link (Cal.com or similar). Empty = "Book a free call" goes to the contact page. */
  bookingUrl: "",

  /**
   * Where the quote form posts (a Formspree or similar endpoint that accepts JSON).
   * Empty = the form opens the visitor's email app with the message filled in.
   */
  quoteFormEndpoint: "",

  serviceArea: "Remote anywhere in the US. In person by appointment.",
  hours: "Appointments on weekends. Replies within 24 hours.",
};

export const bookingHref = site.bookingUrl || "/contact";
export const bookingIsExternal = bookingHref.startsWith("http");
export const phoneHref = site.phone ? `tel:${site.phone.replace(/[^\d+]/g, "")}` : "";
export const smsHref = site.textNumber ? `sms:+1${site.textNumber.replace(/\D/g, "")}` : "";
