import './bulb.scss';

export class Bulb {
  constructor(targetEl) {
    this.target = targetEl;
    this.control = targetEl.querySelector('.bulb__control');
    this.lighter = targetEl.querySelector('.bulb__lighter');
    this.isEnabled = false;
    console.log(this);
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
}
