import 'dotenv/config';
import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';
import schema from './schema';

//File responsible to configure apollo server and configura mongo connection.
//configuration imports from .env file
const server = new ApolloServer({
    schema,
    playground: process.env == 'development'
});

//connect mongo
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

export default server;
