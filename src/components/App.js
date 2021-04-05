import React, { useState } from "react";

import "../styles/App.css";

function App() {
  const [newLength, setNewLength] = useState("Keylines are Dope");
  return (
    <div className=" h-screen flex justify-center items-center text-xl font-bold p-4    ">
      <div className=" border-yellow-400 border-solid border-b-2 w-full "></div>
      <div
        contentEditable="true"
        onInput={(e) => {
          console.log("yes");
          let newVariable = newLength + e.target.innerHTML;

          console.log(newVariable.length);
          newVariable = newVariable.substring(0, 20);

          console.log(newVariable);

          // if (newVariable.length >= 20) {
          //   newVariable.substring(0, 20);
          //   setNewLength(newVariable);
          // }
        }}
        onKeyDown={(e) => {
          if (e.key === "Backspace") {
            return;
          }

          if (e.target.lastChild === null) {
            return;
          }

          if (e.target.lastChild.data.length >= 20) {
            e.preventDefault();
          }
        }}
        className=" text-3xl font-thin uppercase px-2 whitespace-nowrap text-center outline-none border-yellow-100
         border-2 border-dashed 
        focus: focus:border-black"
      >
        {newLength}
      </div>
      <div className="  border-yellow-400 border-solid border-b-2 w-full  "></div>
    </div>
  );
}

export default App;
