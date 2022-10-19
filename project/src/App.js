import logo from './logo.svg';
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Menu from './component/menu'; 
// import Home from './component/home'
import Login from './component/login'
import About from './component/about'
import { Img1,Img2,Img3 } from './component/about';
import Payment from './component/payment'
import Products from './component/products'
// import PFood from './component/pFood'
import Cart from './component/cart'
import ReactDOM from 'react-dom';
import SignUp from './component/signUp'
import { Provider } from 'react-redux';
import store from './component/store/store'
import PCarriage from './component/pCarriage';
import PClothing from './component/pClothing';
import PCrib from './component/pCrib';
import PFood from './component/pFood';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {


  
  return (
    <Provider store={store}>
    <div className="App">
     
    
    <Router>
      <div>
        {/* <Menu /> */}
     
        <Switch>
       
          <Route path="/about">
            <About />
          </Route>
          <Route path="/pCarriage">
            <PCarriage />
          </Route>
          <Route path="/pClothing">
            <PClothing />
          </Route>
          <Route path="/pCrib">
            <PCrib />
          </Route>
          <Route path="/pFood">
            <PFood />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>
          <Route path="/cart">
            < Cart/>
          </Route>
          <Route path="/login">
            <Login />
         </Route>
          <Route path="/signUp">
          <SignUp></SignUp>
         </Route>
          <Route path="/">
       <Login></Login>
         </Route>
        </Switch>
      </div>
    </Router>
   

    </div>

    </Provider>
  );
}

export default App;
