var Hapi = require('hapi');

// Create a server with a host and port
var server = new Hapi.Server();
server.connection({ port: 80 });

// Add the route
server.route({
    method: 'GET',
    path:'/hello', 
    handler: {
 		directory: {
        path: './public',
        listing: false,
        index: true
      }
    }
});

// Start the server
server.start();