import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';
import mongoose from 'mongoose';

import '../models/favourite';

const FavouriteModel = mongoose.model('Favourite');

/**
 * Тип: Города добавленные в избранное
 */
const FavouriteType = new GraphQLObjectType({
  name: 'Favourite',
  fields: () => ({
    id: { type: GraphQLID },
    cityID: { type: new GraphQLNonNull(GraphQLInt) },
    date: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    temperature: { type: new GraphQLNonNull(GraphQLString) },
    feelsLike: { type: new GraphQLNonNull(GraphQLString) },
    pressure: { type: new GraphQLNonNull(GraphQLString) },
    humidity: { type: new GraphQLNonNull(GraphQLString) },
  }),
});

/**
 * Запрос GraphQL Query
 */
const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'GraphQL Query',
  fields: {
    favouriteCity: {
      description: 'Город из избранного',
      type: FavouriteType,
      args: { id: { type: GraphQLID } },
      resolve(parent, { id }) {
        return FavouriteModel.findById(id);
      },
    },

    favouriteCities: {
      description: 'Список городов добавленных в избранное',
      type: new GraphQLList(FavouriteType),
      resolve() {
        return FavouriteModel.find({});
      },
    },
  },
});

/**
 * Мутация GraphQL Mutation
 */
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'GraphQL Mutation',
  fields: {
    addFavouriteCity: {
      description: 'Добавить город в избранное',
      type: FavouriteType,
      args: {
        cityID: { type: new GraphQLNonNull(GraphQLInt) },
        date: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        temperature: { type: new GraphQLNonNull(GraphQLString) },
        feelsLike: { type: new GraphQLNonNull(GraphQLString) },
        pressure: { type: new GraphQLNonNull(GraphQLString) },
        humidity: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(
        parent,
        { cityID, date, name, temperature, feelsLike, pressure, humidity },
      ) {
        const favouriteCity = new FavouriteModel({
          cityID,
          date,
          name,
          temperature,
          feelsLike,
          pressure,
          humidity,
        });
        return favouriteCity.save();
      },
    },

    deleteFavouriteCity: {
      description: 'Удалить город из избранного',
      type: FavouriteType,
      args: { id: { type: GraphQLID } },
      resolve(parent, { id }) {
        return FavouriteModel.findByIdAndRemove(id);
      },
    },

    updateFavouriteCity: {
      description: 'Обновить данные о городе в избранном',
      type: FavouriteType,
      args: {
        id: { type: GraphQLID },
        cityID: { type: new GraphQLNonNull(GraphQLInt) },
        date: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        temperature: { type: new GraphQLNonNull(GraphQLString) },
        feelsLike: { type: new GraphQLNonNull(GraphQLString) },
        pressure: { type: new GraphQLNonNull(GraphQLString) },
        humidity: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(
        parent,
        { id, cityID, date, name, temperature, feelsLike, pressure, humidity },
      ) {
        return FavouriteModel.findByIdAndUpdate(
          id,
          {
            $set: {
              cityID,
              date,
              name,
              temperature,
              feelsLike,
              pressure,
              humidity,
            },
          },
          { new: true },
        );
      },
    },
  },
});

export const gqlSchema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});
