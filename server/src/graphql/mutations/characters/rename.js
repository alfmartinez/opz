import {OperationType} from "../../types/OperationType";
import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql';
import {CharacterType} from "../../types/CharacterType";


export default {
    type: CharacterType,
    args: {
        character: {
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    async resolve (root, params, options) {
        return {
            id: params.character,
            name: 'Changed'
        }
    }
}