import React from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

function Product(props) {
    const { id } = useParams();
    return <Container>{id}</Container>;
    // Use props.id or useProps hook (not sure which) to access url parameter from route
}
export default Product;