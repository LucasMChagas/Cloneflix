import {database} from '../database';
import { DataTypes, Model, Optional } from 'sequelize';

export interface Movie{
    id: number
    name: string
    synopsis: string
    thumbnailUrl: string
    featured: boolean
    categoryId: number
}

export interface MovieCreationAttributes extends Optional<Movie, 'id' | 'thumbnailUrl' | 'featured' > {}

export interface MovieInstance extends Model<Movie, MovieCreationAttributes>, Movie {}

export const Movie = database.define<MovieInstance, Movie>('Movie', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    synopsis: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    thumbnailUrl: {
      type: DataTypes.STRING
    },
    featured: {
      defaultValue: false,
      type: DataTypes.BOOLEAN
    },
    categoryId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'categories', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT'
    }
  })