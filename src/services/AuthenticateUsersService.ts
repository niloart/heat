import axios from "axios";

class AuthenticateUsersService {
  async execute(code: string) {
    const url = "https://github.com/login/oauth/access_token";

    const response = await axios.post(url, null, { headersparams: }

  }
}

export { AuthenticateUsersService };