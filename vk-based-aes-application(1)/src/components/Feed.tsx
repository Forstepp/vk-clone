import Post from './Post';
import { Camera, Video, Music, FileText, Plus } from 'lucide-react';

const Feed = () => {
  const posts = [
    {
      author: {
        name: 'Alexander Vasilev',
        avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop',
        date: 'today at 2:45 pm',
      },
      content: 'Just finished a new project using React and Tailwind CSS! It feels great to see everything come together. What are you guys working on? 🚀',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=450&fit=crop',
      stats: { likes: 124, comments: 18, shares: 5, views: '1.2K' },
    },
    {
      author: {
        name: 'Nature Photography',
        avatar: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=100&h=100&fit=crop',
        date: 'yesterday at 8:12 pm',
      },
      content: 'Beautiful sunset in the mountains today. Nature is the best artist.',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=450&fit=crop',
      stats: { likes: 856, comments: 42, shares: 120, views: '8.5K' },
    },
    {
      author: {
        name: 'Tech News',
        avatar: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=100&h=100&fit=crop',
        date: '20 Oct at 10:00 am',
      },
      content: 'New features announced for VK! Stay tuned for more updates on how we are improving the platform for everyone.',
      stats: { likes: 3200, comments: 450, shares: 890, views: '45K' },
    },
  ];

  return (
    <div className="flex gap-4">
      <div className="flex-1 max-w-[600px]">
        {/* Create Post */}
        <div className="vk-card p-4 mb-4">
          <div className="flex space-x-3 items-center mb-3">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
              alt="My Profile"
              className="w-8 h-8 rounded-full"
            />
            <input
              type="text"
              placeholder="Что у вас нового?"
              className="flex-1 bg-[#edeef0] h-9 px-4 rounded-lg text-sm focus:outline-none hover:bg-[#e7e8ec] transition-colors"
            />
          </div>
          <div className="flex items-center justify-between text-[#828282]">
            <div className="flex space-x-4">
              <button className="flex items-center space-x-1.5 hover:bg-[#f0f2f5] p-1.5 rounded-md transition-colors">
                <Camera className="w-5 h-5" />
              </button>
              <button className="flex items-center space-x-1.5 hover:bg-[#f0f2f5] p-1.5 rounded-md transition-colors">
                <Video className="w-5 h-5" />
              </button>
              <button className="flex items-center space-x-1.5 hover:bg-[#f0f2f5] p-1.5 rounded-md transition-colors">
                <Music className="w-5 h-5" />
              </button>
              <button className="flex items-center space-x-1.5 hover:bg-[#f0f2f5] p-1.5 rounded-md transition-colors">
                <FileText className="w-5 h-5" />
              </button>
            </div>
            <button className="bg-[#2a5885] text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-[#244b72]">
              Опубликовать
            </button>
          </div>
        </div>

        {/* Feed Posts */}
        {posts.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </div>

      {/* Right Panel */}
      <div className="w-[285px] hidden lg:block space-y-4">
        <div className="vk-card p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Recommended for you</h3>
            <span className="text-[#2a5885] text-xs hover:underline cursor-pointer">Show all</span>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 bg-gray-200 rounded-full" />
                  <div>
                    <p className="text-sm font-medium">User Name {i}</p>
                    <p className="text-xs text-gray-500">4 common friends</p>
                  </div>
                </div>
                <button className="text-[#2a5885] hover:bg-[#f0f2f5] p-1 rounded-full transition-colors">
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="vk-card p-4">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Latest News</h3>
          <ul className="space-y-3">
            <li className="text-sm hover:underline cursor-pointer text-[#2a5885]">Global economy updates</li>
            <li className="text-sm hover:underline cursor-pointer text-[#2a5885]">SpaceX launches new satellite</li>
            <li className="text-sm hover:underline cursor-pointer text-[#2a5885]">Local community festival</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Feed;
