import Dashboard from "./pages/Dashboard"
import DashboardSLA from "./pages/DashboardSLA";
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar/>
      {/* <Dashboard/> */}
      <Routes>
        <Route  path="/" element={<Dashboard/>} />
        <Route  path="/Dashboard" element={<Dashboard/>} />
        <Route  path="/DashboardSLA" element={<DashboardSLA/>} />
      </Routes>
    </Router>
  );
};

export default App;
