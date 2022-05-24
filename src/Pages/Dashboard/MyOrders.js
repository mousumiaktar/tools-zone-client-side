import React, { useEffect, useState } from 'react';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/orders')
        .then(res =>res.json())
        .then(data=>setOrders(data));
    },[])
    return (
        <div class="overflow-x-auto m-10">
            <table class="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders?.map((d, index) => <tr>
                            <th>{index + 1}</th>
                            <th>{d.productName}</th>
                            <td>{d.orderQuantity}</td>
                            <td>{'$' + d.price}</td>
                            <td><button className='btn btn-sm'>pay</button></td>
                            <td><button
                                className='btn btn-sm'>Delete</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;