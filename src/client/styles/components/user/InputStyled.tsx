import styled from '@emotion/styled';
import { theme } from '@styles/theme/default';

const InputStyled = styled.input`
    display: block;
    height: 50px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.07);
    border-radius: 3px;
    padding: 0 10px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 0.5px;
    outline: none;
    border: none;
    color: ${theme.color};
`;

export default InputStyled;
