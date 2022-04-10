import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateCourse from "../components/CreateCourse";
import {FEEDBACK_ROUTE, REVIEWS_ROUTE} from "../utils/consts";
import {useHistory} from "react-router-dom";

const Admin = () => {
    const history = useHistory()

    const [courseVisible, setCourseVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => history.push(FEEDBACK_ROUTE)}
            >
                Добавить курс
            </Button>
            <CreateCourse show={courseVisible} onHide={() => setCourseVisible(false)}/>
        </Container>
    );
};

export default Admin;