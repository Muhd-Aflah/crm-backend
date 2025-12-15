const jwt = require('jsonwebtoken');


module.exports = (req, res, next) => {
const token = req.headers.authorization;
if (!token) return res.json({ message: 'No token provided' });


try {
jwt.verify(token, process.env.JWT_SECRET);
next();
} catch (error) {
res.json({ message: 'Invalid token' });
}
};