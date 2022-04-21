import itemsCounter from './__mocks__/itemsCounter.js';
import commentsCounter from './__mocks__/commentsCounter.js';

describe('Test itemsCounter function', () => {
  test('Items are difined', () => {
    expect(itemsCounter()).toBeDefined();
  });
  test('Items are not null', () => {
    expect(itemsCounter()).not.toBeNull();
  });
  test('Count items', () => {
    expect(itemsCounter()).toBe(3);
  });
});

describe('Test commentsCounter function', () => {
  test('Array is difined', () => {
    expect(commentsCounter()).toBeDefined();
  });
  test('Array is not null', () => {
    expect(commentsCounter()).not.toBeNull();
  });
  test('Count comments', () => {
    expect(commentsCounter()).toBe(3);
  });
});
