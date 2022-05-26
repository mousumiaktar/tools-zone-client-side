import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import PurchaseModal from './PurchaseModal';

const Purchase = () => {
    const { purchaseId } = useParams();
    const [purchase, setPurchase] = useState({});
    const [total, setTotal] = useState(0)

    const orderQuantity = parseInt(total)
    console.log(orderQuantity);
    useEffect(() => {
        const url = `https://stormy-anchorage-56703.herokuapp.com/tool/${purchaseId}`

        fetch(url)
            .then(res => res.json())
            .then(data => setPurchase(data));

    }, [purchaseId]);


    const handleQuantity = e => {
        e.preventDefault()
        const inputValue = e.target.quantity.value;
        setTotal(inputValue)

        if (parseInt(inputValue) < parseInt(purchase.Minimum)) {
            toast.error(`Quantity Must Be equal minimum`)
        }
        else if (parseInt(inputValue) > parseInt(purchase.available)) {
            toast.error(`You Can't Order More Than Stock`)
        }

    }


    return (
        <div class="mt-10 mb-15 max-w-7xl mx-auto px-12">
            <div class="hero-content flex-col lg:flex-row">
                <img className='rounded' src={purchase.img} />
                <div>
                    <h1 class="text-2xl font-bold text-purple-900">{purchase.name}</h1>
                    <p class="py-6">{purchase.description}</p>
                    <p><b>Price:</b> ${purchase.price}</p>
                    <p><b>Minimum order Quantity:</b> {purchase.Minimum}</p>
                    <p><b>Available Quantity:</b> {purchase.available}</p>
                    <div className='bg-purple-400 p-5 rounded-xl'>
                        <p className='mt-5'>Add Quantity</p>
                        <form onSubmit={handleQuantity}>
                            <input className='border rounded mr-5' type="number" name="quantity" id="" />
                            <input type="submit" className='btn btn-outline btn-xs' value='Add' id="" />
                        </form>
                        <br />
                        {
                            orderQuantity > purchase.Minimum && orderQuantity <= purchase.available ?
                                <label
                                    for="purchase-modal"
                                    class="btn btn-outline btn-sm">PURCHASE
                                </label>
                                :
                                <label
                                    disabled
                                    for="purchase-modal"
                                    class="btn btn-outline btn-sm">PURCHASE
                                </label>
                        }
                    </div>
                </div>
            </div>
            {
                purchase && <PurchaseModal orderQuantity={orderQuantity} details={purchase} ></PurchaseModal>
            }
            <Toaster />
        </div>
    );
};

export default Purchase;