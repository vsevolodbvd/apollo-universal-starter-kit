import { isApiExternal } from '@gqlapp/core-common';
import ServerModule, { MiddlewareFunc } from '@gqlapp/module-server-ts';

import createResolvers from './resolvers';
import schemaDocument from './schema.graphql';
import graphiqlMiddleware from './graphiql';
import createApolloServer from './createApolloServer';

const middleware: MiddlewareFunc = (app, appContext, { createGraphQLContext, schema }) => {
  app.get('/graphiql', graphiqlMiddleware);

  if (!isApiExternal) {
    const graphqlServer = createApolloServer({ createGraphQLContext, schema });
    graphqlServer.applyMiddleware({ app, path: __API_URL__, cors: { credentials: true, origin: true } });
  }
};

type MakeGQLContextCreator = (modules: ServerModule) => (req: Request, res: Response) => any;

const makeGQLContextCreator: MakeGQLContextCreator = modules => (req, res) => modules.createContext(req, res);

export * from './api';

export default new ServerModule({
  schema: [schemaDocument],
  createResolversFunc: [createResolvers],
  middleware: [middleware],
  appContext: { makeGQLContextCreator }
});
