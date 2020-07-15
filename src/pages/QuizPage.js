import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuiz } from "../store/quizzes/actions";
import { selectQuiz } from "../store/quizzes/selectors";
import { postAnswer } from "../store/answers/actions";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useLocation } from "react-router-dom";

export default function QuizPage() {
  const dispatch = useDispatch();
  const quiz = useSelector(selectQuiz);
  const [answer, setAnswer] = useState("");
  const [selectedQuestion, setSelectedQuestion] = useState(-1);
  let location = useLocation();
  console.log("Quiz page params", location);

  const filteredQuestions =
    selectedQuestion == -1
      ? quiz
      : quiz.filter((q) => {
          return q.id == selectedQuestion;
        });
  console.log("filttered questions", filteredQuestions);

  const id = filteredQuestions.map((question) => {
    return question.id;
  });
  console.log("ID", id);
  const question = quiz.filter((q) => {
    if (
      q.placeId == location.state.placeId &&
      q.timePeriodId == location.state.timePeriodId
    ) {
      return q.question;
    }
  });
  console.log("question", question);

  function submitHandler(e) {
    e.preventDefault();

    dispatch(postAnswer(id, answer));
  }

  useEffect(() => {
    dispatch(fetchQuiz());
  }, [dispatch]);

  return (
    <>
      <Jumbotron>
        <Container>
          <h1>Funny Time Machine</h1>
        </Container>
        <Container>
          <h5>Can you answer a question for us?</h5>
        </Container>
        <Container>
          {question.map((q) => (
            <h5>{q.question}</h5>
          ))}
        </Container>
        <Container>
          <Form>
            <h5 className="mt-5 mb-5">Please insert your answer here</h5>
            <Form.Group>
              <Form.Control
                value={answer}
                onChange={(event) => setAnswer(event.target.value)}
                type="text"
                placeholder="Your delightful answer..."
                required
              />
            </Form.Group>

            <Form.Group className="mt-5">
              <Button variant="primary" type="submit" onClick={submitHandler}>
                Submit answer
              </Button>
            </Form.Group>
          </Form>
        </Container>
      </Jumbotron>
    </>
  );
}
