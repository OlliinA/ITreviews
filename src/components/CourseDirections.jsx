import React from 'react';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBTypography, MDBDropdownLink, MDBDropdownItem, MDBDropdownMenu, MDBDropdown, MDBDropdownToggle
} from 'mdb-react-ui-kit';
import play from "../../../../WebstormProjects/untitled/src/assets/premium-icon-game-control-4315514 1.svg";
import language from "../../../../WebstormProjects/untitled/src/assets/premium-icon-programming-language-1723208  1.svg";
import frame from "../../../../WebstormProjects/untitled/src/assets/free-icon-framework-3524995 1.svg";
import directrions from "../../../../WebstormProjects/untitled/src/assets/stacked-files 1.svg";
import {Container} from "react-bootstrap";

export default function CourseDirections() {
    return (
        <Container className='container_for_card' fluid style={{height: 900}}>
            <Container className='card_play'>
                <MDBCard className='card_play_1' style={{backgroundColor:'#3B1966', width: '20vw', height: '20vw'  }}>
                    <MDBCardImage
                        src={play}
                        height={50}
                        width={50}
                        alt="play"
                        position='top'
                    />
                    <MDBCardBody>
                        <MDBCardTitle> <p className='card_text_title'> Игры </p> </MDBCardTitle>
                        <MDBTypography listUnStyled className='mb-0'>
                            <MDBDropdownLink href="#"> <p className="card_text"> VR/AR разработка </p> </MDBDropdownLink>
                            <MDBDropdownLink href="#"> <p className="card_text"> Разработка игр </p> </MDBDropdownLink>
                            <MDBDropdownLink href="#"> <p className="card_text"> Разработка игр на Unity </p> </MDBDropdownLink>
                        </MDBTypography>
                        <MDBDropdown className='dropdown_card'>
                            <MDBDropdownToggle  tag='a' className='dropdown_card_text' >
                                показать все
                            </MDBDropdownToggle>
                            <MDBDropdownMenu>
                                <MDBDropdownItem>
                                    <MDBDropdownLink href="#">Ссылка_1</MDBDropdownLink>
                                </MDBDropdownItem>
                                <MDBDropdownItem>
                                    <MDBDropdownLink href="#">Ссылка_2</MDBDropdownLink>
                                </MDBDropdownItem>
                                <MDBDropdownItem>
                                    <MDBDropdownLink href="#">Ссылка_3_и т.д</MDBDropdownLink>
                                </MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBCardBody>
                </MDBCard>
            </Container>
            <Container className='card_language' >
                <MDBCard style={{backgroundColor:'#747FE5', width: '20vw', height: '20vw'  }}>
                    <MDBCardImage
                        src={language}
                        height={50}
                        width={50}
                        alt="language"
                        position='top'
                    />
                    <MDBCardBody>
                        <MDBCardTitle><p className="card_text_title"> Языки </p> </MDBCardTitle>
                        <MDBTypography listUnStyled className='mb-0'>
                            <MDBDropdownLink href="#"> <p className="card_text"> Python-разработка </p> </MDBDropdownLink>
                            <MDBDropdownLink href="#"> <p className="card_text"> JavaScript - разработка </p> </MDBDropdownLink>
                            <MDBDropdownLink href="#"><p className="card_text"> Java - разработка </p> </MDBDropdownLink>
                        </MDBTypography>
                        <MDBDropdown className='dropdown_card'>
                            <MDBDropdownToggle  tag='a' className='dropdown_card_text' >
                                показать все
                            </MDBDropdownToggle>
                            <MDBDropdownMenu>
                                <MDBDropdownItem>
                                    <MDBDropdownLink href="#">Ссылка_1</MDBDropdownLink>
                                </MDBDropdownItem>
                                <MDBDropdownItem>
                                    <MDBDropdownLink href="#">Ссылка_2</MDBDropdownLink>
                                </MDBDropdownItem>
                                <MDBDropdownItem>
                                    <MDBDropdownLink href="#">Ссылка_3_и т.д</MDBDropdownLink>
                                </MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBCardBody>
                </MDBCard>
            </Container>
            <Container className='card_frame'>
                <MDBCard className='card_frame_1' style={{backgroundColor:'#373592', width: '20vw', height: '20vw'  }}>
                    <MDBCardImage
                        src={frame}
                        height={50}
                        width={50}
                        alt="frame"
                        position='top'
                    />
                    <MDBCardBody>
                        <MDBCardTitle><p className="card_text_title"> Фреймворки </p> </MDBCardTitle>
                        <MDBTypography listUnStyled className='mb-0'>
                            <MDBDropdownLink href="#"> <p className="card_text"> Фреймворк Django </p> </MDBDropdownLink>
                            <MDBDropdownLink href="#"> <p className="card_text"> Фреймворк Laravel </p> </MDBDropdownLink>
                        </MDBTypography>
                        <MDBDropdown className='dropdown_card'>
                            <MDBDropdownToggle  tag='a' className='dropdown_card_text' >
                                показать все
                            </MDBDropdownToggle>
                            <MDBDropdownMenu>
                                <MDBDropdownItem>
                                    <MDBDropdownLink href="#">Ссылка_1</MDBDropdownLink>
                                </MDBDropdownItem>
                                <MDBDropdownItem>
                                    <MDBDropdownLink href="#">Ссылка_2</MDBDropdownLink>
                                </MDBDropdownItem>
                                <MDBDropdownItem>
                                    <MDBDropdownLink href="#">Ссылка_3_и т.д</MDBDropdownLink>
                                </MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBCardBody>
                </MDBCard>
            </Container>
            <Container className='card_dir' >
                <MDBCard style={{backgroundColor:'#334CD0', width: '20vw', height: '20vw'  }}>
                    <MDBCardImage
                        src={directrions}
                        height={50}
                        width={50}
                        alt="directions"
                        position='top'
                    />
                    <MDBCardBody>
                        <MDBCardTitle><p className="card_text_title">Направления </p> </MDBCardTitle>
                        <MDBTypography listUnStyled className='mb-0'>
                            <MDBDropdownLink href="#"> <p className="card_text"> Web-разработка </p> </MDBDropdownLink>
                            <MDBDropdownLink href="#"> <p className="card_text"> Мобильная разработка </p> </MDBDropdownLink>
                            <MDBDropdownLink href="#"> <p className="card_text"> Android - разработка </p> </MDBDropdownLink>
                        </MDBTypography>
                        <MDBDropdown className='dropdown_card'>
                            <MDBDropdownToggle  tag='a' className='dropdown_card_text' >
                                показать все
                            </MDBDropdownToggle>
                            <MDBDropdownMenu>
                                <MDBDropdownItem>
                                    <MDBDropdownLink href="#">Ссылка_1</MDBDropdownLink>
                                </MDBDropdownItem>
                                <MDBDropdownItem>
                                    <MDBDropdownLink href="#">Ссылка_2</MDBDropdownLink>
                                </MDBDropdownItem>
                                <MDBDropdownItem>
                                    <MDBDropdownLink href="#">Ссылка_3_и т.д</MDBDropdownLink>
                                </MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBCardBody>
                </MDBCard>
            </Container>
        </Container>
    );
}