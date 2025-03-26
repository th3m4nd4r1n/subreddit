import { useState, useEffect } from "react";
import Link from "next/link";
import { Home, Compass, Users, BarChart, ChevronDown, ChevronUp, Plus, Inbox, Mail, Star } from "lucide-react";
import SidebarToggleButton from "./sidebarToggle"; // Import the new button component

const Sidebar = () => {
  const [moderationOpen, setModerationOpen] = useState(true);
  const [feedsOpen, setFeedsOpen] = useState(true);
  const [recentOpen, setRecentOpen] = useState(true);
  const [isOpen, setIsOpen] = useState(true); // Sidebar toggle state
  const [isMobile, setIsMobile] = useState(false); // To track if the user is on mobile or desktop

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsOpen(false); // Collapse sidebar on mobile
        setIsMobile(true); // Track if it is mobile view
      } else {
        setIsOpen(true); // Expand sidebar on larger screens
        setIsMobile(false); // Track if it is desktop view
      }
    };

    // Initial check
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Sidebar Component */}
      <aside className={`static top-[6.5%] overflow-y-scroll border-r border-gray-700 overflow-hidden left-0 h-auto bg-black text-white p-4 transition-all duration-300 ${isOpen ? "w-[17.8%]" : "w-0 p-2"} `}>
        {/* Navigation */}
        <nav className={`space-y-2 transition-all duration-100 ${isOpen ? "translate-x-0" : "-translate-x-64"} `}>
          <SidebarItem href="/" icon={Home} text="Home" active />
          <SidebarItem href="/popular" icon={Compass} text="Popular" />
          <SidebarItem href="/explore" icon={Users} text="Explore" />
          <SidebarItem href="/all" icon={BarChart} text="All" />
        </nav>

        <div className="border-t border-gray-700 my-4"></div>

        {/* Moderation Section */}
        <nav className={`transition-all duration-100 ${isOpen ? "translate-x-0" : "-translate-x-64"}`}>
        <CollapsibleSection 
          title="MODERATION" 
          isOpen={moderationOpen} 
          toggle={() => setModerationOpen(!moderationOpen)}
        >
          <SidebarItem href="/mod-queue" icon={Inbox} text="Mod Queue" />
          <SidebarItem href="/mod-mail" icon={Mail} text="Mod Mail" />
          <SidebarItem href="/r/mod" icon={Inbox} text="r/Mod" />
          <SidebarItem href="/r/example1" icon={Star} text="r/Example1" />
        </CollapsibleSection>
        </nav>
        {/* Custom Feeds */}
        <nav className={`transition-all duration-100 ${isOpen ? "translate-x-0" : "-translate-x-64"}`}>
        <CollapsibleSection 
          title="CUSTOM FEEDS" 
          isOpen={feedsOpen} 
          toggle={() => setFeedsOpen(!feedsOpen)}
        >
          <SidebarItem href="/create-feed" icon={Plus} text="Create a custom feed" />
          <SidebarItem href="/educational" icon={Star} text="Educational" />
        </CollapsibleSection>
        </nav>

        {/* Recent */}
        <nav className={`transition-all duration-100 ${isOpen ? "translate-x-0" : "-translate-x-64"}`}>
        <CollapsibleSection 
          title="RECENT" 
          isOpen={recentOpen} 
          toggle={() => setRecentOpen(!recentOpen)}
        />
        </nav>
      </aside>

      {/* Sidebar Toggle Button - Separate Component */}
      <SidebarToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

interface SidebarItemProps {
  href: string;
  icon: React.ElementType;
  text: string;
  active?: boolean;
}

const SidebarItem = ({ href, icon: Icon, text, active }: SidebarItemProps) => (
  <Link
    href={href}
    className={`flex items-center space-x-3 px-3 py-2 rounded-lg ${active ? "bg-gray-800" : "hover:bg-gray-700"}`}
  >
    <Icon className="w-5 h-5" />
    <span>{text}</span>
  </Link>
);

interface CollapsibleSectionProps {
  title: string;
  isOpen: boolean;
  toggle: () => void;
  children?: React.ReactNode;
}

const CollapsibleSection = ({ title, isOpen, toggle, children }: CollapsibleSectionProps) => (
  <div className="mb-2">
    <button onClick={toggle} className="flex justify-between w-full text-sm font-semibold text-gray-400 hover:text-white">
      {title}
      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
    </button>
    {isOpen && <div className="mt-2 space-y-2">{children}</div>}
  </div>
);

export default Sidebar;
