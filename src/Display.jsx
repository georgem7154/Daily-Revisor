function Display() {
    return (
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
    );
}

export default Display;