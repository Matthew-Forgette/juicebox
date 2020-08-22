/**PROVIDED FUNCTION TO BE USED AS MIDDLEWARE IN ROUTES THAT REQUIRE
 * USER TO BE LOGGED IN */
function requireUser(req, res, next) {
  if (!req.user) {
    next({
      name: "MissingUserError",
      message: "You must be logged in to perform this action"
    });
  }
  
  next();
}

//--------------------------------------
// EXPORTS
module.exports = {
  requireUser
}