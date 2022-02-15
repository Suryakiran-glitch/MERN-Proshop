import React from 'react'
import { Link } from 'react-router-dom'
import {Row , Col ,ListGroup,Card, Image, Button,Container} from 'react-bootstrap'
import products from '../products'
import Rating from '../Components/Rating'

const ProductScreen = ({match}) => {

  const product = products.find(p => p._id === match.params.id)

  return (
    <>
    <Link to="/" className='btn btn-light my-3'>Go Back</Link>
    <Container>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            </ListGroup.Item>
            <ListGroup.Item>
              <span>Price :$ {product.price}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <span style={{textAlign : 'center'}}>
                {product.description}
              </span>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
              <Row>
                <Col>
                Price :
                </Col>
                <Col>
                <strong>$ {product.price}</strong>
                </Col>
              </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>
                  Status : 
                  </Col>
                <Col>
                {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button  className="btn btn-block" disabled={product.countInStock === 0}>Add To Cart</Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default ProductScreen