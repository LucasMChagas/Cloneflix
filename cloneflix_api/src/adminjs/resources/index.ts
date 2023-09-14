import { ResourceWithOptions } from "adminjs";
import { Category, Movie } from "../../models";
import { categoryResourceOptions } from "./category";
import { movieResourceOptions } from "./movie";

export const adminJsResources: ResourceWithOptions[] = [
  {
    resource: Category,
    options: categoryResourceOptions
  },
  {
    resource: Movie,
    options: movieResourceOptions
  }
]