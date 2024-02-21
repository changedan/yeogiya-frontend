import { PropsWithChildren, ReactElement } from "react";
import { ThemeProvider } from "@emotion/react";
import { render, RenderOptions } from "@testing-library/react";

import theme from "@/styles/theme";
import GlobalStyle from "@/styles/GlobalStyle";

const RenderWithThemeProvider = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export const customRender = (ui: ReactElement, options?: RenderOptions) => {
  return render(ui, { wrapper: RenderWithThemeProvider, ...options });
};
