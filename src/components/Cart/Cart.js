import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import courses from '../../mockdata/MOCK_DATA.json';
import { Link } from 'react-router-dom';
import { cartValue } from '../../App';
import { getDatabaseCart } from '../../utilities/databaseManager';

const Cart = () => {
    const [value, setValue] = useContext(cartValue);
    
    const [cart, setCart] = useState([]);
    const total = cart.reduce((total, prd) => total + prd.price, 0);
    // setCart(value);
    // console.log(value);
    useEffect(() => {
        const data = getDatabaseCart();
        console.log(data);
        const productKeys = Object.keys(data);

        const cartCourse = productKeys.map(key => {
            const product = courses.find(pd => pd.key === key);
            product.quantity = data[key];
            return product;
        });
        setCart(cartCourse);
    },[])
    setValue(cart.length);
    return (
        <div className="d-flex">
            {/* <h2>{cart.length}</h2> */}
             <div>
            {
                cart.map(cart => {
                    return(
                        <div>
                            <h2>{cart.name}</h2>
                            <p>{cart.details}</p>
                        </div>
                    )
                })
            }
            
        </div>
        <div>
             
            <h3>total price: {total}</h3>
        </div>

        </div>
       
    );
};

export default Cart;