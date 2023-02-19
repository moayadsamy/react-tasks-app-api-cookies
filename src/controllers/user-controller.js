import axios from "axios";
import ProcessResponse from "../models/ProcessResponse";

class UserController {
  async setCookie() {
    try {
      axios.defaults.withCredentials = true;
      axios.defaults.baseURL = "https://tasks-api.mr-dev.tech/";
      // axios.defaults.baseURL = "http://localhost:8000";
      let response = await axios.get("/sanctum/csrf-cookie");
      return true;
    } catch (error) {
      console.log(error);
    }
  }
  async register(user) {
    if (
      user.name != "" &&
      user.email != "" &&
      user.password != "" &&
      user.passwordConfirmation != ""
    ) {
      if (user.password == user.passwordConfirmation) {
        //
      } else {
        return new ProcessResponse(false, "password Confirmation error!");
      }
    } else {
      return new ProcessResponse(false, "Enter required data!");
    }
  }

  async signIn(user) {
    if (user.email != "" && user.password != "") {
      let status = await this.setCookie();
      if (status) {
        console.log("Set Cookie Success, Login");
        axios.defaults.withCredentials = true;
        axios.defaults.baseURL = "http://tasks-api.mr-dev.tech/api/";
        let response = await axios.post("auth/login", {
          email: user.email,
          password: user.password,
        });
        return ProcessResponse(true, "Logged In successfully");
      } else {
        console.log("Failed to execute Set Cookie request");
      }
    } else {
      return new ProcessResponse(false, "Enter required data!");
    }
  }

  async signOut(user) {
    let response = user.signOut();
  }
}
export default UserController;
