import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      black: string;
      background: string;
      gray01: string;
      gray02: string;
      gray03: string;
      blue: string;
    };
    fonts: {
      inter900: string;
      inter300: string;
      inter400: string;
      inter500: string;
    };
  }
}
