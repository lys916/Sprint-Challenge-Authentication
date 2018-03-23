<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
1.  What does bcrypt do in order to prevent attacks?
1.  What are the three parts of the JSON Web Token?

Middleware is a function that has access to request object, response object and next method. It is often used to manipulate data before responding back to the client or moving on with excuting more code when the next method is called. 
Express-essions is an object that holds information about the client including cookies and it will persist on the server.
bcrypt is a library that help hash password.
JWT is a json web token is an encoded json object that gets passed between the client and the server.

bcrypt salts, hashes password and prevent rainbow table attack by slowing down the execution time with the bycript cost... something something

three parts of the web token are headers, payload and signature.
