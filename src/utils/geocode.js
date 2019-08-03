
const request = require('request');

const geocode = (address, callback) =>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibWV0YWxsb2lkNjYiLCJhIjoiY2p5bzh0anRmMHl3ejNjcnR6NGlrZjdiNSJ9.-NoB5BBao7USVlDpwOYO_g&limit=1'
       request({url, json:true}, (error,{body}) =>{
         if(error){
          callback('Unable to connect to location services',undefined)
    }
    else if (body.features.length === 0 ||body.message){
           callback('Unable to connect to, try another place',undefined)
    } else {
        callback(undefined,{
            longitude :body.features[0].center[0],
            latitude :body.features[0].center[1],
            location: body.features[0].place_name
        })
    }
   })
   }
   module.exports = geocode