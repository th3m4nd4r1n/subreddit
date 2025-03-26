'use client';

import { useState, useEffect } from 'react';
import { Bell, MessageSquare, Settings } from 'lucide-react';

interface Notification {
    id: number;
    user: string;
    message: string;
    time: string;
    type: 'comment' | 'achievement' | 'post';
}

const mockNotifications: Notification[] = [
    {
        id: 1,
        user: 'IchitheWitch',
        message: 'Why are all the witches so PEAK in design, personality, quirk,...?',
        time: '4h',
        type: 'post',
    },
    {
        id: 2,
        user: 'HistoryMemes',
        message: 'You unlocked the Content Connoisseur achievement!',
        time: '2d',
        type: 'achievement',
    },
    {
        id: 3,
        user: 'u/t1mepiece',
        message: '12 would have been somewhat expected, but after that, dude get that thing...',
        time: 'Jan 13',
        type: 'comment',
    },
];

function Button({ onClick, children, className }: { onClick: () => void; children: React.ReactNode; className?: string }) {
    return (
        <button onClick={onClick} className={`p-2 rounded-lg bg-gray-700 hover:bg-gray-600 ${className}`}>
            {children}
        </button>
    );
}

function Card({ children }: { children: React.ReactNode }) {
    return <div className="m-2 p-3 bg-gray-800 rounded-lg shadow-md">{children}</div>;
}

export default function Notifications({ open, toggle }: { open: boolean; toggle: () => void }) {
    const [notifications, setNotifications] = useState<Notification[]>([]);

    useEffect(() => {
        // Simulate fetching notifications from an API
        setTimeout(() => {
            setNotifications(mockNotifications);
        }, 1000);
    }, []);

    return (
        <div className="relative">
            {open && (
                <div className="absolute right-0 mt-2 w-80 bg-gray-900 text-white rounded-lg shadow-lg z-50">
                    <div className="p-2 border-b border-gray-700 flex justify-between items-center">
                        <span className="font-semibold">Notifications</span>
                        <Settings className="w-5 h-5 cursor-pointer" onClick={toggle} />
                    </div>
                    <div className="max-h-80 overflow-auto">
                        {notifications.length === 0 ? (
                            <p className="p-4 text-gray-400">No notifications</p>
                        ) : (
                            notifications.map((notif) => (
                                <Card key={notif.id}>
                                    <div className="flex gap-3 items-start">
                                        {notif.type === 'comment' ? (
                                            <MessageSquare className="w-5 h-5 text-blue-400" />
                                        ) : notif.type === 'achievement' ? (
                                            <span className="w-5 h-5 bg-yellow-400 rounded-full" />
                                        ) : (
                                            <span className="w-5 h-5 bg-purple-400 rounded-full" />
                                        )}
                                        <div>
                                            <p className="text-sm">
                                                <span className="font-semibold">{notif.user}</span>: {notif.message}
                                            </p>
                                            <p className="text-xs text-gray-400">{notif.time} ago</p>
                                        </div>
                                    </div>
                                </Card>
                            ))
                        )}
                    </div>
                    <div className="p-2 border-t border-gray-700 text-center cursor-pointer hover:bg-gray-800">
                        See All
                    </div>
                </div>
            )}
        </div>
    );
}
