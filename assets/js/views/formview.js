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
    var body = this.$el.find('.body').val();

    this.collection.create({title: title, body: body});

    this.$('.title').val('');
    this.$('.body').val('');
    this.collection = new Blog();
  },

});
