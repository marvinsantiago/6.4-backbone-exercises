var AppRouter = Backbone.Router.extend({
  initialize: function() {
    this.collection = new AllBookmarks();
    this.itemview = new ItemView({collection: this.collection});
  },

});
