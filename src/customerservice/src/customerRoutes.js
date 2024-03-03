const router = require('express').Router();
const {
    getAllCustomersAction,
    getCustomerByIdAction,
    addCustomerAction,
    updateCustomerAction,
    deleteCustomerAction,
    addOrderToCustomerAction
} = require('./customerController');

const routeName = 'customer';

router.get(`/${routeName}`, getAllCustomersAction);
router.get(`/${routeName}/:id`, getCustomerByIdAction);
router.post(`/${routeName}`, addCustomerAction);
router.put(`/${routeName}`, updateCustomerAction);
router.delete(`/${routeName}/:id`, deleteCustomerAction);
router.post(`/${routeName}/:id/order`, addOrderToCustomerAction);

module.exports = router;
