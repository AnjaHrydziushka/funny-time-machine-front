import React, { useEffect } from 'react';
import { fetchFactsById } from '../store/facts/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function FactPage() {

    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(fetchFactsById(id))
    }, [])

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Fun Facts</h1>
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/1/1b/307-Portret_van_Lodewijk_Napoleon%2C_koning_van_Holland.jpg"
                width="300px"
                alt="Louis Bonaparte"
            />
            <h3>Did you know that...</h3>
            <p>Napoleon made his brother Louis the king of Holland, but in a few years get a serious quarrel with his brother. Napoleon wanted Dutch troops for his invasion of Russia. Louis refused; Napoleon then suggested that Louis should abdicate but he refused. Napoleon removed Louis from the Dutch throne and took over the entire Kingdom of Holland on July 1, 1810.</p>
            <h4>Your answer was:</h4>
            <p>Bonaparte sounds like some famouse footbal player...</p>
        </div>
    )
}
