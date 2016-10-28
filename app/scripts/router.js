var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'home',
    'menu/': 'menu',
    'about/': 'about',
    'order/': 'order',
    'kitchen/': 'kitchen'
  },

  home: function(){
    ReactDOM.render(
      React.createElement({router: this}),
      document.getElementById('app')
    );
  },

  menu: function(){
    ReactDOM.render({
      React.createElement({router: this}),
      document.getElementById('app')
    );
  },

  order: function(){
    ReactDOM.render(
      React.createElement({router: this}),
      document.getElementById('app')
    );
  },

  about: function(){
    ReactDOM.render(
      React.createElement({router: this}),
      document.getElementById('app')
    );
  },

  kitchen: function(){
// Authenticate with password?
    ReactDOM.render(
      React.createElement({router: this}),
      document.getElementById('app')
    );
  }
});

var router = new AppRouter();

module.exports = {
  router: router
};
