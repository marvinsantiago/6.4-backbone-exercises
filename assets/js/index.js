var DirectoryView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },

  template: AppTemplates.app,

  el: '#target',

  render: function() {
    var html = this.template();

    this.$el.html(html);

    console.info('render');
    return this;
  },

});

var person = new Person();
var directory = new DirectoryView({collection: person});

