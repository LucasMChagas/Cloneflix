import { Category } from './Category';
import { Movie } from './Movie';
import { MovieFile } from './MovieFile';

Category.hasMany(Movie);

Movie.belongsTo(Category);
Movie.hasMany(MovieFile);

MovieFile.belongsTo(Movie)

export {
  Category,
  Movie,
  MovieFile
}