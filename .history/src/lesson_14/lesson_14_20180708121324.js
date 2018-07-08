import { Lighter } from './components/lighter/lighter';
import { Bulb } from './components/bulb/bulb';
import { Garland } from './components/garland/garland';

const firstLighter = new Lighter(document.querySelector('#lighter1'));

const bulb = new Bulb(document.querySelector('#bulb1'));
const bulb2 = new Bulb(document.querySelector('#bulb2'));
const garland = new Garland(
  document.querySelector('#garland1'), 
  [
    new Bulb(document.querySelector('#bulb3')),
    new Bulb(document.querySelector('#bulb4'))
  ]
);
const bulbsGroup = [
  new Bulb(document.querySelector('#bulb5')),
  new Bulb(document.querySelector('#bulb6'))
];

const garland2 = new Garland(
  document.querySelector('#garland2'), 
  bulbsGroup
);