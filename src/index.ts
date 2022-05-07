import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import proxy from './proxy';
import { version } from '../package.json';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: '4mb' }));
app.use(express.urlencoded({ limit: '4mb', extended: false }));
app.use(cors({ maxAge: 86400 }));
app.use('/', proxy);
app.get('/', (req, res) => res.json({ version, port: PORT }));

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
