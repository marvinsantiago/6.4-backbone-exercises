// Instantiating
var blogList = new Blogs();
var blogs;
var sidebar;

blogList.fetch().then(function() {
  blogs = new AppView({collection: blogList});
  sidebar = new BlogView({collection: blogList});
});

// Initating the router
var router = new AppRouter();

// Starting backbone history
Backbone.history.start();
