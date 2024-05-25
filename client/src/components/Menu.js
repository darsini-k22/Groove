import { Link } from "react-router-dom";
import './menu.css'
import Playlists from "../Playlists/Playlists";

export default function Menu() {

    return <>
        <nav className="w-64 bg-gray-800 fixed h-full">
            <div className="titles">Menu</div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li>Search</li>
                <li><Link to='/playlists'>Your Library</Link></li>
            </ul>
            <hr className="bg-gray-700 m-5"></hr>
            <ul>
                <li>Create Playlist</li>
                <li>Liked Songs</li>
            </ul>
            <hr className="bg-gray-700 m-5"></hr>
            <div className="titles">Playlists</div>
            <Playlists/>
        </nav>
    </>

}