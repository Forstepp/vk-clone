import { NavLink } from 'react-router-dom';
import { Newspaper, MessageSquare, UserCircle, Music, Layers } from 'lucide-react';

const MobileNav = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#e7e8ec] px-6 py-2 pb-[env(safe-area-inset-bottom)] flex justify-between items-center z-50">
      <NavLink to="/" className={({ isActive }) => `flex flex-col items-center ${isActive ? 'text-[#2a5885]' : 'text-gray-400'}`}>
        <Newspaper className="w-6 h-6" />
        <span className="text-[10px] mt-1">Главная</span>
      </NavLink>
      <NavLink to="/im" className={({ isActive }) => `flex flex-col items-center ${isActive ? 'text-[#2a5885]' : 'text-gray-400'}`}>
        <MessageSquare className="w-6 h-6" />
        <span className="text-[10px] mt-1">Чаты</span>
      </NavLink>
      <NavLink to="/services" className={({ isActive }) => `flex flex-col items-center ${isActive ? 'text-[#2a5885]' : 'text-gray-400'}`}>
        <Layers className="w-6 h-6" />
        <span className="text-[10px] mt-1">Сервисы</span>
      </NavLink>
      <NavLink to="/music" className={({ isActive }) => `flex flex-col items-center ${isActive ? 'text-[#2a5885]' : 'text-gray-400'}`}>
        <Music className="w-6 h-6" />
        <span className="text-[10px] mt-1">Музыка</span>
      </NavLink>
      <NavLink to="/profile" className={({ isActive }) => `flex flex-col items-center ${isActive ? 'text-[#2a5885]' : 'text-gray-400'}`}>
        <UserCircle className="w-6 h-6" />
        <span className="text-[10px] mt-1">Профиль</span>
      </NavLink>
    </div>
  );
};

export default MobileNav;
