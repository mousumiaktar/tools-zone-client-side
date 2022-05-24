import React from 'react';
import useTools from '../../hooks/useTool';
import Tool from '../Tool/Tool';

const Tools = () => {
    const [tools, setTools] = useTools();
    return (
        <div>
           <h4>Tools</h4> 
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
               {
                  tools.slice(0, 6).map(tool=><Tool
                  key={tool?._id}
                  tool={tool}
                  ></Tool>) 
               }
           </div>
        </div>
    );
};

export default Tools;