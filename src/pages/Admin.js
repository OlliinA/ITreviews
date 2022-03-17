import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateCourse from "../components/CreateCourse";

const Admin = () => {

    const [courseVisible, setCourseVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() =>  setCourseVisible(true)}
            >
                Добавить курс
            </Button>
            <CreateCourse show={courseVisible} onHide={() => setCourseVisible(false)}/>
        </Container>
    );
};

export default Admin;