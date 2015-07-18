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
            if (
              moment(ev.start).isAfter(moment(), 'days') ||
              moment(ev.start).isSame(moment(), 'days')
            ) {
              ev.start = moment(ev.start).format('M/D h:mm a');
              events.push(ev);
            }
          }
        }
      };
    };
    res.render('index', {events: events});
  });
});

module.exports = router;
