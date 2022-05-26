import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
    const { _id, name, img, description, price, Minimum, available } = tool;

    const navigate = useNavigate();
    const navigatePurchase = id => {
        navigate(`/purchase/${id}`);
    }

    return (
        <div class="card w-96 bg-base-100 shadow-xl  className='max-w-7xl mx-auto px-12'">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <p><small>Price: ${price}</small></p>
                <p><small>Minimum order Quantity: {Minimum}</small></p>
                <p><small>Available Quantity: {available}</small></p>
                <div class="card-actions justify-end">
                    <button onClick={() => navigatePurchase(_id)} class="btn btn-primary text-white">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;