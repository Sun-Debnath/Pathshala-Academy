import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import courses from '../../mockdata/MOCK_DATA.json';
import courseData from '../../mockdata/courseData'


const CourseDetail = () => {
    let {courseId} = useParams()
    const [course, setCourse] = useState([]);

    useEffect(() => {
        setCourse(courses);
    }, []);

    console.log(course);   
       let cls = courses.find(course => course.key === courseId);
    console.log(cls); 
    return (
        <div>
            <h2> Your course detail.</h2>

            <h4>course name: {cls.name}</h4>
            <p>course detail: {cls.details}</p>
            <p><small>price: {cls.price}</small></p>
            
        </div>
    );
};

export default CourseDetail;