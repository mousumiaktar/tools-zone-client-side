import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Blog from './Pages/Blog';
import AddProduct from './Pages/Dashboard/AddProduct';
import AddReview from './Pages/Dashboard/AddReview';
import Dashboard from './Pages/Dashboard/Dashboard';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile';
import Payment from './Pages/Dashboard/Payment';
import UpdateProfile from './Pages/Dashboard/UpdateProfile';
import Wellcome from './Pages/Dashboard/Wellcome';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Portfolio from './Pages/Portfolio';
import Purchase from './Pages/Purchase/Purchase';
import RequireAdmin from './Pages/RequireAuth/RequireAdmin';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Footer from './Pages/Shared/Footer/Footer';
import Navbar from './Pages/Shared/Navbar';
import SignUp from './Pages/SignUp/SignUp';
import AllTools from './Pages/Tools/AllTools';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/tools" element={<AllTools></AllTools>}></Route>
          <Route path="/blog" element={<Blog></Blog>}></Route>
          <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
          <Route path="/purchase/:purchaseId" element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>}>
          </Route>
          <Route path="/dashboard" element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }>
            <Route index element={<Wellcome></Wellcome>}></Route>
            <Route path="myorders" element={<MyOrders></MyOrders>}></Route>
            <Route path="updateprofile" element={<UpdateProfile></UpdateProfile>}></Route>
            <Route path="addreview" element={<AddReview></AddReview>}></Route>
            <Route path="payment/:id" element={<Payment></Payment>}></Route>
            <Route path="myprofile" element={<MyProfile></MyProfile>}></Route>
            <Route path="addproduct" element={<AddProduct></AddProduct>}></Route>
            <Route path="manageproducts" element={<ManageProducts></ManageProducts>}></Route>
            <Route path="makeadmin" element={
              <RequireAdmin>
                <MakeAdmin></MakeAdmin>
              </RequireAdmin>
            }></Route>
          </Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
