import React from 'react'

export default function PlayerList() {
    return (
        <div className='p-8 h-full bg-gradient-to-b from-black/20 from-30% to-black to-80%'>
            <div className='flex justify-between py-7'>
                <div className='flex gap-6'>
                    <div>Play button</div>
                    <div>Heart</div>
                    {/* <li>Download</li> */}
                    <div>Three dots</div>
                </div>
                <div className='flex gap-6'>
                    <div>Search</div>
                    <div>Custom Order</div>
                </div>
            </div>

            <div className='flex justify-between my-2'>
                <div># Title</div>
                <div>Album</div>
                <div>Date Added</div>
                <div>Duration</div>
            </div>

            <hr></hr>
            <div>
                <div className='flex flex-row justify-between items-center my-3'>
                    <div className='flex gap-3 items-center'>
                        <h3>||</h3>
                        <div className='flex flex-col gap-2 items-center'>
                            <h2>Song 1</h2>
                            <h2>Artist 1</h2>
                        </div>
                    </div>
                    <div>Album 1</div>
                    <div>Date</div>
                    <div className='flex flex-row gap-3'>
                        <h2>heart</h2>
                        <h2>2:11</h2>
                    </div>
                </div>
            </div>

        </div>
    )
}
