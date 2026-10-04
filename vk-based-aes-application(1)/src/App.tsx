import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Feed from './components/Feed';
import Profile from './components/Profile';
import Messenger from './components/Messenger';
import Music from './components/Music';
import Communities from './components/Communities';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Feed />} />
          <Route path="profile" element={<Profile />} />
          <Route path="im" element={<Messenger />} />
          <Route path="friends" element={<div className="vk-card p-8 text-center text-gray-500">Friends list is coming soon...</div>} />
          <Route path="groups" element={<Communities />} />
          <Route path="albums" element={<div className="vk-card p-8 text-center text-gray-500">Photos are coming soon...</div>} />
          <Route path="music" element={<Music />} />
          <Route path="video" element={<div className="vk-card p-8 text-center text-gray-500">Video player is coming soon...</div>} />
          <Route path="games" element={<div className="vk-card p-8 text-center text-gray-500">Games are coming soon...</div>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
