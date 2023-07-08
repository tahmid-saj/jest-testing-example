const googleSearch = require("./script");

const dbMock = [
  'dog.com',
  'cheesepuff.com',
  'disney.com',
  'dogpictures.com'
];

it('this is a test', () => {
  expect("hello").toBe("hello");
  // googleSearch("testtest", dbMock);
});

it('searching test', () => {
  expect(googleSearch('testest', dbMock)).toEqual([]);
  expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com']);
});