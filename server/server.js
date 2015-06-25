var klParkingSpots = Meteor.npmRequire('kl-parking-spots');

var updateSpots = function(){

  klParkingSpots(Meteor.bindEnvironment(function(spots){

    if(spots){

      var map = {
        id: '_id'
      }

      _.each(spots, function(spot){

        spot = _.reduce(spot, function(result, value, key) {
          key = map[key] || key;
          result[key] = value;
          return result;
        }, {});

        ParkingSpot.upsert(
          {
            _id: spot._id
          },
          spot
        );

      })

    }

  }));

}

Meteor.startup(function(){

  SyncedCron.add({
    name: 'Retrieve parking spots data from api',
    schedule: function(parser) {
      return parser.text('every 30 seconds');
    },
    job: updateSpots
  });

  SyncedCron.start();


})