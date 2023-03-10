import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import courses from '../../mockdata/MOCK_DATA.json';
import { Link } from 'react-router-dom';
import { cartValue } from '../../App';
import { getDatabaseCart } from '../../utilities/databaseManager';
const MyClasses = (props) => {
    
    let value = useContext(cartValue);

     const [cart, setCart] = useState([]);
    // setCart(value);
    console.log(value);
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
    

    return (
        <div>
            <h2>{cart.length}</h2>
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
    );
};

export default MyClasses;