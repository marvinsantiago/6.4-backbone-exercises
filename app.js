var AppTemplates = {};

AppTemplates['detail'] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<section>\n    <header>\n        <p>"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</p>\n    </header>\n    <section>\n        <p>"
    + alias3(((helper = (helper = helpers.blog || (depth0 != null ? depth0.blog : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"blog","hash":{},"data":data}) : helper)))
    + "</p>\n    </section>\n    <a href=\"#"
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "/edit\"><button class=\"edit\">Edit</button></a>\n</section>\n";
},"useData":true});
AppTemplates['edit'] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<form class=\"form-view\">\n    <input value=\""
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "\">\n    <textarea class=\"blog\" cols=\"60\" rows=\"10\" >"
    + alias3(((helper = (helper = helpers.blog || (depth0 != null ? depth0.blog : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"blog","hash":{},"data":data}) : helper)))
    + "</textarea>\n    <button class=\"save\">Save</button>\n    <button class=\"delete\">Delete</button>\n</form>\n";
},"useData":true});
AppTemplates['form'] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<form>\n    <input type=\"text\" class=\"title\" placeholder=\"Title\">\n        <textarea name=\"text\" class=\"blog\" cols=\"60\" rows=\"10\" placeholder=\"Start blog here.....\"></textarea>\n    <input type=\"submit\" value=\"Create\">\n</form>\n\n";
},"useData":true});
AppTemplates['sidebar'] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "        <li>\n           <a href=\"#"
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1._id : stack1), depth0))
    + "\">\n                <p>"
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.title : stack1), depth0))
    + "</p>\n                <p>"
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.blog : stack1), depth0))
    + "</p>\n            </a>\n        </li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams) {
    var stack1;

  return "<ul>\n"
    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 1, blockParams),"inverse":this.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "</ul>\n";
},"useData":true,"useBlockParams":true});
var Blog = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    title:'',
    blog:'',
  },
});

var BlogList = Backbone.Collection.extend({
  model: Blog,
  url: 'http://tiny-lr.herokuapp.com/collections/ms-blogs',
});

var SidebarView = Backbone.View.extend({
  template: AppTemplates.sidebar,
  className: 'sidebar',

  initialize: function() {
    this.listenTo(this.collection, 'sync add change', this.render);
    this.render();
  },

  render: function() {
    var html = this.template(this.collection.toJSON());
    this.$el.html(html);

    return this;
  },

});

var FormView = Backbone.View.extend({
  template: AppTemplates.form,
  className: 'form-view',

  initialize: function() {

  },

  events: {
    'submit form': 'create',
  },

  render: function() {
    var html = this.template(this.collection);
    this.$el.html(html);
    return this;
  },

  create: function(ev) {
    ev.preventDefault();

    var title = this.$el.find('.title').val();
    var blog = this.$el.find('.blog').val();

    this.collection.create({title: title, blog: blog});

    this.$('.title').val('');
    this.$('.blog').val('');
    this.collection = new Blog();
  },

});

var DetailView = Backbone.View.extend({
  template: AppTemplates.detail,

  intialize: function() {
    this.listenTo(this.model, 'add sync change', this.render);
  },

  render: function() {
    var data = {};

    if (this.model && this.model.toJSON) {
      data = this.model.toJSON();
    }

    var html = this.template(data);
    this.$el.html(html);

    return this;
  },
});

var EditView = Backbone.View.extend({
  template: AppTemplates.edit,
  className: 'edit',

  events: {
    'click .save': 'save',
    'click .delete': 'delete',
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    var data = {};
    if (this.model) {
      data = this.model.toJSON();
    }

    var html = this.template(data);
    this.$el.html(html);

    console.info('render');

    return this;
  },

  save: function(ev) {
    ev.preventDefault();
    var title = this.$el.find('.title').val();
    var blog = this.$el.find('.blog').val();
    this.model.save({title: title, blog: blog}).then(function() {
      router.navigate('', {trigger: true});
    });
  },

  delete: function(ev) {
    ev.preventDefault();
    this.model.destroy().then(function() {
      // router.navigate('', {trigger: true});
    });
  },
});

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

var router = new AppRouter();

Backbone.history.start();
//# sourceMappingURL=app.map