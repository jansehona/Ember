import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  status: DS.attr('boolean', { defaultValue: false })
});
