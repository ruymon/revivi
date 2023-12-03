import { signOut } from '@/actions/authActions';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/DropdownMenu';
import { Menu } from 'lucide-react';
import { NavbarThemeSwitcher } from './NavbarThemeSwitcher';

interface NavbarDropdownMenuProps {};

export function NavbarDropdownMenu({}: NavbarDropdownMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='data-[state=open]:text-accent-foreground transition-colors text-muted-foreground p-2 rounded-md hover:bg-accent hover:text-accent-foreground'>
        <Menu />
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' sideOffset={8}>
        <DropdownMenuItem>
          <NavbarThemeSwitcher />
        </DropdownMenuItem>
        <DropdownMenuItem>Configurações</DropdownMenuItem>
        <DropdownMenuItem>Sobre</DropdownMenuItem>
        <DropdownMenuItem asChild className='p-0'>
          <form action={signOut} >
            <button className='w-full h-full text-left px-2 py-1.5'>Sair</button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
