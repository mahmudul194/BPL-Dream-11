import React, { use } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';

const Players = ({playersPromise}) => {
    const players = use(playersPromise)
    return (
        <div className='container mx-auto' >
            <h1>players : {players.length}</h1>

            <AvailablePlayers players={players} ></AvailablePlayers>
        </div>
    );
};

export default Players;