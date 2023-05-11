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
  {
    id: 4,
    circuitname: "Circuit des Ruelles de Sézanne",
    cityname: "Sézanne",
    typeofcircuit: "The heritage circuits",
    distance: "6km",
    picture:
      "https://www.sezanne-tourisme.fr/wp-content/uploads/2020/07/DSC_2713-scaled.jpg",
  },
  {
    id: 5,
    circuitname: "Circuit du Fau de Valmy",
    cityname: "La Grange-aux-bois",
    typeofcircuit: "Nature circuits",
    distance: "16km",
    picture:
      "https://i1.wp.com/lestetardsarboricoles.fr/wordpress/wp-content/uploads/Fau-de-Valmy-Marne-Yannick-Morhan-9.jpg",
  },
  {
    id: 6,
    circuitname: "Circuit du Mont Aigu",
    cityname: "Avenay-Val-d’Or",
    typeofcircuit: "The heritage circuits",
    distance: "11km",
    picture:
      "https://fichier0.cirkwi.com/image/photo/circuit/800x500/93103/fr/0.jpg?1581000967",
  },
  {
    id: 7,
    circuitname: "La boucle de l’Ardre",
    cityname: "Crugny",
    typeofcircuit: "discover circuits",
    distance: "13km",
    picture:
      "https://fichier0.cirkwi.com/image/photo/circuit/800x500/51168/fr/0.jpg?1484791750",
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
