import { Play, SkipBack, SkipForward, Volume2, Search, MoreHorizontal, Heart } from 'lucide-react';

const Music = () => {
  const tracks = [
    { id: 1, title: 'Blinding Lights', artist: 'The Weeknd', duration: '3:20' },
    { id: 2, title: 'Stay', artist: 'The Kid LAROI & Justin Bieber', duration: '2:21' },
    { id: 3, title: 'Heat Waves', artist: 'Glass Animals', duration: '3:58' },
    { id: 4, title: 'Levitating', artist: 'Dua Lipa', duration: '3:23' },
    { id: 5, title: 'Good 4 U', artist: 'Olivia Rodrigo', duration: '2:58' },
    { id: 6, title: 'Bad Habits', artist: 'Ed Sheeran', duration: '3:50' },
  ];

  return (
    <div className="space-y-4">
      <div className="vk-card p-4 flex items-center justify-between sticky top-12 z-10">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-4">
             <SkipBack className="w-5 h-5 text-gray-400 cursor-pointer" />
             <div className="w-10 h-10 bg-[#2a5885] rounded-full flex items-center justify-center text-white cursor-pointer">
               <Play className="w-5 h-5 fill-current" />
             </div>
             <SkipForward className="w-5 h-5 text-gray-400 cursor-pointer" />
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-semibold">Blinding Lights</p>
            <p className="text-xs text-gray-500">The Weeknd — 1:42 / 3:20</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Volume2 className="w-5 h-5 text-gray-400 cursor-pointer" />
          <div className="w-24 h-1 bg-gray-200 rounded-full relative cursor-pointer">
            <div className="absolute left-0 top-0 h-full w-2/3 bg-[#2a5885] rounded-full" />
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 space-y-4">
          <div className="vk-card p-4">
             <div className="flex items-center space-x-4 mb-6">
               <div className="relative flex-1">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                 <input
                   type="text"
                   placeholder="Search music"
                   className="w-full bg-[#edeef0] h-9 pl-9 pr-3 rounded-lg text-sm focus:outline-none"
                 />
               </div>
               <div className="flex space-x-6 text-sm font-medium border-b border-transparent">
                 <button className="text-[#2a5885] border-b-2 border-[#2a5885] pb-2">My Music</button>
                 <button className="text-gray-500 pb-2">Explore</button>
                 <button className="text-gray-500 pb-2">Recent</button>
               </div>
             </div>

             <div className="space-y-1">
               {tracks.map((track) => (
                 <div key={track.id} className="flex items-center group hover:bg-[#f5f6f8] p-2 rounded-lg cursor-pointer transition-colors">
                   <div className="w-8 flex justify-center text-gray-400 group-hover:hidden">
                     <span className="text-sm">{track.id}</span>
                   </div>
                   <div className="w-8 hidden group-hover:flex justify-center text-[#2a5885]">
                     <Play className="w-4 h-4 fill-current" />
                   </div>
                   <div className="flex-1 px-3">
                     <p className="text-sm font-medium">{track.title}</p>
                     <p className="text-xs text-gray-500">{track.artist}</p>
                   </div>
                   <div className="flex items-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity">
                     <Heart className="w-4 h-4 text-gray-400 hover:text-red-500" />
                     <Plus className="w-4 h-4 text-gray-400 hover:text-[#2a5885]" />
                     <MoreHorizontal className="w-4 h-4 text-gray-400" />
                   </div>
                   <div className="w-12 text-right text-xs text-gray-400">
                     {track.duration}
                   </div>
                 </div>
               ))}
             </div>
          </div>
        </div>

        <div className="w-[250px] space-y-4 hidden lg:block">
          <div className="vk-card p-4">
            <h4 className="text-xs font-semibold text-gray-500 uppercase mb-4">Playlists</h4>
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center space-x-3 cursor-pointer group">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2a5885] to-[#4a76a8] rounded-lg flex items-center justify-center text-white">
                    <MusicIcon />
                  </div>
                  <div>
                    <p className="text-sm font-medium group-hover:text-[#2a5885]">Favorites {i}</p>
                    <p className="text-xs text-gray-500">{i * 12} tracks</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MusicIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18V5l12-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
  </svg>
);

const Plus = ({ className }: { className?: string }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

export default Music;
