import Ember from 'ember';

export default Ember.Route.extend({

  	model: function(param) {
        
  		var store = [];
  		console.log(param);
        return Ember.$.getJSON('http://intense-bastion-3210.herokuapp.com?page='+param['page']+'&sort_by='+param['sort_by']+'&order='+param['order']).then(function(response) {
            if (response) {
                response.run_sessions.forEach(function(datas) {
                    store.push({sessionId: datas.id, startAt: datas.start_time, endAt: datas.end_time, duration: datas.duration, distance: datas.distance, typeId:datas.sport_type_id, encodedTrace: datas.encoded_trace});
                });        		
            }
            
           return store;
        });
    },
    setupController: function(controller,model) {
      controller.set('list', model);
    }
});
