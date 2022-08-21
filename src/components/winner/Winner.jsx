import './winner.css'

const Winner = ({winner}) => {
  return (
    <div className='gameOver'>
        <h2>You won <span>{winner.toUpperCase()}</span>!</h2>
        <p>Click "Start New Game" above, to start a new game</p>
    </div>
  )
}

export default Winner