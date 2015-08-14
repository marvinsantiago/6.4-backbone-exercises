var AppRouter = Backbone.Router.extend({
  initialize: function() {
    this.collection = new AllBookmarks();
    this.formview = new FormView({collection: this.collection});
    this.tagview = new TagView({collection: this.collection});

    $('#target').html(this.formview.render().el);
    $('#tag').html(this.tagview.render().el);

    this.collection.fetch();
  },

  routes: {
    '(:tag)': 'tag',
  },

  tag: function(tag) {
    var _this = this;

    var tagSearch = function() {
      var filteredTags = _this.collection.filter(function(model) {
        if (!tag) {
          return true;
        }

        return model.get('tag') === tag;
      });

      if (_this.itemview) {
        _this.itemview.remove();
      }

      _this.itemview = new ItemView({collection: filteredTags});
      $('#bookmark-list').html(_this.itemview.render().el);
    };

    tagSearch();
    this.listenTo(this.collection, 'sync', tagSearch);
  },

});
