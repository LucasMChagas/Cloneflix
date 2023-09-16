import {database} from '../database';
import {DataTypes, Model, Optional} from 'sequelize';

export interface MovieFile{
    id: number
    name: string
    synopsis: string    
    videoUrl: string
    secondsLong: number
    movieId: number
}

export interface MovieFileCreationAttributes
  extends Optional<MovieFile, 'id' | 'videoUrl' | 'secondsLong' > {}

export interface MovieFileInstance
extends Model<MovieFile, MovieFileCreationAttributes>, MovieFile{}

export const MovieFile = database.define<MovieFileInstance, MovieFile>('MovieFile', {
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
    videoUrl: {
      type: DataTypes.STRING
    },
    secondsLong: {
      type: DataTypes.INTEGER
    },
    movieId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'movies', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT'
    },     
  })