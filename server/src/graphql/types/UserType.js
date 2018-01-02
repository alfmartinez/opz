import {GraphQLObjectType, GraphQLID, GraphQLString,GraphQLNonNull} from "graphql";

export const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        username: {
            type: GraphQLString
        }
    }
});