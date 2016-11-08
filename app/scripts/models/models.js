var Backbone = require('backbone');
var React = require('react');

var Dish = Backbone.Model.extend({
  defaults: {
    thaiName: '',
    englishName: '',
    description: '',
    price: 0,
    imageUrl: ''
  }
});

var DishCollection = Backbone.Collection.extend({
  model: DishItem,
  url: '...'
});

module.exports = {
  Dish: Dish,
  DishCollection: DishCollection
};
