import {GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLInt} from "graphql";
import {CharacterTypeType} from "./CharacterTypeType";
import {StatsType} from "./StatsType";
import {HitpointsType} from "./HitpointsType";

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
            type: HitpointsType
        },
        type: {
            type: CharacterTypeType
        },
        xp: {
            type: GraphQLInt
        },
        level: {
            type: GraphQLInt
        },
        stats: {
            type: StatsType
        }
    }
});

