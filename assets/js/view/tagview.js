var TagView = Backbone.View.extend({
  template: AppTemplates.tag,
  className: 'tag-view',

  initialize: function() {
    this.listenTo(this.collection, 'sync change', this.render);
  },

  render: function() {
    var html = this.template(this.getData());

    this.$el.html(html);

    return this;
  },

  getData: function() {
    var data = [];

    if (this.collection) {
      data = this.collection;

      if (this.collection.toJSON) {
        data = this.collection.toJSON();
      }
    }

    data = _.chain(data).pluck('tag').unique().value();

    return data;
  },
});
