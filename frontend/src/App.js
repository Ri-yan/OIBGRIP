import './App.css';
import NavBar from './components/Navigation';
import HeroSection from './components/Hero';
import Services from './components/Services';
import Populars from './components/popular';
import { Routes,Route,BrowserRouter} from 'react-router-dom';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Login from './components/Authentication/Login';
import Signup from './components/Authentication/Signup';
import ProductPage from './components/ProductPage';
import CartPage from './components/CartPage';
import About from './components/About';
import AdminLogin from './Admin/AdminLogin';
import AdminNav from './Admin/AdminNav';
import OrdersInventory from './Admin/OrdersInventory';
import ProductsEdit from './Admin/ProductsEdit';
import Materials from './Admin/Materials';
import ForgotPassword from './components/Authentication/ForgotPassword';
import AdminForgotPassword from './Admin/AdminForgotPassword';
import Orders from './components/Orders';
import { AppProvider } from './context/context';
import PrivateRoute from './components/Authentication/PrivateRoute';
import LogRoute from './components/Authentication/LogRoute';
import AdminLogRoute from './Admin/AdminLogRoute';
import AdminPrivateRoute from './Admin/AdminPrivateRoute';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <AppProvider>
     <Routes>
      <Route path="/" element={<> <NavBar/><HeroSection/><Services/><Populars/></>}></Route>
      <Route path="/menu" element={<> <NavBar/><Menu/></>}></Route>
      <Route path="/login" element={<><LogRoute><NavBar/><Login/></LogRoute> </>}></Route>
      <Route path="/signup" element={<><LogRoute><NavBar/><Signup/></LogRoute> </>}></Route>
      <Route path="/forgot_password" element={<> <NavBar/><ForgotPassword/></>}></Route>
      <Route path="/product/:id" element={<> <NavBar/><ProductPage/></>}></Route>
      <Route path="/cart" element={<> <NavBar/><CartPage/></>}></Route>
      <Route path="/orders" element={<><PrivateRoute> <NavBar/><Orders/></PrivateRoute></>}></Route>
      <Route path="/about" element={<> <NavBar/><About/></>}></Route>
      <Route path="/admin/login" element={<><AdminLogRoute><AdminNav/><AdminLogin/></AdminLogRoute></>}></Route>
      <Route path="/admin/home" element={<><AdminPrivateRoute><AdminNav/><OrdersInventory/></AdminPrivateRoute></>}></Route>
      <Route path="/admin/products" element={<><AdminPrivateRoute><AdminNav/><ProductsEdit/></AdminPrivateRoute></>}></Route>
      <Route path="/admin/materials" element={<><AdminPrivateRoute><AdminNav/><Materials/></AdminPrivateRoute></>}></Route>
      <Route path="/admin/forgot_password" element={<><AdminPrivateRoute><AdminNav/><AdminForgotPassword/></AdminPrivateRoute></>}></Route>
     </Routes>
     </AppProvider>
     <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
