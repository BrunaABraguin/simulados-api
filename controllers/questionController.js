const questionService = require("../services/questionService");

module.exports.createQuestion = async (req, res, next) => {
  const response = {};
  try {
    const responseFromService = await questionService.createQuestion(req.body);
    response.status = 200;
    response.message = "Question created successfully";
    response.body = responseFromService;
  } catch (error) {
    console.log("Something went wrong: Controller: createQuestion", error);
    response.status = 400;
    response.message = error.message;
    response.body = {};
  }

  return res.status(response.status).send(response);
};
