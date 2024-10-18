# Node Js rest API

Rest API created with NodeJs and Express
Users are saved in memory
It performs all CRUD operations using localhost port 3000

All methods are accepted in the home directory "/"

## Getting started

You can clone/fork this repo, open a terminal on your working directory and run

```bash
npm i
```

to install all dependencies: So far, express and nodemon for hot reloading

## Endpoints:

`http://localhost:3000`

### Methods:

- GET: will send all the users store in a local variable "users"
- PUT: will update a user based on the paremeter id sent in the url ex: `http://localhost:3000/2`
- POST: will create a user based on the data sent in the body (fistName and lastName). It'll send a 201 status code if successful
- DELETE: will delete a suer based on the url's param

## Error codes

- 404: if the user is not found a 404 error will be sent back and a message
