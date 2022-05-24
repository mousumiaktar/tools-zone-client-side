import React, { useEffect, useState } from 'react';
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
        
        // if (inputValue < details.Minimum) {
        //     toast.error(Quantity Must Be )
        // }
        // else if (inputValue > details.available) {
        //     toast.error(You Can't Order More Than Stock)
        // }
        // else {
        //     toast.success('Congretulation')
        // }
        
    }


    return (
        <div class="">
            <div class="hero-content flex-col lg:flex-row">
                <img className='rounded' src={purchase.img} />
                <div>
                    <h1 class="text-5xl font-bold">{purchase.name}</h1>
                    <p class="py-6">{purchase.description}</p>
                    <p><small>Price: ${purchase.price}</small></p>
                    <p><small>Minimum order Quantity: {purchase.Minimum}</small></p>
                    <p><small>Available Quantity: {purchase.available}</small></p>
                    <p className='mt-5'>Add Quantity</p>
                        <form onSubmit={handleQuantity}>
                            <input className='border' type="number" name="quantity" id="" />
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
            {
                purchase && <PurchaseModal orderQuantity={orderQuantity} details={purchase} ></PurchaseModal>
            }
        </div>
    );
};

export default Purchase;