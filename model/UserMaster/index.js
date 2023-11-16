const DynamoDB = require("../config");
const { successResponse, failedResponse } = require("../../constants/response");
const messages = require("../../constants/messages");

const crud = {};
crud.addItem = (reqParams) => {
  return new Promise((resolve, reject) => {
    const params = {
      TableName: "UserMaster",
      Item: {
        email: { S: reqParams.email },
        firstName: { S: reqParams.firstName },
        lastName: { S: reqParams.lastName },
      },
    };

    DynamoDB.putItem(params, function (err, data) {
      if (err) {
        reject(failedResponse(err));
      } else {
        resolve(successResponse(messages.common.added, data));
      }
    });
  });
};

crud.getAllUsers = (reqParams) => {
  return new Promise((resolve, reject) => {
    const params = {
      TableName: "UserMaster",
    };

    DynamoDB.scan(params, function (err, data) {
      if (err) {
        reject(failedResponse(err));
      } else {
        resolve(successResponse(messages.common.fetched, data.Items));
      }
    });
  });
};

crud.getUser = (reqParams) => {
  return new Promise((resolve, reject) => {
    const params = {
      TableName: "UserMaster",
      Key: {
        email: { S: reqParams.email },
      },
    };

    DynamoDB.getItem(params, function (err, data) {
      if (err) {
        reject(failedResponse(err));
      } else {
        resolve(successResponse(messages.common.fetched, data.Item));
      }
    });
  });
};

crud.updateUser = (reqParams) => {
  return new Promise((resolve, reject) => {
    Item = {};
    if (reqParams.email) Item.email = { S: reqParams.email };
    if (reqParams.firstName) Item.firstName = { S: reqParams.firstName };
    if (reqParams.lastName) Item.lastName = { S: reqParams.lastName };
    const params = {
      TableName: "UserMaster",
      Item: Item,
      ReturnConsumedCapacity: "TOTAL",
    };

    DynamoDB.putItem(params, function (err, data) {
      if (err) {
        reject(failedResponse(err));
      } else {
        resolve(successResponse(messages.common.updated, data));
      }
    });
  });
};

crud.deleteUser = (reqParams) => {
  return new Promise((resolve, reject) => {
    const params = {
      TableName: "UserMaster",
      Key: {
        email: { S: reqParams.email },
      },
    };

    DynamoDB.deleteItem(params, function (err) {
      if (err) {
        reject(failedResponse(err));
      } else {
        resolve(successResponse(messages.common.deleted, {}));
      }
    });
  });
};

module.exports = crud;
