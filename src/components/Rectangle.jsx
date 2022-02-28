import React from 'react';
import {Container} from "react-bootstrap";


export default function Rectangle() {
    return (
        <>
            <Container fluid className='text-white' style={{backgroundColor:'#4844DE', height:205}}>
                <Container style={{display:'flex', justifyContent: 'center', padding: '70px'}}>
                    <p className='dir_cource'> Направления курсов </p>
                </Container>
            </Container>
        </>
    );
}