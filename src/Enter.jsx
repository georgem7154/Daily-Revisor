import Priority from "./Priority";
function Enter(){
    return(
        <div className="flex flex-col z-10  flex-grow basis-4/12  max-h-full">
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
          <div className="m-5 items-center  rounded-full flex flex-grow justify-center">
            <div className="shadow2 rounded-full  z-10 relative max-sm:text-3xl text-5xl font-mono font-extrabold">
              JAVASCRIPT
            </div>
          </div>
        </div>
        <div className=" w-full flex flex-col p-5 basis-5/6 z-40">
          <Priority lvl={1} />
          <Priority lvl={2} />
            <Priority lvl='ssss' />
          <div className="flex justify-evenly items-center w-full m-2 max-sm:m-10 max-sm:flex-col flex-grow flow-row">
            <button className="butnstyle">
              <div className="w-full">ADD TO LIST</div>
            </button>
          </div>
        </div>
      </div>
    )
}
export default Enter;