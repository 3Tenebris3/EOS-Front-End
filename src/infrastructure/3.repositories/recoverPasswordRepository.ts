import { IRecoverPasswordRepository } from '../../application/2.interfaces/recoverPassword';
import { Login } from '../../domain/1.entities/login';
import apiClient from '../0.apisDeclaration/exampleApi';

export class RecoverPasswordRepositoryImpl implements IRecoverPasswordRepository {
  async postRecoverPassword(login: Login): Promise<boolean> {
    try {
      const response = await apiClient.post<boolean>('recover',login);
      
      return response.data;
    } catch (error) {
      throw new Error('Error:'+ error);
    }
  }
}
