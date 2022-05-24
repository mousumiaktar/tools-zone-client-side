import React from 'react';
import { Link } from 'react-router-dom';
import Tools from './Tools';

const MyTools = () => {
    return (
        <div>
            <Tools isSlice="true"></Tools>
            <br />
            <Link to="/tools"><button class="btn btn-xl">See More...</button></Link>
        </div>
    );
};

export default MyTools;