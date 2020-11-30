const quizzesDao = require('../daos/quizzes-dao');

findAllQuizzes = () => quizzesDao.findAllQuizzes();
findQuizById = (qzid) => quizzesDao.findQuizById(qzid);

module.exports = {
  findAllQuizzes,
  findQuizById,
};
