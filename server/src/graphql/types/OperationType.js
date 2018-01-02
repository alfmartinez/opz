import {GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString, GraphQLList} from "graphql";
import {CharacterType} from "./CharacterType";

export const LogType = new GraphQLObjectType({
    name: 'Log',
    fields: {
        message: {
            type: GraphQLString
        },
        id: {
            type: GraphQLID
        }
    }
})

export const OperationType = new GraphQLObjectType({
    name: 'Operation',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        episode: {
            type: GraphQLString
        },
        log: {
            type: new GraphQLList(LogType)
        },
        team: {
            type: new GraphQLList(CharacterType)
        },
        opponents: {
            type: new GraphQLList(CharacterType)
        }
    }
});