import React, { Component } from "react";
import AddToCalendar from "react-add-to-calendar-recurring";

export default class ChangeLabel extends React.Component {
  render() {
    let event = {
      title: "Sample Event",
      description: "This is the sample event provided as an example only",
      location: "Portland, OR",
      startTime: "2016-09-16T20:15:00-04:00",
      endTime: "2016-09-16T21:45:00-04:00"
    };

    return (
      <div className="row">
        <pre className="column example__code">
          <code className="jsx">
            {"<AddToCalendar"}<br />
            &nbsp;&nbsp;&nbsp;
            {"event={event}"}<br />
            &nbsp;&nbsp;&nbsp;
            {'buttonLabel="Put on my calendar" />'}
          </code>
        </pre>
        <div className="column">
          <AddToCalendar event={event} buttonLabel="Put on my calendar" />
        </div>
      </div>
    );
  }
}

ChangeLabel.displayName = "ChangeLabel";
