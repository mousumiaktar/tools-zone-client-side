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
            <figure><img style={{ height: '100px' }} src={img} alt="Shoes" /></figure>

            <div style={{}} class="card-body">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <h2 style={{ color: '#1586B5' }} class="card-title">{name}</h2>
                    <h1 className='text-xl' style={{ marginLeft: '100px', color: '#FFA924' }}><b>${price}</b></h1>
                </div>
                <p><small>{description}</small></p>
                <div class="card-actions justify-end">
                    <button style={{ background: '#1586B5' }} onClick={() => navigatePurchase(_id)} class="btn btn-primary text-white">Buy Now</button>
                </div>
            </div>

        </div>
    );
};

export default Tool;