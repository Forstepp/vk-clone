import { MoreHorizontal, Plus, Info, MapPin, Briefcase, Link as LinkIcon, Search } from 'lucide-react';

const Profile = () => {
  return (
    <div className="flex gap-4">
      <div className="w-[230px] flex-shrink-0 space-y-3">
        <div className="vk-card p-3">
          <img 
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop" 
            alt="Profile" 
            className="w-full aspect-square object-cover rounded-lg mb-3"
          />
          <button className="w-full bg-[#f0f2f5] text-[#2a5885] py-1.5 rounded-lg text-sm font-medium hover:bg-[#e7e8ec] mb-2 transition-colors">
            Edit Profile
          </button>
          <div className="grid grid-cols-2 gap-2">
            <button className="flex items-center justify-center bg-[#f0f2f5] p-2 rounded-lg hover:bg-[#e7e8ec] transition-colors">
              <Plus className="w-5 h-5 text-[#2a5885]" />
            </button>
            <button className="flex items-center justify-center bg-[#f0f2f5] p-2 rounded-lg hover:bg-[#e7e8ec] transition-colors">
              <MoreHorizontal className="w-5 h-5 text-[#2a5885]" />
            </button>
          </div>
        </div>

        <div className="vk-card p-3">
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-sm font-semibold">Friends</h4>
            <span className="text-[#828282] text-xs">248</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="text-center">
                <div className="w-full aspect-square bg-gray-200 rounded-full mb-1" />
                <span className="text-[10px] text-[#2a5885] truncate block">Friend {i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 space-y-4">
        <div className="vk-card p-5">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-xl font-semibold mb-1">Alexander Vasilev</h1>
              <p className="text-sm text-gray-500">Working on something cool 🚀</p>
            </div>
            <div className="text-[12px] text-green-600 font-medium">online</div>
          </div>

          <div className="border-t border-b border-[#e7e8ec] py-4 my-4 flex justify-around text-center">
            <div>
              <div className="text-[#2a5885] font-semibold text-lg">248</div>
              <div className="text-gray-500 text-xs">friends</div>
            </div>
            <div>
              <div className="text-[#2a5885] font-semibold text-lg">15</div>
              <div className="text-gray-500 text-xs">followers</div>
            </div>
            <div>
              <div className="text-[#2a5885] font-semibold text-lg">42</div>
              <div className="text-gray-500 text-xs">photos</div>
            </div>
            <div>
              <div className="text-[#2a5885] font-semibold text-lg">108</div>
              <div className="text-gray-500 text-xs">music</div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-sm">
              <MapPin className="w-4 h-4 text-gray-400" />
              <span className="text-gray-500">City:</span>
              <span className="text-[#2a5885] hover:underline cursor-pointer">Saint Petersburg</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <Briefcase className="w-4 h-4 text-gray-400" />
              <span className="text-gray-500">Work:</span>
              <span className="text-[#2a5885] hover:underline cursor-pointer">Tech Solutions</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <LinkIcon className="w-4 h-4 text-gray-400" />
              <span className="text-gray-500">Website:</span>
              <a href="#" className="text-[#2a5885] hover:underline">github.com/alexander</a>
            </div>
          </div>

          <button className="w-full mt-4 flex items-center justify-center space-x-2 text-sm text-[#2a5885] hover:bg-[#f0f2f5] py-2 rounded-lg transition-colors">
            <Info className="w-4 h-4" />
            <span>Show full information</span>
          </button>
        </div>

        <div className="vk-card p-4">
           <div className="flex items-center justify-between mb-4">
              <div className="flex space-x-6 border-b border-transparent">
                 <button className="pb-2 border-b-2 border-[#2a5885] text-sm font-semibold">All posts</button>
                 <button className="pb-2 text-sm text-gray-500 hover:text-gray-700">My posts</button>
              </div>
              <div className="flex space-x-2 text-gray-400">
                <Search className="w-4 h-4 cursor-pointer" />
              </div>
           </div>
           
           <div className="text-center py-8 text-gray-500 text-sm">
             No posts yet.
           </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
