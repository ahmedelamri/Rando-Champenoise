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
    dénivelé: "1",
  },
  {
    id: 2,
    circuitname: "Circuit des Ajaux",
    cityname: "Châlons-en-Champagne",
    typeofcircuit: "viticultural circuits",
    distance: "14km",
    picture:
      "https://www.riaille.fr/fileadmin/_processed_/4/4/csm_sentier_randonnee_3b5ba73a54.jpg",
    dénivelé: "3",
  },
  {
    id: 3,
    circuitname: "Circuit de la vallée de la Marne",
    cityname: "Vauciennes",
    typeofcircuit: "The heritage circuits",
    distance: "30km",
    picture:
      "https://www.tourisme-en-champagne.com/sites/www.tourisme-en-champagne.com/files/styles/paragraphes_mosaique/public/thumbnails/image/statue-du-pape-urbain-ii-chatillon-sur-marnecm.-jolyot-coll.-adt-marne.jpg?itok=vyJS_PeB",
    dénivelé: "1",
  },
  {
    id: 4,
    circuitname: "Circuit des Ruelles de Sézanne",
    cityname: "Sézanne",
    typeofcircuit: "The heritage circuits",
    distance: "6km",
    picture:
      "https://www.sezanne-tourisme.fr/wp-content/uploads/2020/07/DSC_2713-scaled.jpg",
    dénivelé: "1",
  },
  {
    id: 5,
    circuitname: "Circuit du Fau de Valmy",
    cityname: "La Grange-aux-bois",
    typeofcircuit: "Nature circuits",
    distance: "16km",
    picture:
      "https://i1.wp.com/lestetardsarboricoles.fr/wordpress/wp-content/uploads/Fau-de-Valmy-Marne-Yannick-Morhan-9.jpg",
    dénivelé: "1",
  },
  {
    id: 6,
    circuitname: "Circuit du Mont Aigu",
    cityname: "Avenay-Val-d’Or",
    typeofcircuit: "The heritage circuits",
    distance: "11km",
    picture:
      "https://fichier0.cirkwi.com/image/photo/circuit/800x500/93103/fr/0.jpg?1581000967",
    dénivelé: "1",
  },
  {
    id: 7,
    circuitname: "La boucle de l’Ardre",
    cityname: "Crugny",
    typeofcircuit: "discover circuits",
    distance: "13km",
    picture:
      "https://fichier0.cirkwi.com/image/photo/circuit/800x500/51168/fr/0.jpg?1484791750",
    dénivelé: "2",
  },
  {
    id: 8,
    circuitname: "Circuit à la découverte de Giffaumont-Champaubert",
    cityname: "Giffaumont-Champaubert",
    typeofcircuit: "discover circuits",
    distance: "9km",
    picture:
      "https://api.cloudly.space/resize/cropratioresize/460/345/60/aHR0cDovL21lZGlhcy50b3VyaXNtLXN5c3RlbS5jb20vZC8wLzUzMDY0MF93dzJlOTA5MnBib3VyZ3VpZ25vbi5qcGc=/image.jpg",
    dénivelé: "1",
  },
  {
    id: 9,
    circuitname: "Circuit Châlons au fil de l’eau",
    cityname: "Châlons-en-Champagne",
    typeofcircuit: "viticultural circuits",
    distance: "7.5km",
    picture:
      "https://remeng.rosselcdn.net/sites/default/files/dpistyles_v2/rem_16_9_1124w/2021/05/19/node_258332/12291111/public/2021/05/19/B9727088031Z.1_20210519153111_000%2BGVCI5K43F.1-0.jpg?itok=P13IIrPC1621436733",
    dénivelé: "2",
  },
  {
    id: 10,
    circuitname: "Circuit du vignoble d’Epernay",
    cityname: "Epernay",
    typeofcircuit: "viticultural circuits",
    distance: "21km",
    picture:
      "https://www.epernay-tourisme.com/assets/uploads/2022/05/velo-dans-les-vignes-hautvillers-les-droners-3-1024x682.jpg",
    dénivelé: "2",
  },
  {
    id: 11,
    circuitname: "Circuit des Remparts de Montmirail",
    cityname: "Crugny",
    typeofcircuit: "The heritage circuits",
    distance: "4km",
    picture:
      "https://fichier0.cirkwi.com/image/photo/circuit/800x500/131322/fr/0.jpg?1559323485",
    dénivelé: "1",
  },
  {
    id: 12,
    circuitname: "Circuit de la Vallée de la Seine",
    cityname: "Marcilly-sur-Seine",
    typeofcircuit: "discover circuits",
    distance: "16.5km",
    picture:
      "https://www.sortir-yvelines.fr/var/cdt78_socle/storage/images/folder/cdt-images/datso-gallery/reportage-2018-xavier-renoux/rolleboise-vallee-de-la-seine-x.renoux/2208508-1-fre-FR/Rolleboise-vallee-de-la-seine-X.Renoux.jpg",
    dénivelé: "2",
  },
  {
    id: 13,
    circuitname: "La vallée du Surmelin",
    cityname: "Montmort-Lucy",
    typeofcircuit: "discover circuits",
    distance: "41km",
    picture:
      "https://fichier0.cirkwi.com/image/photo/circuit/800x500/114008/fr/0.jpg?1556638038",
    dénivelé: "3",
  },
  {
    id: 14,
    circuitname: "Circuit des étangs de Châtrices",
    cityname: "Châtrices + Villers-en-Argonne",
    typeofcircuit: "Nature circuits",
    distance: "7km",
    picture:
      "https://cdt51.media.tourinsoft.eu/upload/Etangs-de-Chatrices---Villers-en-Argonne-M.Jolyot-Coll.jpg?width=1050&height=750&crop=1",
    dénivelé: "1",
  },
  {
    id: 15,
    circuitname: "Circuit des étangs de Givry ",
    cityname: "Givry-en-Argonne",
    typeofcircuit: "Nature circuit",
    distance: "8km",
    picture: "https://cdt51.media.tourinsoft.eu/upload/etang-2.JPG",
    dénivelé: "1",
  },
  {
    id: 16,
    circuitname: "Circuit des Sept Vents au Mont Blanc",
    cityname: "Oger",
    typeofcircuit: "The heritage circuits",
    distance: "7.5km",
    picture:
      "https://fichier0.cirkwi.com/image/photo/poi/800x500/1220304/fr/0.jpg?1682331955",
    dénivelé: "2",
  },
  {
    id: 17,
    circuitname: "Circuit de Vix au Sept Vents",
    cityname: "Crugny",
    typeofcircuit: "The heritage circuits",
    distance: "7km",
    picture: "https://pierry.fr/sites/epernay-agglo/files/image/parc_vix_3.jpg",
    dénivelé: "1",
  },
  {
    id: 18,
    circuitname: "Circuit de Saint-Aubeu",
    cityname: "Hermonville",
    typeofcircuit: "The memory circuits",
    distance: "19km",
    picture:
      "https://cdt51.media.tourinsoft.eu/upload/Eglise---Hermonville-C.Manquillet-Coll.CDT-Marne--2-.jpg?width=1050&height=750&crop=1",
    dénivelé: "1",
  },
  {
    id: 19,
    circuitname: "Circuit de la Côte Saint-Michel",
    cityname: "Prouilly",
    typeofcircuit: "The memory circuits",
    distance: "17km",
    picture:
      "https://cdt51.media.tourinsoft.eu/upload/pevy.jpg?width=1050&height=750&crop=1",
    dénivelé: "2",
  },
  {
    id: 20,
    circuitname: "Circuit de Trigny ",
    cityname: "Trigny",
    typeofcircuit: "The memory circuits",
    distance: "15km",
    picture:
      "https://ville-data.com/boucle-de-randonnee/image/boucle-de-randonnee-300.jpg",
    dénivelé: "1",
  },
];

router.get("/randos", (req, res) => {
  res.json(randos);
});

router.get("/randos/:id", (req, res) => {
  res.json(randos.find((rando) => rando.id === parseInt(req.params.id, 10)));
});

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

module.exports = router;
