import React from 'react';
import { Link } from 'react-router-dom';
import Tools from './Tools';

const MyTools = () => {
    return (
        <div>
            <Tools isSlice="true"></Tools>
            <br />
            <Link to="/tools"><button style={{background:'#2F3B69', color:'white', marginLeft:'150px', padding:'8px 15px'}}>See More...</button></Link>
        </div>
    );
};

export default MyTools;