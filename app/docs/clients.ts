const ClientResponse = {
    _id: {
        type: 'number',
        example: 1,
    },
    email: {
        type: 'string',
        example: 'test@email.com',
    },
    name: {
        type: 'string',
        example: 'test',
    },
    subscription: {
        type:'object',
        example:{
            id: 3,
            name: 'Subscription1',
            price: 1000,
            region: 'USA',
            deviceType: 'IOS'
        }
    }
};

const internalServerError = {
    description: 'Internal Server Error',
    content: {
        'application/json': {
            schema: {
                type: 'object',
                properties: {
                    message: {
                        type: 'string',
                        example: 'Internal Server Error',
                    },
                },
            },
        },
    },
};

const ClientNotFound = {
    description: 'Resource not found',
    content: {
        'application/json': {
            schema: {
                type: 'object',
                properties: {
                    message: {
                        type: 'string',
                        example: 'Client with id: "1" not found',
                    },
                },
            },
        },
    },
};

const createClientBody = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
            example: 'Test Client',
        },
        email: {
            type: 'string',
            example: 'test@email.com',
        },
        region: {
            type: 'string',
            example: 'USA',
        },
        deviceType: {
            type: 'string',
            example: 'IOS',
        },
    },
};

const createClient = {
    tags: ['Clients'],
    description: 'Create a new Client in the system',
    operationId: 'createClient',
    requestBody: {
        content: {
            'application/json': {
                schema: {
                    $ref: '#/components/schemas/createClientBody',
                },
            },
        },
        required: true,
    },
    responses: {
        '201': {
            description: 'Client created successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            _id: {
                                type: 'number',
                                example: 1,
                            },
                            name: {
                                type: 'string',
                                example: 'John Snow',
                            },
                            email: {
                                type: 'string',
                                example: 'john.snow@email.com',
                            },
                        },
                    },
                },
            },
        },
        '500': internalServerError,
    },
};

const getClient = {
    tags: ['Clients'],
    description: 'Retrieve one Client',
    operationId: 'getClient',
    parameters: [
        {
            name: 'id',
            in: 'path',
            description: 'Client ID',
            required: true,
            type: 'string',
        },
    ],
    responses: {
        '200': {
            description: 'Client retrieved successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: ClientResponse,
                    },
                },
            },
        },
        '404': ClientNotFound,
        '500': internalServerError,
    },
};

export { createClient, createClientBody, getClient };