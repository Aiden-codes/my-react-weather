import React from 'react';
import '../App.css';
import {Container} from 'react-bootstrap';

export const Layout = ({children}) => {
    return (
        <Container fluid >
            {children}
        </Container>
    )
}
