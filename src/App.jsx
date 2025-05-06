import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css'
import Navbar from './mainfolder/pages/Navbar'
import Home from './mainfolder/pages/Home';
import Exchangesrates from './mainfolder/pages/Exchangesrates';
import Errorpage from './mainfolder/pages/Errorpage';
import About from './mainfolder/pages/About';

function App() {

  return (
    <>
   <BrowserRouter>
   <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/exchange' element={<Exchangesrates/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/errorpage' element={<Errorpage/>}/>
    </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
