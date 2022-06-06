import * as Linking from 'expo-linking';
import { Image, StyleSheet, View } from 'react-native';
import { Text, TouchableRipple, useTheme } from 'react-native-paper';

interface MovieObject {
  id: number;
  title: string;
  year: string;
  imageUri: string;
}

export function MovieCard({ movie }: { movie: MovieObject }) {
  const theme = useTheme();

  return (
    <TouchableRipple
      onPress={() => {
        Linking.openURL(`https://www.themoviedb.org/movie/${movie.id}`);
      }}
      rippleColor={theme.colors.onSurface}
      borderless={true}
      style={[
        { backgroundColor: theme.colors.surfaceVariant },
        styles.cardContainer,
      ]}
    >
      <>
        <Image source={{ uri: movie.imageUri }} style={styles.movieImage} />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.year}>{movie.year}</Text>
        </View>
      </>
    </TouchableRipple>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
  },
  movieImage: {
    width: 75,
    height: 100,
    borderRadius: 12,
    marginRight: 16,
  },
  infoContainer: {
    justifyContent: 'space-between',
    flex: 1,
  },
  title: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
    fontWeight: '700',
  },
  year: {
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.4,
  },
});
