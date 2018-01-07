import {GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLInt} from "graphql";
import {StatsType} from "./StatsType";

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
        },
        stats: {
            type: StatsType
        }
    }
});

