import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './Components/Home'
import Login from './Components/Login'
import './App.css';
const App =()=>{
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={ <Home />} />
      <Route  path="/" element={<Login/>} />    
           
  
    </Routes>
    </BrowserRouter>
  )
}
export default App