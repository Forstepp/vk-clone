import { Search, MoreHorizontal, Settings, Plus, Send, Paperclip, Smile } from 'lucide-react';

const Messenger = () => {
  const chats = [
    { id: 1, name: 'Dmitry Ivanov', lastMsg: 'See you tomorrow!', time: '12:45', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop', unread: 2 },
    { id: 2, name: 'Elena Petrova', lastMsg: 'The project is ready.', time: '10:20', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop', unread: 0 },
    { id: 3, name: 'Web Dev Group', lastMsg: 'Alexander: Great job!', time: 'Yesterday', avatar: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=100&h=100&fit=crop', unread: 0 },
    { id: 4, name: 'Ivan S.', lastMsg: 'Sent a photo', time: 'Mon', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop', unread: 0 },
  ];

  return (
    <div className="vk-card h-[calc(100vh-80px)] flex overflow-hidden">
      {/* Chat List */}
      <div className="w-[320px] border-r border-[#e7e8ec] flex flex-col">
        <div className="p-3 border-b border-[#e7e8ec] flex items-center space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-[#edeef0] h-8 pl-9 pr-3 rounded-lg text-sm focus:outline-none"
            />
          </div>
          <button className="text-[#2a5885] p-1.5 hover:bg-[#f0f2f5] rounded-lg">
            <Plus className="w-5 h-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          {chats.map((chat) => (
            <div key={chat.id} className="flex items-center p-3 hover:bg-[#f5f6f8] cursor-pointer group">
              <img src={chat.avatar} alt={chat.name} className="w-12 h-12 rounded-full mr-3" />
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline">
                  <h4 className="text-sm font-semibold truncate">{chat.name}</h4>
                  <span className="text-[11px] text-gray-500">{chat.time}</span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500 truncate">{chat.lastMsg}</p>
                  {chat.unread > 0 && (
                    <span className="bg-[#2a5885] text-white text-[10px] px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
                      {chat.unread}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-white">
        <div className="h-12 border-b border-[#e7e8ec] px-4 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold">Dmitry Ivanov</h3>
            <p className="text-[11px] text-green-600">online</p>
          </div>
          <div className="flex items-center space-x-4 text-gray-400">
            <Search className="w-4 h-4 cursor-pointer hover:text-gray-600" />
            <Settings className="w-4 h-4 cursor-pointer hover:text-gray-600" />
            <MoreHorizontal className="w-4 h-4 cursor-pointer hover:text-gray-600" />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#ebedf0]">
          <div className="flex justify-center">
            <span className="text-xs bg-black/5 px-3 py-1 rounded-full text-gray-600">Today</span>
          </div>
          
          <div className="flex items-end space-x-2">
            <img src={chats[0].avatar} className="w-8 h-8 rounded-full" alt="" />
            <div className="bg-white p-3 rounded-2xl rounded-bl-none shadow-sm max-w-[70%]">
              <p className="text-sm">Hey, are we still meeting tomorrow for the code review?</p>
              <span className="text-[10px] text-gray-400 float-right mt-1">12:44</span>
            </div>
          </div>

          <div className="flex items-end space-x-2 flex-row-reverse space-x-reverse">
            <div className="bg-[#e2f0ff] p-3 rounded-2xl rounded-br-none shadow-sm max-w-[70%]">
              <p className="text-sm">Yes, definitely! I'll be there around 10 AM. See you tomorrow!</p>
              <span className="text-[10px] text-[#2a5885] float-right mt-1">12:45</span>
            </div>
          </div>
        </div>

        <div className="p-3 bg-white border-t border-[#e7e8ec] flex items-center space-x-3">
          <Paperclip className="w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-600" />
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Write a message..."
              className="w-full bg-[#f0f2f5] h-9 px-4 pr-10 rounded-lg text-sm focus:outline-none"
            />
            <Smile className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600" />
          </div>
          <button className="bg-[#2a5885] text-white p-2 rounded-lg hover:bg-[#244b72]">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messenger;
