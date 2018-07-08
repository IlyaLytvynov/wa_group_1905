import { Bulb } from './components/bulb/bulb';
import { Garland } from './components/garland/garland';
import { Select } from './components/select/select';

import './lesson_14.scss';

import './components/select/select';

const bulb = new Bulb(document.querySelector('#bulb1'));
const graland = new Garland(document.querySelector('#garland1'));
const countries = ['USA', 'UKRAINE', 'MONTENEGRO', 'FRANCE'];
const countriesList = new Select(document.querySelector('#countriesList'), countries)

// const accordeon = new Accordeon(document.querySelector('#accordeonPlace', [
//   {
//     title: 'Section 1',
//     text: 'sdjfbahjsdbfjhasdfasd'
//   },
//   {
//     title: 'Section 2',
//     text: 'sdjfbahjsdbfjhasdfasd'
//   },
//   {
//     title: 'Section 3',
//     text: 'sdjfbahjsdbfjhasdfasd'
//   },
// ]))


// const accordeon2 = new Accordeon(document.querySelector('#accordeonPlace', [
//   {
//     title: 'Section 1',
//     text: 'sdjfbahjsdbfjhasdfasd'
//   },
//   {
//     title: 'Section 2',
//     text: 'sdjfbahjsdbfjhasdfasd'
//   },
// ]))