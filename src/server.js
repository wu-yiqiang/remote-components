import express from 'express';
import cors from 'cors';

const app = express()
const port = 4333

app.use(cors());
app.use(express.static('src'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})