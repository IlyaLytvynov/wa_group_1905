import './lesson_7.scss';

// let userName = 'Ilya';
// let userAge = 26;
// let userAddress = 'dasdasd asdasdasd asdasd';
// let userPhoneNumber = '+83635289103';
//
// let user = {
//   name: 'Ilya',
//   age: 26,
//   address: 'dasdasd asdasdasd asdasd',
//   phoneNumber: '+83635289103',
// };
//
const product = {
  price: 'fdjhgafsjhdga',
  title: 'Iphone 7',
  imagUrl: 'http://ws3.com/image12.jpg'
};
//
//
const product2 = {
  Iphone: '200',
  macBook: '2000',
  s9: '1000',
};

// const name = prompt('Enter your name ', '');

for (let i = 0; i < name.length; i = i + 2) {
  console.log(name[i]);
}

for (let key in product2) {
  console.log('KEY: ' + key);
  console.log('VALUE: ' + product2[key]);
}

