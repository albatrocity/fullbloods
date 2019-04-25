const ical = require('ical')
const moment = require('moment')

exports.handler = function(event, context, callback) {
  let events = []
  ical.fromURL(process.env.CAL_URI, {}, function(err, data) {
    if (err) {
      console.log(err)
    } else {
      for (var k in data) {
        if (data.hasOwnProperty(k)) {
          var ev = data[k]
          if (ev.type == 'VEVENT') {
            date = moment(ev.start)
            if (
              date.isAfter(moment(), 'days') ||
              date.isSame(moment(), 'days')
            ) {
              ev.formatted_start = date.format('M/D h:mm a')
              events.push(ev)
            }
          }
        }
      }
    }
    const sorted = events.sort(function(a, b) {
      return moment(a.start).isBefore(b.start) ? -1 : 1
    })

    callback(null, {
      statusCode: 200,
      body: JSON.stringify(sorted),
    })
  })
}
