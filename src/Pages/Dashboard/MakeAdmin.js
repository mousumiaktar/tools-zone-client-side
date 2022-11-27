import React, { useEffect, useState } from 'react';

const MakeAdmin = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://tools-zone.onrender.com/user')
        .then(res => res.json())
        .then(data => setUsers(data));
    },[users]);
    console.log(users);
    const makeAdmin = email => {
        fetch(`https://tools-zone.onrender.com/user/admin/${email}`, {
            method: "PUT"
        }
        )
            .then(res => res.json())
            .then(data => console.log(data));
    }


    return (
        <div>
            <h3>This is make admin page: {users?.length}</h3>

            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>email</th>
                            <th>Is Admin</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map(user => <tr>
                                <th>{users.indexOf(user) + 1}</th>
                                <td>{user.email}</td>
                                <td>{
                                    user.role? <h5>Admin</h5>:<button onClick={() => makeAdmin(user.email )} class="btn btn-sm">Make Admin</button>
                                }</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;