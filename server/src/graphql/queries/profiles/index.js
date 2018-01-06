import {GraphQLString} from 'graphql';

import {ProfileType} from "../../types/ProfileType";
import ProfileModel from '../../../models/profile';

export default {
    profile: {
        type: ProfileType,
        args: {
            playerId: {
                type: GraphQLString
            }
        },
        resolve(root, params, options) {
            return ProfileModel.findOne({playerId: params.playerId}).exec();
        }
    }
};