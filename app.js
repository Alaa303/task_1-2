// // -------------Task-1----------------
// var person = {
//     fname: "Ahmed",
//     lname: "Hossam",
//     age: "20",
//     city: "Alex"
// }
// const personJson = JSON.stringify(person)
// const { Console } = require("console")
// // console.log(personJson)

// const fs = require("fs")

// fs.writeFileSync("data2.txt", personJson)

//  console.log(fs.readFileSync("data2.txt").toString())

// const personObject = JSON.parse(personJson)
// // console.log(personObject)

// person = {
//     fname: "adel",
//     lname: "ahmed",
//     age: "40",
//     city: "cairo"
// }
// console.log(person)
// const personJson1 = JSON.stringify(person)
// fs.writeFileSync("data2.txt", personJson1)

// -------------Task-2----------------
const data = require("./data.js")
const yargs = require("yargs")

yargs.command({
    command: "add",
    descripe: "to add an item",
    builder: {
        id: {
            descripe: "id of a person",
            demandOption: true,
            type: "string",
        },
        fname: {
            descripe: "fname of a person",
            demandOption: true,
            type: "string",
        },
        lname: {
            descripe: "lname of a person",
            demandOption: true,
            type: "string",
        },
        age: {
            descripe: "age of a person",
            demandOption: true,
            type: "string",
        },
        city: {
            descripe: "city of a person",
            demandOption: true,
            type: "string",
        },

    },
    handler: (x) => {
        data.addPerson(x.id, x.fname, x.lname, x.age, x.city)
    }
})



yargs.command({
    command: "delete",
    descripe: "to delete an item",
    handler: (x) => {
        data.deletePerson(x.id)
    }
})


yargs.command({
    command: "list",
    descripe: "to listData",
    handler: () => {
        data.listData()
    }
})


yargs.command({
    command: "read",
    descripe: "to read data of id 5 ",
    builder: {
        id: {
            descripe: "id description",
            demandOption: true,
            type: "string"
        }
    },
    handler: (x) => {
        data.readData(x.id)
    }
})


yargs.parse()