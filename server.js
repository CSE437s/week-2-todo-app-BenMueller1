const express = require('express');
const mongoose = require('mongoose');

const ToDoItem = require('./models/TodoItem');

const app = express();
const port = 5001;

app.use(express.json());

const uri = "mongodb+srv://BenMueller1:Milky007@sweworkshoptodoapp.zror4eb.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(uri, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
.then(() => console.log('Successfully connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB:', err));

const db = mongoose.connection;

db.on('error', err => console.error('MongoDB connection error:', err));
db.once('open', () => console.log('MongoDB connection is open'));


app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Todo Item Endpoints
    // all endpoints testing using postman !!

// create a todo item
app.post('/todo-items', async (req, res) => {
    console.log("create todo item endpoint reached")

    try {
        const todoItem = new ToDoItem(req.body);
        await todoItem.save();
        // TODO do I need to define how todoItem is sent somewhere?
        res.status(201).send(todoItem);
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
});

// get all todo items
app.get('/todo-items', async (req, res) => {
    console.log("get all todo items endpoint reached");

    try {
      const todoItems = await ToDoItem.find({});
      res.status(200).send(todoItems);
    } catch (error) {
      res.status(500).send(error);
    }
});

// get a specific todo item
app.get('/todo-items/:id', async (req, res) => {
    try {
        const todoItemId = req.params.id;
        const todoItem = await ToDoItem.findById(todoItemId);

        if (!todoItem) {
            return res.status(404).send();
        }

        res.status(200).send(todoItem);
    } catch (error) {
        res.status(500).send(error);
    }
})

// edit a todo item
app.patch('/todo-items/:id', async (req, res) => {
    try {
        const todoItemId = req.params.id;
        const updates = req.body;
        const todoItem = await ToDoItem.findByIdAndUpdate(todoItemId, updates, { new: true }); // TODO maybe remove new: true ?
        
        if (!todoItem) {
            return res.status(404).send();
        }

        res.send(todoItem);
    } catch (error) {
        res.status(400).send(error);
    }
});

// delete a todo item
app.delete('/todo-items/:id', async (req, res) => {
    try {
        const todoItemId = req.params.id;
        const todoItem = await ToDoItem.findByIdAndDelete(todoItemId);

        if (!todoItem) {
            return res.status(404).send();
        }

        res.send(todoItem);
    } catch (error) {
        res.status(500).send(error);
    }
});
  
  
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
