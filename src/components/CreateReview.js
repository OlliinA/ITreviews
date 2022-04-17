import React, {useContext, useEffect, useRef, useState} from 'react';
import {Col, Dropdown, Form, Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {Context} from "../index";
import Row from "react-bootstrap/Row";
import axios  from 'axios';
import StarRating from "./StarRating";
import {createReview, fetchAllClass} from "../http/reviewAPI";

const CreateReview = ({show, onHide}) => {
    const {review} = useContext(Context)
    const [beginDate, setBeginDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [minuses, setMinuses] = useState('minus')
    const [pluses, setPluses] = useState('plus')
    const [comment, setComment] = useState('comment')
    const [mentor, setMentor] = useState(true)
    const [employed, setEmployed] = useState(true)
    const [date] = useState(Date.now())
    const [mark, setMark] = useState(5)
    const [classId, setClassId] = useState(1)
    const [userId, setUserId] = useState(1)

    const handleSubmit = (e) => {
        e.preventDefault();
        const info = {beginDate, endDate, minuses, pluses, comment, mentor, employed, date, mark, classId, userId}
        fetch('http://192.168.99.100:8080/api/review', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(info)
        }).then(() =>{
            console.log('new review added')
        })
    }

    useEffect(() => {
        fetchAllClass().then(data => review.setCategory(data))
    }, [])

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
            style={{backgroundColor: 'rgba(0,0,0,0.7)'}}
        >
            <Modal.Header
                style={{backgroundColor: "#E5E5E5", height:60}} closeButton>
                <Col className="d-flex justify-content-center">
                    <Modal.Title>Оставить отзыв</Modal.Title>
                </Col>
            </Modal.Header>
            <Modal.Body>
                <Form >
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{"Выберите тип"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {review.category.map(item =>
                                <Dropdown.Item
                                    onClick={() => review.setSelectedCategory(item)}
                                    key={item.id}
                                >
                                    {item.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Col className={"mt-3 d-flex justify-content-center"}>Период прохождения курса</Col>
                    <Row>
                        <Col>
                            <Form.Control
                                style={{borderRadius: 25, borderColor: "lightgray", backgroundImage: "none"}}
                                required
                                value={beginDate}
                                onChange={(e) => setBeginDate(e.target.value)}
                                className={"ml-3 mt-2"}
                                placeholder={"От"}
                                type={"date"}

                            />
                        </Col>
                        <Col className={" mt-3 ml-4"}>—</Col>
                        <Col>
                            <Form.Control
                                style={{borderRadius: 25, borderColor: "lightgray", backgroundImage: "none"}}
                                required
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                className={" mt-2"}
                                placeholder={""}
                                type={"date"}
                            />
                        </Col>
                    </Row>

                    <Col className={"mt-3 d-flex justify-content-center"}> Достоинства</Col>
                    <Row>
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Control
                                required
                                value={pluses}
                                onChange={(e) => setPluses(e.target.value)}
                                type="text"
                                style={{width:470}}
                                as="textarea" rows={3}
                            />
                        </Form.Group>
                    </Row>
                    <Col className={"mt-3 d-flex justify-content-center"}> Недостатки</Col>
                    <Row>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Control
                                required
                                value={minuses}
                                onChange={(e) => setMinuses(e.target.value)}
                                type="text"
                                style={{width:470}}
                                as="textarea" rows={3}
                            />
                        </Form.Group>
                    </Row>
                    <Col className={"mt-3 d-flex justify-content-center"}> Комментарий</Col>
                    <Row>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Control
                                required
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                type="text"
                                style={{width:470}}
                                as="textarea" rows={3}
                            />
                        </Form.Group>
                    </Row>
                    <Col className={"mt-2 d-flex justify-content-center"}><StarRating/></Col>
                    <Row>
                        {/*<Col>*/}
                        {/*    <Form.Check*/}
                        {/*        value={employed}*/}
                        {/*        onChange={e => setEmployed(e.target.value)}*/}
                        {/*        style={{}}*/}
                        {/*        className={"mt-2"}*/}
                        {/*        type={"checkbox"}*/}
                        {/*        label={"Нашёл работу"}*/}
                        {/*    />*/}
                        {/*</Col>*/}
                        {/*<Col>*/}
                        {/*    <Form.Check*/}
                        {/*        value={mentor}*/}
                        {/*        onChange={e => setMentor(e.target.value)}*/}
                        {/*        style={{color:"#212529"}}*/}
                        {/*        className={"mt-2"}*/}
                        {/*        type={"checkbox"}*/}
                        {/*        label={"Был ментр"}*/}

                        {/*    />*/}
                        {/*</Col>*/}
                    </Row>
                    {/*<Col className="d-flex justify-content-center">*/}
                    {/*    <Button type="submit"  style={{borderRadius: 25, backgroundColor: '#4985FF'}}*/}
                    {/*            variant="primary" onClick={addReview}>Отправить</Button>*/}
                    {/*</Col>*/}
                    <Button  style={{borderRadius: 25, backgroundColor: '#4985FF'}} onClick={handleSubmit} variant="primary" >Добавить</Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>

            </Modal.Footer>
        </Modal>
    );
};

export default CreateReview;
