import React from 'react'
import { useParams } from 'react-router-dom'
import playlist1 from './../images/play_img1.jpg'
import PlaylistHeader from '../components/PlaylistHeader/PlaylistHeader'
import PlayerList from '../components/PlayerList/PlayerList'

export default function Playlist() {
    const { id } = useParams()
    return (<>
        <div>Playlist {id}</div>
        <div className='h-full w-full fixed bg-gradient-to-b from-[#F1EF99] from-10% to-black to-80%'>
            <PlaylistHeader id={id} imgSrc={playlist1} />
            <PlayerList />
        </div>
    </>
    )
}
