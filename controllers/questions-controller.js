const service = require('../services/questions-service');
module.exports = function (app) {
  app.get('/api/quizzes/:qid/questions', (req, res) =>
    service
      .findQuestionsForQuiz(req.params['qid'])
      .then((questions) => res.json(questions))
  );
  app.get('/api/questions', (req, res) =>
    service.findAllQuestions().then((allQuestions) => res.json(allQuestions))
  );
  app.get('/api/questions/:qid', (req, res) =>
    service
      .findQuestionById(req.params['qid'])
      .then((question) => res.json(question))
  );
};
