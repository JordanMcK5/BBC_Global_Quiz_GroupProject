import './App.css';
import WorldContainer from './containers/WorldContainer';
import QuizContainer from './containers/QuizContainer';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactQuizContainer from './containers/ReactQuizContainer';
import NationalAnimalsService from './services/NationalAnimalQuizService'

function App() {
  return (
    <div> 
      

      <Router>
        <>
        <NavBar />
        <Switch> 
        <Route exact path="/quiz/national-animals/scores" render={() => <Scores getResults={getResultsNationalAnimals}/>} />
        <Route exact path="/quiz/national-animals" render={() => <ReactQuizContainer postResults={postResultsNationalAnimals}/>} />
        <Route path="/quiz/" component={QuizContainer} />
        <WorldContainer />
        </Switch>
      </>
      </Router>
    </div>
  );
}

export default App;
