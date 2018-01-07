import {GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLInt} from "graphql";

export const StatsType = new GraphQLObjectType({
    name: 'Stats',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        vitality: {
            type: GraphQLInt
        },
        aura: {
            type: GraphQLInt
        },
        technique: {
            type: GraphQLInt
        }
    }
});

