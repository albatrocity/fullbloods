var express = require('express');
var router = express.Router();
var calConfig = require('../lib/calConfig');
var ical = require('ical');
var moment = require('moment');


/* GET home page. */
router.get('/', function(req, res, next) {
  events = [];
  ical.fromURL(calConfig.uri, {}, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      for (var k in data){
        if (data.hasOwnProperty(k)) {
          var ev = data[k]
          if (ev.type == 'VEVENT') {
            date = moment(ev.start.toJSON());
            if (
              date.isAfter(moment(), 'days') ||
              date.isSame(moment(), 'days')
            ) {
              ev.start = date.format('M/D h:mm a');
              events.push(ev);
            }
          }
        }
      };
    };
    events.sort(function(a,b) {
      return moment(a.start).isAfter(b.start);
    });
    res.render('index', {events: events});
  });
});

module.exports = router;
