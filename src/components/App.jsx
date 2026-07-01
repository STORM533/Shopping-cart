import Heading from "./Heading";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
function App() {
  return (
    <div>
      <Heading />
      <Navbar />
      <Outlet/>
    </div>
  );
}
export default App;
