import './playlists.css'
import { Link } from "react-router-dom";
export default function Playlists() {
    const playlists = [
        { id: 1, name: 'Playlist1' },
        { id: 2, name: 'Playlist2' },
        { id: 3, name: 'Playlist3' },
        { id: 4, name: 'Playlist4' }
    ]
    return (
        <ul>
            {playlists.map(p => <li><Link to={`/playlists/${p.id}`}>{p.name}</Link></li>)}
        </ul>
    )
}