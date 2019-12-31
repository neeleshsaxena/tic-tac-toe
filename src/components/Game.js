import React from 'react';
import Board from './Board';
import '../styles/Game.css';
import { 
  PLAYER_X_NEXT,
  PLAYER_O_NEXT,
  RESTART_GAME,
  TOTAL_STEPS,
  DRAW_GAME_TEXT,
  GAME_TITLE 
} from '../constants';

const initialState = {
    squares: Array(9).fill(null),
    currentStep: 0,
    xIsNext: true,
    rows: Array(3).fill(0),
    cols: Array(3).fill(0),
    diagonal: 0,
    antiDiagonal: 0,
    status: null,
    isWinner: null
};

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  reset = () => {
    this.setState(initialState);
  }

  calculateWinner = (x, y)  => {
    const player = this.state.xIsNext ? 'X' : 'O';
    const intToAdd = player === 'X' ? 1 : -1; // X -> 1... O -> -1
    const newRows = this.state.rows.slice();
    const newCols = this.state.cols.slice();
    let diagonal = this.state.diagonal;
    let antiDiagonal = this.state.antiDiagonal;

    newRows[x] += intToAdd;
    newCols[y] += intToAdd;
    if (x === y) {
      diagonal += intToAdd;
    }
    if (y === newRows.length - x - 1) {
      antiDiagonal += intToAdd;
    }
    const size = newRows.length;
    if (
          Math.abs(newRows[x]) === size || 
          Math.abs(newCols[y]) === size ||
          Math.abs(diagonal) === size ||
          Math.abs(antiDiagonal) === size
        ) 
        {
          return { winner: player };
        } else {
          return { rows: newRows, cols: newCols, diagonal, antiDiagonal, player }
        }

    }

  getStatus = (currentStep, xIsNext) => {
    let status;
    if (currentStep + 1 === 9) {
        status = DRAW_GAME_TEXT;
    } else if (xIsNext) {
        status = PLAYER_O_NEXT;
    } else {
        status = PLAYER_X_NEXT;
    }
    return status;
  };

  makeAMove(i, x, y) {
    if (!this.state.isWinner && this.state.status !== DRAW_GAME_TEXT && !this.state.squares[i]) {
        const squares = this.state.squares.slice();
        const { winner, rows, cols, diagonal, antiDiagonal, player } = this.calculateWinner(x, y);
        
        if (winner) {
            squares[i] = winner;
            this.setState({
              status: `PLAYER ${winner} WINS!`,
              squares,
              isWinner: true
            });
            return;
        }

        squares[i] = player;
        this.setState({
          squares: squares,
          xIsNext: !this.state.xIsNext,
          currentStep: this.state.currentStep + 1,
          rows,
          cols,
          status: this.getStatus(this.state.currentStep, this.state.xIsNext),
          diagonal,
          antiDiagonal
        });
    }
  }

  render() {
    const { status } = this.state;
    if (status === null) {
      this.setState({ status: PLAYER_X_NEXT })
    }
    return (
    <div className="test">
        <p className="game-title">{GAME_TITLE}</p>
        <div className="game-board">
        <Board
          squares={this.state.squares}
          onClick={(i, x, y)=> this.makeAMove(i, x, y)}
        />
        </div>
        
        <div>
          <div className="stats-table">
            <div className="stats-table-cell">{TOTAL_STEPS} {this.state.currentStep}</div>
            <div className="stats-table-cell">{status}</div>
          </div>
        </div>
        <div>
          <button onClick={this.reset} className="game-restart">{RESTART_GAME}</button>
        </div>
    </div>
    );
  }
}

export default Game;