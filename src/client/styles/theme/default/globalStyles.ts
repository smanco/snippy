import { css } from '@emotion/react';
import { theme } from '@styles/theme/default';

export const globalStyles = css`
    *,
    *:before,
    *:after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body {
        font-family: ${theme.fontFamily};
        background-color: ${theme.background};
        color: ${theme.color};
        transition: all 0.5s linear;
    }
    a {
        text-decoration: none;
        color: gold;
    }
    hr {
        border: 1px solid rgba(255, 255, 255, 0.1);
    }
    ::placeholder {
        color: #e5e5e5;
    }
`;
