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
    // '': 'index',
    '(:tag)': 'tag',
  },

  // index: function() {
  //   this.listView = new ItemView({collection: this.collection});

  //   $('#bookmark-list').html(this.listView.render().el);
  // },

  tag: function(tag) {
    var _this = this;

    var tagSearch = function() {
      var filteredTags = _this.collection.filter(function(model) {
        if (!tag) {
          return model.get('tag').indexOf(tag) > -1;
        }
      });

      this.tagView = new TagView({collection: filteredTags});
      $('#tag').html(this.tagView.render().el);
    };

    tagSearch();
    this.listenTo(this.collection, 'sync', tagSearch);
  },

});
