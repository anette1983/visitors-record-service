const { Visitor } = require("../../models/visitor");
const { HttpError, ctrlWrapper } = require("../../helpers");

const getAllVisitors = async (req, res) => {
  const visitors = await Visitor.find();
  res.status(200).json({
    status: "success",
    code: 200,
    data: {
      result: visitors,
    },
  });
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await Visitor.findById(id);

  if (!result) {
    throw HttpError(404, `Visitor with id = ${id} not found`);
  }
  res.status(200).json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

const addVisitor = async (req, res) => {
  const result = await Visitor.create(req.body);

  res.status(201).json({
    status: "success",
    code: 201,
    message: "Visitor added successfully",
    data: {
      result,
    },
  });
};

const updateVisitor = async (req, res) => {
  const { id } = req.params;
  const { name, surname } = req.body;
  const updatedVisitor = await Visitor.findByIdAndUpdate(
    id,
    { $set: { name, surname } },
    { new: true }
  );

  if (!updatedVisitor) {
    throw HttpError(404, `Visitor with id = ${id} not found`);
  }

  res.status(200).json({
    status: "success",
    code: 200,
    message: "Visitor updated successfully",
    data: {
      result: updatedVisitor,
    },
  });
};

const deleteVisitor = async (req, res) => {
  const { id } = req.params;
  const result = await Visitor.findByIdAndRemove(id);
  if (!result) {
    throw HttpError(404, `Visitor with id = ${id} not found`);
  }
  res.status(200).json({
    status: "success",
    code: 200,
    message: "Visitor deleted successfully",
  });
};

module.exports = {
  getAllVisitors: ctrlWrapper(getAllVisitors),
  getById: ctrlWrapper(getById),
  addVisitor: ctrlWrapper(addVisitor),
  updateVisitor: ctrlWrapper(updateVisitor),
  deleteVisitor: ctrlWrapper(deleteVisitor),
};
