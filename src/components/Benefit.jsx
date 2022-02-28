import React from 'react';
import welcome from "../../../../WebstormProjects/untitled/src/assets/services__item.png";
import rev from "../../../../WebstormProjects/untitled/src/assets/services__item (1).png";
import best from "../../../../WebstormProjects/untitled/src/assets/services__item (2).png";
import {Container} from "react-bootstrap";

export default function Benefit() {
    return (
            <Container className='block_about' fluid>
                <Container className="block_our_plus" fluid>
                    <p className="our_plus"> Наши преимущества </p>
                </Container>
                <Container className="block_we_are" fluid>
                    <p className='we_are'>Мы — каталог-отзовик курсов.
                        Выбирайте курсы по отзывам, цене, <br/> продолжительности и другим критериям!</p>
                </Container>
                <Container className="block_with_img_we_are" fluid>
                    <img
                        src={welcome}
                        height={100}
                        width={250}
                        alt="welcome"
                        className='welcome'
                    />
                    <img
                        src={rev}
                        height={100}
                        width={250}
                        alt="rev"
                        className='rev'
                    />
                    <img
                        src={best}
                        height={100}
                        width={250}
                        alt="best"
                        className='best'
                    />
                </Container>
            </Container>
    );
}