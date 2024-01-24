# Instructions to run locally
My plan was to use MERN (react FE, express BE, mongoDB) with tailwind. I build out a working express backend (I will provide everything you need to test it using postman) and I began working on a frontend. Unfortunately, I ran out of time to go through and sync the backend and frontend up, so the frontend doesn't have the ability to add / remove todo list items.

###  Running backend:
In root directory after doing "npm install", just run "npm start"
I set up mongodb atlas to allow connections from any ip, so I'm hoping you can connect
You can test each of the 5 endpoints using Postman or something similar:
1. POST request to localhost:5001/todo-items with body:
{
  "title": "Grocery Shopping 2",
  "description": "Buy groceries for the week",
  "completed": false,
  "dueDate": "2024-01-30",
  "priority": 5
}
2. GET request to localhost:5001/todo-items should return all items you've made
3. GET request to localhost:5001/todo-items/65b059484809436dbb65736f will return one todo list item
4. PATCH request to localhost:5001/todo-items/65b059484809436dbb65736f with the following body will update the description
{
    "description": "updated description"
}

5. DELETE request to localhost:5001/todo-items/65b059484809436dbb65736f will delete that same item, so please do this after testing number 3 and 4 because 3 and 4 will break once you do

### Running frontend:
Change into the client directory, do npm install, then do npm start


[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/hVfz7S7L)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=13518481&assignment_repo_type=AssignmentRepo)
# CSE 437s Week 2: Build a To-Do App

This assignment challenges you to design and build a simple to-do application using your chosen tech stack. The app should allow users to create, manage, and track their tasks. Find a way to impress us.

## Objectives:

- Show off what you are best at. Focus on the area of development in which you can make the most impact. If you are good at frontend, spend time making the UI look awesome. If good at backend, focus on a robust API.
- Apply user interface (UI) design principles to create a clear and intuitive interface.
- Implement effective data storage and retrieval mechanisms.
- Gain experience with testing and debugging your code.

## Requirements:

- **Effort:** Don't stress, we want to see what you can create, regardless of how close you come to a full app. There is no grade, but an attempt is mandatory.
- **Visibility:** Your effort must be visible on a frontend somewhere, even if it is raw JSON with raw HTML buttons (Sorry BE friends, this is to make evaluation practical).
- **Hosting:** [Use Vercel](https://vercel.com/guides/deploying-react-with-vercel).
- **Time Limit:** 2 Hours

## Considerations:

- **Development time:** Pick the framework you are most familiar with, even if not listed below. You'll want to be as fast and efficient as possible.

## I'm Lost:

- [CSE 330 Website](https://classes.engineering.wustl.edu/cse330/index.php?title=CSE_330_Online_Textbook_-_Table_of_Contents)

### I'm Totally Lost and Afraid:

- **HTML/CSS/JavaScript:** Use these and build something pretty.

### I'm Afraid of Databases, but have FE Familiarity:

- **VueJS, or ReactJS:** Frontend frameworks for responsive sites (consider using with Vuetify and MUI respectively)

### I Don't Know how to FE, nor do I want to

- **Node.js with Express:** A lightweight and flexible backend framework for handling server-side logic and API requests. Use with Firebase or MongoDB.
- **NestJs:** Another lightweight node based solution. Use with Firebase or MongoDB
- **Django Rest:** A python based REST API framework. Use with SQLite.
- **Flask:** Lightweight Python, better than DJango at NoSQL. Use with Firebase or MongoDB.

### I can do this!

- **NuxtJS:** VueJs/Node fullstack framework. Use with Google Firebase or MongoDB.
- **NextJS:** ReactJs/Node fullstack framework. Use with Google Firebase or MongoDB.
- **Any Templating Framework:** Anything you have familiarity with and have built before.
- **Django:** Python based fullstack framework (HTML templating, not responsive) use with SQLite
- **Laravel:** PHP based fullstack framework (HTML templating, not responsive) use with SQLite
