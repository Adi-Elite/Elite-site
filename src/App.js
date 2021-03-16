import './App.css';
import {NavBar} from './Components/Navbar.js';
import {About} from './Components/About.js';
import {WebDev} from './Components/Services/WebDev.js';
import {Home} from './Components/Home.js';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/services/webdev" component={WebDev}/>
      </Router>
    </div>
  );
}

export default App;
