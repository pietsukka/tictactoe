import { useState } from 'react';
 
 
 // Square function

 function Square() {
  const [value, setValue] = useState(null);

  
  //Click Function

  function handleClick() {
    console.log('X');
  }

  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}



 
 
 //Builds Board

 export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}