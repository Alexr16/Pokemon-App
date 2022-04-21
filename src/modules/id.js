const idArray = () => {
  const id = ['charizard', 'pikachu', 'ampharos', 'magmar', 'dragonite', 'mewtwo',
    'arcanine', 'lugia', 'altaria',
  ];
  return id;
};

const createIdArray = () => {
  const id = [
    { item_id: 'charizard' },
    { item_id: 'pikachu' },
    { item_id: 'ampharos' },
    { item_id: 'magmar' },
    { item_id: 'dragonite' },
    { item_id: 'mewtwo' },
    { item_id: 'arcanine' },
    { item_id: 'lugia' },
    { item_id: 'altaria' },
  ];
  return id;
};

export { idArray, createIdArray };