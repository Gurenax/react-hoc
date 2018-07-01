import React from 'react'

const Counter = ({
  value,
  increaseValue,
  decreaseValue
}) => {
  return (
    <div>
      <button onClick={increaseValue}>+</button>
      <h3>{value}</h3>
      <button onClick={decreaseValue}>-</button>
    </div>
  )
}

export default Counter