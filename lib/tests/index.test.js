"use strict";

var exported = require('../index');

describe('should export', function () {
  Object.keys(exported).forEach(function (key) {
    it("".concat(key, " should be defined"), function () {
      expect(exported[key]).toBeDefined();
    });
  });
});