const quizzesModel = require('../models/quizzes-model');
const mongoose = require('mongoose').set('debug', true);
const findAllQuizzes = () => quizzesModel.find().populate('questions');

const findQuizById = (qid) => {
  return quizzesModel
    .findById(mongoose.Types.ObjectId(qid))
    .populate('questions');
};

module.exports = {
  findAllQuizzes,
  findQuizById,
};
