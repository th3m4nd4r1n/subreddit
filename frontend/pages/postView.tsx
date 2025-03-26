import { GetServerSideProps } from "next";
import PostList from "@/components/PostList";

interface Post {
id: number;
title: string;
image: string;
likes: number;
comments: number;
user: string;
userAvatar: string;
timeAgo: string;
}

interface Props {
posts: Post[];
}

export default function Home({ posts }: Props) {
return (
    <div className="bg-black text-white min-h-screen flex justify-center">
    <PostList posts={posts} />
    </div>
);
}

// Server-Side Rendering (SSR) Fetching Data
export const getServerSideProps: GetServerSideProps = async () => {
// Dummy Data (Replace with API fetch)
const posts: Post[] = [
    {
    id: 1,
    title: "Your verse ain’t cutting through infinity, so pipe down.",
    image: "https://via.placeholder.com/600",
    likes: 1200,
    comments: 453,
    user: "GlowingWingEssence",
    userAvatar: "https://via.placeholder.com/40",
    timeAgo: "22 hr ago",
    },
];

return {
    props: { posts },
};
};
