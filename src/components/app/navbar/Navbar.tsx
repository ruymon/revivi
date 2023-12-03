import { signOut } from "@/actions/authActions";
import { getProfile } from "@/actions/profileActions";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Button, buttonVariants } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { AUTH_LOGIN_ROUTE } from "@/constants/auth";
import { Library } from "lucide-react";
import Link from "next/link";

export async function Navbar() {
  const profile = await getProfile();

  return (
    <nav className='flex items-center justify-between py-6 bg-background z-50 w-full max-w-5xl mx-auto sticky top-0'>
      <div className="flex items-center gap-2">
        <Library className="w-6 h-9 md:w-7 md:h-7 text-primary" />
        <span className="text-xl md:text-2xl font-bold">{siteConfig.name}</span>
      </div>

      {/* <div className="flex items-center gap-6">
        <Link className={buttonVariants({ variant: "ghost" })} href='/'>
          <HomeIcon className="w-6 h-6" />
        </Link>

        <Link className={buttonVariants({ variant: "ghost" })} href='/'>
          <UserIcon className="w-6 h-6" />
        </Link>

        <Link className={buttonVariants({ variant: "ghost" })} href='/'>
          <SettingsIcon className="w-6 h-6" />
        </Link>
      </div> */}

      <div className="flex items-center gap-4">
        <ThemeSwitcher />
        {profile ? (
          <form action={signOut} >
            <Button>Sair</Button>
          </form>
        ) : <Link className={buttonVariants()} href={AUTH_LOGIN_ROUTE}>Entrar</Link>}
      </div>
    </nav>
  );
};
