'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FileClock,
  Inbox,
  Send,
} from 'lucide-react';
import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarContent,
  SidebarTrigger,
  SidebarGroup,
} from '@/components/ui/sidebar';
import { Button } from './ui/button';
import { ComposeDialog } from './compose-dialog';

const menuItems = [
  { href: '/inbox', label: 'Inbox', icon: Inbox },
  { href: '/sent', label: 'Sent', icon: Send },
  { href: '/scheduled', label: 'Scheduled', icon: FileClock },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon" className="border-r">
      <SidebarHeader className="h-14 items-center justify-between border-b p-2">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-9 w-9" asChild>
            <Link href="/inbox">
              <Send className="h-5 w-5 text-primary" />
            </Link>
          </Button>
          <h1 className="text-lg font-semibold tracking-tight">Outbox</h1>
        </div>
        <SidebarTrigger className="hidden group-data-[collapsible=icon]:flex" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <div className="p-2">
            <ComposeDialog>
                <Button className="w-full" size="lg">
                    Compose
                </Button>
            </ComposeDialog>
          </div>
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <Link href={item.href} legacyBehavior passHref>
                  <SidebarMenuButton
                    isActive={pathname.startsWith(item.href)}
                    tooltip={item.label}
                  >
                    <item.icon />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
