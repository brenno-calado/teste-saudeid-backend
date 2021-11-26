module.exports = (err, _req, res, next) => {
  const { isJoi } = err;
  if (!isJoi) next();

  const { details: [details] } = err;
  const errorTypes = {
    'any.required': (key, _value) => `Invalid request: missing ${key}`,
    'string.base': (key, _value) => `Invalid request: ${key} is not a string`,
    'array.base': (key, _value) => `Invalid request: ${key} is not an array`,
    'string.pattern.base': (key, value) => `Invalid ${key} request: ${value}`,
  };

  const message = errorTypes[details.type](details.context.key, details.context.value);

  return res.status(400).json({ message });
};
