import './App.css';
import WorldContainer from './containers/WorldContainer';
import QuizContainer from './container/QuizContainer';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div> 
      <WorldContainer />

      <Router>
        <>
        <NavBar />
        <Switch> 
      
        <Route exact path="/quiz/" component={QuizContainer} />

        </Switch>
      </>
      </Router>
    </div>
  );
}

export default App;
