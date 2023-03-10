import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { cartValue } from '../../App';
import courses from '../../mockdata/MOCK_DATA.json';
import { addToDatabaseCart } from '../../utilities/databaseManager';
import Course from '../Course/Course';

const AllClasses = () => {
    const [cart, setCart] = useState([]);
    // const [value, setValue] = useContext(cartValue);

    const handleAddCourse = (course) => {
        const newCart = [...cart, course];
        setCart(newCart);
        const sameCourse = newCart.filter(cr => cr.key === course.key);
        const count = sameCourse.length;
        addToDatabaseCart(course.key, count);
        // console.log(newCart);
    }
    // setValue(cart);
    // console.log(value);

   
    
    const [course, setCourse] = useState([]);

    useEffect(() => {
        setCourse(courses);
    }, []);

    return (
        <div>
            <Course course={course} handleAddCourse={handleAddCourse} ></Course>
        </div>
        

    );
};

export default AllClasses;