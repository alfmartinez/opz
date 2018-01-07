import {OperationType} from "../../types/OperationType";
import {
    GraphQLNonNull,
    GraphQLID,
    GraphQLInt
} from 'graphql';
import {CharacterType} from "../../types/CharacterType";
import Character from "../../../models/character";


export default {
    type: CharacterType,
    args: {
        character: {
            type: new GraphQLNonNull(GraphQLID)
        },
        amount: {
            type: GraphQLInt
        }
    },
    async resolve(root, params, options) {
        console.log(params);
        const character = await Character.findOneAndUpdate(
            {_id: params.character},
            {$inc: {xp: params.amount}},
            {new: true}
        ).exec();
        console.log(character);
        return character;
    }
}