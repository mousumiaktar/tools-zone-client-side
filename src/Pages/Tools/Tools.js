import React from 'react';
import { useQuery } from "react-query";
import Loading from '../Shared/Loading/Loading';
import Tool from '../Tool/Tool';

const Tools = ({isSlice}) => {
    const { data: tools, isLoading } = useQuery('tools', () => fetch('http://localhost:5000/tool').then(res => res.json()));
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
        <div>
           <h4>Tools</h4> 
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