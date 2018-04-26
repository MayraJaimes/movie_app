// This is middleware for restrictng routes a user is not allowed to visit if not logged in
module.exports = function(req, res, next) {
  // If the user is logged in, continue with the request to the restricted route
  console.log('isAuth : ', req.user)
  if (req.user) {
    console.log("isauth")
    return next();
  }

  // If the user isnt' logged in, redirect them to the login page
  return res.redirect("/login");
};