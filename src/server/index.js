const { ApolloServer, gql } = require('apollo-server-fastify');
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core');
const fastify = require('fastify');

const typeDefs = gql`
    type Snippet {
        title: String
        code: String
    }

    type Query {
        snippets: [Snippet]
    }
`;

const snippets = [
    {
        title: 'Title',
        code: '<h1>Title</h1>'
    },
    {
        title: 'Div',
        code: '<div>div</div>'
    }
];

const resolvers = {
    Query: {
        snippets: () => snippets
    }
};

function fastifyAppClosePlugin(app) {
    return {
        async serverWillStart() {
            return {
                async drainServer() {
                    await app.close();
                }
            };
        }
    };
}

async function startApolloServer(typeDefs, resolvers) {
    const app = fastify({
        logger: true
    });
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [fastifyAppClosePlugin(app), ApolloServerPluginDrainHttpServer({ httpServer: app.server })]
    });

    try {
        await server.start();
        app.register(server.createHandler());
        await app.listen(4000);
    } catch (err) {
        app.log.error(err);
    }

    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer(typeDefs, resolvers);
