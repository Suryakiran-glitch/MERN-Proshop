import React , {useState,useEffect} from 'react'
import { Row , Col } from 'react-bootstrap'
import Product from '../Components/Products'
import axios from 'axios'

const HomeScreen = () => {

  const [products,setProduct] = useState([]);

const fetchProducts = async() => {
    const {data} = await axios.get('http://localhost:5000/api/products');
    setProduct(data)
}

useEffect(()=> {
    fetchProducts()
},[])


  return (
    <>
    
        <h1>Latest Products</h1>
        <Row>
        {
          products.map(p => (
              <Col key={p._id}  sm={12} ms={8} lg={6} xl={4}>
              <Product product={p} />
              </Col>
          ))
        }
        </Row>
    
    </>
  )
}

export default HomeScreen