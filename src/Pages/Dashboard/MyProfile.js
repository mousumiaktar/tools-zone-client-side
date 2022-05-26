import React from 'react';
import cartoon from '../../images/toolimg/cartoon4.png'
import auth from '../../firebase.init';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

const MyProfile = () => {

    const [user] = useAuthState(auth)

    return (
      <div>
        <div class="avatar grid justify-items-center mb-[-90px]">
          <div class="w-44 rounded-full ">
            <img src={user?.photoURL || cartoon} alt="" />
          </div>
        </div>
        <div className="bg-gray-300 h-[50vh] flex">
          <div className="flex-auto w-2/5 text-center lg:mt-20 text-white-300">
            <p className=" className='text-purple-700' font-bold">{user?.displayName}</p>
            <p className=" className='text-purple-700'">{user?.email}</p>
          </div>

          <div className="flex-auto w-2/5 text-center items-center lg:mt-20">
            <button className="btn btn-sm">
              <Link to="updateprofile">Update Your Profile</Link>
            </button>
          </div>
        </div>
      </div>
    );
};

export default MyProfile;