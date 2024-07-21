import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import {mode} from '@chakra-ui/theme-tools';



const styles = {
  global:(props) =>({
    color:mode('gray.800','whiteAlpha.900')(props),
    bg:mode('gray.100','#101010')(props),
  })
};
const config ={
  initialColorMode:"dark",
  useSystemColorMode:true,
}
const colors = {
  gray:{
    light:"#616161",
    dark:"#212121"
  }
}

const theme = extendTheme({config, colors,styles});



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter >
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorModel={theme.config.initialColorMode} />
    <App />
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
