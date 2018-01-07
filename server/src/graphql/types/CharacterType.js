import {GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLInt} from "graphql";
import {CharacterTypeType} from "./CharacterTypeType";

export const CharacterType = new GraphQLObjectType({
    name: 'Character',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        specialReady: {
            type: GraphQLBoolean
        },
        template: {
            type: GraphQLString
        },
        hitpoints: {
            type: GraphQLInt
        },
        type: {
            type: CharacterTypeType
        },
        xp: {
            type: GraphQLInt
        }
    }
});

