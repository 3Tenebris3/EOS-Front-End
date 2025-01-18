import { PostRecoverPassword } from '../../domain/4..useCases/recoverPassword';
import { RecoverPasswordRepositoryImpl } from '../../infrastructure/3.repositories/recoverPasswordRepository';
import { Login } from '../../domain/1.entities/login';

export class RecoverPasswordServices {
  private postRecoverPassword: PostRecoverPassword;

  constructor() {
    const recoverPasswordRepository = new RecoverPasswordRepositoryImpl();
    this.postRecoverPassword = new PostRecoverPassword(recoverPasswordRepository);
  }

  async postFactura(login:Login): Promise<boolean> {
    return await this.postRecoverPassword.execute(login);
  }
}
