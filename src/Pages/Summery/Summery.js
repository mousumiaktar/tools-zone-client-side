import React from 'react';
import './Summery.css';

const Summery = () => {
    return (
        <div className='mt-10 mb-10'>
            <h2 className='text-xl text-purple-500 text-center font-bold'>MILLIONS BUSINESS TRUST US</h2>
            <p className='text-center'>TRY TO UNDERSTAND USERS EXPECTATION</p>
            <div class="divider">Or</div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5' id="summery-container">
                <div>
                    
                    <h3>100+</h3>
                    <p>Served</p>
                </div>
                <div>
                    <h3>535+</h3>
                    <p>Reviews</p>
                </div>
                <div>
                    <h3>120M+</h3>
                    <p>Customers</p>
                </div>
                <div>
                    <h3>432+</h3>
                    <p>Feedbacks</p>
                </div>
            </div>
        </div>
    );
};

export default Summery;