import express from 'express';
import { userController } from './users/controller.js';
import { postController } from './posts/controller.js';

const app = express();

const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hey world!');
});

// END POINT: users
app.get('/users', userController.findAll);
app.get('/users/:id', userController.findOneById);
app.post('/users', userController.create);

// END POINT: posts
app.get('/posts', postController.findAll);
app.get('/posts/:id', postController.findOneById);
app.post('/posts', postController.create);

export default app.listen(PORT | 3000, () => {
  console.log(`Server listening on port ${PORT}`);
}); 