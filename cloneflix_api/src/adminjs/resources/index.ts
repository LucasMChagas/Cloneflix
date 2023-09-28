import { ResourceWithOptions } from "adminjs";
import { Category, Movie, MovieFile } from "../../models";
import { categoryResourceOptions } from "./category";
import { movieResourceFeature, movieResourceOptions } from "./movie";
import { movieFileResourceOptions, movieFileResourceFeature } from "./movieFile";

export const adminJsResources: ResourceWithOptions[] = [
  {
    resource: Category,
    options: categoryResourceOptions
  },
  {
    resource: Movie,
    options: movieResourceOptions,
    features: movieResourceFeature
  },
  {
    resource: MovieFile,
    options: movieFileResourceOptions,
    features: movieFileResourceFeature
  }
];

