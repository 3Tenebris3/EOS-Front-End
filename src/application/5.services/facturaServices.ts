import { PostFactura } from '../../domain/4..useCases/facturaCase';
import { FacturaRepositoryImpl } from '../../infrastructure/3.repositories/facturaRepository';
import { Factura } from '../../domain/1.entities/factura';

export class FacturaServices {
  private postFacturaUseCase: PostFactura;

  constructor() {
    const facturaRepository = new FacturaRepositoryImpl();
    this.postFacturaUseCase = new PostFactura(facturaRepository);
  }

  async postFactura(factura:Factura): Promise<boolean> {
    return await this.postFacturaUseCase.execute(factura);
  }
}
