const Case = require('../models/Case');


exports.createCase = async (req, res) => {
  const newCase = new Case(req.body);
  await newCase.save();
  res.json(newCase);
};

exports.getCases = async (req, res) => {
  const cases = await Case.find();
  res.json(cases);
};

exports.updateCase = async (req, res) => {
  const updated = await Case.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
};
