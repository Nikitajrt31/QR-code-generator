'use strict';

let imgBoxEl = document.getElementById('imgBox');
let qrImageEl = document.getElementById('qrImage');
let qrTextEl = document.getElementById('qrText');

function generateQR() {
  if (qrTextEl.value.length > 0) {
    qrImageEl.src =
      'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' +
      qrTextEl.value;
    imgBoxEl.classList.add('show-img');
  } else {
    qrTextEl.classList.add('error');
    setTimeout(() => {
      qrTextEl.classList.remove('error');
    }, 1000);
  }
}

document.querySelector('#generateQR').addEventListener('click', generateQR);
