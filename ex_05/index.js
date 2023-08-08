document.getElementById('inTextSq').innerHTML =
  'This text was modified with ID';

const squareLineDiv = document.querySelector('.squareLineDiv');
squareLineDiv.style.display = 'flex';
squareLineDiv.style.gap = '0.5rem';

const newSquare = document.createElement('div');
newSquare.classList.add('shape', 'redElement', 'centralizedItem');
squareLineDiv.appendChild(newSquare);

const ulNewSquare = document.createElement('ul');
const liNewSquare = document.createElement('li');
liNewSquare.textContent = 'li created with DOM';
ulNewSquare.append(liNewSquare);
newSquare.appendChild(ulNewSquare);

const randomImage = document.getElementById('randomImage');
randomImage.src =
  'https://www.plantje.nl/wp-content/uploads/2021/09/Monstera-Adansonii-p12-Lifestyle.jpg';

const changedLink = document.getElementById('changedLink');
changedLink.href = 'https://www.google.com/';

const pRemoved = document.getElementById('pRemoved');
pRemoved.remove();
