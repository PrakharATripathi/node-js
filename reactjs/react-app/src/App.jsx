import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Regsiter from "./pages/Regsiter";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Regsiter />} />
        </Routes>
        <Toaster />
      </Router>
    </>
  )
}

export default App
