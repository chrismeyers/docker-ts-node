import express from 'express';
import { Greeter } from './Greeter';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  let name = req.query.name || 'world';
  let greeter = new Greeter(name);
  res.json({'greeting': greeter.greet()});
});

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
