import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../../utils/constants";
import style from "./Knight.module.css";

export default function Knight() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.KNIGHT,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontWeight: "bold",
        cursor: "move",
      }}
      className={style.knight}
    >
      ♘
    </div>
  );
}
