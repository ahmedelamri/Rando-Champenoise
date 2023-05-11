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
    picture:
      "https://api.cloudly.space/resize/clip/1900/1080/75/aHR0cDovL21lZGlhcy50b3VyaXNtLXN5c3RlbS5jb20vZC82LzUyNzkyN19fcGJwMTMyOS5qcGc=/image.jpg",
    dénivelé: "",
  },
  {
    id: 2,
    circuitname: "Circuit des Ajaux",
    cityname: "Châlons-en-Champagne",
    typeofcircuit: "viticultural circuits",
    distance: "14km",
    picture: "",
    dénivelé: "",
  },
  {
    id: 3,
    circuitname: "Circuit de la vallée de la Marne",
    cityname: "Vauciennes",
    typeofcircuit: "The heritage circuits",
    distance: "30km",
    picture:
      "https://www.tourisme-en-champagne.com/sites/www.tourisme-en-champagne.com/files/styles/paragraphes_mosaique/public/thumbnails/image/statue-du-pape-urbain-ii-chatillon-sur-marnecm.-jolyot-coll.-adt-marne.jpg?itok=vyJS_PeB",
    dénivelé: "",
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
