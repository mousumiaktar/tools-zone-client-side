import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] =useAdmin(user)
    return (
        <div class="drawer drawer-mobile mt-10 mb-15 max-w-7xl mx-auto px-12">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                {/* <!-- Page content here --> */}
                <h2  style={{color:'#1586B5'}} className='text-xl font-bold'>Wellcome to Dsahboard</h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard/myprofile">My Profile</Link></li>

                    {!admin ? <><li><Link to="/dashboard/myorders">My Orders</Link></li>
                    <li><Link to="/dashboard/addreview">Add Review</Link></li>
                    <li><Link to="/dashboard/updateprofile">Update Profile</Link></li>
                    
                    </>
                    :
                    <>
                    <li><Link to="/dashboard/makeadmin">Make Admin</Link></li>
                    <li><Link to="/dashboard/addproduct">Add Product</Link></li>
                    <li><Link to="/dashboard/manageproducts">Manage Products</Link></li>
                    </>
                    
                    }
                    
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;