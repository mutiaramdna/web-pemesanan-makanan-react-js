import React, { Component } from 'react'
import { Breadcrumb, Button, Col, Container, Form, Image, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { API_URL } from '../utils/constants'
import axios from 'axios'
import swal from 'sweetalert'
import { numberWithCommas } from '../utils/utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default class Keranjang extends Component {
    constructor(props) {
        super(props)

        this.state = {
            keranjangs: [],
            nama_pemesan: '',
            no_meja: '',
            totalBayar: 0
        }
    }

    componentDidMount() {
        axios
            .get(API_URL + "keranjangs")
            .then(res => {
                const keranjangs = res.data;
                this.setState({ keranjangs });

            })
            .catch(error => {
                console.log(error);
            })
    }

    hapusPesanan = (id) => {

        axios
            .delete(API_URL + "keranjangs/" + id)
            .then(res => {
                swal({
                    title: "Hapus Pesanan!",
                    text: "Sukses Hapus Pesanan!",
                    icon: "error",
                    button: false,
                    timer: 1500,
                });
            })
            .catch(error => {
                console.log(error);
            })

        //Update Data Keranjang
        axios
            .get(API_URL + "keranjangs")
            .then(res => {
                const keranjangs = res.data;
                this.setState({ keranjangs });

            })
            .catch(error => {
                console.log(error);
            })
    }
    changeName = (event) => {
        this.setState({
            nama_pemesan: event.target.value,
        })
    }

    changeTable = (event) => {
        this.setState({
            no_meja: event.target.value
        })
    }

    submitTotalBayar = (event) => {
        if(this.state.nama_pemesan && this.state.no_meja){
            event.preventDefault();

        const data= {
            nama_pemesan: this.state.nama_pemesan,
            no_meja: this.state.no_meja,
            keranjang: this.state.keranjangs
        }

        axios
        .post(API_URL + "pesanans", {data})
        .then(res => {
            console.log(res.data)
            this.props.history.push('/sukses')
        })
          .catch(function (error) {
            console.log("ga masuk");
            console.log(data)
          });

        } else {
            alert("Nama dan No Meja harus diisi!");
        }
        
    };

    render() {
        const { keranjangs, nama_pemesan, no_meja } = this.state
        const totalBayar = keranjangs.reduce(function (result, item) {
            return result + item.data.total_harga;
        }, 0);

        return (
            <Container>
                <Breadcrumb className="mt-4">
                    <Breadcrumb.Item as={Link} to="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item as={Link} to="/food">
                        Foods
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Keranjang</Breadcrumb.Item>
                </Breadcrumb>
                <h2>Keranjang Saya</h2>
                <Table responsive>
                    <thead>

                        <tr>
                            <th>#</th>
                            <th>Foto</th>
                            <th>Makanan</th>
                            <th>Keterangan</th>
                            <th>Jumlah</th>
                            <th>Harga</th>
                            <th>Total</th>
                            <th>Hapus</th>
                        </tr>

                    </thead>
                    <tbody>
                        {keranjangs && keranjangs.map((keranjang, index) => (

                            
                            <tr>
                                <td>{index + 1}</td>
                                <td><Image src={"assets/images/" + keranjang.data.product.gambar} width="250" className="img-fluid shadow" /></td>
                                <td>{keranjang.data.product.nama}</td>
                                <td>{keranjang.data.keterangan ? keranjang.data.keterangan : "-"}</td>
                                <td>{keranjang.data.jumlah}</td>
                                <td>Rp. {numberWithCommas(keranjang.data.product.harga)}</td>
                                <td><strong>Rp. {numberWithCommas(keranjang.data.jumlah * keranjang.data.product.harga)}</strong></td>
                                <td>
                                    <Button variant="danger" onClick={() => this.hapusPesanan(keranjang.id)}>
                                        <FontAwesomeIcon icon={faTrash} /> Hapus
                            </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                
                <Form onSubmit={this.submitTotalBayar} className="float-right">
                    <Row className="mb-3">
                        <Col><strong>Total Harga: Rp. {numberWithCommas(totalBayar)}</strong></Col>
                    </Row>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Nama:</Form.Label>
                        <Form.Control type="text" name="nama_pemesan" value={nama_pemesan} placeholder="Masukkan nama.." onChange={this.changeName}/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>No. Meja:</Form.Label>
                        <Form.Control type="text" name="no_meja" value={no_meja} placeholder="Masukkan no meja.." onChange={this.changeTable}/>
                    </Form.Group>
                    <Button variant="success" type="submit">
                            Bayar
                        </Button>
                </Form>

            </Container>

        )
    }
}
