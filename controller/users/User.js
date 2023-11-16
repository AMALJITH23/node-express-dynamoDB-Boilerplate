const table = require("../../model/common/table");
const userModel = require("../../model/UserMaster");

const users = {};
users.addUser = (reqParams) => {
  return new Promise((resolve, reject) => {
    userModel
      .addItem(reqParams)
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
users.getAllUsers = (reqParams) => {
  return new Promise((resolve, reject) => {
    userModel
      .getAllUsers(reqParams)
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
users.getUser = (reqParams) => {
  return new Promise((resolve, reject) => {
    userModel
      .getUser(reqParams)
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
users.updateUser = (reqParams) => {
  return new Promise((resolve, reject) => {
    userModel
      .updateUser(reqParams)
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
users.deleteUser = (reqParams) => {
  return new Promise((resolve, reject) => {
    userModel
      .deleteUser(reqParams)
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

module.exports = users;
// export default users;
