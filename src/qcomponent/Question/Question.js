
import { Button } from "@mui/material";
import { useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useHistory } from "react-router";
import "./question.css";
const Question=({
  currques,
  setCurrques,
  option,
  questions,
  setQuestions,
  score,
  setScore,
  correct,
 })=>{

    const[selected, setSelected]=useState();
    const[error, setError]=useState(false);
    const handelSelect=(i)=>{
        if(selected===i && selected===correct){
            return "select";
        }
        else if(selected===i && selected!==correct){
            return "wrong";
        }
        else if(i===correct){
            return "select";
        }
    };
    const handelCheck=(i)=>{
        setSelected(i);
        if(i===correct)
        {setScore(score+1);}
        setError(false);
    };
    const history=useHistory();
    const handelNext=()=>{
        if(currques>8){
            history.push('/result');
        }
        else if(selected){
            setCurrques(currques+1);
            setSelected();
        }
        else{
            setError("please select an option first");
        }
    }
    return(
        <div className="questionsec">
            <h1>Question{currques+1}</h1>
            <div className="singleQuestion">
                <h2>{questions[currques].question}</h2>
                <div className="answer">
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                    {option && option.map(i=>
                    <button key={i} onClick={()=>handelCheck(i)} disabled={selected} className={`singleOption ${selected && handelSelect(i)}`}>
                        {i}</button>)}
                </div>
                <div className="controls">
                    <Button
                     variant="contained"
                     color="secondary"
                     size="large" href='/'>
                        Quiz
                     </Button>
                    <Button 
                    variant="contained"
                    color="success"
                    size="large" onClick={handelNext}>Next Question</Button>
                </div>
            </div>
        </div>
    )
}
export default Question;