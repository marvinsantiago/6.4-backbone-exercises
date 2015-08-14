var FormView = Backbone.View.extend({
  template: AppTemplates.form,
  className: 'form-view',

  initialize: function() {
  },

  events: {
    'submit form': 'submit',
  },

  render: function() {
    var html = this.template(this.collection);
    this.$el.html(html);

    return this;
  },

  submit: function(ev) {
    ev.preventDefault();

    var url = this.$el.find('.url').val();
    var title = this.$el.find('.title').val();
    var tag = this.$el.find('.tag').val();

    this.collection.create({url: url, title: title, tag: tag});

    this.$('.url').val('');
    this.$('.title').val('');
    this.$('.tag').val('');
    this.collection = new Bookmark();

  },
});
