import ActiveModelAdapter from 'active-model-adapter';
import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
 namespace: '/v1',
 host: 'http://localhost:3000',
 authorizer: 'authorizer:devise'
});
