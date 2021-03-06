import React from 'react';
import PropTypes from 'prop-types';
import './Chip.scss'

const Chip = ({label}) => {
    return (
        <div className={'chip'}>
            {label}
        </div>
    );
};

Chip.propTypes = {
    label: PropTypes.string.isRequired
};

export default Chip;
