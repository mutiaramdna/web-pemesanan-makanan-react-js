import React from 'react'
import { Badge, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'

const NavbarComps = () => {

    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">PesanMakan</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/food">Foods</Nav.Link>
            </Nav>

            <Nav className="ml-auto">
                <Nav.Link as={Link} to="/keranjang">Keranjang<FontAwesomeIcon icon={faShoppingBag} className="ml-1 mr-1"/></Nav.Link>
                
            </Nav>
            
            <Badge variant="light"></Badge>


        </Navbar>

    )
}

export default NavbarComps
