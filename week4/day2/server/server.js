const express = require("express");
const { faker } = require('@faker-js/faker');
const app = express();
const port = 8000;
// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );



const createPerson = () => {
    const person = {
        _id: faker.database.mongodbObjectId(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password()
    }
    return person
}

const createCompany = () => {
    const company = {
        _id: faker.database.mongodbObjectId(),
        name: faker.company.name(),
        address: {
            street:faker.address.streetAddress(),
            city:faker.address.city(),
            state:faker.address.stateAbbr(),
            zipCode:faker.address.zipCode(),
            country:faker.address.country(),
        },
    }
    return company
}

app.get('/api/users/new', (req, res) => {
    const newPerson = createPerson()
    res.json(newPerson)
})

app.get('/api/company/new', (req, res) => {
    const newCompany = createCompany()
    res.json(newCompany)
})

app.get('/api/user/company', (req, res) => {
    const newCompany = createCompany()
    const newPerson = createPerson()
    // res.json({newCompany,newPerson})
    const response = {
        user: newPerson,
        company: newCompany
    }
    res.json(response)
})
// const newCompany = createCompany()
// console.log(newCompany);


// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );

