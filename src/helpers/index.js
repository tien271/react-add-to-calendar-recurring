import moment from 'moment';

export default class helpers {
  getRandomKey() {
    let n = Math.floor(Math.random() * 999999999999).toString();
    return new Date().getTime().toString() + "_" + n;
  }

  formatTime(date) {
    let formattedDate = moment.utc(date).format("YYYYMMDDTHHmmssZ");
    return formattedDate.replace("+00:00", "Z");
  }

  calculateDuration(startTime, endTime) {
    // snag parameters and format properly in UTC
    let end = moment.utc(endTime).format("DD/MM/YYYY HH:mm:ss");
    let start = moment.utc(startTime).format("DD/MM/YYYY HH:mm:ss");

    // calculate the difference in milliseconds between the start and end times
    let difference = moment(end, "DD/MM/YYYY HH:mm:ss").diff(
      moment(start, "DD/MM/YYYY HH:mm:ss")
    );

    // convert difference from above to a proper momentJs duration object
    let duration = moment.duration(difference);

    return (
      Math.floor(duration.asHours()) + moment.utc(difference).format(":mm")
    );
  }

  buildUrl(event, type, isCrappyIE) {
    let calendarUrl = "";

    const buildRecurringEvent = () => {
      if (!event.recurring) return '';

      if (typeof event.recurring === 'string') {
        return event.recurring;
      }

      let recur = `RRULE:FREQ=${event.recurring.repeat};INTERVAL=${event.recurring.interval || 1};WKST=${event.recurring.weekStart || 'SU'}`;
      if (event.recurring.count) {
        recur = `${recur};COUNT=${event.recurring.count}`
      }
      if (event.recurring.byDay) {
        recur = `${recur};BYDAY=${event.recurring.byDay}`
      }
      if (event.recurring.byMonth) {
        recur = `${recur};BYMONTH=${event.recurring.byMonth}`
      }

      return recur.toUpperCase();
    }

    // allow mobile browsers to open the gmail data URI within native calendar app
    // type = (type == "google" && this.isMobile()) ? "outlook" : type;

    switch (type) {
      case "google":
        calendarUrl = "https://calendar.google.com/calendar/render";
        calendarUrl += "?action=TEMPLATE";
        calendarUrl += "&dates=" + this.formatTime(event.startTime);
        calendarUrl += "/" + this.formatTime(event.endTime);

        if (event.recurring) {
          calendarUrl += "&recur=" + buildRecurringEvent();
        }

        calendarUrl += "&location=" + encodeURIComponent(event.location);
        calendarUrl += "&text=" + encodeURIComponent(event.title);
        calendarUrl += "&details=" + encodeURIComponent(event.description);
        break;

    calculateDuration (startTime, endTime) {
        // snag parameters and format properly in UTC
        let end = moment.utc(endTime).format('DD/MM/YYYY HH:mm:ss');
        let start = moment.utc(startTime).format('DD/MM/YYYY HH:mm:ss');

        // calculate the difference in milliseconds between the start and end times
        let difference = moment(end, 'DD/MM/YYYY HH:mm:ss').diff(moment(start, 'DD/MM/YYYY HH:mm:ss'));

      default:
        calendarUrl = [
          "BEGIN:VCALENDAR",
          "VERSION:2.0",
          "BEGIN:VEVENT",
          "URL:" + document.URL,
          "DTSTART:" + this.formatTime(event.startTime),
          "DTEND:" + this.formatTime(event.endTime),
          "SUMMARY:" + event.title,
          "DESCRIPTION:" + event.description,
          "LOCATION:" + event.location
        ];

        if (event.recurring) {
          calendarUrl = calendarUrl.concat([
            buildRecurringEvent()
          ])
        }

        calendarUrl = calendarUrl.concat([
          "END:VEVENT",
          "END:VCALENDAR"
        ])

        calendarUrl = calendarUrl.join("\n")

        return Math.floor(duration.asHours()) + moment.utc(difference).format(':mm');
    }

    buildUrl (event, type, isCrappyIE) {
        let calendarUrl = '';

        switch (type) {
            case 'google':
                calendarUrl = 'https://www.google.com/calendar/event';
                calendarUrl += '?action=TEMPLATE';
                calendarUrl += '&text=' + event.title;
                calendarUrl += '&dates=' + this.formatTime(event.startTime);
                calendarUrl += '/' + this.formatTime(event.endTime);
                calendarUrl += '&details=' + event.description;
                calendarUrl += '&location=' + encodeURIComponent(event.location);
                calendarUrl += '&sprop=&sprop=name:Alpha';
                break;

            case 'yahoo':
                // yahoo doesn't utilize endTime so we need to calulate duration
                let duration = this.calculateDuration(event.startTime, event.endTime);
                calendarUrl = 'https://calendar.yahoo.com/?v=60&view=d&type=20';
                calendarUrl += '&title=' + event.title;
                calendarUrl += '&st=' + this.formatTime(event.startTime);
                calendarUrl += '&dur=' + duration;
                calendarUrl += '&desc=' + event.description;
                calendarUrl += '&in_loc=' + encodeURIComponent(event.location);
                break;

            default:
                calendarUrl = [
                    'BEGIN:VCALENDAR',
                    'VERSION:2.0',
                    'BEGIN:VEVENT',
                    'URL:' + document.URL,
                    'DTSTART:' + this.formatTime(event.startTime),
                    'DTEND:' + this.formatTime(event.endTime),
                    'SUMMARY:' + event.title,
                    'DESCRIPTION:' + event.description,
                    'LOCATION:' + event.location,
                    'END:VEVENT',
                    'END:VCALENDAR'
                ].join('\n');

                if (!isCrappyIE) {
                    calendarUrl = encodeURI('data:text/calendar;charset=utf8,' + calendarUrl);
                }
        }

    return mobile;
  }
}
