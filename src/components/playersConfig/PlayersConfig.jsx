import './playersConfig.css'

const PlayersConfig = ({playerOne, playerTwo, handleShowModalOne, handleShowModalTwo, startNewGame}) => {
  return (
    <div className="playersConfig">
          <ol>
            <li>
              <div className="playerOne">
                <h2>Player 1</h2>
                <h3>{playerOne ? playerOne : "PLAYER NAME"}</h3>
                <p className="playerSymbol">X</p>
                <button
                  onClick={handleShowModalOne}
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
                  onClick={handleShowModalTwo}
                  className="btn btn-alt"
                >
                  Edit
                </button>
              </div>
            </li>
          </ol>
          <button onClick={startNewGame} className="btn">Start New Game</button>
        </div>
  )
}

export default PlayersConfig