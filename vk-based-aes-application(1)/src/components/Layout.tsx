import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import MobileNav from './MobileNav';

const Layout = () => {
  return (
    <div className="min-h-screen bg-[#edeef0] pb-[calc(60px+env(safe-area-inset-bottom))] md:pb-0">
      <Header />
      <div className="max-w-[1080px] mx-auto pt-[calc(48px+env(safe-area-inset-top))] flex px-4">
        <Sidebar />
        <main className="flex-1 md:ml-4 py-4 min-w-0">
          <Outlet />
        </main>
      </div>
      <MobileNav />
    </div>
  );
};

export default Layout;
