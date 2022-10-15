import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import connectDB from './database';
import { graphqlHTTP } from 'express-graphql';
import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import graph from './graph';

dotenv.config();

const app: Express = express();

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

const schema = new GraphQLSchema(graph);

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

(async () => {
  try {
    await connectDB()
    app.listen(process.env.PORT, () => {
      console.log(`[server]: Server is running at http://localhost:${process.env.PORT}`);
    });
  } catch (error) {
    console.error('[error]: ' + error)
  }
})();

