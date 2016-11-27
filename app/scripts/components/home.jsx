var React = require('react');

var NavbarContainer = require('./templates/navbar.jsx').NavbarContainer;

var HomepageContainer = React.createClass({
  render: function(){
    return (

      <div className="container-fluid">
        <NavbarContainer />

        <h2>Welcome to Majestic Thai</h2>

      </div>

    );
  }
});

module.exports = {
  HomepageContainer: HomepageContainer
};
