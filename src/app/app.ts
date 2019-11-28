import express from 'express';
import { Greeter } from './Greeter';

const app: express.Application = express();
const port: number = Number(process.env.PORT) || 3000;

app.get('/', (req: express.Request, res: express.Response) => {
  let name: string = req.query.name || 'world';
  let greeter: Greeter = new Greeter(name);
  res.json({'greeting': greeter.greet()});
});

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
