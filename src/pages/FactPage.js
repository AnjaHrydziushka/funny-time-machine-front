import React, { useEffect } from "react";
import { fetchFactsById } from "../store/facts/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectFact } from "../store/facts/selectors";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

export default function FactPage() {

  const dispatch = useDispatch();
  const facts = useSelector(selectFact);
  const fact = useLocation();

  useEffect(() => {
    dispatch(fetchFactsById());
  }, [dispatch]);

  const oneFact = facts.filter((f) => {
    if (
      f.placeId == fact.state.placeId &&
      f.timePeriodId == fact.state.timePeriodId
    ) {
      return f.content;
    }
  });

  if (!facts) return <div>Loading...</div>;

  return (
    <div className="top">

      <h1 className="glowFact">Fun Facts</h1>

      <div className="container">

        <div className="image">
          {oneFact.map((fact) => {
            return (
              <img
                key={fact.id}
                src={fact.imageUrl}
                width="450px"
                alt="Louis Bonaparte"
              />
            );
          })}
        </div>

        <div className="fact">

          <div>
            <h3>Did you know that...</h3>
            {oneFact.map((fact) => {
              return <p key={fact.id}>{fact.content}</p>;
            })}
          </div>

          <div>
            <h4>Your answer was:</h4>
            <p>{fact.state.answer}</p>
          </div>

        </div>

      </div>
      <div>
        <Link to='/'><Button>Go Back To Homepage</Button></Link>
      </div>
    </div>
  );
}
