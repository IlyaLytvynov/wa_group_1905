export class Garland {
  constructor(targetEl, bulbs) {
    this.targetEl = targetEl;
    this.bulbs = bulbs;
    this.control = targetEl.querySelector('.garland__control');
    this.control.addEventListener('click', () => this.togleAll());
  }

  togleAll() {
    const enabledElements = this.bulbs.filter((bulb) => {
      return bulb.isEnabled === true;
    });

    console.log(enabledElements);
    if (enabledElements.length > 0) {
      this.bulbs.forEach((bulb) => {
        bulb.switchOff();
      });
    } else {
      this.bulbs.forEach((bulb) => {
        bulb.switchOn();
      });
    }
    
  }
}