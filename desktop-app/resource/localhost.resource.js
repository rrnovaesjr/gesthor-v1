var connect = require('connect');
var serveStatic = require('serve-static');

/** 
 * Structure that creates a local webserver to handle requests
 * as a client for the application.
*/
var localhostResource = {

    /**
     * Creates the web-server for local access to the webapp.
     */
    createServer: function(dirname, port = 9000) {
        var app = connect();
        app.use(serveStatic(dirname));
        app.listen(port);
        return app;
    }
}

module.exports = {
    localhostResource
}