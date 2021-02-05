import React, { Component } from 'react'

export default class totalBayar extends Component {
    render() {
        const totalBayar = this.props.keranjangs.reduce(function (result, item) {
            return result + item.total_harga;
        }, 0);

        return (
            <div>
                <Row>
                    <Col>
                        <h4>Total Bayar: </h4>
                    </Col>
                </Row>
            </div>
        )
    }
}
