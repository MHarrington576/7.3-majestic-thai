var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'menu/': 'menu'
  }

  index: function(){
    ReactDOM.render(
      React.createElement({router: this}),
      document.getElementById('app');
    );
  },

  menu: function(){
    ReactDOM.render({
      React.createElement({router: this}),
      document.getElementById('app');
    });
  }
});

var router = new AppRouter();

module.exports = {
  router: router
};
