Router.configure({
  layoutTemplate: 'layout'
});

Meteor.startup(function () {

    var location = Iron.Location.get();

    if (location.queryObject.platformOverride) {
      Session.set('platformOverride', location.queryObject.platformOverride);
    }

});

Router.route('/', function(){

  this.subscribe('parking_spot', this.params._id).wait();

  this.render('index');

});

Template.index.helpers({

  spots: function(){

    return [{
      "id": "M1",
      "name": "Sungei Wang Plaza",
      "type": "Shopping Mall",
      "lot": "OPEN",
      "state": "NA",
      "healthy": false,
      "datetime": "25/06/2015 12:40:46"
    }, {
      "id": "M2",
      "name": "Plaza Low Yat",
      "type": "Shopping Mall",
      "lot": 632,
      "state": "NA",
      "healthy": true,
      "datetime": "25/06/2015 20:34:04"
    }, {
      "id": "M3",
      "name": "Lot 10",
      "type": "Shopping Mall",
      "lot": "OPEN",
      "state": "NA",
      "healthy": false,
      "datetime": "24/06/2015 17:07:37"
    }, {
      "id": "M4",
      "name": "Fahrenheit88",
      "type": "Shopping Mall",
      "lot": 186,
      "state": "NA",
      "healthy": true,
      "datetime": "25/06/2015 20:34:00"
    }, {
      "id": "M5",
      "name": "Starhill Gallery",
      "type": "Shopping Mall",
      "lot": 1130,
      "state": "NA",
      "healthy": true,
      "datetime": "25/06/2015 20:34:02"
    }, {
      "id": "M6",
      "name": "Pavilion",
      "type": "Shopping Mall",
      "lot": 592,
      "state": "NA",
      "healthy": true,
      "datetime": "25/06/2015 20:34:06"
    }, {
      "id": "M7",
      "name": "KLCC",
      "type": "Shopping Mall",
      "lot": 4311,
      "state": "NA",
      "healthy": true,
      "datetime": "25/06/2015 20:34:01"
    }]

  }

})