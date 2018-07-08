import '../styles/lighter.scss';

export function lighter(lighterElement) {
  const lights = lighterElement.querySelectorAll('.street-lighter__light');

  function switchOff() {
    for(let i = 0; i < lights.length; i++) {
      const light = lights[i];
      light.classList.remove('street-lighter__light_active')
    }
  }

  function switchOn(element) {
    console.log('ENABLED');
    element.classList.add('street-lighter__light_active');
  }

  function clickHandler(element) {
    switchOff();
    switchOn(element);
  }

  for(let i = 0; i < lights.length; i++) {
    const light = lights[i];
    light.addEventListener('click', function () {
      clickHandler(light);
    });
  }
}

function isEmpty(obj) {

}