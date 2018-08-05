'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hint = undefined;

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hint = exports.hint = {};

hint.success = function () {
  var tips = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var str = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  console.log(_chalk2.default.green(tips) + ' ' + str);
};

hint.warn = function () {
  var tips = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var str = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  console.log(_chalk2.default.yellow(tips) + ' ' + str);
};