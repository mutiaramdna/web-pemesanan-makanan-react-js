import React, { Component } from 'react'
import { BestFoodCards } from '../components';
import { API_URL } from '../utils/constants'
import axios from 'axios'
import { Col, Container, Row } from 'react-bootstrap'

export default class Food extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: [],
        }
    }
    componentDidMount() {
        axios
            .get(API_URL + "products")
            .then(res => {
                const products = res.data;
                this.setState({ products });
                console.log(res.data)

            })
            .catch(error => {
                console.log(error);
            })
    }

    handleSearch = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    render() {
        const { products } = this.state
        return (
            <Container>
                <Row>
                    <Col className="mt-3">
                        <h2>Daftar Makanan</h2>
                    </Col>
                </Row>

                <Row className="overflow-auto menu">
                    {products && products.map((product) => (
                        <BestFoodCards
                            key={product.id}
                            product={product}
                        />
                    ))}
                </Row>
            </Container>
        )
    }
}
