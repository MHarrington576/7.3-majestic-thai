var React = require('react');

var NavbarContainer = require('./templates/navbar.jsx').NavbarContainer;

var OrderContainer = React.createClass({
  render: function(){
    return (

      <div className="container-fluid">
        <NavbarContainer />
        <div className="bg-text-box col-md-10 col-md-offset-1 col-xs-12">
          <h2>Here's your order so far</h2>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
      </div>

    );
  }
});

module.exports = {
  OrderContainer: OrderContainer
};
