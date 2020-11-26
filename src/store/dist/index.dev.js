"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vuex = require("vuex");

var _state = _interopRequireDefault(require("./state"));

var _mustations = _interopRequireDefault(require("./mustations"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _vuex.createStore)({
  state: _state["default"],
  mutations: _mustations["default"]
});

exports["default"] = _default;