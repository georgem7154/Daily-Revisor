

export default function App() {
  return (
    <section className="bg-fuchsia-100 flex p-5 min-h-screen rounded-lgsm-full relative z-0">
      
    <div className='bg-black rounded-lg flex ring-2 flex-grow min-h-full flex-row w-full relative shadow1 '>
      <div className="flex flex-col flex-grow basis-4/12 bg-red-200 max-h-full">
        <div className="bg-green-300 w-full flex basis-1/6 ">temp</div>
        <div className="bg-green-400 w-full flex basis-5/6 ">enter</div>
      </div>
      <div className="flex flex-grow flex-col basis-5/12 bg-red-700 h-full">
      <div className="bg-orange-300 w-full flex basis-1/6 ">topic</div>
      <div className="bg-orange-600 w-full flex basis-4/6 ">result</div>
      <div className="bg-orange-300 w-full flex basis-1/6 ">generate and apply</div>
      </div>
      <div className="flex  flex-grow flex-col basis-3/12 bg-red-400 h-full">
      <div className="bg-green-300 w-full flex basis-3/6 ">stats</div>
      <div className="bg-green-400 w-full flex basis-3/6 ">pic and made by</div>
      </div>
      <div className="absolute z-40 bottom-1 right-1 text-emerald-400 font-semibold">Made By George Michael</div>
    </div>
     
    </section>
  )
}

// export default function App() {
//   return (
//     <section className="bg-white flex p-5 min-h-screen w-full relative gradient-bg">
//       <div className="bg-indigo-600 flex ring-2 flex-row w-full relative rainbow-shadow">
//         <div></div>
//       </div>
//     </section>
//   )
// }
