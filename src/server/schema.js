const { gql } = require('apollo-server-fastify');

module.exports = gql`
    type Snippet {
        title: String
        code: String
    }

    type Query {
        snippets: [Snippet]
    }
`;
