import React from 'react';
// import divider from '../../assests/images/Ozar_O2-1.png'
// import { UserCircleIcon, UserIcon } from '@heroicons/react/solid'
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';



const Reviews = () => {

    const { data, isLoading } = useQuery('reviews', () => fetch('https://stormy-anchorage-56703.herokuapp.com/reviews').then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='my-10 max-w-7xl mx-auto px-12'>
            <div className="text-center text-2xl font-bold text-purple-700 mb-5"><u>Client Reviews</u></div>
            <div className='flex  justify-center'>
                {/* <img src={divider} alt="" /> */}
            </div>
            <div className='px-32 bg-purple-600 rounded'>

                {
                    data?.map(d => <div class="card-body">

                        <div class="card border p-5 text-white rounded grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            <h3 className='mt-5'>{d.name}</h3>
                            <p>{d.review}</p>
                            <small className='mt-3'>rating: {d.rating}</small>
                        </div>

                    </div>)

                }


            </div>
        </div>
    );
};

export default Reviews;
