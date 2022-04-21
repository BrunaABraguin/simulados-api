const questionService = require("../services/questionService");
const constants = require("../constants");

module.exports.createQuestion = async (req, res, next) => {
  const response = {...constants.defaultServerResponse};
  try {
    const responseFromService = await questionService.createQuestion(req.body);
    response.status = 200;
    response.message = constants.questionMessages.QUESTION_CREATED;
    response.body = responseFromService;
  } catch (error) {
    console.log("Something went wrong: Controller: createQuestion", error);
    response.message = error.message;
  }

  return res.status(response.status).send(response);
};
