import {GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString} from "graphql";

export const CharacterType = new GraphQLObjectType({
    name: 'Character',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        name: {
            type: GraphQLString
        }
    }
});

