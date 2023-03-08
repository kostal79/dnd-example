import React from "react";
import style from "./Square.module.css";

export default function Square({ black, onClick, children }) {
  const fill = black ? "black" : "white";
  const stroke = black ? "white" : "black";
  return (
    <div
      className={style.square}
      onClick={onClick}
      style={{ backgroundColor: fill, color: stroke }}
    >
      {children}
    </div>
  );
}
