import React from 'react';
// import divider from '../../assests/images/Ozar_O2-1.png'
// import { UserCircleIcon, UserIcon } from '@heroicons/react/solid'
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import manimg from '../../images/man-5.png'



const Reviews = () => {

    const { data, isLoading } = useQuery('reviews', () => fetch('https://tools-zone.onrender.com/reviews').then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='my-10 max-w-7xl mx-auto md:px-12 lg:px-12'>
            <div style={{ color: '#2F3B69' }} className="text-center text-4xl font-bold mb-5">What Our Client Says</div>
            <div className='flex justify-center'>
                {/* <img src={divider} alt="" /> */}
            </div>
            <div className=' rounded grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                {
                    data?.map(d => <div class="card-body">

                        <div class="card bg-[#1586B5] border p-5 text-white rounded shadow-md shadow-gray-500">
                            <div className='flex items-center'>
                                <div>
                                    <img className='h-16 w-16 rounded-full mr-4' src={manimg} alt="" />
                                </div>
                                <div>
                                    <h3>{d.name}</h3>
                                    <p>{d.review}</p>
                                    <small className='mt-3'>rating: {d.rating}</small>
                                </div>
                            </div>
                        </div>

                    </div>)

                }


            </div>
        </div>
    );
};

export default Reviews;
