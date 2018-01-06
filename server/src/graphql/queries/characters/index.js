import {GraphQLList,GraphQLString} from 'graphql';
import {CharacterType} from "../../types/CharacterType";
import Character from "../../../models/character";

export default {
    characters: {
        type: new GraphQLList(CharacterType),
        args: {
            playerId: {
                type: GraphQLString
            }
        },
        resolve(root, params, options) {
            return Character.find({playerId: params.playerId}).populate('type');
        }
    }
}