"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.schemaTypes = void 0;

var _products = _interopRequireDefault(require("./products"));

var _category = _interopRequireDefault(require("./category"));

var _richText = _interopRequireDefault(require("./richText"));

var _store = _interopRequireDefault(require("./store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var schemaTypes = [_products["default"], _category["default"], _richText["default"], _store["default"]];
exports.schemaTypes = schemaTypes;