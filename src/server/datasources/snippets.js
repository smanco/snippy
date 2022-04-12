const { DataSource } = require('apollo-datasource');
const mockSnippets = require('../data/snippets.json');

class SnippetsAPI extends DataSource {
    constructor() {
        super();
    }

    initialize(config) {}

    getSnippets() {
        return mockSnippets.snippets;
    }
}

module.exports = SnippetsAPI;
