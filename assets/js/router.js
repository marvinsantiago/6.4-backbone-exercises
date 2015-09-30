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
    ' ': 'index',
    ':id': 'view',
    ':id/edit': 'edit',
  },

  index: function() {
    var _this = this;

    var attachDetail = function() {
      var model = _this.collection.first();
      _this.indexPost = new DetailView({model: model});
      $('#target').html(_this.indexPost.render().el);
    };

    attachDetail();
    this.listenTo(this.collection, 'sync', attachDetail);
  },

  view: function(id) {
    var _this = this;
    var showList = function() {
      var model = _this.collection.get(id);

      _this.currentView = new DetailView({
        model: model,
      });
      $('#target').html(_this.currentView.render().el);
    };

    showList();
    this.listenTo(this.collection, 'sync', showList);
  },

  edit: function(id) {
    var _this = this;

    var showEdit = function() {
      var model = _this.collection.get(id);
      _this.editView = new EditView({model: model});
      $('#target').html(_this.editView.render().el);
    };

    showEdit();
    this.listenTo(this.collection, 'sync', showEdit);
  },

});
