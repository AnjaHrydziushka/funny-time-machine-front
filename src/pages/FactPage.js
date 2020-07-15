import React, { useEffect } from 'react';
import { fetchFactsById } from '../store/facts/actions';
import { useDispatch, useSelector } from 'react-redux';
import { selectFact } from '../store/facts/selectors';
import { useLocation } from "react-router-dom";

export default function FactPage() {

    const dispatch = useDispatch();
    const facts = useSelector(selectFact);

    const fact = useLocation();

    useEffect(() => {
            dispatch(fetchFactsById())
    }, [dispatch])

    const oneFact = facts.filter((f) => {
        if (
          f.placeId == fact.state.placeId &&
          f.timePeriodId == fact.state.timePeriodId
        ) {
          return f.content;
        }
      });

    if (!facts) return <div>Loading...</div>

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Fun Facts</h1>
            {oneFact.map((fact) => {
                return (
                    <img 
                        key={fact.id}
                        src={fact.imageUrl}
                        width="300px"
                        alt="Louis Bonaparte"
                    />
                )
            })}
            <h3>Did you know that...</h3>
            {oneFact.map((fact) => {
                return (
                    <p key={fact.id}>{fact.content}</p>
                )
            })}
            
            <h4>Your answer was:</h4>
            <p>Bonaparte sounds like some famouse footbal player...</p>
        </div>
    )
}
