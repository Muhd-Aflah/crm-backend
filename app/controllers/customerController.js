const Customer = require('../models/Customer');


exports.createCustomer = async (req, res) => {
const customer = new Customer(req.body);
await customer.save();
res.json(customer);
};


exports.getCustomers = async (req, res) => {
const customers = await Customer.find();
res.json(customers);
};