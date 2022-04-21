const Question = require("../database/models/questionModel");

module.exports.createQuestion = async (serviceData) => {
  try {
    let question = new Question({ ...serviceData });
    let result = await question.save();

    return result.toObject();
  } catch (error) {
    console.log("Something went wrong: Service: createQuestion", error);
    throw new Error(error);
  }
};
