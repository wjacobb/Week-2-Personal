const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'Personal Assignment W4'
  },
  host: 'http://localhost:8080/contacts',
  schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// autogenerate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
