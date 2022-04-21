const Test = require("../database/models/testModel");

module.exports.createTest = async (serviceData) => {
  try {
    let test = new Test({ ...serviceData });
    let result = await test.save();

    return result.toObject();
  } catch (error) {
    console.log("Something went wrong: Service: createTest", error);
    throw new Error(error);
  }
};
