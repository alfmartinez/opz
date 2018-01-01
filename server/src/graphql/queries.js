import {GraphQLList} from 'graphql';
import {CharacterType} from "./types/CharacterType";
import {ArcType} from "./types/ArcType";

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
    }
}