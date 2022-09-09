# QuizApp

## About:
This is a simple online quiz application made with MERN-stack. 

---
---
## Tech-Stack

### Front-End:
The front-end is developed using **HTML5** , **Antd** and **React (a modern javascript-framework)** , **NEXTJS**.  
**File system routing** is used for navigating between different view of the SPA.  
**LocalStorage** is used for client side caching.    

### Back-End:
The backend is developed in **Nodejs (a javascript runtime envionment)**,  **ExpressJS (a minimalistic web framework)** and **MongoDB (as a database)**.  
**Mongoose(Object-Document-Mapper)** is used to help writing queries for CRUD operations in JS as an alternative to NoSQL.  
**bcrypt** is used to store passwords as hashed passwords.  
**JWT(Javascript web token)** authorization is used to authorize access to protected endpoints.
**JEST and Supertest**  are used for api testing
**Stripe** used for payments
The backend is responsible for serving both the front-end and the back-end.  

### Connecting Front-End with Back-End:
**Axios** a promise based http library is used to connect the front-end and the backend.
