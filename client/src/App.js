import WorldContainer from './containers/WorldContainer';
import QuizContainer from './containers/QuizContainer';
import ReactQuizContainer from './containers/ReactQuizContainer';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Scores from './components/Scores';
import { postResults as postResultsFlags } from "./services/FlagsQuizService";
import { postResults as postResultsCapitals } from "./services/CapitalsQuizService";
import { getResults as getResultsCapitals } from "./services/CapitalsQuizService";
import { getResults as getResultsFlags } from "./services/FlagsQuizService";
import { getResults as getResultsNationalAnimals } from "./services/NationalAnimalQuizService";
import { postResults as postResultsNationalAnimals } from "./services/NationalAnimalQuizService";
import './App.css';
import FlagsQuizQuestion from "./components/FlagsQuizQuestion"
import CapitalsQuizQuestion from "./components/CapitalsQuizQuestion"
import ErrorPage from "./components/ErrorPage"
import { deleteResult as deleteResultFlags } from "./services/FlagsQuizService"
import { deleteResult as deleteResultCapitals } from "./services/CapitalsQuizService"


function App() {
  return (
    <div> 

      <Router>
        <>
        <NavBar />
        <Switch> 
        <Route exact path="/quiz/national-animals/scores" render={() => <Scores getResults={getResultsNationalAnimals}/>} />
        <Route exact path="/quiz/national-animals" render={() => <ReactQuizContainer postResults={postResultsNationalAnimals}/>} />
        <Route exact path="/quiz/capitals/scores" render={() => <Scores key="capitals-scores" getResults={getResultsCapitals} deleteResult={deleteResultCapitals}/>} />
        <Route exact path="/quiz/capitals" render={() => <QuizContainer key={Math.random()} postResults={postResultsCapitals} QuestionComponent={CapitalsQuizQuestion} />} />
        <Route exact path="/quiz/flags/scores" render={() => <Scores key="flags-scores" getResults={getResultsFlags} deleteResult={deleteResultFlags} />}/>
        <Route exact path="/quiz/flags" render={() => <QuizContainer key={Math.random()} postResults={postResultsFlags} QuestionComponent={FlagsQuizQuestion} />} />
        <WorldContainer />
        <Route component={ErrorPage}/>
        </Switch>
      </>
      </Router>
    </div>
  );
}

export default App;
