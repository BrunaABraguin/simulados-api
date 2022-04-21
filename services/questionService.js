const Question = require("../database/models/questionModel");

module.exports.createQuestion = async (serviceData) => {
  try {
    let question = new Question({ ...serviceData });

    return await question.save();
  } catch (error) {
    console.log("Something went wrong: Service: createQuestion", error);
    throw new Error(error);
  }
};
