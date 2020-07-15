import React, { useEffect } from 'react';
import { fetchFactsById } from '../store/facts/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectFact } from '../store/facts/selectors';

export default function FactPage() {

    const dispatch = useDispatch();
    const { id } = useParams();
    const factById = useSelector(selectFact);

    console.log("Selector:", factById)

    useEffect(() => {
        if (factById.length === 0) {
            dispatch(fetchFactsById(id))
        }
    }, [])

    if (!factById) return <div>Loading...</div>


    return (
        <div style={{ textAlign: "center" }}>
            <h1>Fun Facts</h1>
            <img 
                src={factById.imageUrl}
                width="300px"
                alt="Louis Bonaparte"
            />
            <h3>Did you know that...</h3>

            <p>{factById.content}</p>
            <h4>Your answer was:</h4>
            <p>Bonaparte sounds like some famouse footbal player...</p>
        </div>
    )
}
