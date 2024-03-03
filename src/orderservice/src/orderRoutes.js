const router = require('express').Router();
const {
    getAllOrdersAction, getOrderByIdAction, addOrderAction, updateOrderAction, deleteOrderAction,
    getOrdersByCustomerIdAction
} = require('./orderController');

const routeName = 'orders';

router.get(`/${routeName}`, getAllOrdersAction);
router.get(`/${routeName}/:id`, getOrderByIdAction);
router.post(`/${routeName}`, addOrderAction);
router.put(`/${routeName}`, updateOrderAction);
router.delete(`/${routeName}/:id`, deleteOrderAction);
router.get(`/${routeName}/customer/:id`, getOrdersByCustomerIdAction);

module.exports = router;