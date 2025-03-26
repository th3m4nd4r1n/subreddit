export default function SubredditSidebar() {
return (
    <div className="md:w-1/3 p-4 bg-gray-800 rounded-lg mt-4 md:mt-0 md:ml-4">
        <h3 className="text-lg font-bold">r/Kagurabachi</h3>
        <p className="text-sm text-gray-400">Kagurabachi, a sword action manga series by Hokazono Takeru.</p>
        
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
);
};
