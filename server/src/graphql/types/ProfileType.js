import {GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString} from "graphql";

export const ProfileType = new GraphQLObjectType({
    name: 'Profile',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        name: {
            type: GraphQLString
        },
        playerId: {
            type: GraphQLString
        }
    }
});

