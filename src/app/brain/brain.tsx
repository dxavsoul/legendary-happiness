import React, { useEffect, useRef, useState } from "react";
import "./style.css"
import BrainSharp from "./svg/brain_sharp";
import BrainSmooth from "./svg/brain_smooth";
import BrainNodes from "./svg/brain_nodes";
import BrainCircuits from "./svg/brain_circuits";
import BrainGalaxy from "./svg/brain_galaxy";
import Head from "./svg/head";

export default function Brain() {
    const [lvl, setLvl] = useState(1);
    const expanderRef = useRef<HTMLSpanElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
  
    const handleClick = () => {
      setLvl((prevLvl) => {
        let newLvl = prevLvl + 1;
        if (newLvl > 5) {
          newLvl = 1;
        }
        return newLvl;
      });
      if (expanderRef.current) {
        expanderRef.current.className = `expander lvl${lvl}`; // Update class directly
      }
      if (buttonRef.current) {
        buttonRef.current.classList.remove("press");
        setTimeout(() => {
          if (buttonRef.current) {
            buttonRef.current.classList.add("press");
          }
        }, 10);
      }
    };
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setLvl((prevLvl) => {
          let newLvl = prevLvl + 1;
          if (newLvl > 5) {
            newLvl = 1;
          }
          return newLvl;
        });
        if (expanderRef.current) {
          expanderRef.current.className = `expander lvl${lvl}`; // Update class directly
        }
        // In React, 'this' in the interval callback doesn't refer to the button.
        // We don't need to manipulate the button class here in the same way.
        // The button's 'press' class is handled in the handleClick.
      }, 2000);
  
      return () => clearInterval(intervalId); // Cleanup on unmount
    }, [lvl]); // Re-run effect if lvl changes (though in this case, it's not strictly necessary for the interval itself)
  
    const currentLvlClass = `lvl${lvl}`;

  return (
    <div style={
      {
        paddingTop: "5vh",
        display: "flex",
        justifyContent: "left",
        alignItems: "left",
        height: "20vh",
        width: "20vw"
      }
    }>
      <span id="expander" ref={expanderRef} className={`expander ${currentLvlClass}`}>
        <Head></Head>
        <div className="brains">
          <BrainSmooth></BrainSmooth>
          <BrainSharp></BrainSharp>
          <BrainNodes></BrainNodes>
          <BrainCircuits></BrainCircuits>
          <BrainGalaxy></BrainGalaxy>
        </div>
      </span>
    </div>
  );
}