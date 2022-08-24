import React from 'react';
import BannerImg from '../../images/banner/banner.png'


const Banner = () => {
    return (
        <div>
            <div className='banner-image'>
                <img src={BannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;