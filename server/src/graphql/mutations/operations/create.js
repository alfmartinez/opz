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
            episode: params.episode,
            log: [{
                message: 'Operation initiated'
            }],
            team: [{
                id: 'one',
                name: 'Simus One',
                specialReady: false,
                hitpoints: 128
            },{
                id: 'two',
                name: 'Simus Two',
                specialReady: true,
                hitpoints: 128
            }],
            opponents: [{
                template: 'goon',
                hitpoints: 128
            }]
        });
        return await operation.save();
    }
}