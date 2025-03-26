// pages/post.tsx
import { useState } from "react";

type Comment = {
id: number;
username: string;
text: string;
likes: number;
};

export default function PostPage() {
const [comments, setComments] = useState<Comment[]>([
    { id: 1, username: "Rhina", text: "Video image", likes: 128 },
    { id: 2, username: "oneE3", text: "🔥 ENTEN 🔥", likes: 80 },
]);
const [newComment, setNewComment] = useState("");

const addComment = () => {
    if (newComment.trim()) {
    const newCommentObj: Comment = {
        id: comments.length + 1,
        username: "User", // Placeholder username
        text: newComment,
        likes: 0,
    };
    setComments([newCommentObj, ...comments]);
    setNewComment("");
    }
};

return (
    <div className="flex-1 mx-auto p-4 bg-black text-white flex flex-col md:flex-row">
    {/* Main Post Content */}
    <div className="md:w-2/3 p-4">
        {/* Post Header */}
        <div className="mb-4">
        <h2 className="text-xl font-bold">How is Chihiro speaking through a picture?</h2>
        <p className="text-sm text-gray-400">by thegamer07 • 9 hours ago</p>
        </div>

        {/* Post Content */}
        <div className="mb-4">
        <img src="/post-image.png" alt="Post" className="rounded-lg" />
        </div>

        {/* Post Actions */}
        <div className="flex space-x-4 mb-4 text-gray-400">
        <button className="hover:text-red-500">⬆ 314</button>
        <button className="hover:text-gray-300">💬 11</button>
        <button className="hover:text-gray-300">🔗 Share</button>
        </div>

        {/* Comment Input */}
        <div className="mb-4">
        <input
            type="text"
            placeholder="Add a comment"
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
        />
        <button
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={addComment}
        >
            Comment
        </button>
        </div>

        {/* Comment List */}
        <div className="space-y-4">
        {comments.map((comment) => (
            <div key={comment.id} className="p-3 bg-gray-800 rounded-lg">
            <p className="text-sm text-gray-400">{comment.username}</p>
            <p className="text-white">{comment.text}</p>
            <p className="text-gray-500 text-sm">👍 {comment.likes}</p>
            </div>
        ))}
        </div>
    </div>

    {/* Sidebar */}
    <div className="md:w-1/3 p-4 bg-gray-800 rounded-lg mt-4 md:mt-0 md:ml-4">
        <h3 className="text-lg font-bold">r/Kagurabachi</h3>
        <p className="text-sm text-gray-400">Kagurabachi, a sword action manga series by Hokazono Takeru.</p>
        <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full">
        Joined
        </button>

        <div className="mt-4 text-sm text-gray-300">
        <p>📅 Created Aug 30, 2023</p>
        <p>🌍 Public</p>
        </div>

        <button className="mt-4 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 w-full">
        📖 Community Guide
        </button>

        <div className="mt-4">
        <p className="text-lg font-bold">Stats</p>
        <p>🏆 54K Swordsmiths</p>
        <p>⚔️ 187 Wielding Katana</p>
        <p>📊 Top 3% Rank by size</p>
        </div>

        <div className="mt-4">
        <p className="text-lg font-bold">User Flair</p>
        <div className="flex items-center space-x-2">
            <img src="/profile-pic.png" alt="User" className="w-8 h-8 rounded-full" />
            <p>sanscipher435</p>
        </div>
        </div>

        <div className="mt-4">
        <p className="text-lg font-bold">Community Achievements</p>
        <p>🏅 Repeat Contributor, Content Connoisseur</p>
        <button className="mt-2 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 w-full">
            View All
        </button>
        </div>
    </div>
    </div>
);
}
