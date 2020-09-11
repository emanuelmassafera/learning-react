import React from 'react';
import { Bar, Line } from 'react-chartjs-2';

import { Container } from './styles';

interface Props {
  data: {};
  options: {};
}

const Chart: React.FC<Props> = ({
  data,
  options,
}) => {

  return (
    <Container>
      <Line
        data={data} 
        options={options}
      />
    </Container>
  );
};

export default Chart;
