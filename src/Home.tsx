import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  ActivityIndicator,
  Snackbar,
  Text,
  useTheme
} from 'react-native-paper';
import { AppBar } from './components/AppBar';
import { MovieList } from './components/MovieList';
import { SearchBar } from './components/SearchBar';
import { getMovies } from './services/tmdbApi';


function Home() {
  const theme = useTheme();

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const [snackbar, setSnackbar] = useState({
    visible: false,
    message: '',
  });

  async function handleSearch(query: string) {
    if (query.length <= 0) return;

    setIsLoading(true);
    try {
      const movies = await getMovies(query);
      setMovies(movies);
    } catch (error) {
      setSnackbar({
        visible: true,
        message: 'There was an error while searching for movies.',
      });
      console.error(`Error while searching for ${query}: ${error}`);
    }
    setIsLoading(false);
  }

  return (
    <View
      style={[
        {
          backgroundColor: theme.colors.background,
        },
        styles.appWrapper,
      ]}
    >
      <AppBar title="Movy" />
      <View style={styles.container}>
        <SearchBar
          label="Search for your favorite movies"
          onSearchValueChange={(value) => {
            setSearchValue(value);
            handleSearch(value);
          }}
        />

        <View style={{ height: 32 }} />
        {isLoading ? (
          <ActivityIndicator size="large" />
        ) : movies.length > 0 ? (
          <MovieList movies={movies} />
        ) : searchValue.length > 0 ? (
          <Text style={styles.songsText}>No movies found</Text>
        ) : (
          <Text style={styles.songsText}>Type a movie name to search</Text>
        )}
      </View>
      <Snackbar
        visible={snackbar.visible}
        action={{
          label: 'Retry',
          onPress: () => {
            handleSearch(searchValue);
            setSnackbar((prevState) => ({
              ...prevState,
              setVisible: false,
            }));
          },
        }}
        onDismiss={() => {
          setSnackbar((prevState) => ({
            ...prevState,
            visible: false,
          }));
        }}
      >
        {snackbar.message}
      </Snackbar>
    </View>
  );
}

const styles = StyleSheet.create({
  appWrapper: {
    flex: 1,
  },
  container: {
    paddingTop: 32,
    paddingHorizontal: 16,
    flex: 1,
  },
  songsText: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.5,
    fontWeight: '600',
  },
});

export default Home;
