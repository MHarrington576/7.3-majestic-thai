var React = require('react');

var KitchenContainer = React.createClass({
  render: function(){
    return (

      <div className="container-fluid">
        <a className="btn btn-primary" href="">Back to Home</a>
        <h2>Online To-Go Orders:</h2>
      </div>

    );
  }
});

module.exports = {
  KitchenContainer: KitchenContainer
};
