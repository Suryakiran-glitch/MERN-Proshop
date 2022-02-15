import React from 'react'
import products from '../products'
import { Row , Col } from 'react-bootstrap'
import Product from '../Components/Products'

const HomeScreen = () => {
  return (
    <>
    
        <h1>Latest Products</h1>
        <Row>
        {
            products.map((p) => (
                <Col key={p._id} sm={12} md={8} lg={6} xl={4}>
            <Product product={p} />
            </Col>
            ))
        }
        </Row>
    
    </>
  )
}

export default HomeScreen