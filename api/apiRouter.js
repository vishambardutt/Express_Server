// GET to fetch data form server - read
// POST to send some data to  server -create
// PUT to update data at server -- update
// DELETE to delete data at server
//..............................
// create a new server  nodejs
// custom api with ajax
// build an application
//...............................
// Employee portal applicaton
//...........................
// need to know rest api
// GET request api/employees
//POST - api/employees
//PUT - api/employee/id
// DELETE - api/employees/id
// MODULE need to install
// npm install express body-parser-cors --save
//express
//body-parser
//cors
//GET - http://127.0.0.1:9000/api/employees
// POST - http://127.0.0.1:9000/api/employees
//PUT - http://127.0.0.1:9000/api/employees/:id
//DELETE - http://127.0.0.1:9000/api/employees/:id

// TEST REST API AT SERVER
//1-Postman
//2- Insomnia
const { response } = require('express');
const express = require('express');
const router = express.Router();

//GET employee data

let employees = [

    {
        id: '_vrs',
        first_name: 'Kreta',
        last_name: 'Kell',
        gender: 'male',
        email: 'abc@gmail.com',
        ipAaddress: '127.0.0.1'
    },

    {
        id: '_fdfd',
        first_name: 'Lora',
        last_name: 'Wiillim',
        gender: 'Female',
        email: 'abc@gmail.com',
        ipAddress: '5467.45.32'

    }

];


let getID = () => {
    return '_' + Math.random().toString(36).substring(2, 9);
};



// GET request employees

router.get('/employees', (request, response) => {

  // response.json('GET request received at servr ${new Date().toLocalTimeString()}');
   // response.json({msg: 'GET Request is Success' });

    response.json(employees);
});

//POST REQUEST
router.post('/employees', (request, response) => {

    let employee = {
        id: getID(),
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        gender: request.body.gender,
        email: request.body.email,
        ipAddress: request.body.ipAaddress
    };

    employees.push(employee);
   //console.log('POST request received at servr ${new Date().toLocalTimeString()}');
    response.json({ msg: 'POST Request is Success' });
});
//PUT REQUEST
router.put('/employees/:id', (request, response) => {
    let empId = request.params.id;
    let updateEmployee = {
        id: empId,
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        gender: request.body.gender,
        email: request.body.email,
        ipAddress: request.body.ipAaddress
    };

    let existingEmployee = employees.find((employee) => {
        return employee.id === empId;
    });
    employees.splice(employees.indexOf(existingEmployee), deleteCount1, updateEmployee);
    //console.log('PUT request received at servr ${new Date().toLocalTimeString()}');
    response.json({ msg: 'PUT Request is Success' });
});

//DELETE REQUEST
router.delete('/employees/:id', (request, response) => {

    let empId = request.pramas.id;
    employees = employees.filter((employee) => {
        return employee.id !== empId;
    });
   // console.log('DELETE request received at servr ${new Date().toLocalTimeString()}');
    response.json({ msg: 'DELETE Request is Success' });
});
module.exports = router;