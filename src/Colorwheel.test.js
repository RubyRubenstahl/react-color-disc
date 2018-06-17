import {
  appendTransparentPixel,
  toHsv,
  translate,
  indexTo2d,
  getPolarAngle,
  radToDegrees
} from "./drawColorWheel";

describe('indexTo2d', ()=>{
  test('returns an point object', ()=>
      expect(indexTo2d(0, 100, 100)).toEqual({x: 0, y: 0})
  )

  test('returns a correct coordinate', ()=>
      expect(indexTo2d(255, 100, 100)).toEqual({x: 55, y: 2})
  )
});

