import "./app.css";
import Navbar from "./component/navbar/Navbar";
import Topbar from "./component/topbar/Topbar";
import Home from "./component/page/home/Home";
import Bottombar from "./component/bottombar/Bottombar";
import Dress from "./component/page/dress/Dress";

function App() {
  return (
    <div className="app">
      <div className="appTopContainer">
        <Topbar />
        <Navbar />
      </div>
      <Dress />
      <Bottombar />
    </div>
  );
}

export default App;
