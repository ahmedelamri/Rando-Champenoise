const login = (req, res) => {
  res.json({ token: "Connecté" });
};

module.exports = {
  login,
};
