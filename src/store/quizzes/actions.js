import { API_URL } from '../../config/constants';
import axios from 'axios';

export const FETCH_QUIZ = "FETCH_QUIZ";

export const fetchQuizSuccess = (quiz) => ({
  type: FETCH_QUIZ,
  payload: quiz
})

export const fetchQuiz = () => {
  return async(dispatch, getState) => {
    const quizzes = await axios.get(`${API_URL}/quizzes`);
    dispatch(fetchQuizSuccess(quizzes.data.quiz));
  }
}