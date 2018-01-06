import {GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLInt} from "graphql";

export const CharacterTypeType = new GraphQLObjectType({
    name: 'CharacterType',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        name: {
            type: GraphQLString
        },
        key: {
            type: GraphQLString
        }
    }
});

