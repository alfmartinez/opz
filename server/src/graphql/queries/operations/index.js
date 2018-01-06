import {GraphQLString} from 'graphql';

import {OperationType} from "../../types/OperationType";
import OperationModel from '../../../models/operation';

export default {
    operation: {
        type: OperationType,
        args: {
            id: {
                type: GraphQLString
            }
        },
        resolve(root, params, options) {
            return OperationModel.findById(params.id).exec();
        }
    }
};