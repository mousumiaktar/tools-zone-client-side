import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
    const { _id, name, img, description, price, Minimum, available } = tool;

    const navigate = useNavigate();
    const navigatePurchase = id => {
        navigate(`/purchase/${id}`);
    }

    return (
        <div class="card bg-base-100 shadow-xl">
            <figure><img style={{ height: '100px' }} src={img} alt="Shoes" /></figure>

            <div class="card-body">
                <div className='flex flex-row'>
                    <h2 class="card-title text-[#1586B5]">{name}</h2>
                    <h1 className='text-xl text-[#FFA924]' style={{ marginLeft: '50px'}}><b>${price}</b></h1>
                </div>
                <p><small>{description}</small></p>
                <div class="card-actions justify-end">
                    <button onClick={() => navigatePurchase(_id)} class="btn btn-primary bg-[#1586B5] text-white">Buy Now</button>
                </div>
            </div>

        </div>
    );
};

export default Tool;