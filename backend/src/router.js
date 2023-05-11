const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

const randos = [
  {
    id: 1,
    circuitname: "Circuit des étangs d'Outines",
    cityname: "Giffaumont-Champaubert",
    typeofcircuit: "discover circuits",
    distance: "7km",
    picture: "",
  },
];

router.get("/rando", (req, res) => {
  res.json(randos);
});

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

module.exports = router;
