import { Navbar } from "@/components/app/navbar/Navbar";
import { ReactNode } from "react";

interface FeedLayoutProps {
  children: ReactNode;
};

export default function FeedLayout({ children }: FeedLayoutProps) {
  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-10 items-center">
      <Navbar />

      <main className="w-full max-w-xl flex flex-col gap-12">
        {children}
      </main>
    </div>
  );
};
