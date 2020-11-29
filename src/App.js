import './App.css';
import Header from './Header/Header';
import Home from './Pages/Home';
import Workflow from './Pages/Workflow';
import Education from './Pages/Education';
import Projects from './Pages/Projects';
import { Switch, Route, Redirect } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />
        <Switch>
          <Route exact path="/"><Redirect to="/blog" /></Route>
          <Route exact path='/blog' component={Home} />
          <Route exact path='/workflow' component={Workflow} />
          <Route exact path='/education' component={Education} />
          <Route exact path='/projects' component={Projects} />
        </Switch>
    </div>
  );
}

export default App;
