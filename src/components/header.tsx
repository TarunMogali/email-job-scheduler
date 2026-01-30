import { SidebarTrigger } from '@/components/ui/sidebar';
import { UserNav } from './user-nav';
import { ComposeDialog } from './compose-dialog';
import { Button } from './ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm sm:px-6">
      <SidebarTrigger className="md:hidden" />
      <div className="flex-1" />
      <div className="hidden md:block">
        <ComposeDialog>
          <Button>Compose New Email</Button>
        </ComposeDialog>
      </div>
      <UserNav />
    </header>
  );
}
