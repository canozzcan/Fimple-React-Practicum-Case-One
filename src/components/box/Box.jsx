import './box.css'

const Box = ({value, onClick}) => {
    const style = value === "X" || value === "O" ? "box clicked" : "box";

  return (
    <button className={style} onClick={onClick}>{value}</button>
  )
}

export default Box