import React, { Component } from "react";
import ExampleComponents from "./example_components.jsx";
import HeroExample from "./hero_example.jsx";

export default class Root extends React.Component {
  render() {
    return (
      <div>
        <div className="hero">
          <div className="hero__content">
            <h1 className="hero__title">
              React Add to Calendar Button
            </h1>
            <div className="hero__crafted-by">
              <a href="http://4one.io" className="hero__crafted-by-link">
                Crafted by Tien Nguyen
              </a>
            </div>
            <div className="hero__example">
              <HeroExample />
            </div>
          </div>
        </div>
        <div className="wrapper">
          <h1>React Add to Calendar Button</h1>
          <p>
            <a href="https://npmjs.org/package/react-add-to-calendar-recurring">
              <img
                  src="https://badge.fury.io/js/react-add-to-calendar-recurring.svg"
                  className="badge"/>
            </a>&nbsp;&nbsp;
            <a href="https://travis-ci.org/tien271/react-add-to-calendar-recurring">
              <img
                  src="https://travis-ci.org/tien271/react-add-to-calendar-recurring.svg?branch=master"
                  className="badge"/>
            </a>&nbsp;&nbsp;
            <a href="https://david-dm.org/tien271/react-add-to-calendar-recurring">
              <img
                  src="https://img.shields.io/david/strongloop/express.svg?maxAge=2592000"
                  className="badge"/>
            </a>&nbsp;&nbsp;
            <a href="https://david-dm.org/tien271/react-add-to-calendar-recurring">
              <img
                  src="https://img.shields.io/david/peer/webcomponents/generator-element.svg?maxAge=2592000"
                  className="badge"/>
            </a>&nbsp;&nbsp;
            <a href={"https://npmjs.org/package/react-add-to-calendar-recurring"}>
              <img
                  src="https://img.shields.io/npm/dm/react-add-to-calendar-recurring.svg"
                  className="badge"/>
            </a>
          </p>
          <p>
            A simple, customizable, and reusable Add to Calendar button component for React.
          </p>

          <h2>Installation</h2>
          <p>The package can be installed via NPM:</p>
          <p><code>npm install react-add-to-calendar-recurring --save</code></p>
        </div>
        <div className="wrapper">
          <ExampleComponents />
        </div>

        <a href="https://github.com/tien271/react-add-to-calendar-recurring/">
          <img
              className="github-ribbon"
              src="images/ribbon.png"
              alt="Fork me on GitHub"/>
        </a>
      </div>
    );
  }
}

Root.displayName = "Root";
