import React  from 'react'
import {Card} from 'react-bootstrap'
import Rating from './Rating'
import {Link} from 'react-router-dom'


const Products = ({product}) => {



  return (
    <>
    
        <Card className='p-3 my-3 rounded'>
            <Link to={`product/${product._id}`}>
                <Card.Img src={product.image} variant="top" />
            </Link>
            <Card.Body>
            <Link to={`product/${product._id}`} style={{textDecoration : 'none'}}>
                <Card.Title>
                    <strong >{product.name}</strong>
                </Card.Title>
            </Link>
            <Card.Text as="div">
                <div className='my-3'>
                    {product.rating} from {product.numReviews} Customers
                </div>
            </Card.Text>
            <Card.Text>
                <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            </Card.Text>
            <Card.Text as='h3'>${product.price}</Card.Text>
            </Card.Body>
        </Card>
    
    </>
  )
}

export default Products