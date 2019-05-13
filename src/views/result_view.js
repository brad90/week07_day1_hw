const PubSub = require('../helpers/pub_sub.js')

const FromView = function(){

  }

FromView.prototype.bindEvents = function () {
  const form = document.querySelector("#prime-checker-form");
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputtedNumber = event.target.event.value;
    PubSub.publish('FromView:number-submitted', inputtedNumber);
  });

};


module.exports = FromView;
