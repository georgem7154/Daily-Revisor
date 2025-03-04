function Count(){
    return (
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
              The topics with PRIORITY 3:<span> </span>
            </li>
          </ul>
        </div>
        <div className=" w-full flex basis-3/6 ">
          <div></div>
        </div>
      </div>
    );
}

export default Count;