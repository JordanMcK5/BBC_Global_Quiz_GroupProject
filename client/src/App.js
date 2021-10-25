import './App.css';
import WorldContainer from './containers/WorldContainer';
import QuizContainer from './containers/QuizContainer';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactQuizContainer from './containers/ReactQuizContainer';
import Scores from './components/Scores';
import FlagsQuizQuestion from "./components/FlagsQuizQuestion"
import CapitalsQuizQuestion from "./components/CapitalsQuizQuestion"
import { postResults as postResultsFlags } from "./services/FlagsQuizService";
import { postResults as postResultsCapitals } from "./services/CapitalsQuizService";
import { getResults as getResultsCapitals } from "./services/CapitalsQuizService";
import { getResults as getResultsFlags } from "./services/FlagsQuizService";

function App() {
  return (
    <div> 

      <Router>
        <>
        <NavBar />
        <Switch> 
        <Route path="/quiz/capitals/scores" render={() => <Scores getResults={getResultsCapitals}/>} />
        <Route path="/quiz/capitals" render={() => <QuizContainer postResults={postResultsCapitals} QuestionComponent={CapitalsQuizQuestion} />} />
        <Route path="/quiz/flags/scores" render={() => <Scores getResults={getResultsFlags}/>} />
        <Route path="/quiz/flags" render={() => <QuizContainer postResults={postResultsFlags} QuestionComponent={FlagsQuizQuestion} />} />
        <Route path="/quiz/national-animals" component={ReactQuizContainer} /> 
        <Route path="/quiz/" component={QuizContainer} />
        <WorldContainer />
        
        </Switch>
      </>
      </Router>
    </div>
  );
}

export default App;
