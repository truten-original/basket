import Button from "react-bootstrap/Button"
const Counter = ({
  value,
  id,
  name,
  removeItem,
  handleIncrement,
  handleDecrement,
}) => {
  const formatValue = () => {
    return value === 0 ? "empty" : value
  }
  const getBageClasses = () => {
    let classes = "badge m-2 "
    classes += value === 0 ? "bg-warning" : "bg-primary"
    return classes
  }

  return (
    <div className="container">
      <span>{name}</span>
      <span className={getBageClasses()}>{formatValue()}</span>
      <Button
        disabled={value === 0 && true}
        className="btn btn-primary btn-sm m-2"
        onClick={() => handleDecrement(id)}
      >
        -
      </Button>
      <Button
        className="btn btn-primary btn-sm m-2"
        onClick={() => handleIncrement(id)}
      >
        +
      </Button>
      <Button
        className="btn btn-danger btn-sm m-2"
        onClick={() => removeItem(id)}
      >
        delete
      </Button>
    </div>
  )
}

export default Counter
