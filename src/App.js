import { useState } from "react";
import Header from "./components/header/Header";
import ModalOne from "./components/modalOne/ModalOne";
import ModalTwo from "./components/modalTwo/ModalTwo";
import PlayersConfig from "./components/playersConfig/PlayersConfig";


function App() {
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

  return (
    <div >
      <Header />
      {showModalOne && <ModalOne handleSubmit={handleSubmit} handlePlayerOne={handlePlayerOne} playerOne={playerOne} cancelPlayerOne={cancelPlayerOne} />}
      {showModalTwo && <ModalTwo handleSubmit={handleSubmit} handlePlayerTwo={handlePlayerTwo} playerTwo={playerTwo} cancelPlayerTwo={cancelPlayerTwo} />}
      <PlayersConfig playerOne={playerOne} playerTwo={playerTwo} handleShowModalOne={handleShowModalOne} handleShowModalTwo={handleShowModalTwo} checkPlayerNames={checkPlayerNames}/>

    </div>
  );
}

export default App;
