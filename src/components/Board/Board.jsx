import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDispatch } from "react-redux";
import { moveKnight } from "../../redux/boardSlice";
import { canMoveKnight } from "../../utils/game";
import Knight from "../Knight/Knight";
import Square from "../Square/Square";
import style from "./Board.module.css";

const Board = ({ knightPosition }) => {
  const dispatch = useDispatch();

  function renderSquare(i, [knightX, knightY]) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    const isKnightHere = x === knightX && y === knightY;
    const black = (x + y) % 2 === 1;
    const piece = isKnightHere ? <Knight /> : null;

    const handleKnightClick = (from, to) => {
      if (canMoveKnight(from, to)) {
        dispatch(moveKnight(to));
      } else {
        alert("Knight can't move to this");
      }
    };

    return (
      <div key={i} style={{ width: "12.5%", height: "12.5%" }}>
        <Square
          black={black}
          onClick={() => handleKnightClick(knightPosition, [x, y])}
        >
          {piece}
        </Square>
      </div>
    );
  }

  const squares = [];

  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition));
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={style.board}>{squares}</div>
    </DndProvider>
  );
};

export default Board;
