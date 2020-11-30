const quizAttemptsModel = require('../models/quiz-attempts-model');
const mongoose = require('mongoose').set('debug', true);

const scoreQuiz = (questions) => {
  let numberOfCorrectQuestions = 0;
  questions.forEach((question) => {
    if (question.answer == question.correct) {
      numberOfCorrectQuestions++;
    }
  });
  return (100 * numberOfCorrectQuestions) / questions.length;
};

const findAttemptsForQuiz = (qzid) => {
  return quizAttemptsModel
    .find({ quiz: qzid })
    .populate({ path: 'quiz', select: 'title' });
};
const createAttempt = (qid, attempt) => {
  return quizAttemptsModel.create({
    quiz: mongoose.Types.ObjectId(qid),
    answers: attempt,
    score: scoreQuiz(attempt),
  });
};

module.exports = { createAttempt, findAttemptsForQuiz };
