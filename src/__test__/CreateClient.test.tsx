// src/presentation/screens/CreateClient.test.tsx

import { render, screen, fireEvent } from '@testing-library/react';
import CreateClient from '../presentation/6.screens/CreateClient';
import { FacturaServices } from '../application/5.services/facturaServices';

jest.mock('../application/5.services/facturaServices', () => {
    return {
        FacturaServices: jest.fn().mockImplementation(() => {
            return {
                postFactura: jest.fn().mockResolvedValue(true),
            };
        }),
    };
});

describe('CreateClient Component', () => {
    let instance: FacturaServices;
    beforeEach(() => {
        jest.clearAllMocks(); // Limpia todos los mocks antes de cada prueba
        
    });


    afterEach(() => {
        jest.clearAllMocks();
    });

    test('should render the CreateClient component', () => {
        render(<CreateClient />);
        const title = screen.getByText(/Crear Factura/i);
        expect(title).toBeInTheDocument();
    });

    it('displays error message for non-numeric input', async () => {
        render(<CreateClient />);

        const inputField = screen.getByPlaceholderText(/Ingrese el valor de la factura/i);
        fireEvent.change(inputField, { target: { value: 'abc' } });

        const pagarButton = screen.getByText(/Pagar/i);
        fireEvent.click(pagarButton);

        const errorMessage = await screen.findByText(/Por favor, ingrese solo números./i);
        expect(errorMessage).toBeInTheDocument();
    });


    test('should render the CreateClient component', () => {
        render(<CreateClient />);
        const label = screen.getByLabelText(/Valor Factura/i);
        expect(label).toBeInTheDocument();
    });


    test('should show snackbar with success message when postFactura is successful', async () => {
        render(<CreateClient />);

        const input = screen.getByPlaceholderText(/Ingrese el valor de la factura/i);
        fireEvent.change(input, { target: { value: '100' } });

        const button = screen.getByText(/Pagar/i);
        fireEvent.click(button);
    });
});
