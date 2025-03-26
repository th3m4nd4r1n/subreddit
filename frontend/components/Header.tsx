import { Search, Bell, MessageCircle, Plus, User } from "lucide-react";
import Notifications from "./notification";
import { useState } from "react";

export default function Header() {
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);

    const toggleNotifications = () => {
        setIsNotificationOpen((prev) => !prev);
    };

    return (
        <header className="bg-black border-b border-gray-700 text-white flex items-center sticky justify-between px-4 py-2 w-full">
            {/* Left - Logo and Brand Name */}
            <div className="flex items-center space-x-2">
                <img src="/reddit-logo.png" alt="Reddit Logo" className="w-8 h-8" />
                <span className="text-lg font-bold">reddit</span>
            </div>

            {/* Center - Search Bar */}
            <div className="flex items-center bg-gray-800 px-3 rounded-full w-1/3">
                <Search className="w-5 h-10 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search Reddit"
                    className="bg-transparent outline-none text-white px-2 w-full"
                />
            </div>

            {/* Right - Icons */}
            <div className="flex items-center space-x-4">
                <div className="relative">
                    <Bell className="w-6 h-6 cursor-pointer hover:text-gray-400" onClick={toggleNotifications} />
                    <Notifications open={isNotificationOpen} toggle={toggleNotifications} />
                </div>
                <MessageCircle className="w-6 h-6 cursor-pointer hover:text-gray-400" />
                <Plus className="w-6 h-6 cursor-pointer hover:text-gray-400" />
                <div className="relative">
                    <User className="w-8 h-8 rounded-full bg-gray-700 cursor-pointer" />
                    <span className="absolute top-0 right-0 bg-red-500 text-xs text-white rounded-full px-1">2</span>
                </div>
            </div>
        </header>
    );
}
