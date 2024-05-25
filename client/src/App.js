import { Route, Routes } from "react-router-dom";
import HomeLayout from "./Home/HomeLayout";
import Playlists from "./Playlists/Playlists";

function App() {
  return (<>
    <Routes>
      <Route path="/" element={<HomeLayout />} />
      <Route path="/playlists" element={<Playlists />} />
    </Routes></>

  );
}

export default App;
