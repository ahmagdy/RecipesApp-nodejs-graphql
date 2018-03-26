import express from 'express'
import { graphQLRouter } from './graphQLRouter'
import { graphiqlExpress } from 'apollo-server-express';
import gql from 'graphql-tag'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import config from './config';

const app = express()

mongoose.Promise = global.Promise

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


mongoose.connect(config.dbCNS).then(()=> console.info('Connected to MongoDB'))


app.use('/graphql', graphQLRouter)

app.use('/docs', graphiqlExpress({ endpointURL: '/graphql' }))

app.all('*', (req, res) => {
    res.status(404).json({ message: 'UnRecognized Route' });
});


export default app