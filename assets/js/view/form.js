var FormView = Backbone.View.extend({
  template: AppTemplates.form,
  el: '#target',

  initialize: function() {
    this.listenTo(this.collection, 'sync add change', this.render);
    this.render();

    this.collection.fetch();
  },

  events: {
    'submit form': 'submit',
  },

  render: function() {
    var html = this.template();
    var _this = this;
    this.$el.html(html);

    this.collection.forEach(function(bookmarks) {
      var childView = new ItemView({
        model: bookmarks,
      });
      _this.$el.find('#bookmark-list')
        .append(childView.render().$el);
    });

    return this;
  },

  submit: function(ev) {
    ev.preventDefault();

    var url = this.$el.find('.url').val();
    var title = this.$el.find('.title').val();
    var tag = this.$el.find('.tag').val();

    this.collection.create({url: url, title: title, tag: tag});

  },
});
