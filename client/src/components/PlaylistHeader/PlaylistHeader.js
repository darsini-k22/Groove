import React from 'react'

export default function PlaylistHeader({id,imgSrc}) {
    return (
        <div className='flex gap-6 m-8 items-center'>
            <img src={imgSrc} alt={`playlist ${id}`} className="h-52 w-52 rounded-md shadow-2xl" />
            <div className='flex flex-col place-items-baseline'>
                <div className='h-2'></div>
                <div>PUBLIC PLAYLIST</div>
                <div className='text-8xl my-2 items-start'>Playlist {id}</div>
                <div>Artist 1, Artist 2 and more</div>
                <div className='flex gap-1 items-center'>
                    <div>Made by User2 (link)</div>
                    <h1 className='text-3xl ml-5'>&#8226;</h1>
                    <div>100 songs,</div>
                    <div>1 hr, 15 mins</div>
                </div>
            </div>
        </div>
    )
}
