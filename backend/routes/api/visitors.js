const express = require("express");
const router = express.Router();
const { validation, isValidId } = require("../../middlewares");
const { schemas } = require("../../models/visitor");
const { visitors: ctrl } = require("../../controllers/visitors");

router.get("/", ctrl.getAllVisitors);
router.get("/:id", isValidId, ctrl.getById);
router.post("/", validation(schemas.addSchema), ctrl.addVisitor);
router.delete("/:id", isValidId, ctrl.deleteVisitor);

router.put(
  "/:id",
  isValidId,
  validation(schemas.addSchema),
  ctrl.updateVisitor
);
router.patch(
  "/:id/name",
  isValidId,
  validation(schemas.updateNameSchema),
  ctrl.updateVisitor
);
router.patch(
  "/:id/surname",
  isValidId,
  validation(schemas.updateSurnameSchema),
  ctrl.updateVisitor
);

module.exports = router;
