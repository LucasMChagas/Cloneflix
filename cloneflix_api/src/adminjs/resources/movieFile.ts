import { ResourceOptions } from "adminjs";

export const movieFileResourceOptions: ResourceOptions = {
  navigation: 'Catálogo',
  editProperties: ['name', 'synopsis', 'movieId', 'uploadVideo', 'secondsLong' ],
  filterProperties: ['name', 'synopsis', 'movieId', 'secondsLong', 'createdAt', 'updatedAt'],
  listProperties: ['id', 'name', 'movieId', 'secondsLong'],
  showProperties: ['id', 'name', 'synopsis', 'movieId', 'videoUrl', 'secondsLong', 'createdAt', 'updatedAt']
}