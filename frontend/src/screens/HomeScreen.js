import axios from 'axios';
import React ,{ useState,useEffect  }from 'react'
import { Row ,Col} from 'react-bootstrap';

import Product from "../components/Product";
import './HomeScreen.css';

const HomeScreen = () => {

    const [ products , setProducts ] = useState([])
//tsir as soon as the component loads 
    useEffect(() => {
        const fetchProducts =  async () => {
            const {data} = await axios.get('/api/products')
            setProducts(data) //tsob eli fil data f products
        }
        fetchProducts()
    },[]) //test will fire off l useEffect  


  return (
   <>
 
    <h1>Latest products</h1>
    <Row>
        {products.map(product => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product}/>
            </Col>
        ))}
    </Row>
   </>
  )
}

export default HomeScreen