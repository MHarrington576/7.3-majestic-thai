var React = require('react');

var NavbarContainer = require('./templates/navbar.jsx').NavbarContainer;

var AboutContainer = React.createClass({
  render: function(){
    return (
      <div className="container-fluid">
        <NavbarContainer />
        <div className="bg-text-box col-md-10 col-md-offset-1 col-xs-12">
          <h2>Our Story</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dom eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
      </div>
    );
  }
});

module.exports = {
  AboutContainer: AboutContainer
};
