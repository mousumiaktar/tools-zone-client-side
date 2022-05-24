import React from 'react';
import Banner from '../Banner/Banner';
import Summery from '../Summery/Summery';
import MyTools from '../Tools/MyTools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MyTools></MyTools>
            <Summery></Summery>
        </div>
    );
};

export default Home;