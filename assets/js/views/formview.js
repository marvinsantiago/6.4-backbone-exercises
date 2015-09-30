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
