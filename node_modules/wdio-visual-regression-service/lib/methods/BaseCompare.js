"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BaseCompare = function () {
  function BaseCompare() {
    (0, _classCallCheck3.default)(this, BaseCompare);
  }

  (0, _createClass3.default)(BaseCompare, [{
    key: "before",


    /**
     * Gets executed before the tests starts.
     */
    value: function before(context) {
      return _regenerator2.default.async(function before$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", _promise2.default.resolve());

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }

    /**
     * Gets executed immediately before the screenshot is taken.
     */

  }, {
    key: "beforeScreenshot",
    value: function beforeScreenshot(context) {
      return _regenerator2.default.async(function beforeScreenshot$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", _promise2.default.resolve());

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    }

    /**
     * Gets executed after the screenshot is taken.
     * You can do here your image comparison magic.
     */

  }, {
    key: "afterScreenshot",
    value: function afterScreenshot(context, base64Screenshot) {
      return _regenerator2.default.async(function afterScreenshot$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", _promise2.default.resolve());

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this);
    }

    /**
     * Gets executed after all tests are done. You still have access to all global
     * variables from the test.
     */

  }, {
    key: "after",
    value: function after() {
      return _regenerator2.default.async(function after$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", _promise2.default.resolve());

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "createResultReport",
    value: function createResultReport(misMatchPercentage, isWithinMisMatchTolerance, isSameDimensions) {
      return {
        misMatchPercentage: misMatchPercentage,
        isWithinMisMatchTolerance: isWithinMisMatchTolerance,
        isSameDimensions: isSameDimensions,
        isExactSameImage: misMatchPercentage === 0
      };
    }
  }]);
  return BaseCompare;
}();

exports.default = BaseCompare;