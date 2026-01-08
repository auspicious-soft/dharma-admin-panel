import { SidebarFooter, SidebarTrigger } from "@/components/ui/sidebar"
import { NavUser } from "./nav-user";

const data = {
  user: {
    name: "Dharam",
    avatar: "/avatars/shadcn.jpg",
  },
};

export function SiteHeader() {

  return (
    <header className="sticky top-0 z-10 group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-14 md:h-16 shrink-0 items-center gap-2 bg-light-blue transition-[width,height] ease-linear">
      <div className="flex w-full items-center justify-between gap-1 px-3 lg:gap-2 lg:px-3">
        <SidebarTrigger className="-ml-1" />
    
        <SidebarFooter>
         <NavUser user={data.user} />
         </SidebarFooter>
      </div>
    </header>
  )
}
