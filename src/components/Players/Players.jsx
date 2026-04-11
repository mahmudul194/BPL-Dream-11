import React, { use, useState } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';

const Players = ({playersPromise}) => {
    const players = use(playersPromise)
    const [isSelected, setSelected] = useState("available");

    return (
        <div className='container mx-auto my-15' >
            <div className='flex justify-between gap-4 items-center mb-5'>
            <h1 className='font-bold text-4xl' >Available Players</h1>
            <div>
                <button onClick={ () => setSelected('available')} className={`btn ${isSelected === 'available' ? 'bg-[#E7F929]' : 'btn'} rounded-r-none rounded-l-xl`} >Available</button>
                <button onClick={()=> setSelected('selected')} className={`btn rounded-l-none ${isSelected === 'selected' ? 'bg-[#E7F929]' : 'btn'} rounded-r-xl`} >selected</button>
            </div>
            </div>

            <AvailablePlayers players={players} ></AvailablePlayers>
        </div>
    );
};

export default Players;