import React, {useContext, useEffect, useRef, useState} from 'react';
import {Context} from "../index";
import {Card, Col, Container, Image, ListGroup, NavLink} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import {REVIEWS_ROUTE} from "../utils/consts";
import {useParams} from "react-router-dom";
import {fetchAcademy, fetchOneCategory, fetchReview} from "../http/reviewAPI";
import people from "../assets/people.svg";
import time from "../assets/time.svg";
import star from "../assets/Star.svg";

const Reviews = () => {
    const [review, setReview] = useState({classDto:{}, reviews:[]})
    const {id} = useParams()
    useEffect(() =>{

        fetchReview(id).then(data => setReview(data))

    }, [])

    return (
        <Container className={"mt-4 "} >
            <Col className={"mr-3"}>
                <p className = {"text_4"} key={review.classDto.id}>{review.classDto.name}</p>
                <p className = {"count_classes"}> {review.classDto.countOfReviews} отзыва</p>
            </Col>
            <Col>
                {review.reviews.map( item =>
                    <div className={"mt-5"}>
                        <Card className='h-100 w-100' style={{borderRadius: 25,   backgroundColor: "#4110FF"}} >
                            <Card className='h-100 w-100 mt-4 pb-4' style={{borderRadius: 25 }} border="dark" >
                                <Row className={"mt-4"}>
                                    <Col  sm={2} lg={1}>
                                        <img className={"ml-5"} style={{ width: 55, height: 55}} src={people} alt="people_img"/>
                                    </Col>
                                    <Col>
                                        <Row className = {"mt-3  name_user"}>{item.userNickname} </Row>
                                    </Col>
                                    <Col lg={2}>
                                        <Row className = {"mt-3"}>
                                            <Col lg={3}><img style={{ height: 29}} src={time} alt="time_img"/></Col>
                                            <Col lg={8} className = {"mt-1 text_review"}>{item.beginDate}</Col>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <Row className = {"mt-3 text_review"}>
                                        <Col lg={1} className={"mt-1 ml-4"}>{item.mark}</Col>
                                        <Col ><img  style={{ marginTop:5, height: 18}} src={star} alt="star_img"/></Col>
                                    </Row></Col>
                                </Row>
                                <div className={"line ml-5 sm-ml-4 mb-4"}/>
                                <Row>
                                    <p className={"text_card_review"}>Достоинства</p>
                                </Row>
                                <Row>
                                    <p className={"text_card_review_2"}>{item.pluses}</p>
                                </Row>
                                <Row>
                                    <p className={"text_card_review"}>Недостатки</p>
                                </Row>
                                <Row>
                                    <p className={"text_card_review_2"}>{item.minuses}</p>
                                </Row>
                                <Row>
                                    <p className={"text_card_review"}>Комментарий</p>
                                </Row>
                                <Row>
                                    <p className={"text_card_review_2"}>{item.comment}</p>
                                </Row>
                            </Card>
                        </Card>
                    </div>
                )}
            </Col>
        </Container>
    );
};

export default Reviews;