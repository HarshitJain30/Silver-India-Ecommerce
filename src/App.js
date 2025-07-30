import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Explore from './Pages/Explore';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Footer from './Components/Footer/Footer.jsx';
import men_banner from './Components/Assets/forhim.mp4';
import women_banner from './Components/Assets/forher.mp4';
import collectable_banner from './Components/Assets/collectables.mp4';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path = '/' element = {<Explore/>}/>
        <Route path = '/men' element = {<ShopCategory banner = {men_banner} category = "men"/>}/>
        <Route path = '/women' element = {<ShopCategory banner = {women_banner} category = "women"/>}/>
        <Route path = '/collectable' element = {<ShopCategory banner = {collectable_banner} category = "collectable"/>}/>
        <Route path = "/product" element = {<Product/>}>
          <Route path = ':productId' element = {<Product/>}/>
        </Route>
        <Route path = "/cart" element = {<Cart/>}/>
        <Route path = "/login" element = {<Login/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
