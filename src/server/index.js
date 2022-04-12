const { ApolloServer } = require('apollo-server-fastify');
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core');
const fastify = require('fastify');

const SnippetsAPI = require('./datasources/snippets');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const dataSources = () => ({
    snippetsAPI: new SnippetsAPI(),
});

function fastifyAppClosePlugin(app) {
    return {
        async serverWillStart() {
            return {
                async drainServer() {
                    await app.close();
                },
            };
        },
    };
}

async function startApolloServer() {
    const app = fastify({
        logger: true,
    });
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        dataSources,
        plugins: [fastifyAppClosePlugin(app), ApolloServerPluginDrainHttpServer({ httpServer: app.server })],
    });

    try {
        await server.start();
        app.register(server.createHandler());
        await app.listen(4000);
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
    } catch (err) {
        app.log.error(err);
    }
}

startApolloServer();
