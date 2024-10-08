// src/infrastructure/repositories/UserRepositoryImpl.ts

import { IFacturaRepository } from '../../application/2.interfaces/facturaInterface';
import apiClient from '../apisDeclaration/exampleApi';
import { Factura } from '../../domain/1.entities/factura';

export class FacturaRepositoryImpl implements IFacturaRepository {
  async postFactura(factura:Factura): Promise<boolean> {
    try {
      const response = await apiClient.post<boolean>('recordBilling',factura);
      
      return response.data;
    } catch (error) {
      throw new Error('Error:'+ error);
    }
  }
}
