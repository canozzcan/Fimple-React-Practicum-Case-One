import "./playersConfig.css";

import React, { useState } from "react";

const PlayersConfig = () => {
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
  const [showModalOne, setShowModalOne] = useState(false);
  const [showModalTwo, setShowModalTwo] = useState(false);

  const cancelPlayerOne = () => {
    setShowModalOne(false);
    setPlayerOne("");
  };

  const cancelPlayerTwo = () => {
    setShowModalTwo(false);
    setPlayerTwo("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setShowModalOne(false);
    setShowModalTwo(false);
  };

  const checkPlayerNames = () => {
    if(!playerOne || !playerTwo){
        alert("Please set custom player names for both players!");
        return
    }
  }

  return (
    <div>
      {showModalOne && (
        <div className="modal-backdrop">
          <div className="modal">
            <h2>Choose Your Name</h2>
            <form onSubmit={onSubmit}>
              <div className="formControl">
                <label> Player Name</label>
                <input
                  type="text"
                  onChange={(e) => setPlayerOne(e.target.value)}
                  value={playerOne}
                />
              </div>
              <div>
                <button onClick={cancelPlayerOne} className="btn btn-alt">
                  Cancel
                </button>
                <button className="btn">Confirm</button>
              </div>
            </form>
          </div>
        </div>
      )}
      {showModalTwo && (
        <div className="modal-backdrop">
          <div className="modal">
            <h2>Choose Your Name</h2>
            <form onSubmit={onSubmit}>
              <div className="formControl">
                <label> Player Name</label>
                <input
                  type="text"
                  onChange={(e) => setPlayerTwo(e.target.value)}
                  value={playerTwo}
                />
              </div>
              <div>
                <button
                  onClick={cancelPlayerTwo}
                  className="btn btn-alt"
                >
                  Cancel
                </button>
                <button className="btn">Confirm</button>
              </div>
            </form>
          </div>
        </div>
      )}
      <div className="playersConfig">
        <ol>
          <li>
            <div className="playerOne">
              <h2>Player 1</h2>
              <h3>{playerOne ? playerOne : "PLAYER NAME"}</h3>
              <p className="playerSymbol">X</p>
              <button
                onClick={() => setShowModalOne(true)}
                className="btn btn-alt"
              >
                Edit
              </button>
            </div>
          </li>
          <li>
            <div className="playerTwo">
              <h2>Player 2</h2>
              <h3>{playerTwo ? playerTwo : "PLAYER NAME"}</h3>
              <p className="playerSymbol">O</p>
              <button
                onClick={() => setShowModalTwo(true)}
                className="btn btn-alt"
              >
                Edit
              </button>
            </div>
          </li>
        </ol>
        <button onClick={checkPlayerNames} className="btn">Start New Game</button>
      </div>
    </div>
  );
};

export default PlayersConfig;
