import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('start');
  this.route('knifemakers');
  this.route('companies');
  this.route('table');
  this.route('ticket');
  this.route('location');
  this.route('contact');
});

export default Router;
