import "./winner.css";

const Winner = ({ winner, clickCount }) => {
  return (
    <div>
      {winner && (
        <div className="gameOver">
          <h2>
            You won <span>{winner.toUpperCase()}</span>!
          </h2>
          <p>Click "Start New Game" above, to start a new game</p>
        </div>
      )}

      {(!winner && clickCount===9) && (
        <div className="gameOver">
        <h2>
          It's <span>DRAW</span>!
        </h2>
        <p>Click "Start New Game" above, to start a new game</p>
      </div>
      ) 
      }

    </div>
  );
};

export default Winner;
