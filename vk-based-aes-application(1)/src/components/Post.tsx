import { Heart, MessageCircle, Share2, Eye, MoreHorizontal } from 'lucide-react';

interface PostProps {
  author: {
    name: string;
    avatar: string;
    date: string;
  };
  content: string;
  image?: string;
  stats: {
    likes: number;
    comments: number;
    shares: number;
    views: string;
  };
}

const Post = ({ author, content, image, stats }: PostProps) => {
  return (
    <div className="vk-card mb-4 p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <img src={author.avatar} alt={author.name} className="w-10 h-10 rounded-full" />
          <div>
            <h3 className="text-[#2a5885] font-semibold text-sm hover:underline cursor-pointer">{author.name}</h3>
            <p className="text-gray-500 text-[12px]">{author.date}</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="text-[14px] mb-3 whitespace-pre-wrap leading-relaxed">
        {content}
      </div>

      {image && (
        <div className="mb-3 -mx-4">
          <img src={image} alt="Post content" className="w-full h-auto max-h-[500px] object-cover" />
        </div>
      )}

      <div className="flex items-center justify-between pt-2 border-t border-[#f0f2f5]">
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[#f0f2f5] hover:bg-[#e7e8ec] text-[#444b52] transition-colors">
            <Heart className="w-5 h-5" />
            <span className="text-xs font-medium">{stats.likes}</span>
          </button>
          <button className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[#f0f2f5] hover:bg-[#e7e8ec] text-[#444b52] transition-colors">
            <MessageCircle className="w-5 h-5" />
            <span className="text-xs font-medium">{stats.comments}</span>
          </button>
          <button className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[#f0f2f5] hover:bg-[#e7e8ec] text-[#444b52] transition-colors">
            <Share2 className="w-5 h-5" />
            <span className="text-xs font-medium">{stats.shares}</span>
          </button>
        </div>
        <div className="flex items-center space-x-1 text-gray-500">
          <Eye className="w-4 h-4" />
          <span className="text-[12px]">{stats.views}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
