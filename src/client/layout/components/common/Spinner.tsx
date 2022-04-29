import React from 'react';
import SpinnerStyled from '@styles/components/common/SpinnerStyled';

const Spinner: React.FC = () => {
    return (
        <SpinnerStyled>
            <div className='typing_loader'></div>
        </SpinnerStyled>
    );
};

export default Spinner;
