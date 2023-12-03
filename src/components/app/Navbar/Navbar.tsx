import { Library } from "lucide-react";
import { NavbarDropdownMenu } from "./NavbarDropdownMenu";

export function Navbar() {
  return (
    <nav className='flex items-center justify-between py-6 bg-background z-50 w-full max-w-5xl mx-auto sticky top-0'>
      <div className="flex items-center gap-2">
        <Library className="w-6 h-9 md:w-7 md:h-7 text-primary" />
        <span className="text-xl md:text-2xl font-bold">Revivi</span>
      </div>
      <NavbarDropdownMenu />
    </nav>
  );
};
