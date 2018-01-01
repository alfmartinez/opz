import {GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString, GraphQLList} from "graphql";


export const EpisodeType = new GraphQLObjectType({
    name: 'Episode',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        title: {
            type: GraphQLString
        }
    }
});

export const ChapterType = new GraphQLObjectType({
    name: 'Chapter',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        title: {
            type: GraphQLString
        },
        episodes: {
            type: new GraphQLList(EpisodeType)
        }
    }
});

export const ArcType = new GraphQLObjectType({
    name: 'Arc',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        title: {
            type: GraphQLString
        },
        chapters: {
            type: new GraphQLList(ChapterType)
        }
    }
});

