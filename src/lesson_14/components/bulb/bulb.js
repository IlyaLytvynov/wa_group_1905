import './bulb.scss';

export class Bulb {
  constructor(targetEl) {
    this.target = targetEl;
    this.isEnabled = false;
    this.render();
    this.control.addEventListener('click', () => this.toggle());
  }

  switchOn() {
    this.target.classList.add('bulb_active');
    this.isEnabled = true;
  }

  switchOff() {
    this.target.classList.remove('bulb_active');
    this.isEnabled = false;
  }

  toggle() {
    if (this.isEnabled) {
      this.switchOff();
    } else {
      this.switchOn();
    }
  }

  render() {
    this.control = document.createElement('button');
    this.lighter = document.createElement('div');

    this.control.classList.add('bulb__control');
    this.lighter.classList.add('bulb__lighter');

    this.control.textContent = 'Toggle';

    this.target.appendChild(this.lighter);
    this.target.appendChild(this.control);
    this.target.classList.add('bulb');
  }
}
