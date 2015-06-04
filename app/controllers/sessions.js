import Ember from 'ember';

export default Ember.Controller.extend({
	queryParams: ['page', 'sort_by', 'order'],
	page: null,
	sort_by: null,
	order: null,
});
