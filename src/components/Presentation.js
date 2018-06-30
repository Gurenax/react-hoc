import React from 'react'

/**
 * Presentation will be enhanced by recompose in Enhanced-Presentation
 */
const Presentation = ({
  title,
  message,
  toggleVisibility,
  isVisible
}) => {
  return (
    <div>
      <h1>{title}</h1>
      {isVisible ? <p>I'm visible</p> : <p>Not Visible</p>}
      <p>{message}</p>
      <button onClick={toggleVisibility}> Click Me! </button>
    </div>
  )
}

export default Presentation