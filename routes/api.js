var firebase = require('firebase');
require('firebase/database');
var express = require('express');
var router = express.Router();

let config = {
  apiKey: "AIzaSyBgNHmBw53QL51_4J-JP54PyWEF7fR-NUk",
  authDomain: "https://cieebikeservice.firebaseio.com/",
  databaseURL: "https://cieebikeservice.firebaseio.com/",
  storageBucket: "cieebikeservice.appspot.com",
  projectId: "cieebikeservice",
};
firebase.initializeApp(config);
var msgRef = firebase.database();


/* GET home page. */
router.get('/bikes', function(req, res, next) {
  console.log("100");

    msgRef.ref('/Bike/').on('value',function (snapshot){
      let val = snapshot.val();
      res.send(snapshot.val()).end();
      let list = '';
      snapshot.val().forEach((i, item)=>{
        console.log(i, item);

      });
    });

  const data = "";


});

module.exports = router;
