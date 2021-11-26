module.exports = (err, _req, res, _next) => {
  const { code, message } = err;

  if (!code) return res.status(500).json(err);
  let wrapMessage;
  if (code === 400) {
    wrapMessage = `Invalid request, ${message}`;
  }

  return res.status(code).json({ message: wrapMessage });
};
