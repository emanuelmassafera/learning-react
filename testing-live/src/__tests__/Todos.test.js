import React from 'react';
import { shallow } from 'enzyme';
import Todos from '../Todos';

import configureStore from 'redux-mock-store';
const mockStore = configureStore();

const initialState = {
    todos: [
        {id: 0, text: 'Fazer café'},
        {id: 1, text: 'Tomar o café'},
        {id: 2, text: 'Lavar a louça'},
    ],
};

const store = mockStore(initialState);

describe('Testing Todos Component', () => {
    it('should render correctly', () => {
        const wrapper = shallow(
            <Todos />,
            { context: { store }}
        ).dive();

        expect(wrapper).toMatchSnapshot();
    });
}); 