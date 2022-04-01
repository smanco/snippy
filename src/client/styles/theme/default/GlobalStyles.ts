import { css } from "@emotion/react";
import { theme } from "@styles/theme/default";

export const globalStyles = css`
  body{
    font-family: ${theme.fontFamily};
    background-color:  ${theme.background};
    color: ${theme.color};
    transition: all 0.50s linear; 
  }
`;
