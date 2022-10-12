import logo from "./images/logo.svg";
import vector from "./images/vector.svg";
import "./App.css";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="half-background flex justify-center flex-col items-center">
      <img
              src={logo}
              class="h-48 w-full object-cover md:h-full md:w-48 logo"
              alt="logo"
            />
      <div class="flex flex-row max-h-[46.875rem] max-w-[46.875rem] bg-white rounded-xl shadow-md overflow-hidden ">
        <div class="md:flex h-[46.875rem] w-[46.875rem]">
          <div class="md:shrink-0 flex flex-col items-center mt-[2.813rem]">
            {" "}
            <img
              src={vector}
              class="object-cover md:h-full md:w-48 picture"
              alt="picture"
            />
          </div>
          <div class="p-8 flex flex-col items-center pt-0">
            <div class="font1 mt-[-1.563rem]">
              <span>
                Welcome to <span className="span-kerry">Kerry Express</span>
              </span>
            </div>
            <div className="font2 mt-[1.25rem]">
              <span>Kerry1234</span>
            </div>
            <div className="flex space-x-2 justify-center mt-[1.3rem]">
            <button className="btn-color"><span className="button-text">Back&nbsp; &nbsp; &nbsp;to&nbsp; &nbsp; &nbsp;home</span></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
