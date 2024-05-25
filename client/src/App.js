import { Route, Routes } from "react-router-dom";
import HomeLayout from "./Home/HomeLayout";
import Playlists from "./Playlists/Playlists";
import Playlist from "./Playlist/Playlist";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />} />
      <Route path="/playlists" element={<Playlists />} />
      <Route path="/playlists/:id" element={<Playlist />} />
    </Routes>
  );
}

export default App;
