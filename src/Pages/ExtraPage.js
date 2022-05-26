import React from 'react';
import screwdriver from '../images/toolimg/fullimg.png'

const ExtraPage = () => {
    return (
        <div class="hero bg-purple-500">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={screwdriver} alt="" />
                <div class="flex flex-col w-full lg:flex-row">
                </div>
                <div>
                    <h2 className='text-2xl text-white font-bold'>Tools Overview</h2>
                    <p className='text-white'>
                        A screwdriver is a tool, manual or powered, used for driving screws. A typical simple screwdriver has a handle and a shaft, ending in a tip the user puts into the screw head before turning the handle. This form of the screwdriver has been replaced in many workplaces and homes with a more modern and versatile tool, a power drill, as they are quicker, easier, and can also drill holes. The shaft is usually made of tough steel to resist bending or twisting. The tip may be hardened to resist wear, treated with a dark tip coating for improved visual contrast between tip and screw—or ridged or treated for additional 'grip'. Handles are typically wood, metal, or plastic and usually hexagonal, square, or oval in cross-section to improve grip and prevent the tool from rolling when set down. Some manual screwdrivers have interchangeable tips that fit into a socket on the end of the shaft and are held in mechanically or magnetically. These often have a hollow handle that contains various types and sizes of tips, and a reversible ratchet action that allows multiple full turns without repositioning the tip or the user's hand.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ExtraPage;