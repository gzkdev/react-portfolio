import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path='/' exact>
          <Home></Home>
        </Route>
        <Route path="/projects" exact>
          <Projects></Projects>
        </Route>
        <Route path="/about" exact>
          <About></About>
        </Route>
        <Route path="/contact" exact>
          <Contact></Contact>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
