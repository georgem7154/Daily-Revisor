import backbtn from "./assets/backbtn.svg";
import main from "./assets/main.png";
import Enter from "./enter";
import Count from "./assets/Count";
import Display from "./Display";
export default function App() {
  const date = new Date().getMilliseconds();
  return (
    <section className="bg-fuchsia-100  flex p-5 sm:min-h-screen rounded-lg sm-full relative z-0">
      <div className=" bg-white rounded-lg flex ring-2 flex-grow min-h-full flex-row max-md:flex-col w-full relative shadow1 ">
       <Enter/>
       <Display/>
       <Count/>
        <div className="absolute z-40 bottom-1 right-1 text-emerald-400 font-semibold">
          <span className="max-lg:hidden">Made By George Michael {date}</span>
          <span className="lg:hidden">George Michael</span>
        </div>

        <img
          className=" max-lg:hidden z-0 absolute bottom-2 right-0 w-3/12"
          src={main}
        />
      </div>
      <script src="logic.js"></script>
    </section>
  );
}
