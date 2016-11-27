var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var HomepageContainer = require('./components/home.jsx').HomepageContainer;
var MenuContainer = require('./components/menu.jsx').MenuContainer;
var OrderContainer = require('./components/order.jsx').OrderContainer;
var AboutContainer = require('./components/about.jsx').AboutContainer;
var KitchenContainer = require('./components/kitchen.jsx').KitchenContainer;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'home',
    'menu/': 'menu',
    'order/': 'order',
    'about/': 'about',
    'kitchen/': 'kitchen'
  },

  home: function(){
    ReactDOM.render(
      React.createElement(HomepageContainer, {router: this}),
      document.getElementById('app')
    );
  },

  menu: function(){
    ReactDOM.render(
      React.createElement(MenuContainer, {router: this}),
      document.getElementById('app')
    );
  },

  order: function(){
    ReactDOM.render(
      React.createElement(OrderContainer, {router: this}),
      document.getElementById('app')
    );
  },

  about: function(){
    ReactDOM.render(
      React.createElement(AboutContainer, {router: this}),
      document.getElementById('app')
    );
  },

  kitchen: function(){
  // Authenticate with password?
    ReactDOM.render(
      React.createElement(KitchenContainer, {router: this}),
      document.getElementById('app')
    );
  }
});

var router = new AppRouter();

module.exports = {
  router: router
};
