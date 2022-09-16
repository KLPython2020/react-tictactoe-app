import React from 'react'
const square = {
    backgroundColor: "#fc4a1a",
    border: "1px dashed white",
    color: "white",
    fontSize: "2em",
    outline: "none"
  }
const Square = ({onClick, value}) => (
    <button style = {square} onClick = {onClick}>
        {value}
    </button>

)

export default Square