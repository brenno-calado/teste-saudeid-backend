module.exports = (err, _req, res, _next) => {
  const { details: [details] } = err;

  if (!details) return res.status(500).json(err);

  let message = 'Invalid request: ';

  if (details.message.includes('required')) {
    message = message.concat(`missing ${details.path[0]}`);
  }

  if (details.message.includes('string')) {
    message = message.concat(`${details.path[0]} is not a string`);
  }

  if (details.message.includes('array')) {
    message = message.concat(`${details.path[0]} is not an array`);
  }

  return res.status(400).json({ message });
};
