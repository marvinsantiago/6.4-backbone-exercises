var DirectoryView = Backbone.View.extend({
  template: AppTemplates.app,

  el: '#target',

  initialize: function() {
    this.render();
  },

  events: {
    'submit form': 'createNew',
  },

  render: function() {
    var html = this.template();

    this.$el.html(html);

    console.info('render');

    return this;
  },

  createNew: function(ev) {
    ev.preventDefault();

    var firstName = this.$('.firstname').val();
    var lastName = this.$('.lastname').val();
    var address = this.$('.address').val();
    var phone = this.$('.phonenumber').val();

    this.model.save({
      firstname: firstName,
      lastname: lastName,
      address: address,
      phonenum: phone,
    });

  },

});
