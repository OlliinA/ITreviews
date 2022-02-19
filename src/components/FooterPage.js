import React from "react";
import {Container} from "react-bootstrap";

const FooterPage = () => {
    return (
        <Container fluid style={{backgroundColor:'#2E2E2E', color: '#fff'}}>
            <Container style={{display:'flex', justifyContent: 'center', padding: '20px'}}>
                <p> itreviews@gmail.com</p>
            </Container>
        </Container>
    );
}

export default FooterPage;