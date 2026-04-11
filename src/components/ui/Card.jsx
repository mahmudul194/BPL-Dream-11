import React from "react";
import { FaUser } from "react-icons/fa";
import { IoMdFlag } from "react-icons/io";

const Card = ({ player }) => {
  return (
    <div>
      <div>
        <div className="card bg-base-100 w-full max-w-sm shadow-sm m-5">
          <figure>
            <img src={player.playerImg} alt="Virat Kohli" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              <FaUser />
              {player.playerName}
            </h2>

            <div className="flex justify-between gap-2 items-center">
              <div className="flex items-center gap-2">
                <IoMdFlag />
                <p>{player.playerCountry}</p>
              </div>
              <button className="btn">{player.playerType}</button>
            </div>
            <div className="divider"></div>
            <h2 className="font-bold">rating: {player.rating}</h2>
            <div className="flex justify-between gap-4 font-bold">
              <p>{player.battingStyle}</p>
              <p className="text-right">{player.bowlingStyle}</p>
            </div>
            <div className="card-actions justify-between">
              <p className="font-semibold">Price : ${player.price}</p>
              <button className="btn">Choose Player</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;