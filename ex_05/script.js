//  Selecione um elemento pelo ID e altere seu texto interno.
document.getElementById('inTextSq').innerHTML =
  'This text was modified with ID';

//  Selecione um elemento pela classe e modifique seu estilo.
const redElement = document.querySelectorAll('.redElement');
redElement.forEach(element => (element.style.backgroundColor = 'grey'));

//  Crie um novo elemento div, atribua uma classe e insira-o em um elemento pai.
const newSquare = document.createElement('div');
const secondRow = document.querySelector('.secondRow');
newSquare.classList.add('shape', 'redElement', 'centralizedItem');
secondRow.appendChild(newSquare);

// Crie um novo elemento ul, adicione várias li a ele e insira-o em um elemento pai.
const ulNewSquare = document.createElement('ul');
const liNewSquare = document.createElement('li');
liNewSquare.textContent = 'li created with DOM';
ulNewSquare.append(liNewSquare);
newSquare.appendChild(ulNewSquare);

// Altere o atributo src de uma imagem.
const randomImage = document.getElementById('randomImage');
randomImage.src =
  'https://www.plantje.nl/wp-content/uploads/2021/09/Monstera-Adansonii-p12-Lifestyle.jpg';

//  Adicione um atributo href a um link.
const changedLink = document.getElementById('changedLink');
changedLink.href = 'https://www.google.com/';

//  Selecione um elemento e o remova do DOM.
const pRemoved = document.querySelector('#pRemoved');
pRemoved.remove();

//  Crie um botão que, ao ser clicado, altera o texto de um elemento.
const buttonTextChanging = document.getElementById('buttonTextChanging');
buttonTextChanging.addEventListener('click', () => {
  buttonTextChanging.textContent = 'changed';
});

// Adicione um evento de clique a um elemento e altere seu estilo quando clicado.
const shiftSquare = document.getElementById('shiftSquare');
shiftSquare.addEventListener('click', () => {
  shiftSquare.style.borderRadius = '50%';
});

//Crie um formulário para adicionar itens a uma lista (ul) quando um botão for clicado.
// Crie um botão para remover itens da lista quando clicados.
const inputTask = document.getElementById('inputTask');
inputTask.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    const listTask = document.getElementById('listTask');
    const task = document.createElement('li');

    task.innerText = inputTask.value;
    listTask.appendChild(task);

    const liButton = document.createElement('button');
    liButton.textContent = '-';
    task.appendChild(liButton);

    liButton.addEventListener('click', () => {
      task.remove(), liButton.remove();
    });

    inputTask.value = '';
    e.preventDefault();
  }
});

//Crie uma galeria de imagens em que, ao clicar em uma imagem, ela seja exibida em tamanho maior.
const images = document.querySelectorAll('#citiesGalery img');
images.forEach(image =>
  image.addEventListener('click', () => {
    image.style.transform = 'scale(2.8)';
  })
);

//Crie um formulário com validação, exibindo mensagens de erro ao enviar o formulário vazio.
const nameInput = document.getElementById('nameInput');
const telefoneInput = document.getElementById('telefoneInput');
const sendButton = document.getElementById('sendButton');

sendButton.addEventListener('click', e => {
  if (nameInput.value === '') {
    nameInput.value = 'Please, provide a name...';
    nameInput.style.color = 'red';
  } else if (telefoneInput.value === '') {
    telefoneInput.value = 'Please, provide a telefone...';
    telefoneInput.style.color = 'red';
  }
  e.preventDefault();
});

//Implemente a funcionalidade de arrastar e soltar para reorganizar elementos em uma lista.
const numbers = document.querySelectorAll('.draggable');
const destiny = document.getElementById('destinyList');

numbers.forEach(number => {
  number.addEventListener('dragstart', () => number.classList.add('dragging'));
  number.addEventListener('dragend', () => number.classList.remove('dragging'));
});

destiny.addEventListener('dragover', e => {
  e.preventDefault();
  const draggable = document.querySelector('.dragging');
  destiny.appendChild(draggable);
});

//Crie uma animação suave de rolagem para rolar suavemente até um elemento específico quando um link for clicado:

function scrollToTarget(event) {
  const scrollButton = document.getElementById('scrollButton');
  const targetId = scrollButton.getAttribute('data-scroll-target');
  const targetElement = document.querySelector(targetId);
  const targetPosition = targetElement.offsetTop;

  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
}

const scrollButton = document.getElementById('scrollButton');
scrollButton.addEventListener('click', scrollToTarget);

//Crie um modal que seja aberto ao clicar em um botão e fechado ao clicar fora dele ou em um botão de fechar.
const modal = document.getElementById('myModal');
const modalButton = document.getElementById('modalButton');
const span = document.getElementsByClassName('close')[0];

modalButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

span.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', () => {
  modal.style.display = 'none';
});
