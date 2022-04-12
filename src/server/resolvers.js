module.exports = {
    Query: {
        snippets: (parent, args, context, info) => context.dataSources.snippetsAPI.getSnippets(),
    },
};
