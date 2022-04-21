import {
  getPokemon, getComment, sendComment,
  itemsCounter, capitalized, sendLike, updatelikes, commentsCounter,
} from './api.js';

const body = document.getElementById('body');

const nav = document.getElementById('menu');
const ul = document.createElement('ul');
ul.classList.add('navigation');
ul.innerHTML = `
          <li class="nav-link list-link"><a class="link active">Pokedex(${itemsCounter()})</a></li>
          <li class="nav-link add-new-link"><a class="link">Region</a></li>
          <li class="nav-link contact-link"><a class="link">Types</a></li>
`;
nav.appendChild(ul);

const navMenu = document.querySelector('.navigation');
const hamburguer = document.querySelector('#hamburguer');
const close = document.querySelector('#close');

hamburguer.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  close.classList.remove('show');
  document.querySelector('body').classList.toggle('overflow-hidden');
});

close.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  close.classList.add('show');
  document.querySelector('body').classList.toggle('overflow-hidden');
});

document.querySelectorAll('.item').forEach((n) => n.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  close.classList.add('show');
  document.querySelector('body').classList.toggle('overflow-hidden');
}));

const alert = (message, className) => {
  const DIV = document.createElement('div');
  DIV.className = `alert alert-${className}`;
  DIV.appendChild(document.createTextNode(message));
  const CONTAINER = document.querySelector('.form');
  const PAGE = document.querySelector('.formButton');
  CONTAINER.insertBefore(DIV, PAGE);
  setTimeout(() => document.querySelector('.alert').remove(), 1500);
};

const cleanInput = () => {
  const formInsight = document.getElementById('formInsight');
  const formName = document.getElementById('formName');
  formInsight.value = '';
  formName.value = '';
};

const popupWindow = async (pokemon) => {
  const cardContainer = document.getElementById('cards');
  const modalBackground = document.createElement('section');
  modalBackground.className = 'modalBackground';
  cardContainer.appendChild(modalBackground);

  const modalContainer = document.createElement('section');
  modalContainer.className = 'modalContainer';

  const closeBtn = document.createElement('button');
  closeBtn.classList.add('closeBtn');
  modalContainer.appendChild(closeBtn);

  closeBtn.addEventListener('click', () => {
    body.classList.toggle('scroll');
    modalBackground.remove();
  });

  const imageontainer = document.createElement('div');
  imageontainer.classList.add('image-popup');
  modalContainer.appendChild(imageontainer);

  const image = document.createElement('img');
  image.classList.add('popup-img');
  image.src = pokemon.sprites.other.dream_world.front_default;
  image.alt = pokemon.name;
  imageontainer.appendChild(image);

  const popTitle = document.createElement('div');
  popTitle.classList.add('pop-title');
  modalContainer.appendChild(popTitle);

  const title = document.createElement('h2');
  title.classList.add('poke-title');
  title.innerText = capitalized(pokemon.name);
  popTitle.appendChild(title);

  const pokeInfo = document.createElement('div');
  pokeInfo.classList.add('pokeInfo');
  modalContainer.appendChild(pokeInfo);

  const weight = document.createElement('span');
  weight.classList.add('weight');
  weight.innerText = `Weight: ${pokemon.weight}`;

  pokeInfo.appendChild(weight);

  const pokeID = document.createElement('span');
  pokeID.classList.add('pokeId');
  pokeID.innerText = `id: ${pokemon.id} `;
  pokeInfo.appendChild(pokeID);

  const type = document.createElement('span');
  type.classList.add('type');
  type.innerText = `Type: ${pokemon.types[0].type.name}`;
  pokeInfo.appendChild(type);

  const ability1 = document.createElement('span');
  ability1.classList.add('ability1');
  ability1.innerText = `Ability 1: ${pokemon.abilities[0].ability.name}`;
  pokeInfo.appendChild(ability1);

  const ability2 = document.createElement('span');
  ability2.classList.add('ability2');
  ability2.innerText = `Ability 2: ${pokemon.abilities[1].ability.name}`;
  pokeInfo.appendChild(ability2);

  const commentContain = document.createElement('div');
  commentContain.classList.add('commentContain');
  modalContainer.appendChild(commentContain);

  const dataComment = await getComment(pokemon.name);
  const count = 0;

  const commentTitle = document.createElement('h2');
  commentTitle.classList.add('commentTitle');
  if (dataComment.length === undefined) {
    commentTitle.textContent = `Comments(${count})`;
  } else {
    commentTitle.textContent = `Comments(${await commentsCounter(pokemon.name)})`;
  }
  commentContain.appendChild(commentTitle);

  const commentInfo = document.createElement('div');
  commentInfo.classList.add('commentInfo');
  commentContain.appendChild(commentInfo);
  const ul = document.createElement('ul');
  ul.classList.add('ulComment');
  ul.id = 'comments';
  commentInfo.appendChild(ul);

  for (let i = 0; i < dataComment.length; i += 1) {
    const li = document.createElement('li');
    li.classList.add('liComment');
    li.innerHTML = `${dataComment[i].creation_date} ${dataComment[i].username}: ${dataComment[i].comment}`;
    ul.appendChild(li);
  }

  const formContain = document.createElement('div');
  formContain.classList.add('formContain');
  modalContainer.appendChild(formContain);

  const form = document.createElement('form');
  form.classList.add('form');

  const formTitle = document.createElement('h2');
  formTitle.classList.add('formTitle');
  formTitle.textContent = 'Add a comment';
  form.appendChild(formTitle);

  const formName = document.createElement('input');
  formName.classList.add('formName');
  formName.id = 'formName';
  formName.setAttribute('type', 'text');
  formName.setAttribute('name', 'name');
  formName.setAttribute('placeholder', 'Your name');
  form.appendChild(formName);

  const formInsight = document.createElement('textarea');
  formInsight.id = 'formInsight';
  formInsight.classList.add('formInsight');
  formInsight.setAttribute('type', 'textarea');
  formInsight.setAttribute('name', 'name');
  formInsight.setAttribute('placeholder', 'Your insight');
  form.appendChild(formInsight);

  const formButton = document.createElement('input');
  formButton.classList.add('formButton');
  formButton.setAttribute('type', 'submit');
  formButton.setAttribute('value', 'Comment');
  form.appendChild(formButton);

  formButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const formInsight = document.getElementById('formInsight').value;
    const formName = document.getElementById('formName').value;
    if (formInsight === '' && formName === '') {
      alert('Form cannot be empty', 'danger');
    } else {
      await Promise.resolve(sendComment(pokemon.name, formName, formInsight));
      const dataComment = await Promise.resolve(getComment(pokemon.name));
      const ul = document.getElementById('comments');
      while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
      }
      body.classList.toggle('scroll');
      dataComment.forEach((comment) => {
        const li = document.createElement('li');
        li.classList.add('liComment');
        li.innerHTML = `${comment.creation_date} ${comment.username}: ${comment.comment}`;
        ul.appendChild(li);
      });
    }
    body.classList.toggle('scroll');
    cleanInput();
  });

  formContain.appendChild(form);
  modalBackground.appendChild(modalContainer);
};

const display = async (monster) => {
  const pokemon = await getPokemon(monster);
  const cardContainer = document.getElementById('cards');
  const card = document.createElement('div');
  card.classList.add('card-container');
  cardContainer.appendChild(card);

  const imageontainer = document.createElement('div');
  imageontainer.classList.add('image-container');
  card.appendChild(imageontainer);

  const image = document.createElement('img');
  image.classList.add('poke-img');
  image.src = pokemon.sprites.other.dream_world.front_default;
  image.alt = pokemon.name;
  imageontainer.appendChild(image);

  const cardTitle = document.createElement('div');
  cardTitle.classList.add('card-title');
  card.appendChild(cardTitle);

  const title = document.createElement('h2');
  title.classList.add('title');
  title.innerText = capitalized(pokemon.name);
  cardTitle.appendChild(title);

  const like = document.createElement('button');
  like.classList.add('like');
  cardTitle.appendChild(like);

  const likesText = document.createElement('div');
  likesText.classList.add('count');
  card.appendChild(likesText);

  const likesCount = document.createElement('p');
  likesCount.classList.add('likes-count');
  likesCount.innerHTML = `${await Promise.resolve(updatelikes(pokemon.name))} likes`;
  likesText.appendChild(likesCount);

  like.addEventListener('click', async () => {
    await Promise.resolve(sendLike(pokemon.name));
    likesCount.innerHTML = `${await Promise.resolve(updatelikes(pokemon.name))} likes`;
  });

  const buttons = document.createElement('div');
  buttons.classList.add('btns');
  card.appendChild(buttons);

  const comments = document.createElement('button');
  comments.classList.add('comment');
  comments.id = 'comment-btn';
  comments.innerText = 'Comment';
  buttons.appendChild(comments);

  comments.addEventListener('click', () => {
    body.classList.toggle('scroll');
    popupWindow(pokemon);
  });

  const reservations = document.createElement('button');
  reservations.classList.add('reservation');
  reservations.id = 'reservation-btn';
  reservations.innerText = 'Reservations';
  buttons.appendChild(reservations);
};

export default display;
