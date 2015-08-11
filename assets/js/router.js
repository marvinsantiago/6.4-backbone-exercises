var AppRouter = Backbone.Router.extend({
  initialize: function() {
    this.collection = new Blogs();
  },

  routes: {
    '': 'index',
    ':id/view': 'view',
  },

  view: function(id) {
    var _this = this;
    this.collection.fetch().then(function() {
      var html = _this.template(_this.collection.get(id).toJSON());
      $('#target').html(html);
    });
  },
});

