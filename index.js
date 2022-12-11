import got from 'got';

got
  .get('https://jsonplaceholder.typicode.com/todos/1')
  .then((data) => console.log(data.body))
  .catch(console.error);
