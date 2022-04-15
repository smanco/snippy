import styled from '@emotion/styled';

const ButtonStyled = styled.button`
    background: ${props => props.theme.primary[500]};
    border-radius: 3px;
    padding: 0.5em 1em;
    margin: 0.1em;
    border: none;
    color: white;
`;

export default ButtonStyled;
