export const validateParams = (req, res, next) => {
  try {
    console.log("Inside middleware");
    //some params validation
    next();
  } catch (e) {
    return res.status(400).send(e.message);
  }
};
