var React = require('react');

var NavbarContainer = require('./templates/navbar.jsx').NavbarContainer;

var MenuContainer = React.createClass({
  render: function(){
    return (

      <div className="container-fluid">
        <NavbarContainer />
        <div className="about-us-box col-md-10 col-md-offset-1 col-xs-12">
          <h2>This is our menu</h2>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
      </div>

    );
  }
});

module.exports = {
  MenuContainer: MenuContainer
};
