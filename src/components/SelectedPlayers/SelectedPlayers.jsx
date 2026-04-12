import React from "react";
import { toast } from "react-toastify";
import SelectedPlayerCard from "../ui/SelectedPlayerCard";

const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  setCoin,
  coin,
}) => {
  const deleteSelectedPlayer = (player) => {
    const filteredPlayers = selectedPlayers.filter(
      (selectedplayer) => selectedplayer.playerName != player.playerName,
    );
    toast("player Deleted!");
    setSelectedPlayers(filteredPlayers);
    setCoin(coin + player.price);
  };
  return (
    <div className="space-y-5">
      {selectedPlayers.length === 0 ? (
        <div className="h-100 flex items-center justify-center flex-col gap-4">
          <h2>No players selected yet</h2>
          <p>Go to available tab to select players</p>
        </div>
      ) : (
        selectedPlayers.map((player, index) => {
          return (
            <SelectedPlayerCard
              player={player}
              key={index}
              deleteSelectedPlayer={deleteSelectedPlayer}
            ></SelectedPlayerCard>
          );
        })
      )}
    </div>
  );
};

export default SelectedPlayers;
