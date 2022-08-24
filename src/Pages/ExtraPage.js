import React from 'react';
import './ExtraPage.css';
import screwdriver from '../images/toolimg/fullimg5.jpg'
import screwdriver2 from '../images/toolimg/fullimg6.png'


const ExtraPage = () => {
    return (
        <div className='main-area'>
            <div className='hero-area'>
                <div className='hero-textarea'>
                    <h2 className='text-2xl'>Tools Overview in <b>Tools-Zone</b></h2>
                    <p>A screwdriver is a tool, manual or powered, used for driving screws. A typical simple screwdriver has a handle and a shaft, ending in a tip the user puts into the screw head before turning the handle. This form of the screwdriver has been replaced in many workplaces and homes with a more modern and versatile tool, a power drill, as they are quicker, easier, and can also drill holes.</p>
                    <hr />
                    <div className='text-area2'>
                        <div>
                       <h1> <b>Always Genuine</b></h1>
                        <p>We guarantee you will always receive genuine fabrics material quality.We guarantee you will always receive genuine fabrics material quality.</p>
                        <hr />
                        <button>read more</button>
                        </div>
                        <div className='text-area3'>
                            <h1><b>Rapid Production</b></h1>
                            <p>Specialized and annual production capacity of 1.95 million meters.Specialized and annual production capacity of 1.95 million meters.</p>
                            <hr />
                            <button>read more</button>
                        </div>
                    </div>
                </div>
                <div className='image-area'>
                    <img className='image-1' src={screwdriver} alt="" />
                    <img className='image-2' src={screwdriver2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ExtraPage;