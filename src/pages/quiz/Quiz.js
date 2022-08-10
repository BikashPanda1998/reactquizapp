import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import Question from "../../qcomponent/Question/Question";
import "./quiz.css"
const Quiz = ({ name, score, questions, SetQuestions, setScore }) => {
  const [option, setOption] = useState();
  const [currques, setCurrques] = useState(0);
  useEffect(() => {
    console.log(questions);
    setOption(questions && handelSuffel([questions[currques]?.correct_answer, ...questions[currques]?.incorrect_answers,]));

  }, [currques, questions]);
  //console.log(option);
  const handelSuffel = (options) => {
    return options.sort(() => Math.random() - 0.5);
  }
  return (<>
    <div className="quiz">
      <span className="subtitle"> welcome,{name}</span>
    </div>
    {questions ? (
      <div>
        <div className="quizinfo">
          <span>{questions[currques].category}</span>
          <span>Score:{score}</span>
        </div>
        <Question
          currques={currques}
          setCurrques={setCurrques}
          option={option}
          questions={questions}
          SetQuestions={SetQuestions}
          score={score}
          setScore={setScore}
          correct={questions[currques].correct_answer}/>
      </div>
    ) : <CircularProgress />}
  </>
  )
};
export default Quiz;


