import React from 'react'
import { Button, Image, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Mood() {
    return (

        <Row>
            <Col>
                <div className="d-flex h-100">
                    <div className="justify-content-center align-self-center">
                        <h2><strong>Makan Enak? </strong>Tinggal Klik Saja!</h2>
                        <p>Ayo pilih makanan favorit Anda</p>
                        <Button variant="success" as={Link} to="/food"><FontAwesomeIcon icon={faArrowRight} className="mr-1"></FontAwesomeIcon>Order</Button>
                    </div>
                </div>

            </Col>
            <Col><Image src="assets/images/breakfast.png" width="100%" /></Col>
        </Row>

    )
}

export default Mood
