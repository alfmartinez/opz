import {OperationType} from "../../types/OperationType";
import {
    GraphQLNonNull,
    GraphQLString
} from 'graphql';
import UserModel from '../../../models/user';
import {UserType} from "../../types/UserType";
import jwt from "jsonwebtoken";


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
        const {username,password} = params;

        const user = await UserModel.findOne({username: username}).exec();
        user.comparePassword(password, function(err, isMatch) {
            if (isMatch && !err) {
                // Create token if the password matched and no error was thrown
                var token = jwt.sign(user, 'secret', {
                    expiresIn: 10080 // in seconds
                });
            }
        });
        return user;
    }
}