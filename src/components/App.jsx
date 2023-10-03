import '../css/App.css';
import Login from '../Pages/Login';
import Homepage from '../Pages/Dashboard';
import SignUp from '../Pages/Signup';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
        <div className="App d-flex">
          <Routes>
            <Route path="/" element={<Login />} exact />
            <Route path="/dashboard" element={<Homepage />} />
            <Route path="/signUp" element={<SignUp />} />
          </Routes>
        </div>
    </>
  );
}

export default App;
