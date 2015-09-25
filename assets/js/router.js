var AppRouter = Backbone.Router.extend({
  initialize: function() {
    this.collection = new BlogList();
    this.formview = new FormView({collection: this.collection});
    this.sidebar = new SidebarView({collection: this.collection});

    $('#target').html(this.formview.render().el);
    $('#sidebar').html(this.sidebar.render().el);

    this.collection.fetch();
  },

  routes: {
    '(#)': 'index',
    new: 'newBlog',
    ':id': 'BlogList',
    ':id/edit': 'edit',
  },

  index: function() {
    var _this = this;

    var attachDetail = function() {
      var model = _this.collection.first();
      _this.indexPost = new BlogView({model: model});
      $('#target').html(_this.indexPost.render().el);
    };

    attachDetail();
    this.listenTo(this.collection, 'sync', attachDetail);
  },

});
