const questionsModel = require('../models/questions-model');
const quizzesModel = require('../models/quizzes-model');
const mongoose = require('mongoose').set('debug', true);

const findAllQuestions = () => questionsModel.find();
const findQuestionById = (qid) =>
  questionsModel.findById(mongoose.Types.ObjectId(qid));
const findQuestionsForQuiz = async (qzid) => {
  quizzesModel.findById(mongoose.Types.ObjectId(qzid)).then(async (quiz) => {
    await quiz.populate('question').execPopulate();
  });
  return quizzesModel
    .findById(mongoose.Types.ObjectId(qzid))
    .populate('questions')
    .then(async (quiz) => {
      await quiz.populate('questions').execPopulate();
      return quiz.questions;
    });
};

module.exports = { findAllQuestions, findQuestionById, findQuestionsForQuiz };
