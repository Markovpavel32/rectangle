
import { makePoint, getX, getY, quadrant, toString as pointToString } from 'hexlet-points';

import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs';


export const makeRectangle = (startPoint, width, height) => cons(startPoint, cons(width, height));

export const getStartPoint = rectangle => car(rectangle);
export const getWidth = rectangle => car(cdr(rectangle));
export const getHeight = rectangle => cdr(cdr(rectangle));

export const square = rectangle => car(cdr(rectangle)) * cdr(cdr(rectangle));

export const perimeter = rectangle => 2 * (car(cdr(rectangle)) + cdr(cdr(rectangle)));

export const containsTheOrigin = rectangle => {
  let a = quadrant(car(rectangle));
  let b = quadrant(makePoint(car(car(rectangle)) + car(cdr(rectangle)), cdr(cdr(rectangle))));
  let c = quadrant(makePoint(car(car(rectangle)), cdr(car(rectangle)) - cdr(cdr(rectangle))));

  if(a !== b && b !== c && c !== a){
    return true;
  }

 return false;
};
