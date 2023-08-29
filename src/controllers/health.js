const asyncHandler = require("express-async-handler");

exports.health = asyncHandler(async (req, res, next) => {
    res.send("ok");
});
  