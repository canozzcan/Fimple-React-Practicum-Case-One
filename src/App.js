import './app.css'
import { useState } from "react";
import Header from "./components/header/Header";
import ModalOne from "./components/modalOne/ModalOne";
import ModalTwo from "./components/modalTwo/ModalTwo";
import PlayersConfig from "./components/playersConfig/PlayersConfig";
import Board from "./components/board/Board";


function App() {
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
  const [showModalOne, setShowModalOne] = useState(false);
  const [showModalTwo, setShowModalTwo] = useState(false);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);

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

  const checkPlayerNames = () => {
    if (!playerOne || !playerTwo) {
      alert("Please set custom player names for both players!");
      return
    }
  }


  const handleBoxClick = (boxIndex) => {
    const uptadeBoard = board.map((value, index) => {
      if (index === boxIndex) {
        return xPlaying === true ? "X" : "O";
      } else {
        return value
      }
    })

    setBoard(uptadeBoard);

    setXPlaying(!xPlaying);
  }

  return (
    <div className='app'>
      <Header />
      {showModalOne && <ModalOne handleSubmit={handleSubmit} handlePlayerOne={handlePlayerOne} playerOne={playerOne} cancelPlayerOne={cancelPlayerOne} />}
      {showModalTwo && <ModalTwo handleSubmit={handleSubmit} handlePlayerTwo={handlePlayerTwo} playerTwo={playerTwo} cancelPlayerTwo={cancelPlayerTwo} />}
      <PlayersConfig playerOne={playerOne} playerTwo={playerTwo} handleShowModalOne={handleShowModalOne} handleShowModalTwo={handleShowModalTwo} checkPlayerNames={checkPlayerNames} />
      {(playerOne && playerTwo) && <p className='p'>It's your turn <strong className='currentPlayer'> {xPlaying === true ? playerOne : playerTwo}</strong></p>}
      {(playerOne && playerTwo) &&<Board board={board} onClick={handleBoxClick} />}


    </div>
  );
}

export default App;
