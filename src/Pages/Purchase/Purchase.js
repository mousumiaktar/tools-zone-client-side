import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { purchaseId } = useParams();
    const [purchase, setPurchase] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/tool/${purchaseId}`

        fetch(url)
            .then(res => res.json())
            .then(data => setPurchase(data));

    }, [])

    return (
        <div class="">
            <div class="hero-content flex-col lg:flex-row">
                <img className='rounded' src={purchase.img} />
                <div>
                    <h1 class="text-5xl font-bold">{purchase.name}</h1>
                    <p class="py-6">{purchase.description}</p>
                    <p><small>Price: ${purchase.price}</small></p>
                    <p><small>Minimum order Quantity: {purchase.Minimum}</small></p>
                    <p><small>Available Quantity: {purchase.available}</small></p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Purchase;