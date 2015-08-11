var AppRouter = Backbone.Router.extend({
  initialize: function() {
    this.collection = new Blogs();
  },

  routes: {
    '': 'index',
    ':id/view': 'view',
  },

});

