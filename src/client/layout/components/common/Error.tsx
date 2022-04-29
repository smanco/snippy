import React from 'react';
import SpinnerStyled from '@styles/components/common/SpinnerStyled';

interface IErrorProps {
    error: TypeError;
}

const Error: React.FC<IErrorProps> = ({ error }) => {
    return (
        <div>
            <h1>Application Error</h1>
            <pre style={{ whiteSpace: 'pre-wrap' }}>{error.stack}</pre>
        </div>
    );
};

export default Error;
