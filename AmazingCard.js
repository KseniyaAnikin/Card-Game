class  AmazingCard extends Card {
  _img ;
    constructor(container, cardNumber, flip){
      super(container,cardNumber, flip);
    }

    set cardNumber(value) {
      const cardsImgArray = [
          '/img/1.jpg',
          '/img/2.jpg',
          '/img/3.jpg',
          '/img/4.jpg',
      ]
      const img = document.createElement('img');
      img.src = cardsImgArray[value-1];
      this._img = img;
      // this._cardNumber = value;
      this._cardNumber = img.src;

      img.onerror = function(){
        img.src = '/img/def.jpg';
        throw new Error("картинка не найдена");
      }

    }

    get cardNumber() {
      return this._cardNumber;
    }

    createElement(){
      this.item = document.createElement('div')
      this.item.classList.add('card');
      this.item.append(this._img);
      field.append(this.item);
      return this.item;
    }

}
