import {Route,Routes} from 'react-router-dom'
import Nav from './components/navpart/Nav'
import Contact from './components/contact/Contact'
import Products from './components/products/Products'
import Fitnes1 from './components/enterend/Fitnes1'
import Join from './components/join/Join'
import Begin from './components/main/Begin'
import Clases from './components/clases/Clases'
const App = () => {
  return (
    <>
    <div className='cont'>
      <Routes>
        <Route path='/' element={<Nav/>}>
             <Route index path='/main' element={<Begin/>}/>
             <Route path='/contact' element={<Contact/>}/>
             <Route path='/products' element={<Products/>}/>
             <Route path='/entered' element={<Fitnes1/>}/>
             <Route path='/join' element={<Join/>}/>
             <Route path='/clases' element={<Clases/>}/>
        </Route>
      </Routes>
    </div>
    </>
  )
}

export default App
