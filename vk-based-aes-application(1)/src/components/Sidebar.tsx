import { NavLink } from 'react-router-dom';
import { 
  UserCircle, 
  Newspaper, 
  MessageSquare, 
  Users, 
  UserPlus, 
  Image, 
  Music, 
  Video, 
  Gamepad2,
  Briefcase,
  Store,
  Layers
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: UserCircle, label: 'Моя страница', path: '/profile' },
    { icon: Newspaper, label: 'Новости', path: '/' },
    { icon: MessageSquare, label: 'Мессенджер', path: '/im' },
    { icon: UserPlus, label: 'Друзья', path: '/friends' },
    { icon: Users, label: 'Сообщества', path: '/groups' },
    { icon: Image, label: 'Фотографии', path: '/albums' },
    { icon: Music, label: 'Музыка', path: '/music' },
    { icon: Video, label: 'Видео', path: '/video' },
    { icon: Gamepad2, label: 'Игры', path: '/games' },
  ];

  const bottomItems = [
    { icon: Briefcase, label: 'Работа', path: '/jobs' },
    { icon: Store, label: 'Маркет', path: '/market' },
    { icon: Layers, label: 'Сервисы', path: '/services' },
  ];

  return (
    <aside className="w-[175px] pt-4 sticky top-12 h-[calc(100vh-48px)] overflow-y-auto hidden md:block">
      <nav className="space-y-0.5">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => 
              `vk-sidebar-item ${isActive ? 'active' : ''}`
            }
          >
            <item.icon className="w-[20px] h-[20px]" />
            <span className="text-[13px] leading-tight">{item.label}</span>
          </NavLink>
        ))}
        
        <div className="my-2 border-t border-[#e7e8ec]" />
        
        {bottomItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className="vk-sidebar-item"
          >
            <item.icon className="w-[20px] h-[20px]" />
            <span className="text-[13px] leading-tight">{item.label}</span>
          </NavLink>
        ))}
      </nav>
      
      <div className="mt-8 px-2 text-[12px] text-gray-500 space-y-1">
        <p className="hover:underline cursor-pointer">Blog</p>
        <p className="hover:underline cursor-pointer">Developers</p>
        <p className="hover:underline cursor-pointer">Legal</p>
        <p className="hover:underline cursor-pointer">More</p>
      </div>
    </aside>
  );
};

export default Sidebar;
