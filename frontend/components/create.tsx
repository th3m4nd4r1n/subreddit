import { useState } from "react";

export default function CreatePost() {
const [title, setTitle] = useState("");
const [body, setBody] = useState("");
const [selectedTab, setSelectedTab] = useState("Text");

return (
    <div className=" flex-1 mx-auto p-6 bg-gray-900 text-white">
    <div className="p-6 bg-gray-900 rounded mr-[20%]">
    <h1 className="text-xl font-bold mb-4">Create Post</h1>
    <div className="mb-4">
        <select className="w-full bg-gray-800 p-2 rounded text-white">
        <option>Select a community</option>
        </select>
    </div>
    <div className="flex space-x-4 border-b border-gray-700 mb-4">
        {['Text', 'Images & Video', 'Link', 'Poll'].map(tab => (
        <button
            key={tab}
            className={`p-2 ${selectedTab === tab ? 'border-b-2 border-blue-500' : ''}`}
            onClick={() => setSelectedTab(tab)}
        >
            {tab}
        </button>
        ))}
    </div>
    <input
        type="text"
        className="w-full p-4 bg-gray-800 rounded mb-4"
        placeholder="Title*"
        maxLength={300}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
    />
    <textarea
        className="w-full p-4 bg-gray-800 rounded mb-4 h-32"
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
    ></textarea>
    <div className="flex justify-end space-x-2">
        <button className="px-4 py-2 bg-gray-700 rounded disabled:opacity-50" disabled={!title && !body}>
        Save Draft
        </button>
        <button className="px-4 py-2 bg-blue-500 rounded disabled:opacity-50" disabled={!title}>
        Post
        </button>
    </div>
    </div>
    </div>
);
}
