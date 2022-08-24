import React from 'react';
import backup from '../images/toolimg/contact4.png';



const HeroPage = () => {
    return (
        <div style={{background:'#2F3B69'}} class="hero">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={backup} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 style={{color:'#01F4FC'}} class="text-2xl font-bold">Contact in Touch with us!</h1>
                    <p className='text-white'>
                        Please don't hesitate to contact us.
                    </p>
                    <h4 style={{color:'#01F4FC'}} className='text-xl  text-white'>Office Address:</h4>
                    <p className='text-white'>Imperial Irish Kingdom, Mo-03 (3rd Floor), Merul Badda, Dhaka 1212</p>
                    <div class="py-6 text-white">
                        <p><i style={{color:'#01F4FC'}}>Phone:</i> +8801639-200002, +8801888-001212</p>
                        <p><i style={{color:'#01F4FC'}}>Email:</i>tool@gmail.com</p>
                        <p><i style={{color:'#01F4FC'}}>WhatsApp:</i> +8801639-200002</p>
                        <p><i style={{color:'#01F4FC'}}>Working hours:</i>Saturday – Thursday: 9 AM–11 PM</p>
                        <p><i style={{color:'#01F4FC'}}>Support:</i>support@toolzone.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroPage;