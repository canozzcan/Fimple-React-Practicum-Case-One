import './app.css'
import { useState } from "react";
import Header from "./components/header/Header";
import ModalOne from "./components/modalOne/ModalOne";
import ModalTwo from "./components/modalTwo/ModalTwo";
import PlayersConfig from "./components/playersConfig/PlayersConfig";
import Board from "./components/board/Board";
import Winner from './components/winner/Winner';



function App() {

  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
  const [showModalOne, setShowModalOne] = useState(false);
  const [showModalTwo, setShowModalTwo] = useState(false);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [winner, setWinner] = useState("");
  const [gameOver, setGameOver] = useState(false);

  const cancelPlayerOne = () => {
    setShowModalOne(false);
    setPlayerOne("");
  };

  const cancelPlayerTwo = () => {
    setShowModalTwo(false);
    setPlayerTwo("");
  };

  const handlePlayerOne = (e) => {
    setPlayerOne(e.target.value)
  }

  const handlePlayerTwo = (e) => {
    setPlayerTwo(e.target.value)
  }

  const handleShowModalOne = () => {
    setShowModalOne(true)
  }

  const handleShowModalTwo = () => {
    setShowModalTwo(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModalOne(false);
    setShowModalTwo(false);
  };

  const startNewGame = () => {
    if (!playerOne || !playerTwo) {
      alert("Please set custom player names for both players!");
      return
    }

    setGameOver(false);
    setBoard(Array(9).fill(null));
    setWinner("");
  }

  const handleBoxClick = (boxIndex) => {
    const uptadeBoard = board.map((value, index) => {
      if (index === boxIndex) {
        return xPlaying === true ? "X" : "O";
      } else {
        return value
      }
    })

    const winner = checkWinner(uptadeBoard);

    if (winner) {
      if (winner === "X") {
        setWinner(playerOne);
      } else {
        setWinner(playerTwo);
      }
    }



    setBoard(uptadeBoard);

    setXPlaying(!xPlaying);
  }

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];

      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true)
        return board[x];
      }

    }
  }

  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
    setWinner("");
  }

  return (
    <div className='app'>
      <Header />
      {showModalOne && <ModalOne handleSubmit={handleSubmit} handlePlayerOne={handlePlayerOne} playerOne={playerOne} cancelPlayerOne={cancelPlayerOne} />}
      {showModalTwo && <ModalTwo handleSubmit={handleSubmit} handlePlayerTwo={handlePlayerTwo} playerTwo={playerTwo} cancelPlayerTwo={cancelPlayerTwo} />}
      <PlayersConfig playerOne={playerOne} playerTwo={playerTwo} handleShowModalOne={handleShowModalOne} handleShowModalTwo={handleShowModalTwo} startNewGame={startNewGame} />
      {winner && <Winner winner={winner} />}
      {(playerOne && playerTwo) && <p className='p'>It's your turn <strong className='currentPlayer'> {xPlaying === true ? playerOne : playerTwo}</strong></p>}
      {(playerOne && playerTwo) && <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick} />}
    </div>
  );
}

export default App;
