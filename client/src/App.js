import { useContext } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile"
import Register from "./pages/register/Register";
import { AuthContext } from "./context/AuthContext";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
// import {Person, person} from "@mui/icons-material"

function App() {
  const { user } = useContext(AuthContext)
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <Register />} />
      </Routes>
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      </Routes>
      <Routes>
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
      </Routes>
      <Routes>
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </Router>
  )
}

export default App;