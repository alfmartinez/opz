import {OperationType} from "../../types/OperationType";
import {
    GraphQLNonNull,
    GraphQLString
} from 'graphql';

export default {
    type: OperationType,
    args: {
        episode: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    async resolve (root, params, options) {
        return {
            id: params.episode+'_GO',
            episode: params.episode
        };
    }
}