// import ActiveModelAdapter from 'active-model-adapter';
//
// export default ActiveModelAdapter.extend();

import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:devise'
});
