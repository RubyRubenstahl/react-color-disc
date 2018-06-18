'use strict';

var _drawColorWheel = require('./drawColorWheel');

describe('indexTo2d', function () {
  test('returns an point object', function () {
    return expect((0, _drawColorWheel.indexTo2d)(0, 100, 100)).toEqual({ x: 0, y: 0 });
  });

  test('returns a correct coordinate', function () {
    return expect((0, _drawColorWheel.indexTo2d)(255, 100, 100)).toEqual({ x: 55, y: 2 });
  });
});