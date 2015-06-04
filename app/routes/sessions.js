import Ember from 'ember';

export default Ember.Route.extend({

  	model: function(param) {
        
  		//var store = this.get('store');
  		var store = [];
  		var i=1;
  		console.log(param);
        return Ember.$.getJSON('http://intense-bastion-3210.herokuapp.com?page='+param['page']).then(function(response) {
            if (response) {
                response.run_sessions.forEach(function(datas) {
                    store.push({sessionId: datas.id, startAt: datas.start_time, endAt: datas.end_time, duration: datas.duration, distance: datas.distance, typeId:datas.sport_type_id, encodedTrace: datas.encoded_trace});
                    i++;
                });        		
            }
            
           return store;
        });
    },
    setupController: function(controller,model) {
      controller.set('list', model);
    }
});
