import { TextInput, useTheme } from 'react-native-paper';
import debounce from '../util/debounce';

interface SearchBarProps {
  label: string;
  onSearchValueChange: (value: string) => void;
}

export function SearchBar({ label, onSearchValueChange }: SearchBarProps) {
  const theme = useTheme();
  const runDebounce = debounce();

  function handleSearch(value: string) {
    runDebounce(() => {
      onSearchValueChange(value);
    });
  }

  return (
    <TextInput
      label={label}
      autoFocus={true}
      onChangeText={handleSearch}
      style={{ backgroundColor: theme.colors.surfaceVariant }}
    />
  );
}
