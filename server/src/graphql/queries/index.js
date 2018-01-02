import {GraphQLList, GraphQLString} from 'graphql';
import {CharacterType} from "../types/CharacterType";
import {ArcType} from "../types/ArcType";
import {OperationType} from "../types/OperationType";
import OperationModel from '../../models/operation';

const operation = {
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

const arcs = {
    arcs: {
        type: new GraphQLList(ArcType),
        args: {},
        resolve(root, params, options) {
            return [{
                id: 'tutorial',
                title: 'In the beginning',
                chapters: [{
                    id: 'tut-1',
                    title: 'A Lonely warrior',
                    episodes: [{
                        id: 'tut-1-1',
                        title: 'First steps'
                    }]
                }]
            }]
        }
    }
};

const characters = {
    characters: {
        type: new GraphQLList(CharacterType),
        args: {},
        resolve(root, params, options) {
            return [{
                id: 'Test',
                name: 'Dream'
            }]
        }
    }
}

export default {
    ...characters,
    ...arcs,
    ...operation
}