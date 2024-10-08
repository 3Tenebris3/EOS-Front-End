import { User } from '../../domain/1.entities/example';
import { Factura } from '../../domain/1.entities/factura';

export interface IFacturaRepository {
  postFactura(factura:Factura): Promise<boolean>;
}
