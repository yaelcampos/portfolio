import Home from "./pages/home/home.jsx";
//el archivo css es quien compila los estilos, pero se trabaja en el scss
import './output.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'


function App() {
  return (
    <ChakraProvider>
    <BrowserRouter>
      {/* <Link to="/">Home</Link> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
