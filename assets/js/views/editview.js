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
    var post = this.$el.find('.post').val();
    this.model.save({title: title, post: post}).then(function() {
      router.navigate('this.model.id', {trigger: true});
    });
  },

  delete: function(ev) {
    ev.preventDefault();
    this.model.destroy().then(function() {
      router.navigate('', {trigger: true});
    });
  },
});
