import React from 'react';
import { useQuery } from "react-query";
import Loading from '../Shared/Loading/Loading';
import Tool from '../Tool/Tool';

const Tools = ({isSlice}) => {
    const { data: tools, isLoading } = useQuery('tools', () => fetch('https://tools-zone.onrender.com/tool').then(res => res.json()));
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
        <div className='max-w-7xl mx-auto md:px-12 px-2 lg:px-12 pt-8 md:pt-0 lg:pt-0'>
           <h2 className='max-w-7xl mx-auto px-12 text-center text-5xl text-[#2F3B69] font-bold mt-8 mb-5'>Our Tools</h2> 
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