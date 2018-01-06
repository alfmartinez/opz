import {GraphQLList,GraphQLString} from 'graphql';
import {ArcType} from "../../types/ArcType";

export default {
    arcs: {
        type: new GraphQLList(ArcType),
        args: {
            playerId: {
                type: GraphQLString
            }
        },
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