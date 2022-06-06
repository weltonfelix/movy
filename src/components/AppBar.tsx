import * as React from 'react';
import { Appbar, useTheme } from 'react-native-paper';

interface AppBarProps {
  title: string;
}

export function AppBar({ title }: AppBarProps) {
  const { colors } = useTheme();
  return (
    <Appbar.Header
      style={{ height: 64, backgroundColor: colors.primary, elevation: 0 }}
    >
      <Appbar.Content title={title} style={{ alignItems: 'center' }} />
    </Appbar.Header>
  );
}
