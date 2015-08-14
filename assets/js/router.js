var AppRouter = Backbone.Router.extend({
  initialize: function() {
    this.collection = new AllBookmarks();
    this.itemview = new ItemView({collection: this.collection});
    this.tagview = new TagView({collection: this.collection});
    $('#bookmark-list').html(this.itemview.render().el);
    $('#tag').html(this.tagview.render().el);

    this.collection.fetch();
  },

  routes: {
    '': 'index',
    'post/:id': 'showPost',
  },

  index: function() {
    this.listView = new ItemView({collection: this.collection});

    $('#bookmark-list').html(this.listView.render().el);
  },

  showPost: function(id) {
    var _this = this;

    var attachDetail = function() {
      var contact = _this.contacts.get(id);
      _this.listView = new DetailView({model: Bookmark});

      $('#bookmark-list').html(_this.listView.render().el);
    };

    attachDetail();
    this.listenTo(this.collection, 'sync', attachDetail);
  },

});
