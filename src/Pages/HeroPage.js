import React from 'react';
import backup from '../images/toolimg/backup.png';

const HeroPage = () => {
    return (
        <div class="hero bg-purple-900 mb-5">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={backup} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-2xl font-bold text-white">Contact in Touch with us!</h1>
                    <p className='text-white'>
                        Please don't hesitate to contact us.
                    </p>
                    <h4 className='text-xl font-bold text-white'>Office Address:</h4>
                    <p className='text-white'>Imperial Irish Kingdom, Mo-03 (3rd Floor), Merul Badda, Dhaka 1212</p>
                    <div class="py-6 text-white">
                        <p><b>Phone:</b> +8801639-200002, +8801888-001212</p>
                        <p><b>Email:</b>tool@gmail.com</p>
                        <p><b>WhatsApp:</b> +8801639-200002</p>
                        <p><b>Working hours:</b>Saturday – Thursday: 9 AM–11 PM</p>
                        <p><b>Support:</b>support@toolzone.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroPage;