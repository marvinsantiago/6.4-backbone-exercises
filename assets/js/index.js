// Instantiating
var post = new Post();
var blogs = new AppView({collection: post});

//Initating the router
var router = new AppRouter();

// Starting backbone history
Backbone.history.start();
