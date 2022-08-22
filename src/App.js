import logo from "./logo.svg";
import "./App.css";
import Header from "./Shared/Header";
import Home from "./Page/Home/Home";
import Footer from "./Page/Footer/Footer";

function App() {
  return (
    <div className="custom-container">
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
