export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl mb-4">Get in Touch</h1>
        <p className="text-lg mb-8 font-roboto">
          Feel free to reach out to me via email. I’d love to hear from you!
        </p>
        <a
          href="mailto:yusef8000@gmail.com"
          className="text-lg hover:underline font-roboto"
        >
          Email Me
        </a>
      </main>
    </div>
  );
}