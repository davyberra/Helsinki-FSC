const mongoose = require('mongoose')

const numberSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model('Person', numberSchema)

const addNumber = (name, number) => {
  const person = new Person({
    name: name,
    number: number
  })

  person.save().then(result => {
    console.log('Number saved!')
    mongoose.connection.close()
  })
}

const showNumbers = () => {
  Person
    .find({})
      .then(persons => {
        persons.forEach(person => {
          console.log(person)
        })
        mongoose.connection.close()
      })
}

const password = process.argv[2]
const url =
  `mongodb+srv://fullstack:${password}@cluster0.xbpeo.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

if (process.argv.length === 5) {
  addNumber(process.argv[3], process.argv[4])
}
else if (process.argv.length == 3) {
  showNumbers()
}
else {
  console.log('Please provide at least a password (node mongo.js <yourpassword>)')
  process.exit(1)
}