var DirectoryView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },

  events: {
    'submit form': 'newEntry',
  },

  template: AppTemplates.app,

  el: '#target',

  render: function() {
    var html = this.template();

    this.$el.html(html);

    console.info('render');
    return this;
  },

  newEntry: function(ev) {
    ev.preventDefault();

    var firstName = this.$('.firstname').val();
    var lastName = this.$('.lastname').val();
    var address = this.$('.address').val();
    var phone = this.$('.phonenumber').val();
    this.model.save();
  },

});
