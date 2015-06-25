Meteor.publish('parking_spot', function(){

  return ParkingSpot.find();

})