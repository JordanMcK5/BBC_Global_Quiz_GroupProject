import './App.css';
import WorldContainer from './containers/WorldContainer';
import QuizContainer from './containers/QuizContainer';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactQuizContainer from './containers/ReactQuizContainer';

function App() {
  return (
    <div> 
      <WorldContainer />

      <Router>
        <>
        <NavBar />
        <Switch> 
        <Route path="/quiz/national-animals" component={ReactQuizContainer} /> 
        <Route path="/quiz/" component={QuizContainer} />
        

        </Switch>
      </>
      </Router>
    </div>
  );
}

export default App;
