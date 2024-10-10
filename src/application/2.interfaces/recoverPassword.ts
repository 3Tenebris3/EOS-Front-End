import { Login } from '../../domain/1.entities/login';

export interface IRecoverPasswordRepository {
  postRecoverPassword(login:Login): Promise<boolean>;
}
