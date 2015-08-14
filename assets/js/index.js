var bookmarks = new AllBookmarks();
var form = new FormView({collection: bookmarks});

var router = new AppRouter();

Backbone.history.start();
