import { ResourceWithOptions } from "adminjs";
import { Category, Movie, MovieFile } from "../../models";
import { categoryResourceOptions } from "./category";
import { movieResourceOptions } from "./movie";
import { movieFileResourceOptions } from "./movieFile";

export const adminJsResources: ResourceWithOptions[] = [
  {
    resource: Category,
    options: categoryResourceOptions
  },
  {
    resource: Movie,
    options: movieResourceOptions
  },
  {
    resource: MovieFile,
    options: movieFileResourceOptions
  }
]