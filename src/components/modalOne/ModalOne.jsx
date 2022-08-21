import './modalOne.css'

const ModalOne = ({handleSubmit, handlePlayerOne, playerOne, cancelPlayerOne}) => {
  return (
    <div className="modal-backdrop">
            <div className="modal">
              <h2>Choose Your Name</h2>
              <form onSubmit={handleSubmit}>
                <div className="formControl">
                  <label> Player Name</label>
                  <input
                    type="text"
                    onChange={handlePlayerOne}
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
  )
}

export default ModalOne