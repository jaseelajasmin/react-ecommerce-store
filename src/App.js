//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes,Route } from 'react-router-dom';
import Home from './screens/Home';
import Contact from './screens/Contact';
import About from './screens/About';
import ProductList from './components/ProductList';
import Cart from './screens/Cart';
import ProductDetails from './components/ProductDetails';
import PageNotFound from './screens/PageNotFound';

function App() {
  return (
    <div className='containerfluid'>
      <Header/>
      <Routes>
        <Route path="/" element= {<Home />} />
         <Route path="/Contact" element= {<Contact />} />
         <Route path="/About" element= {<About />} />
         <Route path='/ProductList' element={<ProductList />}/>
          <Route path="/Cart" element= {<Cart />} />
          <Route path='/ProductList/:productId' element={<ProductDetails/>}/>
 <Route path="*" element={<PageNotFound/>}/>

        


      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
