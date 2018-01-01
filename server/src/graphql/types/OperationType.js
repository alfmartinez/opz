import {GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString} from "graphql";

export const OperationType = new GraphQLObjectType({
    name: 'Operation',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        episode: {
            type: GraphQLString
        }
    }
});