import './App.css';
import {Switch, Route} from "react-router-dom";
import Home from './Home';
import Menu from './Menu/Menu';
import NavBar from './NavBar';
import Weather from './Weather/Weather'
function App() {
  return (
    <>
      <NavBar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/menu' component={Menu}/>
        <Route path='/weather' component={Weather}/>
      </Switch>
      {/* <Home/>
      <Menu/> */}
    </>
  )
}

export default App;
