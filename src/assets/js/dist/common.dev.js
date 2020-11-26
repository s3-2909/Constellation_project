"use strict";

var _fastclick = _interopRequireDefault(require("./fastclick"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + "px";
window.addEventListener("load", function () {
  _fastclick["default"].attach(document.body);
}, false);
document.documentElement.addEventListener("touchmove", function (e) {
  if (e.touches.length > 1) {
    e.preventDefault();
  }
}, false);