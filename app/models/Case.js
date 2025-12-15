const mongoose = require('mongoose');


const CaseSchema = new mongoose.Schema({
customer_id: String,
assigned_to: String,
priority: String,
status: String,
created_at: {
type: Date,
default: Date.now
}
});


module.exports = mongoose.model('Case', CaseSchema);