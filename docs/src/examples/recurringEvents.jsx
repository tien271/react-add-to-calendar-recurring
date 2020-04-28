import React, { Component } from "react";
import AddToCalendar from "react-add-to-calendar-recurring";

export default class ChangeDropdownLabels extends React.Component {
  render() {
    let event = {
      title: "Sample Event",
      description: "This is the sample event provided as an example only",
      location: "Portland, OR",
      startTime: "2022-09-16T20:15:00-04:00",
      endTime: "2022-09-16T21:45:00-04:00",
      recurring: {
        repeat: 'weekly',
        byDay: 'TU,WE'
      }
    };

    let items = [
      { outlook: "Outlook" },
      { outlookcom: "Outlook.com" },
      { apple: "iCal" },
      { yahoo: "Yahoo!" },
      { google: "Google" }
    ];

    return (
      <div className="row">
        <pre className="column example__code">
          <code className="js">
            {"let event = {"}<br />
            &nbsp;&nbsp;&nbsp;
            {"  title: 'Sample Event',"}<br />
            &nbsp;&nbsp;&nbsp;
            {
              "  description: 'This is the sample event provided as an example only',"
            }
            <br />
            &nbsp;&nbsp;&nbsp;
            {"  location: 'Portland, OR',"}<br />
            &nbsp;&nbsp;&nbsp;
            {"  startTime: '2016-09-16T20:15:00-04:00',"}<br />
            &nbsp;&nbsp;&nbsp;
            {"  endTime: '2016-09-16T21:45:00-04:00',"}<br />
            &nbsp;&nbsp;&nbsp;
            {"  recurring: {"}<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {"    repeat: 'weekly', /* or DaiLy, Monthly, Yearly */"}<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {"    byDay: 'TU,WE', /* SU,MO,TU,WE,TH,FR,SA */"}<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {"    /* or byMonth: 1 (number) */"}<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {"    interval: 1, /* Default is 1 */"}<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {"    weekStart: 'SU', /* Week start default is Sunday */"}<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {"    count: 10, /* Weekly for 10 occurrences */ "}<br />
            &nbsp;&nbsp;&nbsp;
            {"  }"}<br />
            {"};"}<br /><br />
            {"/*"}<br />
            &nbsp;&nbsp;&nbsp;
            {"Recurring can be a string follow the iCalendar specification."}<br />
            &nbsp;&nbsp;&nbsp;
            {"https://icalendar.org/iCalendar-RFC-5545/3-8-5-3-recurrence-rule.html"}<br />
            {"*/"}
          </code>
          <code className="jsx">
            {"<AddToCalendar"}<br />
            &nbsp;&nbsp;&nbsp;
            {"event={event}"}<br />
            &nbsp;&nbsp;&nbsp;
            {"listItems={items} />"}
          </code>
        </pre>
        <div className="column">
          <AddToCalendar event={event} listItems={items} />
        </div>
      </div>
    );
  }
}

ChangeDropdownLabels.displayName = "Change Dropdown Labels";