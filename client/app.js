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

    return ParkingSpot.find()

  }

})