const fs = require("fs")

const addPerson = (id, fname, lname, age, city) => {
    const allData = loadData()
    allData.push({
        id: id,
        fname: fname,
        lname: lname,
        age: age,
        city: city
    })

    saveAllData(allData)
}

const loadData = () => {
    try {
        const dataJson = fs.readFileSync("data.json").toString()
        return JSON.parse(dataJson)
    }
    catch {
        return []
    }
}

const saveAllData = (allData) => {
    const saveAllDataJson = JSON.stringify(allData)
    fs.writeFileSync("data.json", saveAllDataJson)
}

const deletePerson = (id) => {
    const allData = loadData()
    const dataToKeep = allData.filter((obj) => {
        return obj.id !== id
    })
    saveAllData(dataToKeep)

}

const listData = () => {
    const allData = loadData()

    allData.forEach((obj) => {
        console.log(obj.fname, obj.lname, obj.city)
    })
}



const readData = (id) => {
    const allData = loadData()
    const itemNeeded = allData.find((obj) => {
        return obj.id == id
    })
    console.log(itemNeeded)
}



module.exports = {
    addPerson,
    deletePerson,
    listData,
    readData

}

