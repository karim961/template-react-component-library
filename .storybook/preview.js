import React from 'react';

import { ThemeProvider } from 'styled-components';
import theme from "../src/styles/theme";

export const decorators = [
  (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
  ),
];

export const parameters = {
  layout: 'centered',
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
