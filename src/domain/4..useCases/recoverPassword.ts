import { IRecoverPasswordRepository } from "../../application/2.interfaces/recoverPassword";
import { Login } from "../1.entities/login";

export class PostRecoverPassword {
  private recoverPasswordRepository: IRecoverPasswordRepository;

  constructor(recoverPasswordRepository: IRecoverPasswordRepository) {
    this.recoverPasswordRepository = recoverPasswordRepository;
  }

  async execute(login:Login): Promise<boolean> {
    console.log("Objeto:", login);    
    return await this.recoverPasswordRepository.postRecoverPassword(login);
  }
}
