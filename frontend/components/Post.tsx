interface PostProps {
    title: string;
    image: string;
    likes: number;
    comments: number;
    user: string;
    userAvatar: string;
    timeAgo: string;
}

export default function Post({ title, image, likes, comments, user, userAvatar, timeAgo }: PostProps) {
    return (
    <div className="bg-black p-4 rounded-lg mb-4">
        {/* User Info */}
        <div className="flex items-center space-x-2">
        <img src={userAvatar} alt="User Avatar" className="w-8 h-8 rounded-full" />
        <span className="text-sm text-gray-400">{user} • {timeAgo}</span>
        </div>

        {/* Post Title */}
        <h2 className="text-lg font-bold mt-2">{title}</h2>

        {/* Post Image */}
        {image && <img src={image} alt="Post" className="w-full h-64 object-cover rounded-md mt-2" />}

        {/* Post Actions */}
        <div className="flex justify-between items-center mt-2 text-gray-400">
        <div className="flex space-x-2">
            <span>👍 {likes}</span>
            <span>💬 {comments}</span>
        </div>
        <button className="text-blue-400 hover:underline">Comment</button>
        </div>
    </div>
    );
}
