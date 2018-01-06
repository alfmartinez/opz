import {GraphQLList,GraphQLString} from 'graphql';
import {CharacterType} from "../../types/CharacterType";

export default {
    characters: {
        type: new GraphQLList(CharacterType),
        args: {
            playerId: {
                type: GraphQLString
            }
        },
        resolve(root, params, options) {
            return [{
                id: 'Test',
                name: 'Dream'
            }]
        }
    }
}