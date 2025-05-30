import HubNavbar from "@/components/navbars/hub-navbar";

export const metadata = {
  title: "SEF101 Resource Center",
};

export default function FamilyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HubNavbar />
      <div className="container mx-auto px-4 py-6">
        {children}
      </div>
    </>
  );
}
