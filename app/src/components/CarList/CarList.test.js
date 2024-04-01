import React from 'react';
import { render, waitFor } from '@testing-library/react';
import axios from 'axios'; // Importando o Axios para fazer a requisição HTTP
import CarList from './CarList';

// Mock da resposta da API
jest.mock('axios');

test('renders car list correctly', async () => {
  // Dados esperados da API
  const expectedCars = [
    { id: '1', name: 'Mustang', brand: 'Ford', color: 'Preto', year: '1970' },
    { id: '2', name: 'Camaro', brand: 'GM', color: 'Amarelo', year: '2010' },
    // Adicione os outros carros esperados aqui
  ];

  // Configurando o mock da resposta da API
  axios.get.mockResolvedValue({ data: expectedCars });

  // Renderiza o componente que depende dos dados da API
  const { getByText } = render(<CarList />);

  // Espera que os carros sejam renderizados na tela
  await waitFor(() => {
    expectedCars.forEach(car => {
      expect(getByText(car.name)).toBeInTheDocument();
      expect(getByText(car.brand)).toBeInTheDocument();
      expect(getByText(car.color)).toBeInTheDocument();
      expect(getByText(car.year)).toBeInTheDocument();
    });
  });
});
