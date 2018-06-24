import './lesson_9.scss';
import { lighter } from './scripts/lighter';

const lighterElement= document.querySelector('#lighter1');
const lighterElement2 = document.querySelector('#lighter2');
const lighterElement3 = document.querySelector('#lighter3');

lighter(lighterElement);
lighter(lighterElement2);
lighter(lighterElement3);

function notificationBar() {

  const notificationBarElement = document.querySelector('.notification-bar');
  const control = document.querySelector('.notification-bar__btn');

  console.log(control);
  console.log(notificationBarElement);

  function toggleMessage() {
    notificationBarElement.classList.toggle('notification-bar_active');
  }

  control.addEventListener('click', toggleMessage);
}

notificationBar();
