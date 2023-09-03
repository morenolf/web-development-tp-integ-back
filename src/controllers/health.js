const asyncHandler = require("express-async-handler");

exports.health = asyncHandler(async (req, res, next) => {
    //throw new Error('An error occurred');
    res.send("ok");
});
  