var React = require('react/addons');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var master = require('./stylesheets/master.less');
var Prototype = require('./components/Prototype');

var routes = (
  <Route name="root" path="/" handler={Prototype} />
);

Router.run(routes, function(Handler) {
  React.render(<Handler/>, document.body);
});