import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--primary)]">

      <Navbar />
      {/* Page Content */}
      <main className="flex-grow">
        {/* Add your page-specific content here */}
      </main>
    </div>
  );
}