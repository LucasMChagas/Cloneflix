import { Category } from './Category';
import { Movie } from './Movie';

Category.hasMany(Movie);

Movie.belongsTo(Category);


export {
  Category,
  Movie
}