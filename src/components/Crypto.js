import React from 'react';

const Crypto = ({ match }) => (
    <h1>{match.params.crypto}</h1>
)

export default Crypto;