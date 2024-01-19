import Square from "./Components/Square.jsx";
import {useEffect, useState} from "react";
import calculateWinner from "./helpers/calculateWinner.jsx";

const initialBoard = Array(9).fill(null)

function Board() {
    const [squares, setSquares] = useState(initialBoard)
    const [xIsNext, setXIsNext] = useState(true)
    const handleClick = (position) => {
        console.log(position)
        if (squares[position] || calculateWinner(squares)){
            return
        } else {
            const newSquares = [...squares];
            newSquares[position] = xIsNext ? 'x' : 0;
            setSquares(newSquares)
            setXIsNext(!xIsNext)
        }
    }
    useEffect(() => {
        const isWinner = calculateWinner(squares)
        if (isWinner){
            console.log('winner')
        }
    }, [squares])
    const renderSquare = (i) => {
        return <Square key={i} value={squares[i]} onClick={() => { handleClick(i) }} />
    }

    return (
        <div>
            <div className='flex'>
                {[0, 1, 2].map(renderSquare)}
            </div>
            <div className='flex'>
                {[3, 4, 5].map(renderSquare)}
            </div>
            <div className='flex'>
                {[6, 7, 8].map(renderSquare)}
            </div>

        </div>
    )
}

export default Board
