const testService = require("../services/testService");

module.exports.createTest = async (req, res, next) => {
  const response = {};
  try {
    const responseFromService = await testService.createTest(req.body);
    response.status = 200;
    response.message = "Test created successfully";
    response.body = responseFromService;
  } catch (error) {
    console.log("Something went wrong: Controller: createTest", error);
    response.status = 400;
    response.message = error.message;
    response.body = {};
  }

  return res.status(response.status).send(response);
};
