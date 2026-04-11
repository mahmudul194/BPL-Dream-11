import React from "react";
import Card from "../ui/Card";

const AvailablePlayers = ({ players }) => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center mt-20">
        {players.map((player) => {
          return (
           <Card player={player} ></Card>
          );
        })}
      </div>
    </div>
  );
};

export default AvailablePlayers;
