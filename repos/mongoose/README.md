Mongoose
========
Test of mongoose


MongoDB
-------
First let's take a look over MongoDB common commands.

**List current databases:**

    show dbs

**Create new database:**

    use mydb // will be save after first inclusion
    db.mydb.save({name: 'Mariz', age: 32})


**Show your current database:**

    db

**Save new data:**
    
    db.mydb.save({age: 32})


**Find data:**

    db.mydb.find({age: 32})  // will show first 10 records
    it // iterate over more 10 recors (if exist)


**Special operations:**

    db.mydb.find({age: {"$gt": 10}}) // age > 10
    db.mydb.find({age: {"$in": [2, 3, 4, 32]}}); // age in []
    db.mydb.find({age: {"$gte": 10}}) // age >= 10
    // $lt '<', $lte '<=', $ne '!=', $nin '! in array'


**Update data:**

    db.mydb.save({name: 'Mariz', age: 30})
    db.mydb.update({name: 'Mariz'}, {name: 'Mariz', age: 32})

**Update parts of data:**
On the example above you replaced the entire data object. To modify just parts of your data you can use the following operators:
  
    db.users.update({'name': 'Mariz'}, {'$set', age: 32});
    // imagine I have an array called 'languages' associated with my obj
    db.users.update({'name': 'Mariz'}, {'$push': {langauges: 'JavaScript'}})
    // you can also pull values from arrays using '$pull' operator


**Deleting data**

    db.users.remove({name: 'Mariz'});
    // delete everything on collection
    db.users.remove();


Mongoose
--------
Mongoose is a npm package that facilitates iterate with MongoDB servers using Node.

