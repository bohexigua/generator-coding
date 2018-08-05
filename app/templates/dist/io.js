'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.print = exports.read = undefined;

var _readline = require('readline');

var _readline2 = _interopRequireDefault(_readline);

var _util = require('../dist/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var options = {
  ioFlag: true // 此处 hack 掉循环时关闭流之后的输入数据提示
};
var rl = _readline2.default.createInterface({
  input: process.stdin,
  output: process.stdout
});

var readWrap = function readWrap() {
  return new Promise(function (resolve, reject) {
    rl.on('line', function (input) {
      resolve(input);
    });
  });
};

var read = exports.read = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (options.ioFlag) {
              _context.next = 2;
              break;
            }

            return _context.abrupt('return');

          case 2:
            _util.hint.warn('请输入数据: ');
            _context.next = 5;
            return readWrap();

          case 5:
            return _context.abrupt('return', _context.sent);

          case 6:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function read() {
    return _ref.apply(this, arguments);
  };
}();

var print = exports.print = function print(msg) {
  _util.hint.success('运行结果: ', msg);
  rl.close();
  options.ioFlag = false;
};