var Backbone = require('backbone');

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
  model: Dish,
  url: '...'
});

module.exports = {
  Dish: Dish,
  DishCollection: DishCollection
};
