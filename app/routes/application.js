// import Ember from 'ember';
//
// export default Ember.Route.extend({
//   model(){
//     return this.store.findAll('todo')
//   }
// });


import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin);
