import uploadFileFeature from "@adminjs/upload";
import { ResourceOptions, FeatureType } from "adminjs";
import path from "path";

export const movieFileResourceOptions: ResourceOptions = {
  navigation: 'Catálogo',
  editProperties: ['name', 'synopsis', 'movieId', 'uploadVideo', 'secondsLong' ],
  filterProperties: ['name', 'synopsis', 'movieId', 'secondsLong', 'createdAt', 'updatedAt'],
  listProperties: ['id', 'name', 'movieId', 'secondsLong'],
  showProperties: ['id', 'name', 'synopsis', 'movieId', 'videoUrl', 'secondsLong', 'createdAt', 'updatedAt']
};

export const movieFileResourceFeature: FeatureType[] = [
  uploadFileFeature({
    provider: {
      local: {
        bucket: path.join(__dirname, '../../../uploads')
      }
    },
    properties: {
      key: 'videoUrl',
      file: 'uploadVideo'      
    },
    uploadPath:(record, filename) => `videos/movie-${record.get('movieId')}/${filename}`
  })
]