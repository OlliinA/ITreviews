import React, {useContext, useEffect, useRef, useState} from 'react';
import {Col, Dropdown, Form, Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {Context} from "../index";
import Row from "react-bootstrap/Row";
import axios, * as others from 'axios';
import StarRating from "./StarRating";
import {createReview, fetchAllClass} from "../http/reviewAPI";

const CreateReview = ({show, onHide}) => {
    const {review} = useContext(Context)
    const url = "http://192.168.99.100:8080/api/review"
    const [info, setInfo] = useState(
    {beginDate: '', endDate: '', minuses: '', comment: '', pluses: '', employed: '', date: '', mark: '', active: '', classId: ''}
    )

    function handle(e){
        const newData = {...info}
        newData[e.target.id] = e.target.value
        setInfo(newData)
        console.log(newData)

    }
    function submit(e){
        e.preventDefault();
        axios.post(url,{beginDate: info.beginDate,
                        endDate: info.endDate,
                        minuses: info.minuses,
                        comment: info.comment,
                        pluses: info.pluses,
                        employed: info.employed,
                        date: info.date,
                        mark: info.mark,
                        active: info.active,
                        classId: info.classId
        })
        .then(res =>{
            console.log(res.data)
        })
    }
    useEffect(() => {
        fetchAllClass().then(data => review.setCategory(data))
    }, [])


    const addInfo = () => {
        setInfo([...info, {beginDate: '1', endDate: '', minuses: '', comment: '', pluses: '', employed: '', date: '', mark: '', active: '', classId: ''}])
        console.log(info)
    }
    const addReview = () => {
        // const formData = new FormData()
        // formData.append('beginDate', beginDate)
        // formData.append('endDate', endDate)
        // formData.append('minuses', minuses)
        // formData.append('comment', pluses)
        // formData.append('mentor', mentor)
        // formData.append('employed', employed)
        // formData.append('date', date)
        // formData.append('mark', mark)
        // formData.append('active', active)
        // formData.append('classId', classId)
        addInfo()
        createReview(info).then(data => onHide())
    }
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
                                onChange={(e) => handle(e)}
                                value={info.beginDate}
                                className={"ml-1 mt-2"}
                                placeholder={"От"}
                                type={"date"}

                            />
                        </Col>
                        <Col className={" mt-3"}>—</Col>
                        <Col>
                            <Form.Control
                                style={{borderRadius: 25, borderColor: "lightgray", backgroundImage: "none"}}
                                onChange={(e) => handle(e)}
                                value={info.endDate}
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
                                onChange={(e) => handle(e)}
                                value={info.pluses}
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
                                value={info.minuses}
                                onChange={(e) => handle(e)}
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
                                value={info.comment}
                                onChange={(e) => handle(e)}
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
                    <Button variant="outline-success" style={{borderRadius: 25, backgroundColor: '#4985FF'}} onClick={(e) => submit(e)} variant="primary" >Добавить</Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>

            </Modal.Footer>
        </Modal>
    );
};

export default CreateReview;