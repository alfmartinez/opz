import {GraphQLList, GraphQLString} from 'graphql';
import {CharacterType} from "./types/CharacterType";
import {ArcType} from "./types/ArcType";
import {OperationType} from "./types/OperationType";

export default {
    characters: {
        type: new GraphQLList(CharacterType),
        args: {},
        resolve(root,params,options) {
            return [{
                id: 'Test',
                name: 'Dream'
            }]
        }
    },
    arcs: {
        type: new GraphQLList(ArcType),
        args: {},
        resolve(root,params,options) {
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
    },
    operation: {
        type: OperationType,
        args: {
            id: {
                type: GraphQLString
            }
        },
        resolve(root,params,options) {
            return {
                id: params.id,
                episode: 'EPISODE OK'
            }
        }
    },
}