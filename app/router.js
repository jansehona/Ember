import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('signup');
  this.route('todos');
  this.route('todo.new', { path: 'todos/new' });
  this.route('todo', { path: 'todos/show' });
});

export default Router;
