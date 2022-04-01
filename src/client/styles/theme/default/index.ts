import { DefaultTheme } from "styled-components";
import main from "./main";
import colors from "./colors";
import fonts from "./fonts";

const theme: DefaultTheme = {
  ...main,
  ...colors,
  ...fonts,
};

export { theme };
