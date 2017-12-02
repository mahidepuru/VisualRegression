"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

exports.mapViewports = mapViewports;
exports.mapOrientations = mapOrientations;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapViewports(browser, delay) {
  var viewports = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var iteratee = arguments[3];

  var results, viewport, result, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _viewport, _result;

  return _regenerator2.default.async(function mapViewports$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          results = [];

          if (viewports.length) {
            _context.next = 11;
            break;
          }

          _context.next = 4;
          return _regenerator2.default.awrap(browser.getViewportSize());

        case 4:
          viewport = _context.sent;
          _context.next = 7;
          return _regenerator2.default.awrap(iteratee(viewport));

        case 7:
          result = _context.sent;

          results.push(result);
          _context.next = 43;
          break;

        case 11:
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 14;
          _iterator = (0, _getIterator3.default)(viewports);

        case 16:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context.next = 29;
            break;
          }

          _viewport = _step.value;
          _context.next = 20;
          return _regenerator2.default.awrap(browser.setViewportSize(_viewport));

        case 20:
          _context.next = 22;
          return _regenerator2.default.awrap(browser.pause(delay));

        case 22:
          _context.next = 24;
          return _regenerator2.default.awrap(iteratee(_viewport));

        case 24:
          _result = _context.sent;

          results.push(_result);

        case 26:
          _iteratorNormalCompletion = true;
          _context.next = 16;
          break;

        case 29:
          _context.next = 35;
          break;

        case 31:
          _context.prev = 31;
          _context.t0 = _context["catch"](14);
          _didIteratorError = true;
          _iteratorError = _context.t0;

        case 35:
          _context.prev = 35;
          _context.prev = 36;

          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }

        case 38:
          _context.prev = 38;

          if (!_didIteratorError) {
            _context.next = 41;
            break;
          }

          throw _iteratorError;

        case 41:
          return _context.finish(38);

        case 42:
          return _context.finish(35);

        case 43:
          return _context.abrupt("return", results);

        case 44:
        case "end":
          return _context.stop();
      }
    }
  }, null, this, [[14, 31, 35, 43], [36,, 38, 42]]);
}

function mapOrientations(browser, delay) {
  var orientations = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var iteratee = arguments[3];

  var results, orientation, result, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _orientation, _result2;

  return _regenerator2.default.async(function mapOrientations$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          results = [];

          if (orientations.length) {
            _context2.next = 11;
            break;
          }

          _context2.next = 4;
          return _regenerator2.default.awrap(browser.getOrientation());

        case 4:
          orientation = _context2.sent;
          _context2.next = 7;
          return _regenerator2.default.awrap(iteratee(orientation));

        case 7:
          result = _context2.sent;

          results.push(result);
          _context2.next = 43;
          break;

        case 11:
          _iteratorNormalCompletion2 = true;
          _didIteratorError2 = false;
          _iteratorError2 = undefined;
          _context2.prev = 14;
          _iterator2 = (0, _getIterator3.default)(orientations);

        case 16:
          if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
            _context2.next = 29;
            break;
          }

          _orientation = _step2.value;
          _context2.next = 20;
          return _regenerator2.default.awrap(browser.setOrientation(_orientation));

        case 20:
          _context2.next = 22;
          return _regenerator2.default.awrap(browser.pause(delay));

        case 22:
          _context2.next = 24;
          return _regenerator2.default.awrap(iteratee(_orientation));

        case 24:
          _result2 = _context2.sent;

          results.push(_result2);

        case 26:
          _iteratorNormalCompletion2 = true;
          _context2.next = 16;
          break;

        case 29:
          _context2.next = 35;
          break;

        case 31:
          _context2.prev = 31;
          _context2.t0 = _context2["catch"](14);
          _didIteratorError2 = true;
          _iteratorError2 = _context2.t0;

        case 35:
          _context2.prev = 35;
          _context2.prev = 36;

          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }

        case 38:
          _context2.prev = 38;

          if (!_didIteratorError2) {
            _context2.next = 41;
            break;
          }

          throw _iteratorError2;

        case 41:
          return _context2.finish(38);

        case 42:
          return _context2.finish(35);

        case 43:
          return _context2.abrupt("return", results);

        case 44:
        case "end":
          return _context2.stop();
      }
    }
  }, null, this, [[14, 31, 35, 43], [36,, 38, 42]]);
}