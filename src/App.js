import React from 'react';
import Banner from './components/Banner';
import Header from './components/Header';
import Main from './components/Main';
import Women from './components/Women';
import Men from './components/Men';
import Denim from './components/Denim';
import Tread from './components/Tread';
import About from './components/About';
import Search from './components/Search';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import CheckOut from './components/CheckOut';
import Footer from './components/Footer';
import './App.css';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
    <Banner/>
    <Header/>
    <Switch>
      <Route exact path='/' component={Main} />
      <Route exact path='/collections/womens-all' component={Women} />
      <Route exact path='/collections/mens-all' component={Men} />
      <Route exact path='/denim-guide' component={Denim} />
      <Route exact path='/tread' component={Tread} />
      <Route exact path='/about' component={About} />
      <Route exact path='/search' component={Search} />
      <Route exact path='/login' component={LogIn} />
      <Route exact path='/signup' component={SignUp} />
      <Route exact path='/checkout/preview' component={CheckOut} />
    </Switch>
    <Footer/>
    </div>
  );
}

export default App;
