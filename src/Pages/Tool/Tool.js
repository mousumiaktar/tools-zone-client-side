import React from 'react';

const Tool = ({ tool }) => {
    const {name, img, description, price, Minimum, available} = tool;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <p><small>Price: ${price}</small></p>
                <p><small>Minimum order Quantity: {Minimum}</small></p>
                <p><small>Available Quantity: {available}</small></p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;