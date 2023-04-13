const { json } = require('express')
const express = require('express')
const fs = require('fs'); // file system
const parser = require("body-parser"); // body parser 
const app = express()
const port = 3000
const debug = require('debug')('myapp');

app.use(express.static('public'))
app.use(parser.json()); // enable req.body read


app.post('/users/create', (req, res) => { // POST - ADD NEW USER
    console.log(req.body);

    fs.readFile('users.json', 'utf8', (err, data) => {
        if (err) {
            console.log('Error reading file:', err);
        } else {
            const jsonData = JSON.parse(data); // parse date to json
            console.log('Data:', jsonData);

            jsonData.users.push(req.body); // add user to Json array

            fs.writeFile('users.json', JSON.stringify(jsonData), 'utf8', (err) => { // write to file
                if (err) {
                    console.log('Error saving file:', err);
                    res.json({ message: "Error saving file" })
                } else {
                    console.log('File saved successfully.');
                    res.json({ message: "success" })
                }
            });
        }
    });



    
})

app.get("/users/all", (req, res) => {

    fs.readFile('users.json', 'utf8', (err, data) => {
        if (err) {
            console.log('Error reading file:', err);
            res.json({ message: "fail to read file" })

        } else {
            const jsonData = JSON.parse(data); // parse date to json
            res.json(jsonData);
        }


    })
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



