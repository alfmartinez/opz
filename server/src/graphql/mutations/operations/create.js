import {OperationType} from "../../types/OperationType";
import {
    GraphQLNonNull,
    GraphQLString
} from 'graphql';
import OperationModel from '../../../models/operation';


export default {
    type: OperationType,
    args: {
        episode: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    async resolve (root, params, options) {
        const operation = new OperationModel({
            episode: params.episode
        });
        return await operation.save();
    }
}