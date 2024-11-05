const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');


const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get(`/`, async (req, res) => {
  res.json({ data:"サーバーと通信はできています"});
});

app.get('/todos', async (req, res) => {
  try {
    const todos = await prisma.todo.findMany();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch todos' });
  }
});

app.post('/todos', async (req, res) => {
  try {
    const todo = await prisma.todo.create({
      data: {
        id: req.body.id,
        title: req.body.title,
        content: req.body.content,
        completed: req.body.completed || false,
      },
    });
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create todo' });
  }
});

app.put('/todos/:id', async (req, res) => {
  try {
    const todo = await prisma.todo.update({
      where: { id: req.params.id },
      data: {
        title: req.body.title,
        content: req.body.content,
        completed: req.body.completed,
      },
    });
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update todo' });
  }
});

app.delete('/todos/:id', async (req, res) => {
  try {
    await prisma.todo.delete({
      where: { id: req.params.id },
    });
    res.json({ message: 'Todo deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete todo' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});