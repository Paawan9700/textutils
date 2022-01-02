import { useState } from "react";
import "./App.css";
import About from "./components/About";
import { Navbar } from "./components/Navbar";
import Textform from "./components/Textform";

function App() {
  const [darkmode, setdarkmode] = useState("light")

  const togglemode = () => {
    if (darkmode === "dark") {
      setdarkmode("light");
      document.body.style.backgroundColor = "white";
    } else {
      setdarkmode("dark");
      document.body.style.backgroundColor = "grey";
    }
  }

  return (
    <div>

      <Navbar title="TextUtils" about="About" mode={darkmode} toggleMode={togglemode} />
      <About />
      <Textform heading="Enter Your Text To Analyze" mode={darkmode} />
    </div>
  );
}

export default App;
