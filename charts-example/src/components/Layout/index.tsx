import React, { useState } from 'react';

import { Container } from './styles';
import Chart from '../Chart';

const Layout: React.FC = () => {

  const [data, setData] = useState({
    labels: [
        '00h00',
        '03h00',
        '06h00',
        '09h00',
        '12h00',
        '15h00',
        '18h00',
        '21h00',
        '00h00',
    ],
    datasets: [
        {
            label: 'Erros',
            backgroundColor: 'rgba(200, 0, 0, 0.1)',
            borderColor: 'rgb(200, 0, 0)',
            data: [0, 0, 0, 2, 1, 1, 2],
            lineTension: 0,
            borderWidth: 1,
        },
        {
            label: 'Substituição',
            data: [0, 0, 0, 4, 12, 11, 18],
            borderColor: 'rgb(0, 0, 200)',
            backgroundColor: 'rgba(0, 0, 200, 0.1)',
            lineTension: 0,
            borderWidth: 1,
        },
        {
            label: 'Vendas',
            type: 'line',
            fill: false,
            data: [0, 0, 0, 48, 52, 37, 45],
            backgroundColor: 'rgba(0, 200, 0, 0.1)',
            borderColor: 'rgb(0, 200, 0)',
            lineTension: 0,
            borderWidth: 1,
        },
    ],
});

const [options, setOptions] = useState({
    legend: {
        position: 'bottom',
        align: 'center',
        labels: {
            boxWidth: 12,
            fontSize: 18,
            fontStyle: 'normal',
            fontColor: '#494949',
            fontFamily: `-apple-system, BlinkMacSystemFont, 'Quicksand', 'Segoe UI', 'Roboto'`,
            padding: 40,
            usePointStyle: true,
        },
    },
    maintainAspectRatio: true,
});

  function done(){
    console.log('To do!');
  }

  return (
    <Container>
      <Chart data={data} options={options}/>
    </Container>
  );
};

export default Layout;
