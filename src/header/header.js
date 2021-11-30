import React, { useState, useEffect } from "react";
import "../App.css";
const Header = () => {
  const [trueAnswer, settrueAnswer] = useState("rgb(255,255,255)");
  const [squareNum, setSquareNum] = useState(6);

  const randomColor = () => {
    //pick a "red" from 0-255
    let r = Math.floor(Math.random() * 256);
    //pick a "green" from 0-255
    let g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0-255
    let b = Math.floor(Math.random() * 256);
    // console.log(trueAnswer);
    return "rgb(" + r + ", " + g + ", " + b + ")";
  };
  const [colorArray, setColorArray] = useState([]);
  const [selectedColor, setselectedColor] = useState("rgb(255,255,255)");
  
  const generateColorsArray = (x) => {
    var colors = [];
    for (var i = 0; i < x; i++) {
      colors.push(randomColor());
    }
    var random = Math.floor(Math.random() * colors.length);
     colors[random]=randomColor();
     settrueAnswer(colors[random]);
     setColorArray(colors);
  
  };

  useEffect(() => {
    generateColorsArray(6);
  }, []);

  const handleEasy = () => {
    setSquareNum(3);
    generateColorsArray(3);
    
  };
  const handleHard = () => {
    setSquareNum(6);
    generateColorsArray(6);
    
  };
  const trueSelect=()=>{
   
    var colorg = [];
    for (var i = 0; i < squareNum; i++) {
      colorg.push(trueAnswer);

      //get random color and push into array
    }
    
     setColorArray(colorg);

  }
    const handlClick=(e)=>{
    setselectedColor(e.target.style.backgroundColor);
    console.log(e);
    if(selectedColor===trueAnswer){
        trueSelect();
    }
    else{
           
    }

  }

  return (
    <div>
      <h1>
        The Great
        <br />
        <span style={{ color: trueAnswer }}>{trueAnswer}</span>
        <br />
        Color Picking Game
      </h1>
      <div id="stripe">
        <button id="reset">New Colors</button>
        <span id="message"></span>
        <button id="easyBtn" onClick={handleEasy}>
          Easy
        </button>
        <button className="selected" id="hardBtn" onClick={handleHard}>
          Hard
        </button>
      </div>

      <div id="container">
        {colorArray.map((e, index) => {
          console.log(e);
          return (
            <div
              key={"colorarr" + index}
              className="square"
              style={{ backgroundColor: e }}
              onClick={handlClick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Header;
