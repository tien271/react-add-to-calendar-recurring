# React Add to Calendar Button

[![npm version](https://badge.fury.io/js/react-add-to-calendar-recurring.svg)](https://badge.fury.io/js/react-add-to-calendar-recurring)
[![Build Status](https://travis-ci.org/tien271/react-add-to-calendar-recurring.svg?branch=master)](https://travis-ci.org/tien271/react-add-to-calendar-recurring)
[![Dependency Status](https://img.shields.io/david/strongloop/express.svg?maxAge=2592000)](https://david-dm.org/tien271/react-add-to-calendar-recurring)
[![Peer Dependency Status](https://img.shields.io/david/peer/webcomponents/generator-element.svg?maxAge=2592000)](https://david-dm.org/tien271/react-add-to-calendar-recurring)
[![codecov](https://codecov.io/gh/tien271/react-add-to-calendar-recurring/branch/master/graph/badge.svg)](https://codecov.io/gh/tien271/react-add-to-calendar-recurring)
[![Downloads](http://img.shields.io/npm/dm/react-add-to-calendar-recurring.svg)](https://npmjs.org/package/react-add-to-calendar-recurring)

A simple, customizable, and reusable Add to Calendar button component for React ([Demo](https://tien271.github.io/react-add-to-calendar-recurring/))

## Installation

The package can be installed via NPM:

```
npm install react-add-to-calendar-recurring --save
```

You’ll need to install React and Moment separately since they are not included in the package. Below is a simple example on how to use the Add to Calendar button in a React view.

```js
import React from 'react';
import AddToCalendar from 'react-add-to-calendar-recurring';

class Example extends React.Component {
  static displayName = 'Example';
  state = {
    event: {
      title: 'Sample Event',
      description: 'This is the sample event provided as an example only',
      location: 'Portland, OR',
      startTime: '2016-09-16T20:15:00-04:00',
      endTime: '2016-09-16T21:45:00-04:00',
      recurring: {
        repeat: 'weekly',
        byDay: 'TU,WE'
      }
    }
  };

  render() {
    return <AddToCalendar event={this.state.event}/>;
  }
});
```

## Configuration

The most basic use of the Add to Calendar button can be described with:

```js
let event = {
    title: 'Sample Event',
    description: 'This is the sample event provided as an example only',
    location: 'Portland, OR',
    startTime: '2016-09-16T20:15:00-04:00',
    endTime: '2016-09-16T21:45:00-04:00'
}

<AddToCalendar event={event} />
```

See [here](https://github.com/tien271/react-add-to-calendar-recurring/blob/master/docs/ReactAddToCalendar.md) for a full list of props that may be passed to the component. Examples are given on the [main website](https://tien271.github.io/react-add-to-calendar-recurring).

## Compatibility

### React

I'll do my best to stay compatible with the latest version of React. I can't guarantee support for all older versions of React.

Latest compatible versions:
- React 16.2.0 or newer

### Browser Support

The Add to Calendar button is compatible with the latest versions of Chrome, Firefox, Safari, and IE10+.

Unfortunately it is difficult to support legacy browsers while maintaining the ability to develop new features in the future.  For IE9 support, it is known that the [classlist polyfill](https://www.npmjs.com/package/classlist-polyfill) is needed, but this may change or break at any point in the future.

## Local Development

The `master` branch contains the latest version of the Add to Calendar component. To start your example app, you can run `npm start`. This starts a simple webserver on http://localhost:8080.

You can run `npm test` to execute the test suite and linters. To help you develop the component I’ve set up some tests that covers the basic functionality (can be found in  `/tests`). I highly recommend you add tests when you’re adding new functionality.

### The examples
The examples are hosted within the docs folder and are ran in the simple add that loads the Add to Calendar button. To extend the examples with a new example, you can simply duplicate one of the existing examples and change the unique properties of your example.

## License

Copyright (c) 2020 Tien Nguyen. Licensed under MIT license, see [LICENSE](LICENSE) for the full license.
