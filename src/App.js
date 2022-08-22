import logo from "./logo.svg";
import "./App.css";
import Header from "./Shared/Header";
import Home from "./Page/Home/Home";

function App() {
  return (
    <div className="custom-container">
      <Header></Header>
      <Home></Home>
    </div>
  );
}

export default App;
