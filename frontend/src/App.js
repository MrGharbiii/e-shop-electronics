import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom'
import Product from './components/Product'
import ProductScreen from './screens/ProductScreen'



const App = () => {
  return (
    
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
          <Route path='/home' element={<HomeScreen/>} />
          <Route path='/product/:id' element={<ProductScreen/>} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
   
  )
}

export default App