Question 1: 
What is the purpose of creating a model with an interface and schema in MongoDB? How does it help in defining the structure of a collection?

Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.

MongoDB is a schema-less NoSQL document database. It means you can store JSON documents in it, and the structure of these documents can vary as it is not enforced like SQL databases. This is one of the advantages of using NoSQL as it speeds up application development and reduces the complexity of deployments.

Question 2: 
Explain the concept of field filtering in MongoDB. How can you specify which fields to include or exclude in the returned documents?


 default, queries in MongoDB return all fields in matching documents. To limit the amount of data that MongoDB sends to applications, you can include a projection document to specify or restrict fields to return.

This page provides examples of query operations with projection using the db.collection.find() method in 
mongosh.

Question 3: 
What are instance methods in MongoDB models? Provide an example of a custom instance method and explain its purpose.

In MongoDB models, instance methods are functions defined within the model schema that can be called on individual document instances (or objects) of that model. These methods are specific to each instance and allow you to perform custom operations or computations on the document's data.

Here's an example to illustrate the concept of an instance method in MongoDB models:
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;


In MongoDB, comparison operators such as "$ne" (not equal), "$gt" (greater than), "$lt" (less than), "$gte" (greater than or equal to), and "$lte" (less than or equal to) are used to perform conditional operations in queries. These operators allow you to compare the values of fields in documents and filter the results based on specific conditions.

Here are examples to illustrate the usage of these comparison operators in MongoDB queries:

"$ne" (not equal) - Matches values that are not equal to a specified value:

     db.users.find({ age: { $ne: 30 } });
     This query finds all documents in the "users" collection where the "age" field is not equal to 30.

     "$gt" (greater than) - Matches values that are greater than a specified value:

     db.users.find({ age: { $gt: 25 } });
     This query retrieves all documents in the "users" collection where the "age" field is greater than 25.

     "$lt" (less than) - Matches values that are less than a specified value:


     db.users.find({ age: { $lt: 40 } });
     This query fetches all documents in the "users" collection where the "age" field is less than 40.

     "$gte" (greater than or equal to) - Matches values that are greater than or equal to a specified value:


     db.users.find({ age: { $gte: 18 } });
     This query retrieves all documents in the "users" collection where the "age" field is greater than or equal to 18.

     "$lte" (less than or equal to) - Matches values that are less than or equal to a specified value:


     db.users.find({ age: { $lte: 60 } });
     This query finds all documents in the "users" collection where the "age" field is less than or equal to 60.

     These comparison operators can be used in combination with other query operators or alongside other fields in a MongoDB query to create complex filtering conditions. It allows you to precisely retrieve documents that match specific criteria based on the comparison of field values.


