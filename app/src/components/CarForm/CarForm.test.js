import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios'; // Importando o Axios para fazer a requisição HTTP
import CarForm from './CarForm';

// Mock da resposta da API
jest.mock('axios');

test('submitting form calls onSubmit with correct values', async () => {
  // Dados esperados da API
  const expectedCar = {
    name: 'Fusca',
    brand: 'Volkswagen',
    color: 'Azul',
    year: '1970'
  };

  // Configurando o mock da resposta da API
  axios.post.mockResolvedValueOnce({ data: expectedCar });

  // Renderiza o componente que depende dos dados da API
  const { getByLabelText, getByText } = render(<CarForm />);

  // Preenche o formulário com os dados esperados
  fireEvent.change(getByLabelText('Modelo:'), { target: { value: expectedCar.name } });
  fireEvent.change(getByLabelText('Marca:'), { target: { value: expectedCar.brand } });
  fireEvent.change(getByLabelText('Cor:'), { target: { value: expectedCar.color } });
  fireEvent.change(getByLabelText('Ano:'), { target: { value: expectedCar.year } });

  // Simula o envio do formulário
  fireEvent.click(getByText('Adicionar'));

  // Espera pela chamada da API
  await waitFor(() => {
    expect(axios.post).toHaveBeenCalledWith('/api/cars', expectedCar);
  });
});
