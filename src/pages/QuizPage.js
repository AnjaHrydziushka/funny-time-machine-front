import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuiz } from "../store/quizzes/actions";
import { selectQuiz } from "../store/quizzes/selectors";
import { postAnswer } from "../store/answers/actions";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function QuizPage() {
  const dispatch = useDispatch();
  const quiz = useSelector(selectQuiz);
  const [answer, setAnswer] = useState("");

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
      <Jumbotron className="back">
        <Container>
          <h1 className="glow">Funny Time Machine</h1>
        </Container>
        <marquee behavior="scroll" direction="right" scrollAmount="20">
          <h5 className="text">DO YOU KNOW THE ANSWER?</h5>
        </marquee>
        <div class="dot">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="q">
          {question.map((q) => (
            <h4 key={q.id}>{q.question}</h4>
          ))}
        </div>
        <Container>
          <Form>
            <h5 className="mt-5 mb-5" id="par">
              Please insert your answer here
            </h5>
            <Form.Group className="input">
              <Form.Control
                
                value={answer}
                onChange={(event) => setAnswer(event.target.value)}
                type="text"
                placeholder="Your delightful answer..."
                required
              />
            </Form.Group>

            <Form.Group className="mt-5">
              <button className="btn" variant="primary" type="submit" onClick={submitHandler}>
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
                  Answer
                </Link>
              </button>
            </Form.Group>
          </Form>
          <div id="animation"></div>
        </Container>
      </Jumbotron>
    </>
  );
}
