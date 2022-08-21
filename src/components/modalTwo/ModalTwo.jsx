import "./modalTwo.css";

const ModalTwo = ({handleSubmit, handlePlayerTwo, playerTwo, cancelPlayerTwo}) => {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Choose Your Name</h2>
        <form onSubmit={handleSubmit}>
          <div className="formControl">
            <label> Player Name</label>
            <input type="text" onChange={handlePlayerTwo} value={playerTwo} />
          </div>
          <div>
            <button onClick={cancelPlayerTwo} className="btn btn-alt">
              Cancel
            </button>
            <button className="btn">Confirm</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalTwo;
