import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Quiz from './pages/quiz/Quiz';
import Result from './pages/result/result';
import Footer from './qcomponent/Footer/Footer';
import Header from './qcomponent/Header';
import axios from 'axios';

function App() {
  const [name, setName] = useState("");
  const [questions, SetQuestions] = useState();
  const[score, setScore] = useState(0);

  const fetchQuestion = async (category= "", difficulty= "") => {
    const{data}=await axios.get(`https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple`);
    
    SetQuestions(data.results);
    console.log(data);
  };
  return (
    <BrowserRouter>
      <div className="App">
        <div style={{ textAlign: "center" }}><Header /></div>
        <Switch>
          <Route path="/" exact><Home name={name} setName={setName} fetchQuestion={fetchQuestion} /></Route>
          <Route path="/quiz" exact><Quiz name={name} questions={questions} score={score} setScore={setScore} SetQuestions={SetQuestions}/></Route>
          <Route path="/result" exact><Result /></Route>
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
