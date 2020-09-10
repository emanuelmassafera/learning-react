import React, { useState } from 'react';

import { Container } from './styles';
import Chart from '../Chart';

const Layout: React.FC = () => {

  const [data, setData] = useState({
    labels: ['00h00', '03h00', '06h00', '09h00', '12h00', '15h00', '18h00', '21h00', '00h00'],
    datasets: [
      {
        label: 'Erros',
        data: [0, 0, 0, 2, 1, 1, 2],
        backgroundColor: ['rgba(200, 0, 0, 0.1)'],
        borderColor: ['rgb(200, 0, 0)'],
        lineTension: 0,
      },
      {
        label: 'Substituição',
        data: [0, 0, 0, 4, 12, 11, 18],
        borderColor: ['rgb(0, 0, 200)'],
        backgroundColor: ['rgba(0, 0, 200, 0.1)'],
        lineTension: 0,
      },
      {
        label: 'Vendas',
        data: [0, 0, 0, 48, 52, 37, 45],
        backgroundColor: ['rgba(0, 200, 0, 0.1)'],
        borderColor: ['rgb(0, 200, 0)'],
        lineTension: 0,
      },
    ]
  });

  const [options, setOptions] = useState({
    legend: {
      position: 'bottom',
      align: 'center',
      labels: {
        boxWidth: 20, 
        fontSize: 18,
        fontStyle: 'normal',
        fontColor: '#141514',
        fontFamily: "'Roboto', sans-serif",
        padding: 10,
        usePointStyle: true,
      }
    },
  });



  return (
    <Container>
      <Chart data={data} options={options}/>
    </Container>
  );
};

export default Layout;
