const commentsCounter = () => {
  const dataComment = [{
    username: 'Tafara',
    comment: 'This is cool',
  },
  {
    username: 'George',
    comment: 'This is awesome',
  },
  {
    username: 'Tom',
    comment: 'Not too bad',
  }];

  const count = dataComment.length;
  return count;
};

export default commentsCounter;