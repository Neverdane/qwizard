import * as api from "../api";

export const generateQuiz = ({
  questionsCount,
  filter,
  strategy
}) => dispatch => {
  dispatch({
    type: "GENERATE_QUIZ_REQUEST"
  });

  return api.generateQuiz({ questionsCount, filter, strategy }).then(result => {
    const quizId = result.id;

    dispatch({
      type: "GENERATE_QUIZ_SUCCESS",
      quizId
    });

    return quizId;
  });
};
