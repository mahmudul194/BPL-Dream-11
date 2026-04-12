import React, { use, useState } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';

const Players = ({playersPromise, setCoin, coin}) => {
    const players = use(playersPromise)
    const [isSelected, setSelected] = useState("available");

    return (
        <div className='container mx-auto my-15' >
            <div className='flex justify-between gap-4 items-center mb-5'>
            { isSelected === 'available' ? <h1 className='font-bold text-4xl' >Available Players</h1> : <h1 className='font-bold text-4xl' >Selected Players</h1> }
            <div>
                <button onClick={ () => setSelected('available')} className={`btn ${isSelected === 'available' ? 'bg-[#E7F929]' : 'btn'} rounded-r-none rounded-l-xl`} >Available</button>
                <button onClick={()=> setSelected('selected')} className={`btn rounded-l-none ${isSelected === 'selected' ? 'bg-[#E7F929]' : 'btn'} rounded-r-xl`} >selected(0)</button>
            </div>
            </div>

            { isSelected === 'available' ? <AvailablePlayers setCoin={setCoin} players={players} coin={coin}/> : <SelectedPlayers/>}
        </div>
    );
};

export default Players;