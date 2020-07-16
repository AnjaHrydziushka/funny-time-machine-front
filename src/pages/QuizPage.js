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
import { Link } from "react-router-dom";

export default function QuizPage() {
  const dispatch = useDispatch();
  const quiz = useSelector(selectQuiz);
  const [answer, setAnswer] = useState("");

  const [selectFact, setSelectFact] = useState("");

  const location = useLocation();

  const question = quiz.filter((q) => {
    if (
      q.placeId == location.state.placeId &&
      q.timePeriodId == location.state.timePeriodId
    ) {
      return q.question;
    }
  });

  const rightId = question.map((q) => {
    return q.id;
  });

  function submitHandler(e) {
    e.preventDefault();
    dispatch(postAnswer(rightId, answer));
    setAnswer("");
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
            <h5 key={q.id}>{q.question}</h5>
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
                <Link
                  to={{
                    pathname: "/facts",
                    state: {
                      placeId: location.state.placeId,
                      timePeriodId: location.state.timePeriodId,
                      answer: answer,
                    },
                  }}
                >
                  Submit answer
                </Link>
              </Button>
            </Form.Group>
          </Form>
        </Container>
      </Jumbotron>
    </>
  );
}
