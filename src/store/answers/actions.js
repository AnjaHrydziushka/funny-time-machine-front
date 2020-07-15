import { API_URL } from '../../config/constants';
import axios from 'axios';

export const POST_ANSWER = 'POST_ANSWER';

export const postAnswerSuccess = (answer) => ({
  type: POST_ANSWER,
  payload: answer
})

export const postAnswer = (quizId, answer) => {
  return async(dispatch, getState) => {
    const answers = await axios.post(`${API_URL}/answers`, {
      quizId,
      answer: answer,
    })
    dispatch(postAnswerSuccess(answers.data.answer))
  }
}