const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../helpers");

const visitorsSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for visitor"],
    },
    surname: {
      type: String,
      required: [true, "Set email for visitor"],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

visitorsSchema.post("save", handleMongooseError);

const addSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": `missing required "name" field`,
    "string.empty": `"name" cannot be an empty field`,
  }),
  surname: Joi.string().required().messages({
    "any.required": `missing required "surname" field`,
    "string.empty": `"surname" cannot be an empty field`,
    "string.pattern.base": `"surname" must be a valid surname address`,
  }),
});

const updateNameSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": `missing field "name"`,
    "string.empty": `"name" cannot be an empty field`,
  }),
});
const updateSurnameSchema = Joi.object({
  surname: Joi.string().required().messages({
    "any.required": `missing field "surname"`,
    "string.empty": `"surname" cannot be an empty field`,
  }),
});

const schemas = {
  addSchema,
  updateNameSchema,
  updateSurnameSchema,
};

const Visitor = model("visitor", visitorsSchema);

module.exports = { schemas, Visitor };
