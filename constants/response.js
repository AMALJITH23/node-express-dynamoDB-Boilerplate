const successResponse = (message, data) => {
  return {
    status: true,
    message: message,
    data: data,
  };
};
const failedResponse = (message) => {
  return {
    status: false,
    message: message,
    data: {},
  };
};

module.exports = { successResponse, failedResponse };
