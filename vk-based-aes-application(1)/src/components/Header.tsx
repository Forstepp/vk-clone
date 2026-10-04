import { Search, Bell, Music, Play, ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 pt-[env(safe-area-inset-top)] bg-white border-b border-[#e7e8ec] z-50">
      <div className="max-w-[1080px] mx-auto h-12 flex items-center justify-between px-4">
        <div className="flex items-center space-x-4 flex-1">
          <div className="flex items-center space-x-2">
             <div className="w-8 h-8 bg-[#0077ff] rounded-lg flex items-center justify-center text-white font-bold text-xl">
               VK
             </div>
          </div>
          <div className="relative max-w-[230px] w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Поиск"
              className="w-full bg-[#edeef0] h-8 pl-9 pr-3 rounded-lg text-sm focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#0077ff]"
            />
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-4 text-gray-500">
            <Bell className="w-5 h-5 cursor-pointer hover:text-gray-700" />
            <Music className="w-5 h-5 cursor-pointer hover:text-gray-700" />
            <Play className="w-5 h-5 cursor-pointer hover:text-gray-700" />
          </div>
          <div className="flex items-center space-x-2 cursor-pointer group">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
