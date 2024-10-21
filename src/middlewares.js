export const validateParams = (req, res, next) => {
  try {
    const { html, selectors } = req.body;

    if (!html || !selectors)
      return res
        .status(400)
        .send("html and selector body properties are required");

    next();
  } catch (e) {
    return res.status(400).send(e.message);
  }
};
