import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "./home.css";
import { Button, MenuItem } from "@mui/material";
import Categories from "../../data/Categories";
import { useHistory } from "react-router";
import ErrorMessage from "../../qcomponent/ErrorMessage/ErrorMessage";
const Home = ({ name, setName, fetchQuestion }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);
  const history = useHistory();
  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestion(category, difficulty);
      history.push("/quiz");
    }
  };
  return (
    <div className="container">
      <div className="setting">
        <span style={{ fontSize: 30 }}>Quiz-Setting</span>
        <div className="setting-select">
          {error && <ErrorMessage>Please fill all the field</ErrorMessage>}
          <TextField
            style={{ marginBottom: 25 }}
            label="Enter your name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            style={{ marginBottom: 30 }}
            select
            label="Select Category"
            variant="outlined"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            {Categories.map((item) => (
              <MenuItem key={item.category} value={item.value}>
                {item.category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            style={{ marginBottom: 30 }}
            select
            label="Select Difficulty"
            variant="outlined"
            onChange={(e) => setDifficulty(e.target.value)}
            value={difficulty}
          >
            <MenuItem key="easy" value="Easy">
              Easy
            </MenuItem>
            <MenuItem key="medium" value="Medium">
              Medium
            </MenuItem>
            <MenuItem key="hard" value="Hard">
              Hard
            </MenuItem>
          </TextField>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            START QUIZ
          </Button>
        </div>
      </div>
      <img src="/quiz.png" className="banner" alt="quiz img" />
    </div>
  );
};
export default Home;
