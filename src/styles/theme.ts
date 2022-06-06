export const colors = {
  purple500: '#733993',
  pink500: '#DC136A',
  blue500: '#4C63BD',
  blue700: '#273469',
  gray900: '#30343F',
  gray800: '#49454F',
  gray300: '#8E8993',
  gray50: '#FAFAFF',
};

const baseThemeKeys = {
  primary: colors.blue500,
  secondary: colors.purple500,
  tertiary: colors.pink500,
};

export const darkThemeKeys = {
  ...baseThemeKeys,
  surface: colors.gray900,
  surfaceVariant: colors.gray800,
  onSurface: colors.gray50,
  onSurfaceVariant: colors.gray300,
};

export const lightThemeKeys = {
  ...baseThemeKeys,
  surface: colors.gray50,
  surfaceVariant: colors.gray300,
  onSurface: colors.gray900,
  onSurfaceVariant: colors.gray800,
};
