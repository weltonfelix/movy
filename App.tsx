import { Appearance, useColorScheme } from 'react-native';
import {
  DarkTheme,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import Home from './src/Home';

import { darkThemeKeys, lightThemeKeys } from './src/styles/theme';

const darkTheme = {
  ...DarkTheme,
  dark: true,
  colors: {
    ...DarkTheme.colors,
    primary: darkThemeKeys.primary,
    accent: darkThemeKeys.secondary,
    background: darkThemeKeys.surface,
    surfaceVariant: darkThemeKeys.surfaceVariant,
    onSurfaceVariant: darkThemeKeys.onSurfaceVariant,
    onSurface: darkThemeKeys.onSurface,
  },
};

const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: lightThemeKeys.primary,
    accent: lightThemeKeys.secondary,
    background: lightThemeKeys.surface,
    surfaceVariant: darkThemeKeys.surfaceVariant,
    onSurfaceVariant: darkThemeKeys.onSurfaceVariant,
    onSurface: darkThemeKeys.onSurface,
  },
};

export default function App() {
  const theme = useColorScheme() === 'dark' ? darkTheme : lightTheme;
  return (
    <PaperProvider theme={theme}>
      <Home />
    </PaperProvider>
  );
}
