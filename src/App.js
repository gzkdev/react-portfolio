
import { Route, Switch, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import { AnimatePresence } from 'framer-motion';
import ProjectNAUApp from './pages/ProjectNAUApp';
import ProjectGitMigo from './pages/ProjectGitMigo';


function App() {
  const location = useLocation();

  return (
    <>
      <Navbar></Navbar>
      <AnimatePresence>
        <Switch location={location} key={location.key}>
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
          <Route path="/projects/nau-app" exact>
            <ProjectNAUApp></ProjectNAUApp>
          </Route>
          <Route path="/projects/gitmigo" exact>
            <ProjectGitMigo></ProjectGitMigo>
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
