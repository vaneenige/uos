import uos from './../../src/index.js';

function withOffset(begin, end, callback) {
  const offset = 20;
  if (end <= 1) {
    const percentageOffset = offset / (document.body.scrollHeight - window.innerHeight);
    uos(begin + percentageOffset, end - percentageOffset, callback);
  } else {
    uos(begin + offset, end + offset, callback);
  }
}

const pixelItems = document.querySelectorAll('.pixels li span');

withOffset(0, 500, p => {
  pixelItems[0].textContent = p.toFixed(2);
});

withOffset(500, 1000, p => {
  pixelItems[1].textContent = p.toFixed(2);
});

withOffset(0, 2000, p => {
  pixelItems[2].textContent = p.toFixed(2);
});

const percentageItems = document.querySelectorAll('.percentages li span');

withOffset(0, 0.5, p => {
  percentageItems[0].textContent = p.toFixed(2);
});

withOffset(0.5, 1, p => {
  percentageItems[1].textContent = p.toFixed(2);
});

withOffset(0, 1, p => {
  percentageItems[2].textContent = p.toFixed(2);
});

// Add numbers to indicator lines
const numbers1 = document.querySelector('.numbers1');
for (let i = 0; i < 21; i += 1) {
  numbers1.innerHTML += `<li style="top: ${i * 100 + 20}px">${i * 100}</li>`;
}

const numbers2 = document.querySelector('.numbers2');
for (let i = 0; i < 5; i += 1) {
  numbers2.innerHTML += `<li style="top: ${(i * (2001 - window.innerHeight)) / 4 + 20}px">${i *
    25}%</li>`;
}
