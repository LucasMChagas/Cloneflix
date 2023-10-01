import { ResourceWithOptions } from "adminjs";
import { Category, Movie, MovieFile, User } from "../../models";
import { categoryResourceOptions } from "./category";
import { movieResourceFeature, movieResourceOptions } from "./movie";
import { movieFileResourceOptions, movieFileResourceFeature } from "./movieFile";
import { userResourceOptions } from "./user";

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
  },
  {
    resource: User,
    options: userResourceOptions
  }
];

