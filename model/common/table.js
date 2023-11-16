const DynamoDB = require("../config");
const testModel = (reqParams) => {
  return new Promise((resolve, reject) => {
    resolve("success");
  });
};

const createTable = (reqParams) => {
  return new Promise((resolve, reject) => {
    const KeySchema = JSON.parse(reqParams.KeySchema);
    const AttributeDefinitions = JSON.parse(reqParams.AttributeDefinitions);

    // // SAMPLE STRUCTURE
    // const KeySchema = [
    //   {
    //     AttributeName: "title",
    //     KeyType: "HASH",
    //   },
    // ];
    // const AttributeDefinitions = [
    //   {
    //     AttributeName: "title",
    //     AttributeType: "S",
    //   },
    // ];
    // if (!tableName) {
    //   return Error("no table name provided");
    // } else if (!tableStructure.length) {
    //   return Error("no table structure provided");
    // } else {}
    const params = {
      TableName: reqParams.tableName,
      KeySchema: KeySchema,
      AttributeDefinitions: AttributeDefinitions,
      ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10,
      },
    };

    DynamoDB.createTable(params, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

module.exports = {
  createTable,
  testModel,
};
