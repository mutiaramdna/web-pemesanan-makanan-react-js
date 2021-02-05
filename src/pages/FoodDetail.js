import React, { Component } from 'react'
import { Breadcrumb, Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { API_URL } from '../utils/constants'
import axios from 'axios'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default class FoodDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: [],
        	jumlah: 0,
        	totalHarga: 0,
        	keterangan: ''
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        axios
            .get(API_URL + "products/" + id)
            .then(res => {
                const products = res.data;
                this.setState({ products });
                console.log(res.data)

            })
            .catch(error => {
                console.log(error);
            })

        this.setState({
            jumlah: this.state.jumlah,
            totalHarga: this.state.products.harga * this.state.jumlah
        })
    }

    tambah = () => {
        this.setState({
            jumlah: this.state.jumlah + 1,
            totalHarga: this.state.products.harga * (this.state.jumlah + 1)
        })
    }

    kurang = () => {
        if (this.state.jumlah !== 1) {
            this.setState({
                jumlah: this.state.jumlah - 1,
                totalHarga: this.state.products.harga * (this.state.jumlah - 1)
            })
        }
    }


    changeHandler = (event) => {
        this.setState({
            keterangan: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            jumlah: this.state.jumlah,
            total_harga: this.state.totalHarga,
            product: this.state.products,
            keterangan: this.state.keterangan
        }
        axios
            .post(API_URL + "keranjangs/", {data})
            .then(res => {
                console.log(res.data)
                this.props.history.push('/keranjang')
            })
              .catch(function (error) {
                console.log("ga masuk");
                console.log(data)
              });
    }

    render() {
        const { products, jumlah, keterangan } = this.state
        return (
            <Container>
                <h2>Halaman Food Detail </h2>
                <Breadcrumb className="mt-4">
                    <Breadcrumb.Item as={Link} to="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item as={Link} to="/food">
                        Foods
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Food Order</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    
                    <Col>
                        <h2><strong>{products.nama}</strong></h2>
                        <h4>Harga: <strong>{products.harga}</strong></h4>

                        <Form onSubmit={this.handleSubmit} className="float-left">
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Jumlah :</Form.Label>
                            <br />


                            <Button variant="primary" size="sm" className="mr-2" onClick={this.kurang}>
                                <FontAwesomeIcon icon={faMinus} />
                            </Button>
                            <strong>{jumlah}</strong>
                            <Button variant="primary" size="sm" className="ml-2" onClick={this.tambah}>
                                <FontAwesomeIcon icon={faPlus} />
                            </Button>
                        </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Keterangan: </Form.Label>
                                <Form.Control type="textarea" name="keterangan" value={keterangan} placeholder="Contoh: Tidak pedas, Nasisetengah, dll" onChange={this.changeHandler} />
                            </Form.Group>
                            <Button variant="success" type="submit">
                            Pesan
                        </Button>
                        </Form>
                        
                    </Col>
                </Row>
            </Container>
        )
    }
}
