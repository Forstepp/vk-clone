import { Search, MoreHorizontal, Users, ShieldCheck } from 'lucide-react';

const Communities = () => {
  const groups = [
    { id: 1, name: 'Web Development', members: '1.2M', category: 'Technology', avatar: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=100&h=100&fit=crop', verified: true },
    { id: 2, name: 'Nature Lovers', members: '850K', category: 'Community', avatar: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=100&h=100&fit=crop', verified: false },
    { id: 3, name: 'Travel & Beyond', members: '2.5M', category: 'Tourism', avatar: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=100&h=100&fit=crop', verified: true },
    { id: 4, name: 'Fitness Daily', members: '500K', category: 'Sport', avatar: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=100&h=100&fit=crop', verified: false },
    { id: 5, name: 'Cooking Masterclass', members: '1.8M', category: 'Food', avatar: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=100&h=100&fit=crop', verified: true },
  ];

  return (
    <div className="flex gap-4">
      <div className="flex-1 space-y-4">
        <div className="vk-card p-4">
          <div className="flex items-center justify-between mb-6">
            <div className="flex space-x-6 text-sm font-medium">
              <button className="text-[#2a5885] border-b-2 border-[#2a5885] pb-2">All communities</button>
              <button className="text-gray-500 pb-2">Managed</button>
              <button className="text-gray-500 pb-2">Events</button>
            </div>
            <button className="bg-[#2a5885] text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-[#244b72]">
              Create community
            </button>
          </div>

          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search communities"
              className="w-full bg-[#edeef0] h-9 pl-9 pr-3 rounded-lg text-sm focus:outline-none"
            />
          </div>

          <div className="divide-y divide-[#e7e8ec]">
            {groups.map((group) => (
              <div key={group.id} className="py-4 flex items-center justify-between group first:pt-0 last:pb-0">
                <div className="flex items-center space-x-4">
                  <img src={group.avatar} alt={group.name} className="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <div className="flex items-center space-x-1">
                      <h4 className="font-semibold text-sm text-[#2a5885] hover:underline cursor-pointer">{group.name}</h4>
                      {group.verified && <ShieldCheck className="w-4 h-4 text-[#2a5885]" />}
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5">{group.category}</p>
                    <p className="text-xs text-gray-500 mt-1">{group.members} members</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="text-[#2a5885] bg-[#f0f2f5] px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-[#e7e8ec] transition-colors">
                    Following
                  </button>
                  <button className="text-gray-400 p-1.5 hover:bg-[#f0f2f5] rounded-lg">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-[250px] space-y-4 hidden lg:block">
        <div className="vk-card p-4">
          <div className="flex items-center space-x-2 text-gray-500 mb-4">
            <Users className="w-4 h-4" />
            <span className="text-xs font-semibold uppercase">Invites</span>
          </div>
          <p className="text-sm text-gray-500 text-center py-4">No new invites</p>
        </div>

        <div className="vk-card p-4">
          <h4 className="text-xs font-semibold text-gray-500 uppercase mb-4">Popular</h4>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-200 rounded-lg" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">Popular Group {i}</p>
                  <p className="text-[10px] text-gray-500">Technology</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Communities;
