import React, {useContext, useEffect, useRef, useState} from 'react'
import {Card, Col, Container, ListGroup, NavLink} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import {fetchAcademy, fetchOneCategory} from "../http/reviewAPI";
import {useHistory, useParams} from "react-router-dom";
import academy_img from "../assets/academy_skillbox.svg";
import {REVIEWS_ROUTE} from "../utils/consts";

function declOfNum(number, words) {
    return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
}

const Course = () => {
    const history = useHistory()
    const [academic, setAcademic] = useState({content:[{classes:[]}]})
    const [category, setCategory] = useState({category:{}, classes:[]})
    const {id} = useParams()
    const [didMount, setDidMount] = useState(false);
    const x = (item) =>{
        let content = category.classes.find(i => i.id===item)
        if (content === undefined) {return 0}
        return(
            <Col>
                <Row>
                    <NavLink
                        onClick={() => history.push(REVIEWS_ROUTE + '/' + content.id)}
                    >
                        {content.name}
                    </NavLink>
                </Row>
                <Row className={"course_name "} >
                    <Col  lg={5} >Срок прохождения: {content.term}</Col>
                    <Col  lg={5} > Цена: {content.price}руб.</Col>
                    <Col >{content.countOfReviews} {declOfNum( 1, ['Отзыв', 'Отзыва', 'Отзывов'])}</Col>
                </Row>
            </Col>
           )
    }
    useEffect(() =>{
        setDidMount(true);
            fetchOneCategory(id).then(data => setCategory(data))
            fetchAcademy(id).then(data => setAcademic(data))

        return () => {
            setDidMount(false);
        }
    }, [])

    if(!didMount) {
        return null;
    }


  return (
  <Container className={"mt-4 "} >

    <Col className={"mr-3"}>
      <p className = {"text_4"} key={category.category.id}>{category.category.name}</p>
        <p className = {"count_classes"}> Найдено {category.category.countOfClasses} курсов</p>
    </Col>
    <Col>
        {academic.content.map(item =>
        <div className={"mt-5"}>
        <Card className='h-100 w-100'  style={{borderRadius: 25, backgroundColor: "#4110FF"}} >
          <Card  className='h-100 w-100 ' style={{borderRadius: 25, paddingBottom: "60px"}} border="dark" className={"mt-4 ml-4"}>
              <Row className={"mt-5"}>
              <Col  sm={2} lg={1}>
                  <img className={"ml-5"} style={{ width: 55, height: 55}} src={academy_img} alt="academy_img"/>
              </Col>
              <Col >
                  <Row className = {"name_academy"}>{item.name} </Row>
                  <Row className={"ml-4 link_academy"}><a href={item.linkTag}>Перейти на сайт </a> </Row>
              </Col>
              </Row>
              <div className={"line ml-5 sm-ml-4 mb-4"}/>
                  {item.classes.map(item =>
                      <div className={" ml-5 line_2 pb-3"} >
                          {x(item)}
                      </div>
                  )}
              </Card>
        </Card>
        </div>
        )}
    </Col>
  </Container>
  )
}

export default Course