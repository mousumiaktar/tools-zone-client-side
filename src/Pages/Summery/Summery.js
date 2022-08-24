import React from 'react';
import './Summery.css';
import icon1 from '../../images/icons/icon1.png';
import icon2 from '../../images/icons/icon2.png';
import icon3 from '../../images/icons/icon3.png';
import icon4 from '../../images/icons/icon4.png';
import summeryimg from '../../images/summery/summery.png';

const Summery = () => {
    return (
        <div className='mt-10 mb-15  px-12 full-summery'>
            <h2 style={{color:'#2F3B69'}} className='text-4xl text-center font-bold'>MILLIONS BUSINESS TRUST US</h2>
            <p className='text-center'>TRY TO UNDERSTAND USERS EXPECTATION</p>
            <div class="divider">Or</div>
            <div>
                <img style={{width:'100%'}} src={summeryimg} alt="" />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5' id="summery-container">
                <div className='single-summery'>
                    <img className='w-10 mx-auto' src={icon1} alt="" />
                    <h3>100+</h3>
                    <p>Served</p>
                </div>
                <div className='single-summery'>
                <img className='w-10 mx-auto' src={icon2} alt="" />
                    <h3>535+</h3>
                    <p>Reviews</p>
                </div>
                <div className='single-summery'>
                <img className='w-10 mx-auto' src={icon3} alt="" />
                    <h3>120M+</h3>
                    <p>Customers</p>
                </div>
                <div>
                <img className='w-10 mx-auto' src={icon4} alt="" />
                    <h3>432+</h3>
                    <p>Feedbacks</p>
                </div>
            </div>
        </div>
    );
};

export default Summery;