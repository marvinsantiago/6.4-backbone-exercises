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
