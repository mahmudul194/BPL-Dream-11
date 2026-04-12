import React from "react";
import Card from "../ui/Card";

const AvailablePlayers = ({ players,setCoin, coin,selectedPlayers, setSelectedPlayers }) => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center mt-20">
        {players.map((player, index) => {
          return (
           <Card key={index} player={player} setCoin={setCoin} coin={coin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} ></Card>
          )
        })}
      </div>
    </div>
  );
};

export default AvailablePlayers;
