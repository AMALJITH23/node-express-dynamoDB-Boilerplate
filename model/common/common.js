const DynamoDB = require("../config");
const { successResponse, failedResponse } = require("../../constants/response");
const messages = require("../../constants/messages");

const crud = {};
crud.executeQuery = (reqParams) => {
  return new Promise((resolve, reject) => {});
};

module.exports = crud;
