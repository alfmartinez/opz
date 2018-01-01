import {GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString, GraphQLList} from "graphql";

export const LogType = new GraphQLObjectType({
    name: 'Log',
    fields: {
        message: {
            type: GraphQLString
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
        }
    }
});