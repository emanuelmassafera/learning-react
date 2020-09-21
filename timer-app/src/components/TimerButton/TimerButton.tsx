import React, { FC, FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import './TimerButton.css'

interface Props {
    buttonAction: Function,
    buttonValue: string
}

const TimerButton: React.FC<Props> = ( { buttonAction, buttonValue }) => {
    return (
        <div className='button-container' onClick={() => buttonAction()}>
            <p className="button-value">{buttonValue}</p>
        </div>
    );
}

TimerButton.propTypes = {
    buttonAction: PropTypes.func.isRequired,
    buttonValue: PropTypes.string.isRequired
};

export default TimerButton;