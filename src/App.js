import "./app.css";
import Navbar from "./component/navbar/Navbar";
import Topbar from "./component/topbar/Topbar";
import Home from "./component/page/home/Home";
import Bottombar from "./component/bottombar/Bottombar";

function App() {
  return (
    <div className="app">
      <div className="appTopContainer">
        <Topbar />
        <Navbar />
      </div>
      <Home />
      <Bottombar />
    </div>
  );
}

export default App;
