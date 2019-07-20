const mongoose = require('mongoose')

if ( process.argv.length<3 ) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url =
  `mongodb+srv://elijahs2106:${password}@cluster0-oakvk.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model('Person', personSchema)

if (name && number) {
  const person = new Person({
    name,
    number 
  })

  person.save().then(response => {
    console.log(`Added ${response.name} number ${response.number} to phonebook`)
    mongoose.connection.close()
  })
} else {
  console.log('Phonebook:')
  Person.find({}).then(res => {
    res.forEach(person => {
      console.log(`${person.name} ${person.number}`)
    })

    mongoose.connection.close()
  })
}