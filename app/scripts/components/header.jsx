var Backbone = require('backbone');
var React = require('react');

var HeaderComponent = React.createClass({
  render: function(){
    return (
      <div className="header-container">
        <header className="row">
          <h1 className="col-md-2 col-xs-4">Majestic Thai</h1>
          <a className="col-md-1 col-xs-4" href="#order/">Your Order</a>
          <div className="col-md-3 col-md-offset-2 col-xs-12">
            <a href="#">Home</a>
            <a href="#menu/">Menu</a>
            <a href="#about/">About Us</a>
            <a href="#staff/">Staff</a>
          </div>
        </header>

        {this.props.children}

      </div>
    );
  }
});

module.exports = {
  HeaderComponent: HeaderComponent
};
