import Controller from '@ember/controller';

export default Controller.extend({
  session: Ember.inject.service('session'),
  actions: {
    save(user){
      let newUser = user;
        newUser.save().catch((error) => {
          this.set('errorMessage', error)
        })
        .then(()=>{
          this.get('session')
          .authenticate('authenticator:devise',
            newUser.get('email'), newUser.get('password'))
          .catch((reason) => {
            console.log('hi');
            this.set('errorMessage', reason.error ||reason);

          });
        })
      }
    }
});
