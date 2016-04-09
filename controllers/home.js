// Home Controller

var home = {
    
    index: function(req, res){
         res.render('index', { title: 'Express' });
    }
    
};

module.exports = home;