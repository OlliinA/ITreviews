import React from 'react';
import {Button, Container} from "react-bootstrap";
import men from "../../../../WebstormProjects/untitled/src/assets/first-screen__button.svg";
import "../style.css";

export default function UnderHeader() {
    return (
            <Container className='uhead' fluid style={{backgroundColor:'#2E2E2E' }}>
                <Container className='men_img'>
                    <img
                        src={men}
                        height="100%"
                        width="100%"
                        alt="men"

                    />
                </Container>
                <Container className='our_text'>
                    <Container className='our_text_1'>
                        <p className='text_1'>Отзывы об IT курсах</p>
                        <p className='text_2'>Выбирайте курсы по <br /> различным критериям!</p>
                        <a> <Button className='ch_dir'> Выбрать направление </Button> </a>
                    </Container>
                </Container>
            </Container>
    );
}