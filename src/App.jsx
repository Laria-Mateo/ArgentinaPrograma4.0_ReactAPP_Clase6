
import * as React from 'react'


import { ChakraProvider } from '@chakra-ui/react'
import Header from './components/header/header'
import DivContenedor from './components/divContenedor/divContenedor'
import Footer from './components/footer/footer'

function App() {

  return (
    <ChakraProvider>

      <Header />
      <DivContenedor />
      <Footer />

    </ChakraProvider>
  )
}

export default App
