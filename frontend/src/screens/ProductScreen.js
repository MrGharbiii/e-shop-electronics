import React ,{ useState,useEffect  }from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import {Row,Col,Image,ListGroup,Card,Button, CardImg, ListGroupItem} from 'react-bootstrap'
import Rating from '../components/Rating'
// import products from '../products'
import { useParams } from 'react-router-dom'
import '../screens/ProductScreen.css'
import Zoom from 'react-medium-image-zoom'        // like-amazon effect 
import 'react-medium-image-zoom/dist/styles.css'  // like-amazon effect 
 



const ProductScreen = ({ }) => {

  const { id } = useParams();

  const [ product , setProduct ] = useState([])
//tsir as soon as the component loads 
    useEffect(() => {
        const fetchProduct =  async () => {
            const {data} = await axios.get(`/api/products/${id}`)
            setProduct(data) //tsob eli fil data f products
        }
        fetchProduct()
    },[id]) //test will fire off l useEffect  
  
  
 
  // const name = "Ahmed"
   
    // const product = products.find((p) => p._id === id)

    console.log(id)
 



    return (
    <>
     <Link className='btn btn-dark' to='/home'>Go Back</Link>
      <Row>
          <Col md={4}>
           <Zoom><Image src={product.image} alt={product.name} fluid/></Zoom>
          </Col>
          <Col md={5}>
             <ListGroup variant='flush'>
                <ListGroupItem>
                  <h2>{product.name}</h2>
                </ListGroupItem>
                <ListGroupItem>
                  <Rating value={product.rating} text={`${product.numReviews} reviews `} />
                </ListGroupItem>
                <ListGroupItem>
                  Price : {product.price}$
                </ListGroupItem>
                <ListGroupItem>
                  Description : {product.description}
                </ListGroupItem>
             </ListGroup>
          </Col>
          <Col md={2}>
            <Card className='addCart'>
              <ListGroup variant='flush'>
                <ListGroupItem>
                  <Row>
                    <Col>
                      Price:
                    </Col>
                    <Col>
                      <strong> {product.price}$ </strong>
                    </Col>
                  </Row>
                </ListGroupItem>

                <ListGroupItem>
                  <Row>
                    <Col>
                      Status:
                    </Col>
                    <Col>
                      <strong className={product.countInStock > 0 ? 'text-success' : 'text-danger fw-bold'} > {product.countInStock > 0 ? 'In Stock' : 'OUT OF STOCK'} </strong>
                    </Col>
                  </Row>
                </ListGroupItem>

                <ListGroupItem>
                  <Button className='btn btn-black' type='button' disabled={product.countInStock === 0} >Add to Cart</Button>
                </ListGroupItem>

              </ListGroup>
            </Card>
          </Col>
      </Row>
    </>
  )

}

export default ProductScreen