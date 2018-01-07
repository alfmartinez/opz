import {GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLInt} from "graphql";

export const HitpointsType = new GraphQLObjectType({
    name: 'HP',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        current: {
            type: GraphQLInt
        },
        max: {
            type: GraphQLInt
        }
    }
});

