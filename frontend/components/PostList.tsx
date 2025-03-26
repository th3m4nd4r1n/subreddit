import Post from "./Post";

interface PostListProps {
posts: {
    id: number;
    title: string;
    image: string;
    likes: number;
    comments: number;
    user: string;
    userAvatar: string;
    timeAgo: string;
}[];
}

export default function PostList({ posts }: PostListProps) {
return (
    <div className="w-full max-w-2xl p-4">
    {posts.map((post) => (
        <Post key={post.id} {...post} />
    ))}
    </div>
);
}
