import './lesson_9.scss';

function notificationBar () {

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