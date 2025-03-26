import { useState } from "react";

const ProfilePage = () => {
const [activeTab, setActiveTab] = useState("Overview");

return (
    <div className="relative bg-black right-0 text-white min-h-screen flex-1 overflow-hidden">
    {/* Banner & Profile Header */}
    <div className="relative h-48 bg-gradient-to-r from-purple-800 to-indigo-900">
        <div className="absolute bottom-0 left-4 flex items-center space-x-4">
        <img
            src="/avatar.jpg"
            alt="Profile Avatar"
            className="w-20 h-20 rounded-full border-4 border-black"
        />
        <div>
            <h1 className="text-2xl font-bold">sancipher435</h1>
            <p className="text-gray-400">u/sancipher435</p>
        </div>
        </div>
    </div>
    
    {/* Main Content */}
    <div className="flex max-w-5xl mx-auto mt-12">
        {/* Left Sidebar */}
        <div className="w-3/4 p-4">
        <div className="flex space-x-4 border-b border-gray-700 pb-2">
            {["Overview", "Posts", "Comments", "Saved", "Hidden", "Upvoted", "Downvoted"].map((tab) => (
            <button
                key={tab}
                className={`px-4 py-2 ${activeTab === tab ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-400"}`}
                onClick={() => setActiveTab(tab)}
            >
                {tab}
            </button>
            ))}
        </div>
        <div className="mt-4">
            {/* Example post */}
            <div className="bg-gray-900 p-4 rounded-lg mb-4">
            <p className="text-gray-500 text-sm">r/AskReddit • 3 days ago</p>
            <p className="text-lg">If death sits next to you in a bar and says "finish your drink, it's time to go." what will be your response?</p>
            <div className="mt-2 text-gray-400 flex space-x-4 text-sm">
                <span>⬆ 2</span>
                <span>💬 Reply</span>
                <span>🔗 Share</span>
            </div>
            </div>
        </div>
        </div>
        
        {/* Right Sidebar */}
        <div className="w-1/4 p-4 bg-gray-900 rounded-lg">
        <h2 className="text-lg font-bold">sancipher435</h2>
        <p className="text-sm text-gray-400">Pfp made by u/inxcognito</p>
        <div className="mt-2 space-y-1 text-gray-300">
            <p>📊 Post karma: <b>26,622</b></p>
            <p>💬 Comment karma: <b>103,206</b></p>
            <p>👥 Followers: <b>84</b></p>
            <p>🎂 Cake day: <b>Mar 11, 2019</b></p>
        </div>
        <div className="mt-4">
            <h3 className="font-bold">Achievements</h3>
            <p className="text-gray-400 text-sm">Top 25% Commenter, Elder...</p>
        </div>
        <div className="mt-4">
            <h3 className="font-bold">Settings</h3>
            <button className="mt-2 bg-blue-600 w-full text-center py-1 rounded">Edit Profile</button>
        </div>
        </div>
    </div>
    </div>
);
};

export default ProfilePage;
