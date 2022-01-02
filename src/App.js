import "./App.css";
import About from "./components/About";
import { Navbar } from "./components/Navbar";
import Textform from "./components/Textform";

function App() {
  return (
    <div>

      <Navbar title="TextUtils" about="About" />
      <About />
      <Textform heading="Enter Your Text To Analyze" />
    </div>
  );
}

export default App;
