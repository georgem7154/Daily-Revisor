import backbtn from "./assets/backbtn.svg";
import main from "./assets/main.png";
import React, { useState } from 'react';



export default function App() {
  const [textInput, setTextInput] = useState('');
  const [list, setList] = useState([]);
  const [length, setLength] = useState([]);
  // Function to handle text input change
  const handleInputChange = (e) => {
    setTextInput(e.target.value);
  };

  // Function to split, trim, and push values to the list
  const handleAddItems = () => {
    const items = textInput.split(',').map(item => item.trim());
    setList([...list, ...items]);
    setTextInput(''); // Clear the textarea after adding items
    setLength
  };
  
  return (
    <section className="bg-fuchsia-100  flex p-5 sm:min-h-screen rounded-lg sm-full relative z-0">
      <div className=" bg-white rounded-lg flex ring-2 flex-grow min-h-full flex-row max-md:flex-col w-full relative shadow1 ">
        <div className="flex flex-col z-10 flex-grow basis-4/12  max-h-full">
          <div className=" relative w-full flex basis-1/6 justify-start items-left">
            <button className="backbutn">
              <svg className="svg">
                <path
                  className="h-2 w-2 "
                  viewBox="0 0 32 32"
                  d="M15.281 7.188v17.594l-15.281-8.781z"
                />
              </svg>
            </button>
            <div className="m-5 items-center rounded-full flex flex-grow justify-center">
              <div className="shadow2 rounded-full  z-10 relative max-sm:text-3xl text-5xl font-mono font-extrabold">
                JAVASCRIPT
              </div>
            </div>
          </div>
          <div className=" w-full flex flex-col p-5 basis-5/6 z-40">
            <div className="mt-5">
              <div className="prioritylabel">PRIORITY 1 :-</div>
              <div className="">
                <textarea className="txtinput" value={textInput} onChange={handleInputChange} placeholder="enter comma seperated values" />
              </div>
            </div>

            <div className="mt-5">
              <div className="prioritylabel">PRIORITY 2 :-</div>
              <div className="">
                <textarea className="txtinput" />
              </div>
            </div>

            <div className="mt-5">
              <div className="prioritylabel">PRIORITY 3 :-</div>
              <div className="">
                <textarea className="txtinput" />
              </div>
            </div>
            <div className="flex justify-evenly items-center w-full m-2 max-sm:m-10 max-sm:flex-col flex-grow flow-row">
              <button className="butnstyle" onClick={handleAddItems}>
                <div className="w-full">ADD TO LIST</div>
              </button></div>
          </div>
        </div>

        <div className="flex flex-grow z-10 flex-col basis-5/12  h-full">
          <div className=" w-full flex basis-1/6 items-end justify-center mb-3 text-4xl max-sm:text-2xl italic font-montserrat">
            TODAY'S GOALS (⌐■_■)
          </div>
          <div className="showtopic">
            <div className="hover:scale-125 flex min-w-full items-center justify-center min-h-full absolute rounded-xl bg-opacity-100">
              ddd
            </div>
          </div>
          <div className=" w-full items-center flex basis-1/6 ">
            <div className="flex justify-evenly items-center w-full m-2 max-sm:m-10 max-sm:flex-col flex-grow flow-row">
              <button className="butnstyle">
                <div className="w-full">GENERATE</div>
              </button>
              <button className="butnstyle">
                <div className="w-full">APPLY</div>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-grow z-10 flex-col basis-3/12  h-full">
          <div className=" p-2 items-center font-dyna w-full flex basis-3/6 ">
            <ul className="list-outside leading-10">
              <li>
                The topics with PRIORITY 1:<span></span>
              </li>
              <li>
                The topics with PRIORITY 2:<span> </span>
              </li>
              <li>
                The topics with PRIORITY 3:<span>{length}  </span>
              </li>
            </ul>
          </div>
          <div className=" w-full flex basis-3/6 ">
            <div></div>
          </div>
        </div>

        <div className="absolute z-40 bottom-1 right-1 text-emerald-400 font-semibold">
          <span className="max-lg:hidden">Made By George Michael</span>
          <span className="lg:hidden">George Michael</span>
        </div>

        <img
          className=" max-lg:hidden absolute bottom-2 right-0 w-3/12"
          src={main}
          z-0
        />
      </div>
      <script src="logic.js"></script>
    </section>
  );
}
