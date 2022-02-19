import React from 'react'
import {Col, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import CourseItem from "../components/CourseItem";

const Home = () => {
  return (
    <Container>
      <Row className="mt-2">
          <Col className={"d-flex justify-content-center mt-4"}>
              <CourseItem/>
          </Col>
      </Row>
    </Container>
  );
};

export default Home