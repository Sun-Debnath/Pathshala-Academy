import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import courses from '../../mockdata/MOCK_DATA.json';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { cartValue } from '../../App';

const Course = (props) => {
    // const [value, setValue] = useContext(cartValue);
    // console.log(value);
    return (
        <div>

            <Container fluid="md" mt="5">
                <Row className="mt-5">
                    {
                        props.course.map(course => {
                            return (
                                <Col sm={4} className="mt-5 pt-5" >
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={course.img} />
                                        <Card.Body>
                                            <Card.Title><Link to={"/course/" + course.key}>{course.name}</Link></Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>
                                            <div className="d-flex  align-items-center">
                                            
                                            <p style={{color:"blue",paddingLeft:"5px",paddingRight:"10px"}}>course fee= {course.price}tk</p>
                                            <Button onClick={() => props.handleAddCourse(course)} className="ml-5"variant="primary">enroll</Button>
                                            </div>
                                           
                                        </Card.Body>
                                    </Card>

                                </Col>

                            )
                        })
                    }
                </Row>
            </Container>
          
        </div>

    );
};

export default Course;