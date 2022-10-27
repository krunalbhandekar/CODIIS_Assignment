import './App.css';
import { Routes, Route } from "react-router-dom";
import Register from './Auth/Register';
import Admin from './Admin/Pages/Admin';
import User from './User/Pages/User';
import Login from './Auth/Login';
import MyPlan from './User/Components/MyPlan';
import AllVideo from './User/Components/AllVideo';


function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/plan" element={<MyPlan />} />
        <Route path="/user/allvideo" element={<AllVideo/>} />
 
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
