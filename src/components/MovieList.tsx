import { FlatList, View } from 'react-native';
import { MovieCard } from './MovieCard';

interface MovieObject {
  id: number;
  title: string;
  year: string;
  imageUri: string;
}

interface MovieListProps {
  movies: MovieObject[];
}

export function MovieList({ movies }: MovieListProps) {
  return (
    <FlatList
      data={movies}
      renderItem={({ item }: { item: MovieObject }) => (
        <>
          <MovieCard movie={item} />
          <View style={{ height: 8 }} />
        </>
      )}
    />
  );
}
