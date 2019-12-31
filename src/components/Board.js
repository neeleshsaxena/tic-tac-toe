import React from 'react';
import Square from './Square';
import '../styles/Game.css';

const Board = ({ squares, onClick }) => {

    const drawSquare = (i, x, y) => {
      return (
        <Square
          key={i}
          value={squares[i]}
          onClick={() => onClick(i, x, y)}
        />
      );
    }
   
    const createBoard = () => {
      const boardSize = 3;
      const board = [];
      let noOfSquares = 0;
   
      for (let i = 0; i < boardSize; i++) {
        const columns = [];
        for (let j = 0; j < boardSize; j++) {
          columns.push(drawSquare(noOfSquares++, i, j));
        }
        board.push(<div key={i} className="board-row">{columns}</div>);
      }
      return board;
    };
   
    return <div>{createBoard()}</div>;
   
};

export default Board;