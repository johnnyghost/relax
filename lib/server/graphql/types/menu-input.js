import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLID,
  GraphQLList
} from 'graphql';

import menuDataInputType from './menu-data-input';

const menuInputType = new GraphQLInputObjectType({
  name: 'MenuInput',
  fields: {
    _id: {type: GraphQLID},
    title: {type: GraphQLString},
    date: {
      type: GraphQLFloat,
      resolve: () => Date.now()
    },
    updatedDate: {
      type: GraphQLFloat,
      resolve: () => Date.now()
    },
    updatedBy: {type: GraphQLString},
    createdBy: {type: GraphQLString},
    data: {
      type: new GraphQLList(menuDataInputType)
    }
  }
});

export default menuInputType;
