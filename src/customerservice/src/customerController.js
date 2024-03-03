const {getAll, getById, save, removeById} = require('./Customer');
const axios = require('axios');

async function getAllCustomersAction(request, response) {
    const customers = await getAll();
    response.json(customers);
}

async function getCustomerByIdAction(request, response) {
    const customer = await getById(request.params.id);
    response.json(customer);
}

async function addCustomerAction(request, response) {
    const jsonObject = readCustomerFromRequest(request);
    await save(jsonObject);
    response.json(jsonObject);
}

async function updateCustomerAction(request, response) {
    const jsonObject = readCustomerFromRequest(request);
    await save(jsonObject);
    response.json(jsonObject);
}

async function deleteCustomerAction(request, response) {
    await removeById(request.params.id);
    response.json({});
}

async function addOrderToCustomerAction(request, response) {
    const jsonObject = readOrderFromRequest(request);
    await axios.post(`http://localhost:3500/orders`, jsonObject, {headers: { 'dapr-app-id ': 'orderservice' }})
        .then(postResponse => {
            console.log(postResponse.data);
            response.json(postResponse.data);
        }).catch(error => {
            console.log(error);
            response.status(500).json({error: error});
        })
}

function readCustomerFromRequest(request) {
    let body = request.body;
    let id = body.id;
    let lastName = body.lastName;
    let firstName = body.firstName;
    let dateOfBirth = body.dateOfBirth;

    return {
        id: id,
        lastName: lastName,
        firstName: firstName,
        dateOfBirth: dateOfBirth
    }
}

function readOrderFromRequest(request) {
    let body = request.body;
    let name = body.name;
    let date = body.date;
    let customerId = request.params.id;

    return {
        name: name,
        date: date,
        customerId: customerId
    }
}

module.exports = {
    getAllCustomersAction,
    getCustomerByIdAction,
    addCustomerAction,
    updateCustomerAction,
    deleteCustomerAction,
    addOrderToCustomerAction
};
