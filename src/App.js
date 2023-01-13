import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AboutePage from "./pages/AboutePage";
import ErrorPage from "./pages/ErrorPage";
import MainPage from "./pages/MainPage";
import UsersDetailsPage from "./pages/UsersDetailsPage";
import Users from "./users/Users";

// function App() {
//   const [data, setData] = useState(null);
//   const [toggle, setToggle] = useState(false);
//   const [value, setValue] = useState("");

//   const onClick = () => setToggle((prev) => !prev);

//   useEffect(() => {
//     setTimeout(() => {
//       setData({});
//     }, 100);
//   }, []);

//   return (
//     <div className="App">
//       <h1 data-testid="value-elem">{value}</h1>
//       {toggle && <div data-testid="toggle-elem">toggle</div>}
//       {data && <div>data</div>}
//       <h1>Hello world</h1>
//       <button data-testid="toggle-btn" onClick={onClick}>
//         click me
//       </button>
//       <input
//         onChange={(e) => setValue(e.target.value)}
//         type="text"
//         placeholder="input value..."
//       />
//     </div>
//   );
// }

const App = () => {
  return (
    <>
      <Link to="/" data-testid="main-link">
        main
      </Link>
      <Link to="/about" data-testid="about-link">
        about
      </Link>
      <Link to="/users" data-testid="users-link">
        users
      </Link>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutePage />} />
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UsersDetailsPage />} />
      </Routes>
    </>
  );
};

export default App;
