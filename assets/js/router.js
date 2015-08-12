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
    ':id': 'view',
  },

  // index: function() {
  //   $('#sidebar').html();
  // },

  view: function(id) {
    var _this = this;
    var showList = function() {
      var model = _this.collection.get(id);

      _this.currentView = new AppView({
        model: model,
      });
    };

    showList();
    this.listenTo(this.collection, 'sync', showList);
  },
});

