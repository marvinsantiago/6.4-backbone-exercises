var bookmarks = new AllBookmarks();
var form = new FormView({collection: bookmarks});
var tag = new TagView({collection: bookmarks});
var router = new AppRouter();

Backbone.history.start();
