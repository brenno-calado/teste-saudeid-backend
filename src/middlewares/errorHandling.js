module.exports = (err, _req, res, _next) => {
  const { code, message } = err;

  if (!code) return res.status(500).json(err);

  const codeMessage = {
    400: (errorMessage) => `Invalid request, ${errorMessage}`,
    404: (errorMessage) => errorMessage,
  };

  return res.status(code).json({ message: codeMessage[code](message) });
};
