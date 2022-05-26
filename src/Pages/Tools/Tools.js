import React from 'react';
import { useQuery } from "react-query";
import Loading from '../Shared/Loading/Loading';
import Tool from '../Tool/Tool';

const Tools = ({isSlice}) => {
    const { data: tools, isLoading } = useQuery('tools', () => fetch('https://stormy-anchorage-56703.herokuapp.com/tool').then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    let newTools;
    if(isSlice==='true'){
       newTools= tools.slice(0,6);
    }
    else{
        newTools = tools;
    }
    return (
        <div className='max-w-7xl mx-auto px-12'>
           <h2  className='max-w-7xl mx-auto px-12 text-center text-xl font-bold text-purple-800 mt-5 mb-5'><u>OUR TOOLS</u></h2> 
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
               {
                  newTools.map(tool=><Tool
                  key={tool?._id}
                  tool={tool}
                  ></Tool>) 
               }
           </div>
        </div>
    );
};

export default Tools;