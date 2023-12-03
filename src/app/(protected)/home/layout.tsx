import { ReactNode } from "react";

interface HomeLayoutProps {
  children: ReactNode;
};

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-6">
      {children}
    </div>
  );
};
