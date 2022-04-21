import display from './dom.js';
import { idArray } from './id.js';
// import { createLikes } from './api.js';

const monsters = idArray();
const createCards = () => {
  monsters.forEach((pokemon) => {
    // createLikes(pokemon);
    display(pokemon);
  });
};

export default createCards;
