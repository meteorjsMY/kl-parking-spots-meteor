Meteor.startup(function(){

  SyncedCron.add({
    name: 'Retrieve parking spots data from api',
    schedule: function(parser) {
      return parser.text('every 30 seconds');
    },
    job: function() {

      HTTP.get('https://kl-parking-spots.herokuapp.com/', function(error, results){

        if(!error){

          var map = {
            id: '_id'
          }

          _.each(results.data,  function(spot){

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
        else {
          console.log(error)
        }

      })

    }
  });

  SyncedCron.start();

})