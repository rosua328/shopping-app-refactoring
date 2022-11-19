import "./app.css";
import Navbar from "./component/navbar/Navbar";
import Topbar from "./component/topbar/Topbar";
import Home from "./component/page/home/Home";
import Bottombar from "./component/bottombar/Bottombar";
import Dress from "./component/page/dress/Dress";
import Detail from "./component/page/detail/Detail";
import Cart from "./component/page/cart/Cart";

function App() {
  return (
    <div className="app">
      <div className="appTopContainer">
        <Topbar />
        <Navbar />
      </div>
      {/* <Dress /> */}
      {/* <Detail /> */}
      <Cart />
      <Bottombar />
    </div>
  );
}

export default App;
