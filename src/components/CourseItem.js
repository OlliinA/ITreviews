import React, {useContext} from 'react';
import {Card, Col, Image, NavLink} from "react-bootstrap";
import game from "../assets/game.png";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Row from "react-bootstrap/Row";
import {useHistory} from "react-router-dom"
import {COURSE_ROUTE} from "../utils/consts";
import logo from "../assets/Logo.png";
import axios from "axios";

const CourseItem = observer(() => {
    const {section} = useContext(Context)
    console.log(section.sections)
    const history = useHistory()

    return (
        <Col className="d-flex justify-content-center" >
            {section.sections.map(section =>
                <Card
                    style={{  width: 300,  height:250} }
                    key={section.id}
                    className={"align-items-center ml-5" }
                    >
                    {section.name}
                    {section.courses.map(course =>
                        <NavLink
                            onClick={() => history.push(COURSE_ROUTE + '/' + course.id)}
                            key={course.id} course={course}
                            className={"mt-2 text-white"}>
                            {course.name}
                        </NavLink>
                    )}
                </Card>

            )}
        </Col>
    );
});

export default CourseItem;