import TagManager from "react-gtm-module";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter} from 'react-router-dom'
const tagManagerArgs = {
  gtmId: 'GTM-522F863B'
  };
  TagManager.initialize(tagManagerArgs);


ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      
    </ChakraProvider>
  
)
