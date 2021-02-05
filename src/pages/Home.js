import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap';
import { BestFood, BestFoodCards, Mood } from '../components';
import { API_URL } from '../utils/constants'
import axios from 'axios'

export default class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            products: []
        }
    }

    componentDidMount() {
        axios
      .get(API_URL + "best-products")
      .then(res => {
        const products = res.data;
        this.setState({ products });
        
      })
      .catch(error => {
        console.log(error);
      })
    }

    render() {
        const {products} = this.state
        return (
            <Container>
                
                <Mood />
                <BestFood />
                <Row className="overflow-auto menu">
                {products && products.map((product) => (
                <BestFoodCards 
                    key={product.id}
                    product={product}
                />
               ))}
                </Row>
                
           
            </Container>
            
        );
    }
}
