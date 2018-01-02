import {OperationType} from "../../types/OperationType";
import {
    GraphQLNonNull,
    GraphQLString
} from 'graphql';
import UserModel from '../../../models/user';
import {UserType} from "../../types/UserType";


export default {
    type: UserType,
    args: {
        username: {
            type: new GraphQLNonNull(GraphQLString)
        },
        password: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    async resolve (root, params, options) {
        const user = new UserModel({
            username: params.username,
            password: params.password
        });
        return await user.save();
    }
}