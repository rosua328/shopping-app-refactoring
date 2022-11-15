import "./app.css";
import Navbar from "./component/navbar/Navbar";
import Topbar from "./component/topbar/Topbar";

function App() {
  return (
    <div className="app">
      <Topbar />
      <Navbar />
    </div>
  );
}

export default App;
