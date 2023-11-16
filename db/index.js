const aws_config = {
  //   region: "us-east-1", // replace with your region in AWS account
  region: process.env.AWS_DDS_REGION,
  endpoint: process.env.AWS_DDS_ENDPOINT, // or the URL of your local DynamoDB
};

module.exports = aws_config;
