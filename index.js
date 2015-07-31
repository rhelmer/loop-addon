"use strict";

var self = require("sdk/self");
const {Cc, Ci, Cu} = require("chrome");

Cu.import("resource:///modules/loop/MozLoopAPI.jsm");

// first, disable the built-in Hello service, if present
// FIXME - needs browser restart to really disable
//require("sdk/preferences/service").set("loop.enabled", false);

var { ToggleButton } = require("sdk/ui/button/toggle");
var panels = require("sdk/panel");
var self = require("sdk/self");

var button = ToggleButton({
  id: "candy-button",
  label: "Hello",
  icon: {
    "18": "./hello-icon-16.png",
    "32": "./hello-icon-32.png",
    "64": "./hello-icon-64.png"
  },
  onChange: handleChange
});

var panel = panels.Panel({
  contentURL: "about:looppanel",
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
