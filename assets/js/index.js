// Instantiating
var blogList = new Blogs();
var blogs;

blogList.fetch().then(function() {
  blogs = new AppView({collection: blogList});
});

//Initating the router
var router = new AppRouter();

// Starting backbone history
Backbone.history.start();
