const insert = async (req, res) => {
  const {
    title, description, author, categories,
  } = req.body;

  return res.status(400).json({
    data: {
      title, description, author, categories,
    },
  });
};

module.exports = { insert };
