import Route from '@ember/routing/route';

export default Ember.Route.extend({
  model() {
    return {};
  },
  actions: {
    save() {
      const newTodo = this.get('store').createRecord('todo', this.currentModel);
      newTodo.save().then((todos) => {
        this.transitionTo('todo', todo);

      });
    },
    cancel() {
      this.transitionTo('todos');

    }
  }
});
