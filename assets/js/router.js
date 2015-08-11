var AppRouter = Backbone.Router.extend({
  initialize: function() {
    this.collection = new Blogs();

  },

  routes: {
    '': 'index',
    ':id/view': 'view',
  },

  view: function(id) {
    var view = new BlogView({
      collection: this.collection,
    });
    this.collection.fetch();
  },
});

