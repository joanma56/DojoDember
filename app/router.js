import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('contacts');
  this.route('aboutUs');
  this.route('musicians');
});

export default Router;
