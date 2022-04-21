const testService = require("../services/testService");
const constants = require("../constants");

module.exports.createTest = async (req, res, next) => {
  const response = { ...constants.defaultServerResponse };
  try {
    const responseFromService = await testService.createTest(req.body);
    response.status = 200;
    response.message = constants.testMessages.TEST_CREATED;
    response.body = responseFromService;
  } catch (error) {
    console.log("Something went wrong: Controller: createTest", error);
    response.message = error.message;
  }

  return res.status(response.status).send(response);
};
