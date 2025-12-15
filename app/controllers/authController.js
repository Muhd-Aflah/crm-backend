const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


exports.register = async (req, res) => {
const { username, password, role } = req.body;
const hashedPassword = await bcrypt.hash(password, 10);


const user = new User({ username, password: hashedPassword, role });
await user.save();


res.json({ message: 'User registered successfully' });
};


exports.login = async (req, res) => {
const { username, password } = req.body;
const user = await User.findOne({ username });


if (!user) return res.json({ message: 'User not found' });


const match = await bcrypt.compare(password, user.password);
if (!match) return res.json({ message: 'Invalid password' });


const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
res.json({ token });
};