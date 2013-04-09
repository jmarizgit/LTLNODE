var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongoose');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

// TESTING CONNECTION
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function callback(){
  // DEFINING MODELS
  var kittySchema = mongoose.Schema({
    name: String
  });

  // NOTE: methods must be added to the schema before compiling it with mongoose.model()
  kittySchema.methods.speak = function() {
    var greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name"
    console.log(greeting);
  };

  var Kitten = mongoose.model('Kitten', kittySchema);

  var Silence = new Kitten({ name: 'Silence'});
  console.log(Silence.name) // 'Silence'

  var fluffy = new Kitten({ name: 'fluffy'});
  fluffy.speak();

  // saving document fluffy to mongoDB
  fluffy.save(function(err, fluffy){
    if (err) // TODO handle error
    fluffy.speak();
  });

  Kitten.find(function (err, kittens){
    if (err) // TODO handle err
      console.log("error");
    console.log(kittens);
  });

});


