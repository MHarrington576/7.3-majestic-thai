var Backbone = require('backbone');
var React = require('react');

var MenuItem = Backbone.Model.extend({
  defaults: {
    thaiName: '',
    englishName: '',
    description: '',
    imageUrl: '',
    price: 0
  }
});

var MenuCollection = Backbone.Collection.extend({
  model: MenuItem,
  url: '...'
});

module.exports = {
  MenuItem: MenuItem,
  MenuCollection: MenuCollection
}
