import React from 'react'
import Square from './Square'

const style = {
    border: "2px solid white",
    borderRadius: "1rem",
    display: "grid",
    gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
    height: "300px",
    margin: "100px auto",
    padding: "1em",
    width: "300px",  
}

const Board = ({squares, onClick}) => (
    <div style = { style }>
        {squares.map((square, i)=>(
            <Square key={i} value= {square} onClick={() => onClick(i)} />
        ))}
    </div>
)

export default Board