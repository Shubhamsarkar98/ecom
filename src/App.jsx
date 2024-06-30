import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from '../src/pages/Home'
import Login from './pages/Login/Login';
import SignUp from './pages/Signup/SignUp';
import CartPage from './pages/cart/CartPage';
function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/cart' element={<CartPage/>}/>
     </Routes>
    
     </BrowserRouter>
   </>
  );
}

export default App;
