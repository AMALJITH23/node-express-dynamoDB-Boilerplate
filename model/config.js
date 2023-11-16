const AWS = require("aws-sdk");
const aws_config = require("../db");

// aws configs
AWS.config.update(aws_config);

const DynamoDB = new AWS.DynamoDB();
module.exports = DynamoDB;
