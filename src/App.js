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
    <div className="half-background">
      <img src={logo} className="logo" alt="logo" />
      <div className="test"></div>
      <img src={vector} className="picture" alt="logo" />
      <h1 className="welcome">Welcome to <span className="span-kerry">Kerry Express</span></h1>
      <h1 className="kerry1234">Kerry1234</h1>
      <button className="btn-color"><span className="eiei">Back</span><span className="eiei">to</span><span>home</span></button>
    </div>
  );
}

export default App;
