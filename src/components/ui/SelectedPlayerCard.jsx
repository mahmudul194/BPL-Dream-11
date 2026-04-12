import React from "react";
import { FaUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const SelectedPlayerCard = ({ player, deleteSelectedPlayer }) => {
  return (
    <div>
      <div className="flex items-center gap-6 justify-between p-10 rounded-2xl border">
        <div className="flex item-center gap-6">
          <img
            className="h-18.75 w-auto rounded-md"
            src={player.playerImg}
            alt={player.playerName}
          />
          <div>
            <h1 className="flex items-center gap-2 font-semibold text-2xl">
              {" "}
              <FaUser /> {player.playerName}
            </h1>
            <p>{player.playerType}</p>
          </div>
        </div>
        <button
          onClick={() => deleteSelectedPlayer(player)}
          className="btn text-red-500"
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default SelectedPlayerCard;
