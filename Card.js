class Card {
  _open = false;
  _success = false;
  constructor(container, cardNumber, flip) {
    this.container = container;
    this.cardNumber = cardNumber;
    this.createElement(this.cardNumber).addEventListener('click', ()=> {
        this.open = true;
        flip(this)
      });
  }
  createElement(cardNumber){
    this.item = document.createElement('div')
    this.item.classList.add('card');
    this.item.innerHTML = cardNumber;
    // this.item.append(cardNumber);
    field.append(this.item);
    return this.item;
  }

  set cardNumber(value) {
    this._cardNumber = value
  }
  get cardNumber() {
    return this._cardNumber;
  }
  set open(value) {
    this._open = value;
    value ? this.item.classList.add('open') : this.item.classList.remove('open');
  }
  get open() {
    return this._open;
  }
  set success(value) {
    this._success = value;
    value ? this.item.classList.add('success') : this.item.classList.remove('open');
  }
  get success() {
    return this._success;
  }
}
