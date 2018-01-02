import {GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLInt} from "graphql";

export const CharacterType = new GraphQLObjectType({
    name: 'Character',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        name: {
            type: GraphQLString
        },
        specialReady: {
            type: GraphQLBoolean
        },
        template: {
            type: GraphQLString
        },
        hitpoints: {
            type: GraphQLInt
        }
    }
});

