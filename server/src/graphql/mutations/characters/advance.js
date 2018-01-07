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
        return await Character.findById(params.character)
            .populate('type')
            .then(doc => {
                doc.advance(params.amount);
                doc.save();
                return doc;
            });
    }
}