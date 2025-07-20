//import logo from './logo.svg';
import './App.css';
//import {Routes,Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
//import Home from './screens/home';


function App() {
  return (
    <div>
      <Header/>
       {/* <Routes>
      <Route path='/' element={<Home/>}/>
       <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/> */}

      {/* </Routes>  */}
      <Footer/>
    </div>
  );
}

export default App;
