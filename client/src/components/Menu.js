import { Link } from "react-router-dom";
import './menu.css'
import Playlists from "../Playlists/Playlists";

export default function Menu() {

    return <>
        <nav className="w-64 bg-black fixed h-full">
            <div className="titles mt-16">Menu</div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li>Search</li>
                <li><Link to='/playlists'>Your Library</Link></li>
            </ul>
            {/* <hr className="border-gray-600 mx-10 my-5"></hr> */}
            <ul className="my-5">
                <li>Create Playlist</li>
                <li>Liked Songs</li>
            </ul>
            {/* <hr className="border-gray-600 mx-10 my-5"></hr> */}
            <div className="titles">Playlists</div>
            <Playlists />
        </nav>
    </>

}