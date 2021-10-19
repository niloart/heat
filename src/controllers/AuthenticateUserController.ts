import { Request, Response } from "express";

class AuthenticateUsersController {
  async handle(request: Request, response: Response) {

    const service = new AuthenticateUsersController();
    // service.execute()
  }
}

export { AuthenticateUsersController }