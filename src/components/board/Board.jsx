import "./board.css";

import Box from "../box/Box";

const Board = ({ board, onClick }) => {
  return (
    <div className="gameBoard">
      {board.map((value, index) => {
        return <Box value={value} onClick={() => value === null && onClick(index)} />;
      })}
    </div>
  );
};

export default Board;
