export const validateParams = (req, res, next) => {
  try {
    const { html, selectors } = req.body;

    if (!html || !selectors)
      return res
        .status(400)
        .send("html and selector body properties are required");
    if (typeof html !== "string" || typeof selectors !== "object")
      return res
        .status(400)
        .send("html must be a string, selectors must be an object");

    next();
  } catch (e) {
    return res.status(400).send(e.message);
  }
};
