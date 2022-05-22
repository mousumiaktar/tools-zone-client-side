import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Purchase from './Pages/Purchase/Purchase';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Footer from './Pages/Shared/Footer/Footer';
import Navbar from './Pages/Shared/Navbar';
import SignUp from './Pages/SignUp/SignUp';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className='max-w-7xl mx-auto px-12'>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/purchase" element={<RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
