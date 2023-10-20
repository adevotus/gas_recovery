import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import {QueryClient, QueryClientProvider} from "react-query";
import About from './pages/About';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path = "/about" element={<About/>}/>
      </Routes>
    </Router>
  </QueryClientProvider>
  )
}

export default App
