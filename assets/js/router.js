var AppRouter = Backbone.Router.extend({
  initialize: function() {
    this.collection = new Blogs();
    this.BlogView = new BlogView({
      collection: this.collection,
    });
    this.collection.fetch();
  },

  routes: {
    // '': 'index',
    ':id/': 'view',
  },

  // index: function() {
  //   $('#sidebar').html();
  // },

  view: function(id) {
    var showList = function() {
      var model = this.collection.get(id);

      new AppView({
      model: model,
    });
    };

    showList();
    this.listenTo(this.collection, 'sync add', showList);
  },
});

