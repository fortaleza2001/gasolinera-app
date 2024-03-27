

import { Box, Container } from '@chakra-ui/react'
import Navbar  from './components/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Surtidor from './pages/Surtidor'
import Product from './pages/Product'
import MethodPay from './pages/MethodPay'
import Quantity from './pages/Quantity'
import Resumen from './pages/Resumen'

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    
      <Box w="100%" h="100vh">
        <Navbar/>
        <Container>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/surtidor' element={<Surtidor/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='/methodpay' element={<MethodPay/>}/>
            <Route path='/quantity' element={<Quantity/>}/>
            <Route path='/resume' element={<Resumen/>}/>
          </Routes>
        </Container>
      </Box>
    
  )
}

export default App
