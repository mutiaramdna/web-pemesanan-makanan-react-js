import React from 'react'
import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

function BestFood() {
    return (
        <Container className="mt-2">
            <Row>
                <Col>
                    <div className="d-flex h-100">
                        <div className="justify-content-center align-self-center">
                            <h2>Best Seller</h2>

                        </div>
                    </div>

                </Col>
                <Col><Button variant="success" className="float-right" as={Link} to="/food"><FontAwesomeIcon icon={faEye} className="mr-1"></FontAwesomeIcon>Lihat Semua</Button></Col>
            </Row>
        </Container>

    )
}

export default BestFood
