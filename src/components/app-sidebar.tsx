import * as React from "react";
import {
  Megaphone,
} from "lucide-react";
import Logo from "@/assets/auth-logo.png";

import { NavMain } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import {
  BellNotification,
  BitcoinRotateOut,
  BrightStar,
  DollarCircle,
  EmptyPage,
  HeadsetHelp,
  JournalPage,
  MediaVideo,
  MultiplePagesEmpty,
  OpenBook,
  Page,
  PageMinusIn,
  QuestionMark,
  Strategy,
  TaskList,
  Upload,
  User,
  ViewGrid,
} from "iconoir-react"; 

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: ViewGrid,
    },
    {
      title: "UploadFiles",
      url: "/upload-files",
      icon: Upload,
    },
    {
      title: "Users",
      url: "/users",
      icon: User,
    },
    {
      title: "Course Introduction",
      url: "/course-introduction",
      icon: OpenBook,
    },
    {
      title: "Lessons & Videos",
      url: "/lessons-videos",
      icon: MediaVideo,
    },
    {
      title: "Domains and Tasks",
      url: "/domains-tasks",
      icon: TaskList,
    },
    {
      title: "Questions",
      url: "/questions",
      icon: QuestionMark,
    },
    {
      title: "Exams",
      url: "/exams",
      icon: JournalPage,
    },
    {
      title: "Flash Cards",
      url: "/flash-cards",
      icon: MultiplePagesEmpty,
    },
    {
      title: "Application Support",
      url: "/application-support",
      icon: HeadsetHelp,
    },
    {
      title: "Exam Strategy",
      url: "/exam-strategy",
      icon: Strategy,
    },
    {
      title: "Certificates/PDUs",
      url: "/certificates-pdus",
      icon: EmptyPage,
    },
    {
      title: "Announcements",
      url: "/announcements",
      icon: Megaphone, 
    },
    {
      title: "Notifications",
      url: "/notifications",
      icon: BellNotification,
    },
    {
      title: "Ratings & Reviews",
      url: "/ratings-reviews",
      icon: BrightStar,
    },
        {
      title: "Support",
      url: "/support",
      icon: HeadsetHelp,
    },
    {
      title: "Courses",
      url: "/courses",
      icon: JournalPage,
    },
         {
      title: "Subscription Management",
      url: "/subscription-management",
      icon: DollarCircle,
    },
      {
      title: "Subscriptions Purchased",
      url: "/subscriptions-purchased",
      icon: BitcoinRotateOut,
    },
          {
      title: "Mock Exams",
      url: "/mock-exams",
      icon: Page,
    },
              {
      title: "Tickets",
      url: "/tickets",
      icon: PageMinusIn,
    },
  ],

};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <a href="/dashboard" className="flex gap-[10px] items-center">
          <img src={Logo} alt="Logo" className="max-w-[58px]"/>
          <div className="justify-start text-[#0a4ba8] text-sm font-bold leading-5">vCareProject Management</div>
        </a>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      {/* <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter> */}
    </Sidebar>
  );
}
