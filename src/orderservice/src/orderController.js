const { getAll, getById, save, removeById, getByCustomerId } = require('./Order');

async function getAllOrdersAction(request, response) {
  const orders = await getAll();
  response.json(orders);
}

async function getOrderByIdAction(request, response) {
  const order = await getById(request.params.id);
  response.json(order);
}

async function addOrderAction(request, response) {
  const jsonObject = readOrderFromRequest(request);
  await save(jsonObject);
  response.json(jsonObject);
}

async function updateOrderAction(request, response) {
  const jsonObject = readOrderFromRequest(request);
  await save(jsonObject);
  response.json(jsonObject);
}

async function deleteOrderAction(request, response) {
  await removeById(request.params.id);
  response.json({});
}

async function getOrdersByCustomerIdAction(request, response) {
  const orders = await getByCustomerId(request.params.id);
  response.json(orders);
}

function readOrderFromRequest(request) {
  let body = request.body;
  let id = body.id;
  let name = body.name;
  let date = body.date;
  let customerId = body.customerId;
  
  return {
    id: id,
    name: name,
    date: date,
    customerId: customerId
  }
}

module.exports = {
  getAllOrdersAction,
  getOrderByIdAction,
  addOrderAction,
  updateOrderAction,
  deleteOrderAction,
  getOrdersByCustomerIdAction
};