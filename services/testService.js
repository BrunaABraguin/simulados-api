const Test = require("../database/models/testModel");

module.exports.createTest = async (serviceData) => {
  try {
    let test = new Test({ ...serviceData });

    return await test.save();
  } catch (error) {
    console.log("Something went wrong: Service: createTest", error);
    throw new Error(error);
  }
};
