import './App.css';
import WorldContainer from './containers/WorldContainer';
import QuizContainer from './containers/QuizContainer';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactQuizContainer from './containers/ReactQuizContainer';
import Scores from './components/Scores';
import FlagsQuizQuestion from "./components/FlagsQuizQuestion"
import CapitalsQuizQuestion from "./components/CapitalsQuizQuestion"
import ErrorPage from "./components/ErrorPage"
import { postResults as postResultsFlags } from "./services/FlagsQuizService";
import { postResults as postResultsCapitals } from "./services/CapitalsQuizService";
import { getResults as getResultsCapitals } from "./services/CapitalsQuizService";
import { getResults as getResultsFlags,  } from "./services/FlagsQuizService";
import { deleteResult as deleteResultFlags } from "./services/FlagsQuizService"
import { deleteResult as deleteResultCapitals } from "./services/CapitalsQuizService"


function App() {
  return (
    <div> 

      <Router>
        <>
        <NavBar />
        <Switch> 
        <Route exact path="/quiz/capitals/scores" render={() => <Scores getResults={getResultsCapitals} deleteResult={deleteResultCapitals}/>} />
        <Route exact path="/quiz/capitals" render={() => <QuizContainer postResults={postResultsCapitals} QuestionComponent={CapitalsQuizQuestion} />} />
        <Route exact path="/quiz/flags/scores" render={() => <Scores getResults={getResultsFlags} deleteResult={deleteResultFlags} />}/>
        <Route exact path="/quiz/flags" render={() => <QuizContainer postResults={postResultsFlags} QuestionComponent={FlagsQuizQuestion} />} />
        <Route exact path="/quiz/national-animals" component={ReactQuizContainer} /> 
        <Route exact path="/quiz/" component={QuizContainer} />
        <WorldContainer />
        <Route component={ErrorPage}/>
        </Switch>
      </>
      </Router>
    </div>
  );
}

export default App;
