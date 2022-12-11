import Header from "./containers/Header";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="container">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
