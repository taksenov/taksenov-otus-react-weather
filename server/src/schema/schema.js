import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLBoolean,
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

export const gqlSchema = new GraphQLSchema({
  query: Query,
  // mutation: Mutation,
});
