// Local deps
var controllers = require('./controllers');

var Router = {
    
    init: function(app) {
        
        // Home page
        app.get('/', controllers.Home.index);
        
        // Users - GET, POST, DELETE
        app.get('/users', controllers.Users.index);
        
    }
    
};

module.exports = Router;