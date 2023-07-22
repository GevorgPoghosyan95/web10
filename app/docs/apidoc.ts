import {createClient, createClientBody, getClient} from "./clients";

const apiDocumentation = {
    openapi: '3.0.1',
    info: {
        version: '1.3.0',
        title: 'My REST API - Documentation',
        description: 'Description of my API here',
    },
    servers: [
        {
            url: 'http://localhost:5000',
            description: 'Local Server',
        },
    ],
    tags: [
        {
            name: 'Clients',
        },
    ],
    paths: {
        '/client': {
            post: createClient,
        },
        '/client/{id}': {
            get: getClient,
        },
    },
    components: {
        schemas: {
            createClientBody,
        },
    },
};

export { apiDocumentation };