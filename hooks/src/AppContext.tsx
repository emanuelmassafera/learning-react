import React, { useContext, useReducer } from 'react';

import CartContext from './CartContext';

const AppContext: React.FC = () => {
    const { products } = useContext(CartContext);

    return (
        <div>
            {products.map(product => product.name)}
        </div>
    );
}

export default AppContext;