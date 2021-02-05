import React from 'react'
import { Container , Table } from "react-bootstrap";
import { numberWithCommas } from '../utils/utils'
import { Link } from 'react-router-dom'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Tabel = ({ keranjang }) => {
    return (
        
            <Table responsive className="mt-3">
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
                    <tr>
                    <td>1</td>
                    <td></td>
                    <td>n</td>
                    <td>{keranjang.keterangan}</td>
                    <td>{keranjang.jumlah}</td>
                    <td>h</td>
                    <td>{keranjang.total_harga}</td>
                    <td>Trash</td>
                    </tr>
                </tbody>
            </Table>
        


    )
}

export default Tabel
