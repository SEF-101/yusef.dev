import { ReactNode } from "react";

export default function ResourcesLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto px-4 py-6">
      {children}
    </div>
  );
}
