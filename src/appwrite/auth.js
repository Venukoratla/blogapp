import conf from "../config/config";

import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    console.log(email, "email");
    try {
      const userAcount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAcount) {
        // login the user if he successfully registered rather than going to login

        return this.loginUser();
        // return userAcount
      } else {
        return;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async loginUser({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log(error);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log(error);
    }

    return null;
  }

  async logOutUser() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log(error);
    }
  }
}

const authService = new AuthService();

export default authService;
