// import Header from './Header';
// import Routing from './Routing';
// import AddTodo from './AddTodo';
// import Material from './Navbar';
// import Meme from './Meme';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import ShowProductIndex from './Redux/ShowProductIndex';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navb from './Navb';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import Afterlogin from './Afterlogin';
import Cart from './Cart';


function App() {
  return (
    <div>
    <Router>
      {/* <Navb/> */}
    <switch>

      <Route exact path='/' component={Home}/>
      <Route exact path='/b' component={ShowProductIndex}/>
      <Route exact path='/c' component={Signup}/>
      <Route exact path='/d' component={Login}/>
      <Route exact path='/data' component={Afterlogin}/>
      <Route exact path='/cart' component={Cart}/>
      
      </switch>
    </Router>
    </div>
  );
}

export default App;
