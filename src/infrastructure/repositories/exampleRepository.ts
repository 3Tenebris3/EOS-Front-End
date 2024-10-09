// src/infrastructure/repositories/UserRepositoryImpl.ts

import { IUserRepository } from '../../application/2.interfaces/exampleInterface';
import apiClient from '../0.apisDeclaration/apiClient'; // Asegúrate de que la ruta es correcta
import { User, UserProps } from '../../domain/1.entities/example';

export class UserRepositoryImpl implements IUserRepository {
  async getUsers(): Promise<User[]> {
    try {
      const response = await apiClient.get<UserProps[]>('/api/protegido'); // Cambia el endpoint según tu backend
      // Mapear los datos obtenidos al modelo de dominio
      return response.data.map((userData) => new User(userData));
    } catch (error) {
      throw new Error('Error al obtener usuarios del API');
    }
  }
}
