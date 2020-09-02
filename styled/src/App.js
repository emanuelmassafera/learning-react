import React from 'react';

import {Title, TitleSmall} from './styles';

function App() {
  return (
    <div>
        <Title fontSize={20}>
          Hello
          <span>World</span>
        </Title>

        <TitleSmall>Menor</TitleSmall>
    </div>
  );
}

export default App;
