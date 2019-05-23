import React from 'react';
import PropTypes from 'prop-types';

export default function SizedBox({ height, width }) {
    return <span style={{
        display: "block",
        width: `${width}rem,`,
        height: `${height}rem`
    }}
    />
}

SizedBox.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
}