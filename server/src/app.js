import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';
import cors from 'cors';
import schema from './graphql/index';

var app = express();

var corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true // <-- REQUIRED backend setting
};
app.use(cors(corsOptions));

// GraphqQL server route
app.use('/graphql', graphqlHTTP(req => ({
    schema,
    pretty: true
})));

// Connect mongo database
mongoose.connect('mongodb://localhost/graphql');

// start server
var server = app.listen(8080, () => {
    console.log('Listening at port', server.address().port);
});