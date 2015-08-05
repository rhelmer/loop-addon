"use strict";

var { ToggleButton } = require("sdk/ui/button/toggle");
var panels = require("sdk/panel");
var self = require("sdk/self");

const {Cc, Ci, Cu} = require("chrome");
var LoopUI = Cu.import("resource:///modules/loop/MozLoopAPI.jsm");

/*

var button = ToggleButton({
  id: "hello-button",
  label: "Hello",
  icon: {
    "18": "./hello-icon-16.png",
    "32": "./hello-icon-32.png",
    "64": "./hello-icon-64.png"
  },
  onChange: handleChange
});

var panel = panels.Panel({
  contentURL: "./panel.html",
  onHide: handleHide
});

function handleChange(state) {
  if (state.checked) {
    panel.show({
      position: button
    });
  }
}

function handleHide() {
  button.state("window", {checked: false});
}

*/
