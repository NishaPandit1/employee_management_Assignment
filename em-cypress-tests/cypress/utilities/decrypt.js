var base64 = require("base-64");
const cred = require("../fixtures/example.json");

class loginFormData {
  static decoderdData(string) {
    return base64.decode(cred[string]);
  }
}

module.exports = loginFormData;
