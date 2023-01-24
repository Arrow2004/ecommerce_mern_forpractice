import "./App.css";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from "./containers/Home";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} exact></Route>
          <Route path="/signin" element={<Signin/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
