import { useState } from "react";
import SubredditSidebar from "./subredditSide";

export default function SubredditPage() {
    const [posts, setPosts] = useState([
        { id: 1, title: "Welcome to the subreddit!", votes: 120, comments: 30 },
        { id: 2, title: "Discussion Thread", votes: 90, comments: 15 },
    ]);

    const [isJoined, setIsJoined] = useState(false);
    const [sortBy, setSortBy] = useState("Hot");

    return (
        <div className="flex flex-col flex-1 gap-6 p-8 bg-black text-white justify-center min-h-screen">
            {/* Subreddit Banner */}
            <div className="relative w-full h-32 bg-gradient-to-r from-violet-600 to-yellow-600 rounded-lg mb-4"> {/* Adjusted height and added margin */}
                <div className="absolute bottom-[-24px] left-6">
                    <img
                        src="/subreddit-pfp.png"
                        alt="Subreddit PFP"
                        className="w-20 h-20 rounded-full border-4 border-black"
                    />
                </div>
            </div>

            <div className="flex justify-between items-center px-8">
                {/* Subreddit Title */}
                <h1 className="text-2xl font-bold">r/example</h1>
                <div className="flex gap-4">
                    <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-xl">
                        Create Post
                    </button>
                    {/* Join Button */}
                    <button
                        onClick={() => setIsJoined(!isJoined)}
                        className={`px-4 py-2 rounded-xl ${
                            isJoined
                                ? "bg-gray-700 text-white"
                                : "bg-blue-500 hover:bg-blue-600 text-white"
                        }`}
                    >
                        {isJoined ? "Joined" : "Join"}
                    </button>
                </div>
            </div>

            <div className="flex flex-1 p-4 justify-center">
                {/* Main Content */}
                <div className="flex-1 max-w-3xl">
                    {/* Sort By Options */}
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex gap-2">
                            <label className="text-gray-400">Sort by:</label>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="bg-gray-800 text-white px-2 py-1 rounded"
                            >
                                <option value="Hot">Hot</option>
                                <option value="New">New</option>
                                <option value="Top">Top</option>
                            </select>
                        </div>
                    </div>

                    {/* Posts */}
                    <div className="mt-4 space-y-4">
                        {posts.map((post) => (
                            <div key={post.id} className="bg-gray-800 p-4 rounded-lg">
                                <h3 className="text-lg font-semibold">{post.title}</h3>
                                <p className="text-gray-400 text-sm">
                                    {post.votes} votes • {post.comments} comments
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sidebar */}
                <SubredditSidebar />
            </div>
        </div>
    );
}
