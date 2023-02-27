import React, { useState } from "react";
import { calculateWinner } from "../hepler";

import Board from "./Board";
import "./GameStyle.css";
function Game() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = (index) => {
        const boardCopy = [...board];
        if (winner || boardCopy[index]) {
            return;
        }
        boardCopy[index] = xIsNext ? "X" : "O";
        setBoard(boardCopy);
        setXIsNext((xIsNext) => !xIsNext);
    };
    const handleResetGame = () => {
        setBoard(Array(9).fill());
        setXIsNext(true);
    };
    return (
        <div>
            <Board cells={board} onClick={handleClick}></Board>
            <div className="game-winner">
                {winner ? `Winner is ${winner}` : ""}
            </div>

            <button onClick={handleResetGame} className="game-reset">
                Reset game
            </button>
        </div>
    );
}

export default Game;
