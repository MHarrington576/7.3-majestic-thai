var Backbone = require('backbone');
var React = require('react');

var NavbarContainer = React.createClass({
  render: function(){
    return (

      <div className="header-container">
        <header className="row">
          <h1 className="col-md-2 col-xs-4" id="navbar-logo">Majestic Thai</h1>
          <div className="col-md-3 col-md-offset-1 col-xs-12">
            <a className="navbar-link" href="">Home</a>
            <a className="navbar-link" href="#menu/">Menu</a>
            <a className="navbar-link" href="#order/">Your Order</a>
            <a className="navbar-link" href="#about/">About Us</a>
            <a className="navbar-link" href="#kitchen/">Staff</a>
          </div>
        </header>
      </div>

    );
  }
});

module.exports = {
  NavbarContainer: NavbarContainer
};
