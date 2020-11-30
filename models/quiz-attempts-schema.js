const mongoose = require('mongoose');
const questionSchema = require('./questions-schema');
const quizAttempts = mongoose.Schema(
  {
    score: Number,
    quiz: { type: mongoose.Types.ObjectId, ref: 'QuizModel' },
    answers: [questionSchema],
  },
  { collection: 'quizAttempts' }
);
module.exports = quizAttempts;
