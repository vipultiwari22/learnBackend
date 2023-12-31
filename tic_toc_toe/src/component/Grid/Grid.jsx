import React, { useState } from "react";
import Card from "../Card/Card";
import "./Grid.css";
import isWinner from "../../helpers/checkWinner";

function Grid({ numberOfCard }) {
  const [Bord, setBord] = useState(Array(numberOfCard).fill(""));
  const [turn, setTurn] = useState(true);
  const [Winner, setWiner] = useState(null);

  function play(index) {
    if (turn == true) {
      Bord[index] = "o";
    } else {
      Bord[index] = "x";
    }
    const win = isWinner(Bord, turn ? "o" : "x");
    if (win) {
      setWiner(win);
    }
    setBord([...Bord]);
    setTurn(!turn);
  }

  function rest() {
    setTurn(true);
    setWiner(null);
    setBord(Array(numberOfCard).fill(""));
  }

  return (
    <div className="grid-wrapper">
      {Winner && (
        <>
          <h1 className="turn-hightlight">Winner is {Winner}</h1>
          <button className="rest" onClick={rest}>
            Reset game
          </button>
        </>
      )}

      <h1 className="turn-hightlight">Curret turn :{turn ? "o" : "x"}</h1>
      <div className="Grid">
        {Bord.map((el, idx) => (
          <Card key={idx} onPlay={play} Player={el} index={idx} />
        ))}
      </div>
    </div>
  );
}

export default Grid;
