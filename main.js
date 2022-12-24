
const openCards = [];
const cardsArr = [];
const field = document.getElementById('field');
const cardsAll = field.querySelectorAll('.card');
let forma = createInterface();

function createInterface() {
  let wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  document.getElementById('game').append(wrapper);
  let input = document.createElement('input');
  input.classList.add('input');
  wrapper.append(input);
  input.placeholder = 'Сколько карточек';
  let btn = document.createElement('button');
  btn.classList.add('btn');
  wrapper.append(btn);
  btn.textContent = 'Начнём игру!';
  let numArr = [];

  return {
    input,
    btn,
    wrapper,
    numArr,
  };
}

function cleaningField() {
  field.querySelectorAll('.card').forEach((item) => {
    item.remove();
  });
  forma.numArr.length = 0;
}

function gameOver() {
  if (field.querySelectorAll('.open').length === forma.numArr.length) {
    alert('Game over');
    window.location.reload ();
  }
}

function createGame() {
  cleaningField();
  forma.btn.addEventListener('click', () => {

    forma.btn.setAttribute('disabled', true);
    if (forma.input.value % 2 === 0 && 2 <= forma.input.value <= 10) {
      for (i = 1; i <= forma.input.value / 2; i++) {
        forma.numArr.push(i);
        forma.numArr.push(i);
      }

      forma.numArr.sort(() => Math.random() - 0.5);

      for (let cards of forma.numArr) {
        // let card = new AmazingCard(field, cards, async function(card){
        //   cardsArr.push(card);
        //   openCards.push(card);

        //   await new Promise((resolve) => setTimeout(resolve, 500));
        //   if (openCards.length === 2) {
        //     if (openCards[0].cardNumber !== openCards[1].cardNumber) {
        //       cardsArr.forEach((item) => item.open = false);
        //       console.log('разные')
        //     } else {
        //       cardsArr.forEach((item)=> item.success = true);
        //       console.log('успех')
        //     }
        //     cardsArr.length = 0;
        //     openCards.length = 0;
        //   }
        // gameOver();
        // })
        let card = new AmazingCard(field, cards, function(card){
          cardsArr.push(card);
          openCards.push(card);

          if (openCards.length === 3) {
            if (openCards[0].cardNumber !== openCards[1].cardNumber) {
              openCards[0].open = false ;
              openCards[1].open = false ;
              openCards.splice(0,2);
            } else {
              openCards[0].success = true ;
              openCards[1].success = true ;
              openCards.splice(0,2);
            }
          }
        gameOver();
        })
      }
      forma.input.value = '';
    } else {
      forma.input.value = '';
      alert("В поле можно ввести только чётное число от 2 до 10.")
    }
  });
}

createGame();

