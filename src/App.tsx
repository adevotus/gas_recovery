import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import {QueryClient, QueryClientProvider} from "react-query";
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path = "/about" element={<About/>}/>
        <Route path = "/contact" element={<Contact/>}/>
        <Route path = "/services" element={<Service/>}/>


      </Routes>
    </Router>
  </QueryClientProvider>
  )
}

export default App
