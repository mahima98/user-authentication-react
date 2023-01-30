import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/reset">password reset</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>

        {/* <Route path="/login" component={Login}></Route>
          <Route path="/reset" element={<PasswordReset />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route> */}
      </div>
    </Router>
  );
}

const Home = () => {
  <div>
    <h2>Home</h2>
  </div>;
};

const Login = () => {
  <div>
    <h2>Login</h2>
  </div>;
};
const PasswordReset = () => {
  <div>
    <h2>PasswordReset</h2>
  </div>;
};
const Dashboard = () => {
  <div>
    <h2>Dashboard</h2>
  </div>;
};

export default App;
