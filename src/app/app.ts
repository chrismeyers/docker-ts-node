import express from 'express';
import { Greeter } from './Greeter';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  let greeter = new Greeter('world');
  res.send(greeter.greet());
});

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
