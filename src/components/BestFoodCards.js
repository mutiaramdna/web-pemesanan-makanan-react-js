import React from 'react'
import { Button, Col, Card } from "react-bootstrap";
import { numberWithCommas } from '../utils/utils'
import { Link } from 'react-router-dom'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const BestFoodCards = ({product}) => {
    return (
        <Col md={4} xs={6} className="mt-3 mb-4">
            <Card className="shadow">
                <Card.Img variant="top" src={"assets/images/"+product.gambar} />
                <Card.Body>
                    <Card.Title><strong>{product.nama}</strong></Card.Title>
                    <Card.Text>
                    Rp. {numberWithCommas(product.harga)}
                    </Card.Text>
                    <Button variant="success" as={Link} to={`/food/${product.id}`}>Pesan</Button>
                </Card.Body>
            </Card>
        </Col>
        
    )
}

export default BestFoodCards
