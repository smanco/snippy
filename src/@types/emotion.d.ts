import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    fontFamily: string;
    background: string;
    color: string;
    primary: Record<number, string>;
    secondary: Record<number, string>;
    dark: string;
  }
}