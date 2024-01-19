import React from "react";
import Square from "./Components/Square.jsx";
import calculateWinner from "./helpers/calculateWinner.jsx";
import ResetButton from "./Components/resetButton.jsx";
import PWinner from "./Components/pWinner.jsx";

const initialBoard = Array(9).fill(null)

class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: initialBoard,
            xIsNext: true,
            winner: '',
        };
    }
    handleClick = (position) => {
        if (this.state.squares[position] || calculateWinner(this.state.squares)){
            return
        } else {
            const newSquares = [...this.state.squares];
            newSquares[position] = this.state.xIsNext ? 'x' : "0";
            this.setState({
                    squares: newSquares,
                    xIsNext: !this.state.xIsNext,
                })
        }
    }
    handleReset = () => {
        this.setState({
            squares:initialBoard,
            xIsNext: true,
            winner: ''
        })
    }

    renderSquare = (i) => {
        return <Square key={i} value={this.state.squares[i]} onClick={() => { this.handleClick(i) }} />
    }
    componentDidUpdate(prevProps, prevState) {
        const { squares } = this.state;

        if (squares !== prevState.squares) {
            const isWinner = calculateWinner(squares);

            if (isWinner) {
                this.setState({
                    winner: isWinner,
                });
            }
        }
    }

  render() {
      return (
          <div>
              <div className='flex'>
                  {[0, 1, 2].map(this.renderSquare)}
              </div>
              <div className='flex'>
                  {[3, 4, 5].map(this.renderSquare)}
              </div>
              <div className='flex'>
                  {[6, 7, 8].map(this.renderSquare)}
              </div>
              <ResetButton onClick={this.handleReset} text="Новая игра"/>
              <PWinner className='winner' text={`winner:${this.state.winner}`}></PWinner>
          </div>
      )
  }
}

export default Board
