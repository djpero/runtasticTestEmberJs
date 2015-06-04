import Ember from 'ember';

export default Ember.Route.extend({

  	model: function(param) {
        
  		var store = [];
  		console.log(param);
        return Ember.$.getJSON('http://intense-bastion-3210.herokuapp.com?page='+param['page']+'&sort_by='+param['sort_by']+'&order='+param['order']).then(function(response) {
            if (response) {
                response.run_sessions.forEach(function(datas) {
                	var start_time = new Date(datas.start_time);
                	var end_time = new Date(datas.end_time);
                    store.push({sessionId: datas.id, startAt: formatDate(start_time), endAt: formatDate(end_time), duration: datas.duration, distance: datas.distance, typeId:datas.sport_type_id, encodedTrace: datas.encoded_trace});
                });        		
            }
            
           return store;
        });
    },
    setupController: function(controller,model) {
      controller.set('list', model);
    }
});
function formatDate(date){
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var day = date.getDate();
	var month = date.getMonth()+1;
	minutes = minutes < 10 ? '0'+minutes : minutes;
	hours = hours < 10 ? '0'+hours : hours;
	day = day < 10 ? '0'+day : day;
	month = month < 10 ? '0'+month : month;
	var strTime = hours + '.' + minutes
	return  day+ "." + month  + "." + date.getFullYear() + ", " + strTime;

}	