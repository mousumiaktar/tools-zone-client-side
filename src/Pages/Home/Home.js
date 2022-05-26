import React from 'react';
import Banner from '../Banner/Banner';
import ExtraPage from '../ExtraPage';
import HeroPage from '../HeroPage';
import Summery from '../Summery/Summery';
import MyTools from '../Tools/MyTools';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ExtraPage></ExtraPage>
            <MyTools></MyTools>
            <Summery></Summery>
            <Reviews></Reviews>
            <HeroPage></HeroPage>
        </div>
    );
};

export default Home;