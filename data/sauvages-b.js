// Plantes sauvages comestibles et médicinales de France : lot B (bois, haies, arbres et arbustes, bords de l'eau).
// Données reformulées à partir des sources citées pour chaque plante. Ne remplace ni un avis médical ni une vérification sur le terrain.
window.SAUVAGES.push(
  {
    id: "bouleau-verruqueux",
    nom: "Bouleau verruqueux",
    latin: "Betula pendula",
    famille: "Bétulacées",
    autresNoms: ["Bouleau blanc", "Bouleau pleureur", "Arbre de la sagesse"],
    statut: "comestible-medicinale",
    resume: "Arbre pionnier à écorce blanche qui se détache en lanières. Sa sève se récolte à la fin de l'hiver et se boit fraîche, ses jeunes feuilles servent en infusion dans la tradition.",
    habitat: "Landes, lisières, bois clairs, coupes forestières, terrains sableux ou acides, friches.",
    habitats: ["foret", "friche", "montagne", "haie"],
    regions: "Presque toute la France, plus rare en région méditerranéenne de basse altitude.",
    recolte: [2, 3, 4, 5],
    floraison: [3, 4, 5],
    couleurFleur: ["vert", "jaune"],
    typeFeuille: "Feuilles alternes en losange ou triangle pointu, à double denture, glabres, longuement pétiolées.",
    reconnaissance: [
      "Écorce blanche marquée de traits horizontaux, qui devient noire et crevassée en losanges à la base des vieux troncs.",
      "Jeunes rameaux fins et retombants, couverts de petites verrues résineuses rugueuses au toucher.",
      "Feuilles en triangle ou en losange, bord bordé de grandes dents portant elles-mêmes de petites dents.",
      "Chatons mâles jaunâtres pendants au printemps, chatons femelles plus courts et dressés.",
      "Arbre léger, de 15 à 25 m, souvent en groupes sur sols pauvres."
    ],
    partiesUtilisees: ["sève", "jeunes feuilles", "bourgeons", "écorce"],
    bienfaits: [
      "Sève traditionnellement bue en cure de printemps, réputée drainante et diurétique.",
      "Feuilles employées en infusion dans la tradition pour favoriser l'élimination urinaire et soulager les douleurs articulaires.",
      "Le traité de Cazin (1868) rapporte l'usage de la sève contre les affections de la peau, la goutte et les rhumatismes : usages anciens à ne pas prendre comme remède."
    ],
    usages: ["sève fraîche bue nature", "sève fermentée en boisson pétillante légère", "jeunes feuilles en infusion", "très jeunes feuilles ciselées en petite quantité en salade"],
    recettes: [
      {
        titre: "Récolte et cure de sève de bouleau",
        type: "boisson",
        ingredients: ["Un bouleau d'au moins 20 cm de diamètre, avec l'accord du propriétaire", "Une chignole avec mèche de 8 à 10 mm", "Un petit tube alimentaire et une bouteille propre"],
        etapes: ["En fin d'hiver, quand les bourgeons gonflent, percer un trou de 2 à 3 cm de profondeur, légèrement montant, à 50 cm du sol.", "Insérer le tube et le relier à la bouteille ; ne prélever que quelques litres par arbre.", "Reboucher ensuite le trou avec une cheville de bois propre pour protéger l'arbre.", "Garder la sève au réfrigérateur et la boire dans les 3 à 5 jours, un verre à jeun par jour pendant 3 semaines."]
      },
      {
        titre: "Infusion de feuilles de bouleau",
        type: "infusion",
        ingredients: ["2 cuillères à café de feuilles séchées (environ 2 g)", "250 ml d'eau frémissante"],
        etapes: ["Verser l'eau sur les feuilles.", "Couvrir et laisser infuser 10 minutes.", "Filtrer ; 2 à 3 tasses par jour en cure courte, en buvant suffisamment d'eau à côté."]
      }
    ],
    confusions: [
      {
        nom: "Bouleau pubescent",
        latin: "Betula pubescens",
        danger: "sans-danger",
        differences: ["Rameaux duveteux et sans verrues, non retombants.", "Feuilles plus arrondies à denture simple.", "Préfère les sols tourbeux et humides ; usages identiques."]
      },
      {
        nom: "Peuplier tremble",
        latin: "Populus tremula",
        danger: "sans-danger",
        differences: ["Écorce gris verdâtre lisse, sans lanières blanches qui pèlent.", "Feuilles presque rondes à grosses dents arrondies, qui tremblent au moindre vent.", "Ne donne pas de sève à boire."]
      }
    ],
    precautions: [
      "Ne pas inciser un arbre sans l'accord du propriétaire ni dans une forêt publique sans autorisation ; ne pas saigner les jeunes arbres.",
      "La sève fraîche fermente vite : jeter une sève trouble, à l'odeur aigre ou qui a tourné sans le vouloir.",
      "Infusion de feuilles déconseillée en cas d'œdème lié à une insuffisance cardiaque ou rénale.",
      "Allergie fréquente au pollen de bouleau : prudence avec les bourgeons et chatons chez les personnes allergiques."
    ],
    sources: [
      { titre: "Wikipédia : Bouleau verruqueux", url: "https://fr.wikipedia.org/wiki/Betula_pendula" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes, 1868 (article Bouleau)", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "frene-commun",
    nom: "Frêne commun",
    latin: "Fraxinus excelsior",
    famille: "Oléacées",
    autresNoms: ["Grand frêne", "Frêne élevé", "Quinquina d'Europe"],
    statut: "comestible-medicinale",
    resume: "Grand arbre aux feuilles composées et aux bourgeons noirs. Ses feuilles servent à préparer la frênette, boisson fermentée traditionnelle, et une infusion réputée pour les articulations.",
    habitat: "Bois frais, fonds de vallées, bords de rivières, haies et bocages.",
    habitats: ["foret", "haie", "bord-eau"],
    regions: "Toute la France sauf la région méditerranéenne la plus sèche ; actuellement affaibli par la chalarose.",
    recolte: [5, 6, 7],
    floraison: [3, 4],
    couleurFleur: ["aucune"],
    typeFeuille: "Feuilles opposées, composées de 9 à 13 folioles lancéolées finement dentées, une foliole au bout.",
    reconnaissance: [
      "Bourgeons d'un noir mat très caractéristique, opposés deux à deux sur des rameaux gris verdâtre aplatis aux nœuds.",
      "Feuilles opposées, composées de 9 à 13 folioles pointues sans odeur désagréable au froissement.",
      "Fleurs sans pétales, en touffes pourpres puis brunâtres avant les feuilles.",
      "Fruits secs ailés (samares) en grappes pendantes qui restent souvent sur l'arbre en hiver.",
      "Écorce gris clair, lisse chez le jeune arbre, finement crevassée en réseau avec l'âge."
    ],
    partiesUtilisees: ["feuilles", "jeunes samares", "écorce"],
    bienfaits: [
      "Feuilles traditionnellement utilisées en infusion pour leurs effets diurétiques et contre les douleurs articulaires et rhumatismales.",
      "L'écorce a été employée autrefois contre les fièvres, d'où le surnom de quinquina d'Europe (Cazin, 1868) : usage ancien abandonné."
    ],
    usages: ["frênette (boisson pétillante faiblement alcoolisée)", "infusion de feuilles séchées", "jeunes samares vertes confites au vinaigre"],
    recettes: [
      {
        titre: "Frênette maison",
        type: "boisson",
        ingredients: ["30 g de feuilles de frêne séchées", "5 litres d'eau", "750 g de sucre", "20 g d'acide citrique ou le jus de 2 citrons", "5 g de levure de boulanger", "Une poignée de chicorée torréfiée pour la couleur (facultatif)"],
        etapes: ["Faire bouillir les feuilles 15 minutes dans 2 litres d'eau, puis filtrer.", "Dissoudre le sucre et l'acide citrique dans le liquide chaud, compléter avec l'eau froide.", "Quand le mélange est tiède, ajouter la levure délayée et laisser fermenter 8 à 10 jours à couvert.", "Mettre en bouteilles solides prévues pour le gaz, attendre 2 à 3 semaines au frais ; ouvrir avec précaution."]
      },
      {
        titre: "Infusion de feuilles de frêne",
        type: "infusion",
        ingredients: ["1 cuillère à soupe de feuilles séchées (environ 2 g)", "250 ml d'eau frémissante"],
        etapes: ["Infuser 10 minutes à couvert.", "Filtrer ; 2 à 3 tasses par jour pendant 2 à 3 semaines au plus."]
      }
    ],
    confusions: [
      {
        nom: "Sureau noir (feuilles)",
        latin: "Sambucus nigra",
        danger: "toxique",
        differences: ["Seulement 5 à 7 folioles par feuille, plus larges et ovales.", "Odeur forte et désagréable quand on froisse la feuille.", "Rameaux remplis de moelle blanche spongieuse, bourgeons non noirs.", "Arbuste de haie, rarement un grand arbre ; ses feuilles ne s'emploient pas en boisson."]
      },
      {
        nom: "Sorbier des oiseleurs",
        latin: "Sorbus aucuparia",
        danger: "sans-danger",
        differences: ["Feuilles alternes et non opposées.", "Bourgeons violacés et laineux, jamais noirs.", "Fleurs blanches en corymbes puis baies rouges."]
      }
    ],
    precautions: [
      "Diurétique : prudence en cas d'insuffisance cardiaque ou rénale, ou de traitement diurétique.",
      "La frênette fermente en bouteille : utiliser des bouteilles résistantes à la pression et les garder au frais pour éviter les éclatements.",
      "La frênette contient un peu d'alcool : pas pour les enfants ni pendant la grossesse.",
      "Cueillir sur des arbres sains, loin des routes et des cultures traitées."
    ],
    sources: [
      { titre: "Wikipédia : Frêne élevé", url: "https://fr.wikipedia.org/wiki/Fraxinus_excelsior" },
      { titre: "Wikipédia : Sureau noir", url: "https://fr.wikipedia.org/wiki/Sureau_noir" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes, 1868 (article Frêne)", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "chene-pedoncule",
    nom: "Chêne pédonculé",
    latin: "Quercus robur",
    famille: "Fagacées",
    autresNoms: ["Chêne commun", "Chêne blanc", "Gravelin"],
    statut: "comestible-medicinale",
    resume: "Grand arbre des forêts et du bocage dont les glands, une fois débarrassés de leurs tanins par trempage, donnent une farine nourrissante. L'écorce est un astringent classique de la tradition.",
    habitat: "Forêts de plaine, bocages, bords de rivières, sols frais et profonds.",
    habitats: ["foret", "haie", "bord-eau"],
    regions: "Partout en France sauf en altitude et dans les zones méditerranéennes très sèches.",
    recolte: [9, 10, 11],
    floraison: [4, 5],
    couleurFleur: ["vert"],
    typeFeuille: "Feuilles alternes à lobes arrondis, presque sans pétiole, avec deux petites oreillettes à la base.",
    reconnaissance: [
      "Feuilles lobées en vagues arrondies, pétiole très court et deux oreillettes à la base du limbe.",
      "Glands portés par deux ou trois au bout d'un long pédoncule de plusieurs centimètres (d'où son nom).",
      "Chaque gland est assis dans une cupule écailleuse en forme de dé.",
      "Écorce gris brun, épaisse, profondément crevassée chez l'adulte.",
      "Grand arbre au houppier large et aux branches tortueuses."
    ],
    partiesUtilisees: ["glands", "écorce", "feuilles"],
    bienfaits: [
      "Écorce riche en tanins, traditionnellement utilisée en décoction externe comme astringent (gargarismes, bains, lotions sur petites irritations).",
      "Glands préparés réputés nourrissants et riches en amidon ; Cazin (1868) cite le café de glands et des préparations à base de glands torréfiés."
    ],
    usages: ["farine de glands en pain, galettes, gâteaux", "glands torréfiés en succédané de café", "glands cuits poêlés ou en tarte", "décoction d'écorce en usage externe"],
    recettes: [
      {
        titre: "Glands désamérisés et farine de glands",
        type: "cuisine",
        ingredients: ["1 kg de glands sains, sans trou de ver", "Beaucoup d'eau"],
        etapes: ["Décortiquer les glands et retirer la fine peau brune.", "Les concasser puis les faire tremper dans l'eau froide en changeant l'eau chaque jour, ou les faire bouillir dans plusieurs eaux successives.", "Goûter : continuer tant qu'une amertume ou une astringence persiste (souvent une à deux semaines à froid).", "Sécher au four doux, mixer en farine et utiliser en mélange avec de la farine de blé (un tiers au plus)."]
      },
      {
        titre: "Décoction d'écorce pour gargarisme",
        type: "infusion",
        ingredients: ["2 cuillères à soupe d'écorce de jeunes rameaux séchée et concassée (environ 10 g)", "500 ml d'eau"],
        etapes: ["Faire bouillir doucement 10 minutes.", "Laisser tiédir et filtrer.", "Utiliser en gargarisme ou en lotion, sans avaler, 2 à 3 fois par jour quelques jours."]
      }
    ],
    confusions: [
      {
        nom: "Marronnier d'Inde",
        latin: "Aesculus hippocastanum",
        danger: "toxique",
        differences: ["Grosses graines brunes luisantes avec une large tache claire, sans cupule.", "Fruits enfermés dans une coque verte charnue à piquants mous.", "Grandes feuilles composées en main de 5 à 7 folioles.", "Graines très amères, toxiques, qui ne se rendent pas comestibles par trempage."]
      },
      {
        nom: "Chêne sessile",
        latin: "Quercus petraea",
        danger: "sans-danger",
        differences: ["Glands presque sans pédoncule, collés au rameau.", "Feuilles à pétiole net, sans oreillettes.", "Glands utilisables de la même façon."]
      }
    ],
    precautions: [
      "Ne jamais manger les glands crus ou non désamérisés : les tanins irritent l'intestin et gênent l'absorption du fer.",
      "Écarter les glands moisis, véreux ou noircis.",
      "L'écorce s'emploie surtout en usage externe ; pas d'usage interne prolongé.",
      "Pas de décoction d'écorce sur une plaie étendue ou sur un eczéma suintant important sans avis médical."
    ],
    sources: [
      { titre: "Wikipédia : Chêne pédonculé", url: "https://fr.wikipedia.org/wiki/Quercus_robur" },
      { titre: "Wikipédia : Marronnier d'Inde", url: "https://fr.wikipedia.org/wiki/Aesculus_hippocastanum" },
      { titre: "Plantes Sauvages Comestibles : tarte aux glands et aux noix", url: "https://plantes-sauvages-comestibles.com/tarte-aux-glands-et-aux-noix/" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes, 1868 (article Chêne)", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "hetre",
    nom: "Hêtre",
    latin: "Fagus sylvatica",
    famille: "Fagacées",
    autresNoms: ["Fayard", "Foyard", "Fau"],
    statut: "comestible",
    resume: "Arbre majestueux à l'écorce grise et lisse dont les petites graines triangulaires, les faînes, ont un goût de noisette. Ses très jeunes feuilles se mangent aussi en salade au printemps.",
    habitat: "Forêts de plaine fraîches et forêts de montagne, sols bien drainés.",
    habitats: ["foret", "montagne"],
    regions: "Nord, Est, Centre, Normandie, montagnes (Vosges, Jura, Alpes, Pyrénées, Massif central) ; rare en plaine méditerranéenne.",
    recolte: [4, 5, 9, 10],
    floraison: [4, 5],
    couleurFleur: ["vert"],
    typeFeuille: "Feuilles alternes ovales, à bord entier et ondulé, bordées de cils soyeux quand elles sont jeunes.",
    reconnaissance: [
      "Écorce gris clair très lisse, même sur les vieux troncs.",
      "Bourgeons très longs et pointus comme des cigares, brun cuivré.",
      "Feuilles ovales à bord entier légèrement ondulé, 6 à 8 paires de nervures parallèles, bordure ciliée au printemps.",
      "Fruits : cupule ligneuse hérissée de piquants mous, qui s'ouvre en 4 valves sur 2 faînes triangulaires brunes et luisantes.",
      "Sous-bois souvent sombre et presque nu sous les hêtres."
    ],
    partiesUtilisees: ["faînes", "très jeunes feuilles"],
    bienfaits: [
      "Faînes riches en lipides, utilisées autrefois pour faire une huile alimentaire.",
      "L'écorce, astringente, a été classée parmi les fébrifuges indigènes au XIXe siècle (Cazin, 1868) : usage abandonné."
    ],
    usages: ["faînes grillées en apéritif ou dans les salades", "faînes concassées dans les pâtisseries", "jeunes feuilles tendres en salade au printemps", "huile de faînes (usage ancien)"],
    recettes: [
      {
        titre: "Faînes grillées",
        type: "cuisine",
        ingredients: ["2 poignées de faînes bien pleines", "Une pincée de sel"],
        etapes: ["Ouvrir les faînes et retirer la coque brune, puis frotter pour ôter la fine peau.", "Faire griller 5 à 8 minutes à la poêle sans matière grasse en remuant.", "Saler légèrement et consommer en petite quantité, une poignée par personne."]
      }
    ],
    confusions: [
      {
        nom: "Charme",
        latin: "Carpinus betulus",
        danger: "sans-danger",
        differences: ["Écorce grise lisse mais tronc cannelé, comme musclé.", "Feuilles nettement dentées, plissées entre les nervures.", "Fruits en grappes de bractées à trois lobes, sans cupule piquante."]
      }
    ],
    precautions: [
      "Les faînes crues contiennent des substances irritantes : en manger en quantité peut provoquer nausées et maux de ventre. Les griller et rester modéré.",
      "Ne pas donner de faînes en quantité aux enfants ni aux chevaux.",
      "Ne ramasser que des faînes pleines, sèches et non moisies."
    ],
    sources: [
      { titre: "Wikipédia : Hêtre commun", url: "https://fr.wikipedia.org/wiki/Fagus_sylvatica" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes, 1868 (article Hêtre)", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "merisier",
    nom: "Merisier",
    latin: "Prunus avium",
    famille: "Rosacées",
    autresNoms: ["Cerisier des oiseaux", "Cerisier sauvage", "Guignier"],
    statut: "comestible-medicinale",
    resume: "Cerisier sauvage des forêts, ancêtre des cerises douces, aux petits fruits rouges à noirs sucrés en début d'été. Les queues de cerise sont une tisane traditionnelle.",
    habitat: "Lisières, forêts claires, haies, bocages.",
    habitats: ["foret", "haie", "bord-chemin"],
    regions: "Toute la France jusqu'à environ 1500 m.",
    recolte: [6, 7],
    floraison: [4, 5],
    couleurFleur: ["blanc"],
    typeFeuille: "Feuilles alternes ovales pointues, dentées, pendantes, avec deux petites glandes rouges au sommet du pétiole.",
    reconnaissance: [
      "Écorce brun rougeâtre luisante, marquée de lignes horizontales et qui se détache en bandes circulaires.",
      "Deux petites glandes rougeâtres en haut du pétiole, juste sous la feuille.",
      "Fleurs blanches à 5 pétales en bouquets, portées sur de longs pédicelles, juste avant ou avec les feuilles.",
      "Cerises petites, rouges puis noirâtres, pendantes au bout d'une longue queue, noyau lisse.",
      "Grand arbre pouvant dépasser 20 m."
    ],
    partiesUtilisees: ["fruits", "pédoncules (queues de cerise)"],
    bienfaits: [
      "Les queues de cerise sont traditionnellement utilisées en infusion comme diurétique doux.",
      "Le fruit se mange frais ou cuit ; Cazin (1868) rapporte que l'eau distillée de cerise noire servait autrefois de calmant, un usage abandonné car elle contient de l'acide cyanhydrique."
    ],
    usages: ["fruits mûrs crus", "confiture et clafoutis", "liqueur et eau-de-vie (kirsch)", "infusion de queues séchées"],
    recettes: [
      {
        titre: "Infusion de queues de cerise",
        type: "infusion",
        ingredients: ["1 cuillère à soupe de queues de cerise séchées (environ 3 g)", "250 ml d'eau"],
        etapes: ["Faire bouillir doucement les queues 5 minutes dans l'eau.", "Laisser infuser 10 minutes hors du feu, filtrer.", "2 à 3 tasses par jour pendant quelques jours."]
      },
      {
        titre: "Confiture de merises",
        type: "cuisine",
        ingredients: ["1 kg de merises dénoyautées", "600 g de sucre", "Le jus d'un citron"],
        etapes: ["Dénoyauter les merises (fastidieux mais indispensable).", "Les faire macérer une nuit avec le sucre et le citron.", "Cuire environ 20 minutes à feu vif en remuant, vérifier la prise sur une assiette froide.", "Mettre en pots stérilisés."]
      }
    ],
    confusions: [
      {
        nom: "Belladone",
        latin: "Atropa belladonna",
        danger: "mortel",
        differences: ["Plante herbacée de 1 à 1,5 m et non un arbre.", "Baies noires luisantes isolées, assises sur une collerette verte en étoile à 5 pointes.", "Baies sans noyau, remplies de nombreuses petites graines.", "Fleurs en clochettes brun violacé ; pousse dans les coupes et clairières forestières."]
      },
      {
        nom: "Laurier-cerise",
        latin: "Prunus laurocerasus",
        danger: "toxique",
        differences: ["Arbuste à feuilles persistantes, épaisses, très luisantes et coriaces.", "Fleurs et fruits en grappes allongées dressées.", "Feuilles froissées à odeur d'amande amère ; graines et feuilles toxiques."]
      },
      {
        nom: "Cerisier à grappes",
        latin: "Prunus padus",
        danger: "toxique",
        differences: ["Fleurs et fruits en longues grappes pendantes de 10 à 30 petits fruits.", "Fruits noirs, petits, au goût âpre et amer.", "Amande du noyau toxique ; fruits peu consommables."]
      }
    ],
    precautions: [
      "Ne pas croquer ni broyer les noyaux : l'amande contient des composés qui libèrent du cyanure.",
      "Ne jamais consommer de feuilles ni d'écorce de Prunus.",
      "Les eaux-de-vie de noyaux artisanales mal distillées peuvent contenir du cyanure et du carbamate d'éthyle.",
      "Ne cueillir les petits fruits noirs que sur un arbre bien identifié : la belladone pousse aussi en forêt."
    ],
    sources: [
      { titre: "Wikipédia : Merisier", url: "https://fr.wikipedia.org/wiki/Prunus_avium" },
      { titre: "Wikipédia : Cerisier à grappes", url: "https://fr.wikipedia.org/wiki/Prunus_padus" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes, 1868 (article Cerisier)", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "cornouiller-male",
    nom: "Cornouiller mâle",
    latin: "Cornus mas",
    famille: "Cornacées",
    autresNoms: ["Cornouiller sauvage", "Cormier mâle", "Cornouille"],
    statut: "comestible-medicinale",
    resume: "Arbuste qui fleurit en jaune dès la fin de l'hiver, bien avant les feuilles, puis donne en fin d'été des fruits rouges allongés et acidulés, les cornouilles. À ne pas confondre avec le cornouiller sanguin aux fruits noirs.",
    habitat: "Haies, lisières et bois clairs sur sol calcaire, coteaux ensoleillés.",
    habitats: ["haie", "foret", "bord-chemin"],
    regions: "Surtout l'Est, le Centre-Est, la Bourgogne, le Jura, les Alpes du Nord et le Sud-Est ; rare dans l'Ouest.",
    recolte: [8, 9],
    floraison: [2, 3],
    couleurFleur: ["jaune"],
    typeFeuille: "Feuilles opposées, ovales, à bord entier, avec des nervures arquées qui suivent le bord vers la pointe.",
    reconnaissance: [
      "Floraison jaune en petites boules dès février-mars, sur les rameaux encore nus.",
      "Feuilles opposées à bord entier, 3 à 5 paires de nervures courbées vers la pointe ; en déchirant doucement une feuille, de fins fils blancs relient les morceaux.",
      "Fruits rouges vifs, luisants, en forme d'olive allongée de 1,5 à 2 cm, avec un gros noyau.",
      "Fruits mûrs mous et sucrés-acidulés, souvent tombés au sol.",
      "Rameaux gris verdâtre, arbuste de 2 à 6 m."
    ],
    partiesUtilisees: ["fruits", "écorce"],
    bienfaits: [
      "Fruits riches en vitamine C et en tanins, traditionnellement réputés astringents (contre les diarrhées légères).",
      "Cazin (1868) cite l'écorce comme astringente et fébrifuge : usage ancien, sans emploi actuel."
    ],
    usages: ["fruits bien mûrs crus", "confiture et gelée", "sirop", "fruits verts saumurés comme des olives (usage d'Europe de l'Est)"],
    recettes: [
      {
        titre: "Confiture de cornouilles",
        type: "cuisine",
        ingredients: ["1 kg de cornouilles bien mûres", "20 cl d'eau", "700 g de sucre"],
        etapes: ["Cuire les fruits avec l'eau 15 minutes jusqu'à ce qu'ils éclatent.", "Passer au moulin à légumes pour retirer les noyaux.", "Ajouter le sucre à la pulpe et cuire 10 à 15 minutes en remuant.", "Mettre en pots stérilisés."]
      }
    ],
    confusions: [
      {
        nom: "Cornouiller sanguin",
        latin: "Cornus sanguinea",
        danger: "toxique",
        differences: ["Fleurs blanches en ombelles, en mai-juin, après les feuilles.", "Fruits petits et ronds, noirs bleutés, groupés en bouquets, au goût âpre et amer.", "Rameaux rouges surtout en hiver.", "Fruits non comestibles, légèrement toxiques."]
      },
      {
        nom: "Chèvrefeuille des haies (camérisier)",
        latin: "Lonicera xylosteum",
        danger: "toxique",
        differences: ["Baies rouges rondes, molles, soudées par deux à la base.", "Fleurs blanc crème à jaunâtre en tube, par paires, en mai.", "Feuilles opposées duveteuses sans fils blancs à la déchirure."]
      }
    ],
    precautions: [
      "Ne consommer que les fruits bien mûrs, d'un rouge sombre et mous : verts, ils sont très astringents.",
      "Vérifier la couleur et la forme des fruits : les fruits ronds et noirs sont ceux du cornouiller sanguin.",
      "Riche en tanins : consommer en quantité raisonnable en cas de constipation."
    ],
    sources: [
      { titre: "Wikipédia : Cornouiller mâle", url: "https://fr.wikipedia.org/wiki/Cornus_mas" },
      { titre: "Wikipédia : Cornouiller sanguin", url: "https://fr.wikipedia.org/wiki/Cornus_sanguinea" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes, 1868 (article Cornouiller)", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "sorbier-domestique",
    nom: "Sorbier domestique",
    latin: "Sorbus domestica",
    famille: "Rosacées",
    autresNoms: ["Cormier", "Cormes", "Sorbier cultivé"],
    statut: "comestible-medicinale",
    resume: "Arbre rare et longévif dont les petits fruits en forme de poire, les cormes, deviennent sucrés une fois blettis, comme les nèfles. Astringents, ils étaient utilisés traditionnellement contre les diarrhées.",
    habitat: "Bois clairs et chauds, haies anciennes, vergers abandonnés, coteaux calcaires.",
    habitats: ["foret", "haie"],
    regions: "Disséminé dans la moitié sud et le centre de la France, plus rare au nord ; souvent planté anciennement.",
    recolte: [9, 10, 11],
    floraison: [4, 5],
    couleurFleur: ["blanc"],
    typeFeuille: "Feuilles alternes composées de 13 à 21 folioles dentées, comme celles du sorbier des oiseleurs.",
    reconnaissance: [
      "Feuilles composées de 13 à 21 folioles dentées surtout vers la pointe.",
      "Bourgeons verts, glabres et collants (laineux et violacés chez le sorbier des oiseleurs).",
      "Fruits de 2 à 3 cm en forme de petite poire ou de pomme, jaune verdâtre lavé de rouge.",
      "Écorce brune qui se fend en petites plaques rectangulaires, comme celle du poirier.",
      "Grand arbre de 10 à 20 m, fleurs blanches en corymbes."
    ],
    partiesUtilisees: ["fruits blettis"],
    bienfaits: [
      "Fruits riches en tanins, traditionnellement employés comme astringents contre les diarrhées.",
      "Cazin (1868) note que l'écorce, amère et astringente, n'a pas d'emploi médical."
    ],
    usages: ["cormes blettis crus", "compote et gelée", "cidre de cormes (cormé)", "eau-de-vie de cormes"],
    recettes: [
      {
        titre: "Blettissement et compote de cormes",
        type: "cuisine",
        ingredients: ["1 kg de cormes", "100 g de sucre", "Une gousse de vanille ou de la cannelle"],
        etapes: ["Étaler les cormes sur de la paille ou du papier dans un endroit frais pendant 2 à 4 semaines, jusqu'à ce qu'elles soient brunes et molles.", "Les passer au moulin à légumes pour ôter peaux et pépins.", "Cuire la pulpe 10 minutes avec le sucre et la vanille.", "Consommer dans la semaine ou mettre en pots stérilisés."]
      }
    ],
    confusions: [
      {
        nom: "Sorbier des oiseleurs",
        latin: "Sorbus aucuparia",
        danger: "irritant",
        differences: ["Fruits rouge corail ronds de moins de 1 cm, en grosses grappes.", "Bourgeons violacés couverts de poils blancs, non collants.", "Écorce lisse et grise.", "Fruits crus irritants pour l'intestin : se consomment seulement cuits."]
      }
    ],
    precautions: [
      "Les cormes non blettis sont très âpres et astringents : attendre qu'ils soient bruns et mous.",
      "Riches en tanins : modérer en cas de constipation.",
      "Arbre rare : cueillir les fruits tombés, ne pas abîmer les arbres."
    ],
    sources: [
      { titre: "Wikipédia : Cormier", url: "https://fr.wikipedia.org/wiki/Sorbus_domestica" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes, 1868 (article Sorbier domestique)", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "sorbier-des-oiseleurs",
    nom: "Sorbier des oiseleurs",
    latin: "Sorbus aucuparia",
    famille: "Rosacées",
    autresNoms: ["Arbre à grives", "Cochène", "Sorbier des oiseaux"],
    statut: "comestible",
    resume: "Petit arbre aux grappes de baies rouge corail très appréciées des oiseaux. Les fruits, âpres et irritants crus, deviennent consommables après cuisson ou gel et donnent de bonnes gelées.",
    habitat: "Bois clairs, lisières, landes, forêts de montagne, sols plutôt acides.",
    habitats: ["foret", "montagne", "haie"],
    regions: "Surtout en montagne et dans les régions à sols acides (Bretagne, Massif central, Vosges, Alpes, Pyrénées) ; souvent planté en ville.",
    recolte: [8, 9, 10],
    floraison: [5, 6],
    couleurFleur: ["blanc"],
    typeFeuille: "Feuilles alternes composées de 9 à 15 folioles étroites dentées.",
    reconnaissance: [
      "Feuilles alternes composées de 9 à 15 folioles allongées, dentées presque sur toute leur longueur.",
      "Bourgeons violacés couverts de poils blanc grisâtre.",
      "Fleurs blanches en larges corymbes plats, à odeur un peu forte.",
      "Baies rouge orangé brillant de 8 à 10 mm, en grosses grappes dressées puis pendantes, portant une petite étoile au sommet.",
      "Écorce grise lisse et luisante."
    ],
    partiesUtilisees: ["fruits cuits"],
    bienfaits: [
      "Fruits riches en vitamine C, traditionnellement utilisés contre le scorbut dans les pays du Nord.",
      "Réputés astringents une fois séchés ; Cazin (1868) rapporte des avis contradictoires (purgatifs frais, astringents secs)."
    ],
    usages: ["gelée de sorbes avec des pommes", "confiture cuite longuement", "sirop", "fruits ajoutés aux sauces de gibier"],
    recettes: [
      {
        titre: "Gelée de sorbes et pommes",
        type: "cuisine",
        ingredients: ["500 g de baies de sorbier, idéalement passées une nuit au congélateur", "500 g de pommes", "1 litre d'eau", "Sucre (750 g par litre de jus)"],
        etapes: ["Égrapper les baies, couper les pommes en morceaux sans les éplucher.", "Cuire le tout 30 minutes dans l'eau à petit feu.", "Filtrer dans un linge sans presser, peser le jus et ajouter le sucre.", "Cuire à ébullition 10 à 15 minutes jusqu'à la prise, mettre en pots."]
      }
    ],
    confusions: [
      {
        nom: "Sureau à grappes",
        latin: "Sambucus racemosa",
        danger: "toxique",
        differences: ["Feuilles opposées (et non alternes), à 5 à 7 folioles larges.", "Fleurs jaunâtres en grappes ovoïdes dès avril, baies rouges dès juillet.", "Rameaux à moelle orangée ; graines toxiques crues."]
      },
      {
        nom: "Sorbier domestique",
        latin: "Sorbus domestica",
        danger: "sans-danger",
        differences: ["Fruits plus gros, en forme de petite poire, jaunâtres à rougeâtres.", "Bourgeons verts collants.", "Écorce crevassée."]
      }
    ],
    precautions: [
      "Ne pas consommer les baies crues en quantité : elles contiennent de l'acide parasorbique, irritant, qui provoque des troubles digestifs. Une cuisson prolongée le neutralise.",
      "Ne pas écraser les pépins, qui contiennent un composé cyanogène ; filtrer les préparations.",
      "Laisser une bonne partie des fruits aux oiseaux, pour qui ils sont une ressource d'hiver."
    ],
    sources: [
      { titre: "Wikipédia : Sorbier des oiseleurs", url: "https://fr.wikipedia.org/wiki/Sorbus_aucuparia" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes, 1868 (article Sorbier des oiseleurs)", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "neflier",
    nom: "Néflier",
    latin: "Mespilus germanica",
    famille: "Rosacées",
    autresNoms: ["Néflier commun", "Mêlier", "Nèfle"],
    statut: "comestible-medicinale",
    resume: "Petit arbre tortueux des haies dont les fruits bruns, les nèfles, ne se mangent qu'une fois blettis, après les premières gelées ou un séjour sur la paille. Fruit astringent traditionnel contre les diarrhées.",
    habitat: "Haies, lisières et bois clairs sur sols acides, vieux vergers.",
    habitats: ["haie", "foret"],
    regions: "Disséminé dans une grande partie de la France, surtout l'Ouest, le Centre et le Sud-Ouest ; souvent issu d'anciennes plantations.",
    recolte: [10, 11, 12],
    floraison: [5, 6],
    couleurFleur: ["blanc"],
    typeFeuille: "Feuilles alternes grandes, oblongues, à bord presque entier, mates et duveteuses dessous.",
    reconnaissance: [
      "Grandes feuilles allongées de 6 à 15 cm, presque sans dents, veloutées surtout au revers.",
      "Grandes fleurs blanches solitaires à 5 pétales, entourées de 5 longs sépales étroits.",
      "Fruit brun roux, rond et aplati, de 2 à 3 cm, couronné par les 5 sépales persistants qui laissent un large œil ouvert.",
      "Rameaux souvent épineux chez les sujets sauvages, port tortueux et étalé.",
      "Chair dure et âpre avant blettissement, brune, molle et sucrée ensuite, avec 5 noyaux durs."
    ],
    partiesUtilisees: ["fruits blettis", "feuilles"],
    bienfaits: [
      "Fruits riches en tanins, traditionnellement utilisés contre les diarrhées légères.",
      "Cazin (1868) cite cet usage antidiarrhéique et le dit déjà inusité en médecine à son époque."
    ],
    usages: ["nèfles blettes mangées à la cuillère", "compote et gelée", "pâte de fruits", "accompagnement de fromages"],
    recettes: [
      {
        titre: "Gelée de nèfles",
        type: "cuisine",
        ingredients: ["1 kg de nèfles blettes", "1 litre d'eau", "Le jus d'un citron", "Sucre (700 g par litre de jus)"],
        etapes: ["Laver les nèfles et les faire cuire 30 minutes dans l'eau.", "Écraser puis filtrer dans un linge pendant plusieurs heures.", "Peser le jus, ajouter sucre et citron, cuire 10 à 15 minutes à ébullition.", "Vérifier la prise et mettre en pots stérilisés."]
      }
    ],
    confusions: [
      {
        nom: "Alisier torminal",
        latin: "Sorbus torminalis",
        danger: "sans-danger",
        differences: ["Feuilles profondément lobées en pointes, rappelant l'érable.", "Petits fruits bruns de 1 à 1,5 cm en grappes, et non gros fruits isolés.", "Fruits également comestibles une fois blettis."]
      }
    ],
    precautions: [
      "Ne pas consommer les nèfles avant blettissement : très âpres, elles sont indigestes.",
      "Ne pas avaler les noyaux durs.",
      "Riche en tanins : modérer en cas de constipation."
    ],
    sources: [
      { titre: "Wikipédia : Néflier", url: "https://fr.wikipedia.org/wiki/Mespilus_germanica" },
      { titre: "Wikipédia : Alisier torminal", url: "https://fr.wikipedia.org/wiki/Sorbus_torminalis" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes, 1868 (article Néflier)", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "framboisier",
    nom: "Framboisier sauvage",
    latin: "Rubus idaeus",
    famille: "Rosacées",
    autresNoms: ["Framboisier", "Ronce du mont Ida"],
    statut: "comestible-medicinale",
    resume: "Arbrisseau des clairières et des coupes forestières aux framboises petites mais très parfumées. Ses feuilles sont une infusion traditionnelle, notamment en fin de grossesse sous suivi.",
    habitat: "Clairières, coupes forestières, lisières, éboulis, bois clairs de montagne.",
    habitats: ["foret", "montagne", "friche"],
    regions: "Toute la France, surtout en moyenne montagne et dans le Nord-Est ; rare en plaine méditerranéenne.",
    recolte: [5, 6, 7, 8, 9],
    floraison: [5, 6, 7],
    couleurFleur: ["blanc"],
    typeFeuille: "Feuilles alternes composées de 3 à 5 folioles dentées, vertes dessus et blanc argenté feutré dessous.",
    reconnaissance: [
      "Tiges dressées de 1 à 2 m, couvertes de fins aiguillons faibles, presque comme des poils.",
      "Feuilles à 3 ou 5 folioles, nettement blanches et feutrées au revers.",
      "Petites fleurs blanches à pétales dressés, peu visibles.",
      "Fruit rouge qui se détache de son support en laissant un cône blanc : la framboise est creuse.",
      "Pousse souvent en colonies denses dans les clairières."
    ],
    partiesUtilisees: ["fruits", "feuilles", "jeunes pousses"],
    bienfaits: [
      "Feuilles astringentes, traditionnellement utilisées en infusion ou en gargarisme pour la gorge et les diarrhées légères.",
      "L'infusion de feuilles est réputée préparer l'accouchement dans la tradition sage-femme, à n'utiliser qu'en fin de grossesse et avec avis médical.",
      "Cazin (1868) note l'usage des feuilles en gargarisme, comme celles de la ronce."
    ],
    usages: ["framboises crues", "confiture, coulis, sorbet", "vinaigre de framboise", "infusion de feuilles séchées"],
    recettes: [
      {
        titre: "Vinaigre de framboise",
        type: "macerat",
        ingredients: ["250 g de framboises sauvages", "50 cl de vinaigre de vin blanc ou de cidre", "50 g de sucre (facultatif)"],
        etapes: ["Mettre les framboises dans un bocal propre et les recouvrir de vinaigre.", "Laisser macérer 2 semaines à l'abri de la lumière en secouant de temps en temps.", "Filtrer, ajouter le sucre si on le souhaite et chauffer légèrement pour le dissoudre.", "Mettre en bouteille ; s'utilise en vinaigrette ou dilué dans l'eau."]
      },
      {
        titre: "Infusion de feuilles de framboisier",
        type: "infusion",
        ingredients: ["1 cuillère à soupe de feuilles séchées (environ 2 g)", "250 ml d'eau frémissante"],
        etapes: ["Infuser 10 minutes à couvert.", "Filtrer ; 1 à 3 tasses par jour."]
      }
    ],
    confusions: [
      {
        nom: "Ronce commune",
        latin: "Rubus fruticosus",
        danger: "sans-danger",
        differences: ["Tiges arquées, robustes, armées de gros aiguillons crochus.", "Mûres noires qui restent pleines : le réceptacle part avec le fruit.", "Comestible également."]
      },
      {
        nom: "Ronce bleue",
        latin: "Rubus caesius",
        danger: "sans-danger",
        differences: ["Tiges couchées et rampantes couvertes d'une pruine bleutée.", "Fruits noirs pruineux à gros grains peu nombreux.", "Comestible également."]
      }
    ],
    precautions: [
      "Laver ou cuire les framboises cueillies à faible hauteur dans les zones à échinococcose (Est, Jura, Alpes, Massif central).",
      "Grossesse : n'utiliser l'infusion de feuilles qu'en fin de grossesse et sur avis de la sage-femme ou du médecin.",
      "Feuilles astringentes : éviter l'usage prolongé en cas de constipation."
    ],
    sources: [
      { titre: "Wikipédia : Framboisier", url: "https://fr.wikipedia.org/wiki/Rubus_idaeus" },
      { titre: "Wikipédia : Ronce bleue", url: "https://fr.wikipedia.org/wiki/Rubus_caesius" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes, 1868 (article Framboisier)", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "epine-vinette",
    nom: "Épine-vinette",
    latin: "Berberis vulgaris",
    famille: "Berbéridacées",
    autresNoms: ["Vinettier", "Berbéris", "Pisse-vinaigre"],
    statut: "comestible-medicinale",
    resume: "Arbuste épineux des haies calcaires aux grappes de baies rouges allongées très acides. Le fruit mûr se cuisine comme l'airelle ; racine et écorce, riches en berbérine, relèvent de la phytothérapie encadrée.",
    habitat: "Haies, lisières et coteaux secs sur sol calcaire, pentes ensoleillées de montagne.",
    habitats: ["haie", "montagne", "bord-chemin"],
    regions: "Surtout l'Est, les Alpes, le Jura, les Pyrénées et les causses ; assez rare ailleurs, car longtemps arraché (hôte de la rouille du blé).",
    recolte: [9, 10, 11],
    floraison: [4, 5, 6],
    couleurFleur: ["jaune"],
    typeFeuille: "Feuilles ovales en bouquets, finement dentées et ciliées, chaque bouquet protégé par une épine à trois pointes.",
    reconnaissance: [
      "Épines à 3 branches (parfois 1 ou 5) sous chaque bouquet de feuilles.",
      "Feuilles obovales regroupées en rosettes, bord à fines dents se terminant en cil piquant.",
      "Fleurs jaunes en grappes pendantes, à odeur un peu forte.",
      "Baies rouge vif, allongées (environ 1 cm), en grappes pendantes, très acides.",
      "Bois et intérieur de la racine d'un jaune vif quand on gratte l'écorce."
    ],
    partiesUtilisees: ["baies mûres"],
    bienfaits: [
      "Baies riches en vitamine C et en acides de fruit, traditionnellement employées comme rafraîchissantes.",
      "Cazin (1868) les compare à la groseille et au citron, en sirop, gelée et confiserie.",
      "Écorce et racine, riches en berbérine, sont utilisées en phytothérapie : usage à réserver à un professionnel."
    ],
    usages: ["baies séchées dans le riz et les plats mijotés (cuisine iranienne)", "gelée et sirop", "baies confites au sucre", "substitut du citron en assaisonnement"],
    recettes: [
      {
        titre: "Sirop d'épine-vinette",
        type: "sirop",
        ingredients: ["500 g de baies bien mûres", "25 cl d'eau", "400 g de sucre"],
        etapes: ["Égrapper les baies et les écraser avec l'eau.", "Chauffer doucement 10 minutes puis filtrer en pressant, sans broyer les graines.", "Ajouter le sucre et chauffer jusqu'à dissolution, laisser frémir 2 minutes.", "Mettre en bouteille ; diluer dans l'eau fraîche."]
      }
    ],
    confusions: [
      {
        nom: "Bois-joli",
        latin: "Daphne mezereum",
        danger: "mortel",
        differences: ["Arbrisseau sans épines.", "Baies rouges rondes, collées directement le long du rameau et non en grappes pendantes.", "Feuilles allongées groupées au sommet des rameaux.", "Fleurs roses très parfumées avant les feuilles ; toute la plante est très toxique."]
      },
      {
        nom: "Chèvrefeuille des haies (camérisier)",
        latin: "Lonicera xylosteum",
        danger: "toxique",
        differences: ["Pas d'épines, feuilles opposées duveteuses.", "Baies rouges rondes soudées par deux.", "Fleurs blanc jaunâtre en tube, par paires."]
      }
    ],
    precautions: [
      "Ne consommer que les baies bien rouges et mûres : les baies vertes et le reste de la plante contiennent de la berbérine.",
      "Ne pas utiliser l'écorce ou la racine soi-même : la berbérine interagit avec de nombreux médicaments et est contre-indiquée pendant la grossesse.",
      "Espèce peu commune dans certaines régions : cueillir avec modération."
    ],
    sources: [
      { titre: "Wikipédia : Épine-vinette", url: "https://fr.wikipedia.org/wiki/Berberis_vulgaris" },
      { titre: "Wikipédia : Bois-joli", url: "https://fr.wikipedia.org/wiki/Daphne_mezereum" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes, 1868 (article Épine-vinette)", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "argousier",
    nom: "Argousier",
    latin: "Hippophae rhamnoides",
    famille: "Éléagnacées",
    autresNoms: ["Argousier faux-nerprun", "Saule épineux", "Épine de mer"],
    statut: "comestible-medicinale",
    resume: "Arbuste épineux argenté des dunes et des graviers de rivière, couvert en automne de baies orange serrées contre les rameaux. Leur jus acide est parmi les plus riches en vitamine C.",
    habitat: "Dunes littorales, bancs de graviers des torrents et rivières de montagne, talus sableux.",
    habitats: ["littoral", "bord-eau", "montagne"],
    regions: "Littoral de la Manche et de la mer du Nord, vallées alpines (Durance, Isère, Drôme), bord du Rhin ; souvent planté ailleurs.",
    recolte: [9, 10, 11],
    floraison: [3, 4],
    couleurFleur: ["vert"],
    typeFeuille: "Feuilles alternes étroites et linéaires, gris vert dessus, argentées et écailleuses dessous.",
    reconnaissance: [
      "Arbuste de 1 à 5 m aux rameaux terminés en épines robustes.",
      "Feuilles très étroites, comme celles d'un saule, argentées et brillantes au revers.",
      "Baies orange vif de 6 à 8 mm, serrées en manchons tout autour des rameaux, à saveur très acide.",
      "Pieds mâles et femelles séparés : seuls les pieds femelles portent des fruits.",
      "Pousse en fourrés denses qui drageonnent sur sables et graviers."
    ],
    partiesUtilisees: ["baies"],
    bienfaits: [
      "Baies très riches en vitamine C, traditionnellement utilisées pour la vitalité en hiver.",
      "Huile de pulpe et de graines employée en usage externe pour la peau dans la tradition d'Europe de l'Est et d'Asie."
    ],
    usages: ["jus pressé mélangé à du miel ou à d'autres jus", "sirop et gelée", "coulis pour desserts et yaourts", "sauce acidulée pour poisson"],
    recettes: [
      {
        titre: "Jus d'argousier au miel",
        type: "boisson",
        ingredients: ["300 g de baies (rameaux passés au congélateur pour les détacher facilement)", "2 cuillères à soupe de miel", "50 cl d'eau"],
        etapes: ["Égrener les baies congelées en frottant les rameaux au-dessus d'un saladier.", "Écraser les baies et les passer au tamis fin pour retirer peaux et graines.", "Mélanger le jus avec l'eau et le miel.", "Boire dans la journée, un petit verre à la fois."]
      }
    ],
    confusions: [
      {
        nom: "Buisson ardent",
        latin: "Pyracantha coccinea",
        danger: "irritant",
        differences: ["Feuilles ovales, vert foncé luisant, finement dentées, sans revers argenté.", "Fruits en bouquets (corymbes) au bout de courts rameaux et non en manchons serrés.", "Fruits rouge orangé à pépins, rarement sauvage hors des haies plantées ; crus en quantité ils peuvent irriter l'intestin."]
      }
    ],
    precautions: [
      "Plante protégée ou rare dans certaines régions : se renseigner et cueillir avec modération, en laissant des fruits aux oiseaux.",
      "Jus très acide : le diluer, surtout en cas d'estomac sensible.",
      "Couper les rameaux abîme l'arbuste : préférer égrener les baies sur place ou ne prélever que quelques rameaux."
    ],
    sources: [
      { titre: "Wikipédia : Argousier", url: "https://fr.wikipedia.org/wiki/Hippophae_rhamnoides" }
    ]
  },
  {
    id: "genevrier-commun",
    nom: "Genévrier commun",
    latin: "Juniperus communis",
    famille: "Cupressacées",
    autresNoms: ["Genièvre", "Pétron", "Genévrier des montagnes"],
    statut: "comestible-medicinale",
    resume: "Conifère buissonnant aux aiguilles piquantes groupées par trois, dont les baies bleu-noir parfument choucroute, gibier et gin. Toujours le distinguer de la sabine et de l'if, très toxiques.",
    habitat: "Landes, pelouses sèches, pâturages, bois clairs, pentes rocheuses de montagne.",
    habitats: ["montagne", "prairie", "foret"],
    regions: "Presque toute la France, surtout en montagne, sur les causses et dans les landes.",
    recolte: [9, 10, 11, 12],
    floraison: [3, 4, 5],
    couleurFleur: ["aucune"],
    typeFeuille: "Aiguilles fines, raides et très piquantes, verticillées par 3, avec une bande blanche sur la face supérieure.",
    reconnaissance: [
      "Aiguilles groupées par 3 autour du rameau, longues de 1 à 2 cm, rigides et piquantes au toucher.",
      "Une seule bande blanchâtre parcourt le dessus de chaque aiguille.",
      "Baies (galbules) rondes de 6 à 9 mm, vertes la première année, bleu-noir pruineux à maturité la deuxième ou troisième année.",
      "Odeur résineuse agréable des baies écrasées, saveur sucrée puis amère.",
      "Port en buisson ou en colonne, de 1 à 6 m ; souvent couché en altitude."
    ],
    partiesUtilisees: ["baies mûres"],
    bienfaits: [
      "Baies traditionnellement utilisées pour faciliter la digestion et stimuler l'appétit.",
      "Réputées diurétiques et employées en tradition dans les douleurs rhumatismales.",
      "Cazin (1868) les décrit comme stimulantes, stomachiques et diurétiques et cite des usages anciens bien plus larges, aujourd'hui abandonnés."
    ],
    usages: ["aromate de la choucroute, des marinades et du gibier", "infusion de baies écrasées", "vin ou liqueur aromatisés", "gin et eau-de-vie de genièvre"],
    recettes: [
      {
        titre: "Infusion digestive de baies de genévrier",
        type: "infusion",
        ingredients: ["5 à 6 baies mûres séchées, légèrement écrasées", "250 ml d'eau frémissante"],
        etapes: ["Écraser les baies juste avant usage.", "Infuser 10 minutes à couvert.", "Filtrer ; une tasse après le repas, pas plus de 2 par jour et pas plus de 4 à 6 semaines."]
      },
      {
        titre: "Marinade au genièvre pour gibier",
        type: "cuisine",
        ingredients: ["10 baies de genièvre écrasées", "75 cl de vin rouge", "1 oignon, 1 carotte, thym, laurier", "2 cuillères à soupe d'huile"],
        etapes: ["Mélanger tous les ingrédients.", "Y faire mariner la viande 12 à 24 heures au frais.", "Cuire la viande et utiliser la marinade réduite pour la sauce."]
      }
    ],
    confusions: [
      {
        nom: "Genévrier sabine",
        latin: "Juniperus sabina",
        danger: "mortel",
        differences: ["Feuilles adultes en petites écailles serrées contre le rameau, comme un thuya, et non en aiguilles piquantes.", "Rameaux froissés à odeur forte et désagréable.", "Baies bleu-noir pruineuses portées sur des rameaux recourbés vers le bas.", "Arbuste étalé des montagnes sèches (Alpes, Pyrénées) ; toute la plante est hautement toxique et abortive."]
      },
      {
        nom: "If",
        latin: "Taxus baccata",
        danger: "mortel",
        differences: ["Aiguilles plates et souples, non piquantes, disposées en deux rangées le long du rameau.", "Fruit rouge charnu ouvert en coupe laissant voir une graine noire.", "Toutes les parties sauf la chair rouge sont mortelles, même en petite quantité."]
      },
      {
        nom: "Genévrier cade",
        latin: "Juniperus oxycedrus",
        danger: "toxique",
        differences: ["Aiguilles par 3 mais portant deux bandes blanches sur le dessus.", "Baies plus grosses (8 à 15 mm), brun rougeâtre à maturité.", "Région méditerranéenne ; ses baies ne s'utilisent pas comme le genièvre."]
      }
    ],
    precautions: [
      "Contre-indiqué pendant la grossesse et en cas de maladie des reins : les baies irritent le rein à forte dose ou en usage prolongé.",
      "Ne jamais utiliser l'huile essentielle par voie interne sans avis professionnel.",
      "Vérifier les aiguilles piquantes par 3 avec une seule bande blanche avant toute cueillette.",
      "Ne cueillir que les baies bleu-noir mûres ; les vertes sont âcres."
    ],
    sources: [
      { titre: "Wikipédia : Genévrier commun", url: "https://fr.wikipedia.org/wiki/Juniperus_communis" },
      { titre: "Wikipédia : Genévrier sabine", url: "https://fr.wikipedia.org/wiki/Juniperus_sabina" },
      { titre: "Wikipédia : If commun", url: "https://fr.wikipedia.org/wiki/Taxus_baccata" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes, 1868 (articles Genévrier et Sabine)", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "pin-sylvestre",
    nom: "Pin sylvestre",
    latin: "Pinus sylvestris",
    famille: "Pinacées",
    autresNoms: ["Pin sauvage", "Pin de Genève", "Pin rouge"],
    statut: "comestible-medicinale",
    resume: "Pin à l'écorce orangée dans le haut du tronc et aux aiguilles groupées par deux. Ses bourgeons et jeunes pousses printanières, résineux et acidulés, se préparent en sirop pour la gorge.",
    habitat: "Forêts claires sur sols pauvres, sableux ou rocheux, de la plaine à la montagne.",
    habitats: ["foret", "montagne"],
    regions: "Massif central, Vosges, Alpes, Pyrénées, Sologne, Landes de Gascogne en mélange, et nombreuses plantations.",
    recolte: [3, 4, 5],
    floraison: [5, 6],
    couleurFleur: ["jaune"],
    typeFeuille: "Aiguilles par 2 dans une petite gaine, longues de 3 à 7 cm, raides, souvent un peu tordues, vert bleuté.",
    reconnaissance: [
      "Aiguilles toujours groupées par deux à la base, dans une courte gaine brunâtre.",
      "Écorce du haut du tronc et des branches orange saumon, se détachant en fines plaques.",
      "Cônes petits (3 à 7 cm), coniques, pendants, gris brun, à écailles portant un petit écusson.",
      "Bourgeons cylindriques résineux au bout des rameaux, qui s'allongent au printemps en pousses vert tendre.",
      "Arbre de 20 à 35 m au tronc élancé et à la cime souvent aplatie avec l'âge."
    ],
    partiesUtilisees: ["bourgeons", "jeunes pousses", "aiguilles"],
    bienfaits: [
      "Bourgeons traditionnellement utilisés en sirop ou infusion pour apaiser la toux et dégager les voies respiratoires.",
      "Aiguilles riches en vitamine C, autrefois utilisées contre le scorbut dans le Nord ; Cazin (1868) rapporte aussi l'usage de l'écorce interne en farine par les Lapons."
    ],
    usages: ["sirop de bourgeons", "infusion de jeunes pousses", "jeunes pousses tendres ciselées pour aromatiser desserts et sauces", "sel ou sucre aromatisé aux aiguilles"],
    recettes: [
      {
        titre: "Sirop de bourgeons de pin",
        type: "sirop",
        ingredients: ["100 g de bourgeons ou jeunes pousses tendres", "1 litre d'eau", "800 g de sucre ou de miel"],
        etapes: ["Ne prélever qu'un bourgeon latéral par branche, jamais le bourgeon terminal de la flèche.", "Faire bouillir les bourgeons 15 minutes dans l'eau puis laisser infuser une nuit.", "Filtrer, ajouter le sucre et chauffer doucement jusqu'à consistance sirupeuse.", "Mettre en bouteille ; 2 à 3 cuillères à café par jour en cas de toux."]
      },
      {
        titre: "Infusion de jeunes pousses de pin",
        type: "infusion",
        ingredients: ["1 cuillère à soupe de jeunes pousses hachées", "250 ml d'eau frémissante"],
        etapes: ["Infuser 10 minutes à couvert.", "Filtrer et sucrer au miel ; 2 à 3 tasses par jour."]
      }
    ],
    confusions: [
      {
        nom: "If",
        latin: "Taxus baccata",
        danger: "mortel",
        differences: ["Aiguilles isolées, plates et souples, en deux rangées le long du rameau, jamais par deux dans une gaine.", "Pas de cônes mais des fruits rouges en coupe.", "Toutes les parties sauf la chair rouge sont mortelles."]
      },
      {
        nom: "Pin noir",
        latin: "Pinus nigra",
        danger: "sans-danger",
        differences: ["Aiguilles aussi par deux mais plus longues (8 à 15 cm), vert sombre.", "Écorce gris foncé, jamais orangée.", "Bourgeons utilisables de la même façon."]
      }
    ],
    precautions: [
      "Prélever avec parcimonie et seulement sur des arbres où la cueillette est autorisée ; ne jamais couper la pousse terminale.",
      "Déconseillé pendant la grossesse et chez les personnes asthmatiques sensibles aux résines.",
      "Ne pas utiliser l'huile essentielle de pin chez l'enfant ni en interne sans avis professionnel.",
      "Une toux qui dure plus d'une semaine ou s'accompagne de fièvre nécessite un avis médical."
    ],
    sources: [
      { titre: "Wikipédia : Pin sylvestre", url: "https://fr.wikipedia.org/wiki/Pinus_sylvestris" },
      { titre: "Wikipédia : If commun", url: "https://fr.wikipedia.org/wiki/Taxus_baccata" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes, 1868 (article Pins et sapins)", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "sapin-pectine",
    nom: "Sapin pectiné",
    latin: "Abies alba",
    famille: "Pinacées",
    autresNoms: ["Sapin blanc", "Sapin des Vosges", "Sapin argenté"],
    statut: "comestible-medicinale",
    resume: "Grand conifère des montagnes aux aiguilles plates marquées de deux bandes blanches dessous. Ses jeunes pousses printanières, acidulées et parfumées, se cuisinent et se mettent en sirop. Le sosie dangereux est l'if.",
    habitat: "Forêts fraîches et humides de moyenne montagne, souvent mêlé au hêtre et à l'épicéa.",
    habitats: ["foret", "montagne"],
    regions: "Vosges, Jura, Alpes, Pyrénées, Massif central, Corse ; planté ailleurs.",
    recolte: [4, 5, 6],
    floraison: [5, 6],
    couleurFleur: ["vert"],
    typeFeuille: "Aiguilles plates, souples, à pointe arrondie ou échancrée, en deux rangées, avec deux bandes blanches au revers.",
    reconnaissance: [
      "Aiguilles plates de 2 à 3 cm, disposées en peigne sur deux rangs de chaque côté du rameau.",
      "Revers de chaque aiguille marqué de deux lignes blanches bien nettes.",
      "Pointe de l'aiguille arrondie ou un peu échancrée ; le rameau ne pique pas.",
      "Une aiguille arrachée laisse sur le rameau une petite cicatrice ronde et plate, comme une ventouse.",
      "Cônes dressés sur les branches hautes, qui se désagrègent sur l'arbre : on ne trouve jamais de cône entier au sol.",
      "Écorce gris clair argenté, assez lisse."
    ],
    partiesUtilisees: ["jeunes pousses", "aiguilles", "bourgeons"],
    bienfaits: [
      "Jeunes pousses et bourgeons traditionnellement utilisés en sirop ou inhalation pour les voies respiratoires.",
      "Aiguilles riches en vitamine C, utilisées en infusion dans la tradition montagnarde."
    ],
    usages: ["jeunes pousses crues ciselées dans les salades et desserts", "sirop ou miel de pousses de sapin", "infusion d'aiguilles", "sauce acidulée aux pousses pour poisson"],
    recettes: [
      {
        titre: "Miel de pousses de sapin",
        type: "sirop",
        ingredients: ["200 g de jeunes pousses vert tendre", "1 litre d'eau", "1 kg de sucre", "Le jus d'un citron"],
        etapes: ["Vérifier chaque rameau : deux bandes blanches sous les aiguilles et cicatrice en ventouse.", "Faire bouillir les pousses 30 minutes dans l'eau, puis laisser reposer une nuit.", "Filtrer, ajouter le sucre et le citron, cuire à feu doux 1 heure environ jusqu'à consistance de miel.", "Mettre en pots ; une cuillère dans une boisson chaude ou sur une tartine."]
      },
      {
        titre: "Infusion d'aiguilles de sapin",
        type: "infusion",
        ingredients: ["1 cuillère à soupe d'aiguilles fraîches hachées", "250 ml d'eau frémissante"],
        etapes: ["Infuser 10 minutes à couvert, sans faire bouillir.", "Filtrer et sucrer au miel."]
      }
    ],
    confusions: [
      {
        nom: "If",
        latin: "Taxus baccata",
        danger: "mortel",
        differences: ["Revers des aiguilles vert pâle jaunâtre, sans les deux bandes blanches nettes.", "Pointe des aiguilles fine et aiguë ; la base de l'aiguille se prolonge sur le rameau au lieu de laisser une cicatrice en ventouse.", "Jamais de cônes, mais des fruits rouges charnus en coupe à l'automne.", "Souvent planté dans les parcs, jardins, cimetières et haies taillées ; peut aussi pousser en forêt.", "Mortel à petite dose pour l'homme et les animaux."]
      },
      {
        nom: "Épicéa commun",
        latin: "Picea abies",
        danger: "sans-danger",
        differences: ["Aiguilles piquantes à section carrée, disposées tout autour du rameau.", "Cônes pendants qui tombent entiers au sol.", "Pousses utilisables de la même façon."]
      }
    ],
    precautions: [
      "Vérifier chaque rameau : la confusion avec l'if est la plus grave des conifères.",
      "Ne pas utiliser les sapins de Noël du commerce, souvent traités et qui sont en général des épicéas ou des sapins exotiques.",
      "Cueillir quelques pousses par arbre seulement, jamais la flèche terminale, et pas en forêt protégée.",
      "Déconseillé pendant la grossesse et chez l'enfant en usage concentré (huiles essentielles)."
    ],
    sources: [
      { titre: "Wikipédia : Sapin blanc", url: "https://fr.wikipedia.org/wiki/Abies_alba" },
      { titre: "Wikipédia : If commun", url: "https://fr.wikipedia.org/wiki/Taxus_baccata" },
      { titre: "Plantes Sauvages Comestibles : sauce aux pousses d'épicéa ou de sapin", url: "https://plantes-sauvages-comestibles.com/sauce-aux-pousses-depicea-ou-sapin/" },
      { titre: "Plantes Sauvages Comestibles : peut-on manger les aiguilles de sapin ?", url: "https://plantes-sauvages-comestibles.com/peut-on-manger-les-aiguilles-de-sapin/" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes, 1868 (article Pins et sapins)", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "epicea-commun",
    nom: "Épicéa commun",
    latin: "Picea abies",
    famille: "Pinacées",
    autresNoms: ["Sapin rouge", "Faux sapin", "Pesse"],
    statut: "comestible-medicinale",
    resume: "Le « sapin de Noël » le plus courant, aux aiguilles piquantes tout autour du rameau et aux cônes pendants. Ses jeunes pousses vert clair, tendres et acidulées, se mangent crues ou en sirop.",
    habitat: "Forêts de montagne, plantations forestières de plaine.",
    habitats: ["foret", "montagne"],
    regions: "Spontané dans les Alpes, le Jura et les Vosges ; très planté dans le Massif central, le Morvan et ailleurs.",
    recolte: [4, 5, 6],
    floraison: [5, 6],
    couleurFleur: ["rouge", "jaune"],
    typeFeuille: "Aiguilles raides de 1 à 2,5 cm, à section carrée, pointues, insérées tout autour du rameau sur de petits coussinets.",
    reconnaissance: [
      "Aiguilles piquantes, à quatre faces, qui roulent entre les doigts.",
      "Aiguilles disposées tout autour du rameau, chacune posée sur un petit socle brun qui reste quand elle tombe (rameau râpeux).",
      "Cônes allongés de 10 à 15 cm, pendants, qui tombent entiers au sol.",
      "Jeunes pousses vert très clair au bout des rameaux au printemps, d'abord protégées par une coiffe brune.",
      "Écorce brun rougeâtre écailleuse, silhouette en cône pointu aux branches retombantes."
    ],
    partiesUtilisees: ["jeunes pousses", "bourgeons", "résine"],
    bienfaits: [
      "Jeunes pousses traditionnellement utilisées en sirop pour la toux et les maux de gorge.",
      "Pousses riches en vitamine C ; la résine a servi en tradition en onguent sur les petites plaies."
    ],
    usages: ["jeunes pousses crues dans les salades et desserts", "sirop de pousses", "sel ou sucre aromatisé", "sauce au vin blanc pour poisson"],
    recettes: [
      {
        titre: "Sirop de pousses d'épicéa",
        type: "sirop",
        ingredients: ["200 g de jeunes pousses tendres", "Environ 400 g de sucre"],
        etapes: ["Alterner dans un bocal des couches de pousses et de sucre en finissant par du sucre.", "Fermer et laisser au soleil ou au chaud 3 à 4 semaines : le sucre se transforme en sirop.", "Filtrer en pressant et mettre en bouteille.", "Une cuillère à café pure ou dans une boisson chaude, 3 fois par jour en cas de toux."]
      }
    ],
    confusions: [
      {
        nom: "If",
        latin: "Taxus baccata",
        danger: "mortel",
        differences: ["Aiguilles plates et souples, qui ne piquent pas, rangées en deux rangs de part et d'autre du rameau.", "Pas de cônes mais des fruits rouges charnus en coupe.", "Rameau lisse, sans petits socles bruns.", "Mortel à petite dose."]
      },
      {
        nom: "Sapin pectiné",
        latin: "Abies alba",
        danger: "sans-danger",
        differences: ["Aiguilles plates à deux bandes blanches dessous, non piquantes.", "Cônes dressés qui se désagrègent sur l'arbre.", "Pousses utilisables de la même façon."]
      }
    ],
    precautions: [
      "Bien vérifier les aiguilles piquantes à section carrée pour écarter l'if.",
      "Éviter les plantations traitées et les sapins de Noël du commerce.",
      "Ne prélever que quelques pousses latérales par arbre.",
      "Déconseillé chez les personnes asthmatiques sensibles aux résines et pendant la grossesse en usage concentré."
    ],
    sources: [
      { titre: "Wikipédia : Épicéa commun", url: "https://fr.wikipedia.org/wiki/Picea_abies" },
      { titre: "Plantes Sauvages Comestibles : sauce aux pousses d'épicéa ou de sapin", url: "https://plantes-sauvages-comestibles.com/sauce-aux-pousses-depicea-ou-sapin/" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes, 1868 (article Pins et sapins)", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "saule-blanc",
    nom: "Saule blanc",
    latin: "Salix alba",
    famille: "Salicacées",
    autresNoms: ["Saule argenté", "Osier blanc", "Saule commun"],
    statut: "medicinale",
    resume: "Grand saule argenté des rivières dont l'écorce contient de la salicine, la substance dont est dérivée l'aspirine. Plante médicinale traditionnelle contre les douleurs et la fièvre, avec les mêmes précautions que l'aspirine.",
    habitat: "Berges de rivières, prairies inondables, fossés, bords d'étangs.",
    habitats: ["bord-eau", "prairie"],
    regions: "Toute la France de plaine, le long des cours d'eau.",
    recolte: [2, 3, 4],
    floraison: [4, 5],
    couleurFleur: ["jaune", "vert"],
    typeFeuille: "Feuilles alternes étroites et lancéolées, finement dentées, couvertes de poils soyeux argentés surtout dessous.",
    reconnaissance: [
      "Feuilles longues et étroites (5 à 10 cm), finement dentées, au revers blanc argenté soyeux.",
      "Feuillage qui paraît argenté de loin quand le vent le retourne.",
      "Chatons dressés apparaissant avec les feuilles, sur des pieds mâles ou femelles séparés.",
      "Rameaux souples, jaunâtres à brun olive, qui ne cassent pas net à la base.",
      "Grand arbre de 15 à 25 m, souvent taillé en têtard au bord de l'eau."
    ],
    partiesUtilisees: ["écorce de jeunes rameaux"],
    bienfaits: [
      "Écorce traditionnellement utilisée en décoction contre les douleurs articulaires, les maux de tête et la fièvre.",
      "Cazin (1868) la présente comme l'écorce européenne la plus proche du quinquina contre les fièvres ; la phytothérapie actuelle retient surtout son effet sur les douleurs."
    ],
    usages: ["décoction d'écorce", "rameaux souples en vannerie"],
    recettes: [
      {
        titre: "Décoction d'écorce de saule",
        type: "infusion",
        ingredients: ["1 cuillère à café d'écorce séchée de rameaux de 2 à 3 ans (environ 2 à 3 g)", "250 ml d'eau froide"],
        etapes: ["Mettre l'écorce dans l'eau froide et porter à ébullition.", "Laisser frémir 5 minutes puis infuser 10 minutes hors du feu.", "Filtrer ; 2 à 3 tasses par jour au plus, sur quelques jours seulement."]
      }
    ],
    confusions: [
      {
        nom: "Saule fragile",
        latin: "Salix fragilis",
        danger: "sans-danger",
        differences: ["Feuilles plus grandes, glabres et vertes dessous, sans reflets argentés.", "Rameaux qui cassent net à leur base avec un petit claquement.", "Écorce aux propriétés voisines."]
      }
    ],
    precautions: [
      "Mêmes contre-indications que l'aspirine : allergie à l'aspirine, asthme sensible à l'aspirine, ulcère d'estomac, troubles de la coagulation.",
      "Ne pas associer à l'aspirine, aux anti-inflammatoires ni aux anticoagulants sans avis médical.",
      "Déconseillé pendant la grossesse, l'allaitement et chez l'enfant et l'adolescent.",
      "Une fièvre ou une douleur qui persiste doit être vue par un médecin."
    ],
    sources: [
      { titre: "Wikipédia : Saule blanc", url: "https://fr.wikipedia.org/wiki/Salix_alba" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes, 1868 (article Saule blanc)", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "houblon",
    nom: "Houblon",
    latin: "Humulus lupulus",
    famille: "Cannabacées",
    autresNoms: ["Houblon grimpant", "Vigne du Nord", "Asperge sauvage du Nord"],
    statut: "comestible-medicinale",
    resume: "Liane vivace des haies humides dont les jeunes pousses printanières se mangent comme des asperges et dont les cônes femelles, amers et calmants, parfument la bière. À distinguer absolument de la bryone, très toxique.",
    habitat: "Haies humides, ripisylves, lisières fraîches, bords de fossés.",
    habitats: ["haie", "bord-eau", "foret"],
    regions: "Toute la France de plaine et de basse montagne.",
    recolte: [3, 4, 5, 8, 9],
    floraison: [7, 8],
    couleurFleur: ["vert", "jaune"],
    typeFeuille: "Feuilles opposées, en forme de feuille de vigne à 3 à 5 lobes dentés, rudes au toucher.",
    reconnaissance: [
      "Tige qui s'enroule dans le sens des aiguilles d'une montre autour de son support, sans aucune vrille.",
      "Tige anguleuse, rêche, garnie de petits crochets qui accrochent la peau.",
      "Feuilles opposées deux à deux, en feuille de vigne, rudes.",
      "En fin d'été, pieds femelles portant des cônes vert pâle formés d'écailles, à odeur aromatique et poudre jaune collante (lupuline).",
      "Jeunes pousses au printemps : tiges fines et souples, violacées ou vert sombre, qui se dressent à la recherche d'un support."
    ],
    partiesUtilisees: ["jeunes pousses", "cônes femelles"],
    bienfaits: [
      "Cônes traditionnellement utilisés en infusion pour favoriser l'endormissement et apaiser la nervosité.",
      "Réputés amers et apéritifs, stimulant la digestion.",
      "Cazin (1868) le décrit comme tonique, diurétique et sédatif, et cite bien d'autres usages anciens non confirmés."
    ],
    usages: ["jeunes pousses (jets) cuites à l'eau ou à la vapeur comme des asperges", "jets en omelette", "cônes en infusion du soir", "cônes pour la bière maison"],
    recettes: [
      {
        titre: "Jets de houblon en omelette",
        type: "cuisine",
        ingredients: ["2 poignées de jeunes pousses de houblon (les 15 premiers centimètres tendres)", "4 œufs", "Beurre, sel, poivre"],
        etapes: ["Vérifier chaque pousse : tige rêche à crochets, sans vrilles.", "Cuire les pousses 3 à 5 minutes à l'eau bouillante salée, égoutter.", "Les faire revenir au beurre, verser les œufs battus et cuire l'omelette."]
      },
      {
        titre: "Infusion du soir aux cônes de houblon",
        type: "infusion",
        ingredients: ["1 cuillère à café de cônes séchés (environ 0,5 à 1 g)", "250 ml d'eau frémissante"],
        etapes: ["Infuser 10 minutes à couvert.", "Filtrer ; une tasse 30 minutes avant le coucher."]
      }
    ],
    confusions: [
      {
        nom: "Bryone dioïque",
        latin: "Bryonia dioica",
        danger: "toxique",
        differences: ["S'accroche par des vrilles en tire-bouchon et non en enroulant sa tige.", "Feuilles alternes (une par nœud) et non opposées, velues et un peu molles.", "Fleurs blanc verdâtre veinées de vert, puis baies rouges.", "Grosse racine charnue en forme de navet ; toute la plante est purgative et toxique, les baies pouvant être mortelles pour un enfant."]
      },
      {
        nom: "Tamier commun",
        latin: "Dioscorea communis",
        danger: "toxique",
        differences: ["Tige lisse et sans crochets, qui s'enroule dans l'autre sens.", "Feuilles alternes en cœur, luisantes, entières, à nervures courbes.", "Baies rouges luisantes à l'automne, très toxiques."]
      }
    ],
    precautions: [
      "Vérifier chaque pousse : feuilles opposées, tige rêche, aucune vrille.",
      "Cônes sédatifs : éviter l'association avec somnifères, calmants ou alcool, et pas avant de conduire.",
      "Déconseillé en cas de dépression, pendant la grossesse et l'allaitement, et en cas de cancer hormonodépendant (substances à activité œstrogénique).",
      "La manipulation des cônes frais peut irriter la peau chez certaines personnes."
    ],
    sources: [
      { titre: "Wikipédia : Houblon", url: "https://fr.wikipedia.org/wiki/Humulus_lupulus" },
      { titre: "Wikipédia : Bryone dioïque", url: "https://fr.wikipedia.org/wiki/Bryonia_dioica" },
      { titre: "Plantes Sauvages Comestibles : 3 plantes sauvages comestibles du mois d'avril", url: "https://plantes-sauvages-comestibles.com/3-plantes-sauvages-comestibles-du-mois-davril/" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes, 1868 (article Houblon)", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "airelle-rouge",
    nom: "Airelle rouge",
    latin: "Vaccinium vitis-idaea",
    famille: "Éricacées",
    autresNoms: ["Airelle vigne-du-mont-Ida", "Airelle ponctuée", "Lingonberry"],
    statut: "comestible-medicinale",
    resume: "Petit arbrisseau persistant des montagnes et des tourbières aux baies rouges acidulées et légèrement amères, délicieuses en compote avec le gibier. Ressemble à la busserole, et ses fruits rouges ne doivent pas être confondus avec ceux du muguet.",
    habitat: "Landes et sous-bois clairs acides de montagne, pessières, tourbières.",
    habitats: ["montagne", "foret"],
    regions: "Vosges, Jura, Alpes, Pyrénées, Massif central (au-dessus de 1000 m environ), Ardennes.",
    recolte: [8, 9, 10],
    floraison: [5, 6, 7],
    couleurFleur: ["blanc", "rose"],
    typeFeuille: "Petites feuilles persistantes ovales, épaisses et coriaces, luisantes dessus, à bord enroulé, ponctuées de points bruns dessous.",
    reconnaissance: [
      "Sous-arbrisseau de 10 à 30 cm, toujours vert, qui forme des tapis.",
      "Feuilles coriaces de 1 à 3 cm, bord légèrement roulé vers le dessous, revers pâle semé de petits points glanduleux bruns.",
      "Fleurs blanc rosé en clochettes, groupées en petites grappes penchées au bout des rameaux.",
      "Baies rouge vif de 5 à 10 mm, en grappes, chair blanche et acide avec plusieurs petites graines.",
      "Petite couronne de sépales visible au sommet de chaque baie."
    ],
    partiesUtilisees: ["baies", "feuilles"],
    bienfaits: [
      "Baies riches en vitamine C et en acides organiques, traditionnellement utilisées pour le confort urinaire, comme la canneberge.",
      "Feuilles astringentes employées en tradition pour les voies urinaires, de façon proche de la busserole."
    ],
    usages: ["compote ou confiture pour gibier et viandes", "gelée", "sirop", "baies séchées dans les pâtisseries"],
    recettes: [
      {
        titre: "Compote d'airelles pour gibier",
        type: "cuisine",
        ingredients: ["500 g d'airelles", "150 g de sucre", "10 cl d'eau"],
        etapes: ["Trier les baies une à une.", "Cuire avec le sucre et l'eau 10 minutes à feu moyen, jusqu'à ce qu'elles éclatent.", "Laisser refroidir ; se conserve une semaine au frais ou en pots stérilisés."]
      }
    ],
    confusions: [
      {
        nom: "Busserole raisin-d'ours",
        latin: "Arctostaphylos uva-ursi",
        danger: "sans-danger",
        differences: ["Tiges rampantes plus longues ; feuilles sans points bruns au revers, à bord plat, nervures en réseau bien visibles.", "Baies rouges farineuses et fades.", "Feuilles médicinales à réserver à un usage encadré."]
      },
      {
        nom: "Muguet",
        latin: "Convallaria majalis",
        danger: "mortel",
        differences: ["Plante herbacée sans tige ligneuse, à 2 ou 3 grandes feuilles molles qui sortent du sol.", "Baies rouges isolées sur une hampe nue, à la fin de l'été.", "Pas de petites feuilles persistantes coriaces ; toute la plante est très toxique."]
      }
    ],
    precautions: [
      "Plante parfois protégée ou réglementée localement : se renseigner et cueillir avec modération.",
      "Les feuilles ne s'utilisent pas en cure prolongée (arbutine) ni pendant la grossesse.",
      "Laver les baies dans les zones à échinococcose.",
      "Une infection urinaire avec fièvre ou douleur lombaire nécessite un médecin."
    ],
    sources: [
      { titre: "Wikipédia : Airelle rouge", url: "https://fr.wikipedia.org/wiki/Vaccinium_vitis-idaea" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes, 1868 (article Airelle)", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "arbousier",
    nom: "Arbousier",
    latin: "Arbutus unedo",
    famille: "Éricacées",
    autresNoms: ["Arbre aux fraises", "Arbouse", "Fraisier en arbre"],
    statut: "comestible-medicinale",
    resume: "Arbuste méditerranéen et atlantique toujours vert qui porte en même temps, en automne, ses fleurs en clochettes et ses fruits ronds rouges et granuleux. Les arbouses, farineuses et sucrées, se mangent avec modération.",
    habitat: "Maquis, garrigues sur sol acide, bois clairs de chênes verts, falaises littorales.",
    habitats: ["foret", "littoral", "haie"],
    regions: "Pourtour méditerranéen, Corse, littoral atlantique jusqu'en Bretagne.",
    recolte: [10, 11, 12],
    floraison: [10, 11, 12],
    couleurFleur: ["blanc", "rose"],
    typeFeuille: "Feuilles persistantes alternes, oblongues, coriaces, vert foncé luisant, finement dentées, pétiole rougeâtre.",
    reconnaissance: [
      "Fleurs blanc crème en clochettes pendantes, en grappes, présentes en même temps que les fruits de l'année précédente.",
      "Fruits ronds de 1,5 à 2 cm couverts de petites pointes granuleuses, jaunes puis orange et rouge vif à maturité.",
      "Chair jaune orangé farineuse et sucrée, avec de petites graines.",
      "Feuilles vert foncé luisantes, finement dentées, rappelant celles du laurier.",
      "Écorce brun rouge qui s'écaille en lanières sur les jeunes rameaux rougeâtres."
    ],
    partiesUtilisees: ["fruits", "feuilles"],
    bienfaits: [
      "Fruits riches en vitamine C, réputés légèrement astringents.",
      "Feuilles et écorce traditionnellement employées contre les diarrhées ; Cazin (1868) cite cet usage."
    ],
    usages: ["fruits bien mûrs crus en petite quantité", "confiture et gelée", "liqueur et eau-de-vie (medronho au Portugal)"],
    recettes: [
      {
        titre: "Confiture d'arbouses",
        type: "cuisine",
        ingredients: ["1 kg d'arbouses bien rouges", "15 cl d'eau", "600 g de sucre", "Le jus d'un citron"],
        etapes: ["Cuire les arbouses avec l'eau 15 minutes jusqu'à ce qu'elles soient tendres.", "Passer au moulin à légumes grille fine pour retirer la peau granuleuse.", "Ajouter sucre et citron et cuire 15 minutes en remuant.", "Mettre en pots stérilisés."]
      }
    ],
    confusions: [
      {
        nom: "Houx",
        latin: "Ilex aquifolium",
        danger: "toxique",
        differences: ["Feuilles épaisses très luisantes, souvent bordées de dents épineuses.", "Petites baies rouges lisses de 7 à 10 mm, sans surface granuleuse, groupées à l'aisselle des feuilles.", "Pas de fleurs en clochettes en automne ; baies toxiques (vomissements, diarrhées), dangereuses pour les enfants."]
      }
    ],
    precautions: [
      "Ne manger que des fruits bien mûrs et en petite quantité : crus en excès, ils peuvent causer des maux de ventre.",
      "Les fruits trop mûrs fermentent sur l'arbre et peuvent contenir un peu d'alcool.",
      "Arbuste protégé dans certaines zones : cueillir sans casser les branches."
    ],
    sources: [
      { titre: "Wikipédia : Arbousier commun", url: "https://fr.wikipedia.org/wiki/Arbutus_unedo" },
      { titre: "Wikipédia : Houx commun", url: "https://fr.wikipedia.org/wiki/Ilex_aquifolium" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes, 1868 (article Busserole, mention de l'arbousier)", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "asperule-odorante",
    nom: "Aspérule odorante",
    latin: "Galium odoratum",
    famille: "Rubiacées",
    autresNoms: ["Reine-des-bois", "Petit muguet", "Thé suisse"],
    statut: "comestible-medicinale",
    resume: "Petite plante des hêtraies aux feuilles en étoiles régulières, qui sent le foin coupé et la vanille en séchant grâce à la coumarine. Elle parfume le vin de mai et les desserts, à petite dose.",
    habitat: "Sous-bois frais et ombragés, surtout hêtraies sur sol riche en humus.",
    habitats: ["foret", "montagne"],
    regions: "Nord, Est, Centre et montagnes ; rare dans l'Ouest et la région méditerranéenne.",
    recolte: [4, 5],
    floraison: [4, 5, 6],
    couleurFleur: ["blanc"],
    typeFeuille: "Feuilles étroites et lancéolées groupées par 6 à 9 en verticilles étoilés réguliers autour de la tige.",
    reconnaissance: [
      "Tige dressée de 10 à 30 cm, à section carrée, lisse.",
      "Feuilles en étoile régulière de 6 à 9 autour de chaque nœud, bordées de très fins cils rudes.",
      "Petites fleurs blanches en entonnoir à 4 lobes, en bouquet lâche au sommet.",
      "Peu odorante fraîche, elle sent fortement le foin et la vanille quand elle fane ou sèche.",
      "Pousse en tapis sous les hêtres."
    ],
    partiesUtilisees: ["parties aériennes fanées ou séchées"],
    bienfaits: [
      "Traditionnellement utilisée en infusion légère comme calmante et pour favoriser le sommeil.",
      "Cazin (1868) la décrit comme légèrement excitante, astringente et surtout diurétique."
    ],
    usages: ["vin de mai (Maibowle)", "sirop", "crème et desserts aromatisés", "sachets parfumés pour le linge"],
    recettes: [
      {
        titre: "Vin de mai à l'aspérule",
        type: "boisson",
        ingredients: ["Une petite botte d'aspérule non fleurie (environ 10 tiges), fanée quelques heures", "1 bouteille de vin blanc sec", "2 cuillères à soupe de sucre", "1 orange en rondelles"],
        etapes: ["Laisser faner l'aspérule quelques heures pour développer son parfum.", "La suspendre la tête en bas dans le vin sucré pendant 30 minutes au plus, sans y plonger les tiges coupées.", "Retirer la botte, ajouter l'orange et servir frais, avec modération."]
      },
      {
        titre: "Infusion d'aspérule",
        type: "infusion",
        ingredients: ["1 cuillère à café de plante séchée (environ 1 g)", "250 ml d'eau frémissante"],
        etapes: ["Infuser 5 minutes.", "Filtrer ; une tasse le soir, pas plus de 2 par jour, en usage ponctuel."]
      }
    ],
    confusions: [
      {
        nom: "Muguet",
        latin: "Convallaria majalis",
        danger: "mortel",
        differences: ["Deux ou trois grandes feuilles larges sortant du sol, sans verticilles.", "Clochettes blanches pendantes d'un seul côté de la hampe.", "Pousse dans les mêmes hêtraies : trier soigneusement la récolte."]
      },
      {
        nom: "Parisette à quatre feuilles",
        latin: "Paris quadrifolia",
        danger: "toxique",
        differences: ["Une seule tige portant 4 grandes feuilles ovales en croix.", "Une fleur verte unique puis une baie noire bleutée.", "Toute la plante est toxique."]
      },
      {
        nom: "Gaillet gratteron",
        latin: "Galium aparine",
        danger: "sans-danger",
        differences: ["Tiges longues et couchées qui s'accrochent aux vêtements grâce à de petits crochets.", "Feuilles étroites et rudes, sans parfum de foin en séchant."]
      }
    ],
    precautions: [
      "Coumarine : à forte dose ou en usage prolongé, maux de tête, vertiges et atteinte du foie possibles. Rester sur de petites quantités.",
      "Ne pas associer à un traitement anticoagulant, ni en cas de maladie du foie.",
      "Déconseillée pendant la grossesse et chez l'enfant.",
      "Trier la récolte brin par brin : muguet et parisette poussent au même endroit."
    ],
    sources: [
      { titre: "Wikipédia : Aspérule odorante", url: "https://fr.wikipedia.org/wiki/Galium_odoratum" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes, 1868 (article Aspérule odorante)", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "oxalis-petite-oseille",
    nom: "Oxalis petite-oseille",
    latin: "Oxalis acetosella",
    famille: "Oxalidacées",
    autresNoms: ["Pain de coucou", "Surelle", "Oseille des bois", "Alléluia"],
    statut: "comestible-medicinale",
    resume: "Petite plante des sous-bois humides aux feuilles en trèfle et au goût vif d'oseille citronnée. À grignoter ou parsemer en petite quantité, car elle contient de l'acide oxalique.",
    habitat: "Sous-bois frais et ombragés, souches moussues, forêts de conifères et de hêtres.",
    habitats: ["foret", "montagne"],
    regions: "Une grande partie de la France, surtout en montagne et dans les forêts fraîches du Nord et de l'Est ; rare en région méditerranéenne.",
    recolte: [3, 4, 5, 6, 7, 8, 9, 10],
    floraison: [4, 5],
    couleurFleur: ["blanc", "rose"],
    typeFeuille: "Feuilles en trèfle à 3 folioles en cœur renversé, vert tendre, qui se replient le soir ou au soleil fort.",
    reconnaissance: [
      "Feuilles à 3 folioles en forme de cœur, la pointe du cœur reliée au pétiole.",
      "Folioles qui se replient vers le bas comme un parapluie fermé la nuit ou par temps sec.",
      "Fleurs blanches solitaires à 5 pétales veinés de violet, sur une fine tige.",
      "Goût franchement acide et citronné.",
      "Petite plante de 5 à 15 cm, en tapis dans la mousse, sans tige feuillée."
    ],
    partiesUtilisees: ["feuilles", "fleurs"],
    bienfaits: [
      "Feuilles rafraîchissantes, riches en vitamine C, autrefois utilisées contre le scorbut et pour étancher la soif.",
      "Cazin (1868) la décrit comme rafraîchissante et diurétique ; on en tirait autrefois le sel d'oseille, un usage abandonné."
    ],
    usages: ["feuilles crues dans les salades", "décoration acidulée de plats et desserts", "sauce verte pour poisson", "grignotage en promenade"],
    recettes: [
      {
        titre: "Sauce acidulée à l'oxalis",
        type: "cuisine",
        ingredients: ["Une poignée de feuilles d'oxalis", "100 g de crème fraîche ou de fromage blanc", "Sel, poivre"],
        etapes: ["Ciseler finement les feuilles.", "Les mélanger à la crème juste avant de servir.", "Servir avec un poisson ou des pommes de terre, en petite quantité."]
      }
    ],
    confusions: [
      {
        nom: "Anémone des bois",
        latin: "Anemone nemorosa",
        danger: "toxique",
        differences: ["Feuilles profondément découpées en 3 segments eux-mêmes dentés, jamais en cœur.", "Fleur blanche à 6 tépales ou plus, portée au-dessus d'une collerette de 3 feuilles sur la tige.", "Saveur âcre et brûlante ; plante irritante et toxique."]
      },
      {
        nom: "Trèfles",
        latin: "Trifolium repens",
        danger: "sans-danger",
        differences: ["Folioles ovales et non en cœur, souvent marquées d'un chevron blanc.", "Fleurs en boules, pas de goût acide.", "Comestibles."]
      }
    ],
    precautions: [
      "Riche en acide oxalique : à consommer en petite quantité, pas en plat principal.",
      "Déconseillée en cas de calculs rénaux, de goutte, de rhumatismes ou d'insuffisance rénale.",
      "Laver les feuilles cueillies au ras du sol dans les zones à échinococcose."
    ],
    sources: [
      { titre: "Wikipédia : Oxalis des bois", url: "https://fr.wikipedia.org/wiki/Oxalis_acetosella" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes, 1868 (article Alléluia)", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "pulmonaire-officinale",
    nom: "Pulmonaire officinale",
    latin: "Pulmonaria officinalis",
    famille: "Boraginacées",
    autresNoms: ["Herbe aux poumons", "Grande pulmonaire", "Herbe au lait de Notre-Dame"],
    statut: "comestible-medicinale",
    resume: "Plante printanière des sous-bois aux feuilles tachées de blanc et aux fleurs qui passent du rose au bleu. Ses feuilles tachetées, comparées jadis à des poumons, en ont fait un remède traditionnel de la toux.",
    habitat: "Bois frais, lisières, haies, sur sol riche et souvent calcaire.",
    habitats: ["foret", "haie"],
    regions: "Nord, Est, Centre et montagnes ; rare dans l'Ouest et le Midi méditerranéen.",
    recolte: [3, 4, 5],
    floraison: [3, 4, 5],
    couleurFleur: ["rose", "violet", "bleu"],
    typeFeuille: "Feuilles de la base en cœur allongé, longuement pétiolées, rudes et velues, tachées de blanc.",
    reconnaissance: [
      "Feuilles rudes au toucher, couvertes de poils, souvent marbrées de taches blanc verdâtre.",
      "Fleurs en clochettes à 5 lobes, roses à l'ouverture puis virant au bleu violet sur la même tige.",
      "Tiges florales de 15 à 30 cm portant quelques feuilles plus petites et sans pétiole.",
      "Grandes feuilles de la base développées surtout après la floraison.",
      "Floraison précoce, dès mars."
    ],
    partiesUtilisees: ["feuilles", "fleurs"],
    bienfaits: [
      "Feuilles riches en mucilages, traditionnellement employées en infusion pour adoucir la gorge et apaiser la toux.",
      "Cazin (1868) la décrit comme émolliente, adoucissante et pectorale."
    ],
    usages: ["fleurs crues en décoration de salade", "jeunes feuilles cuites en petite quantité dans les soupes", "infusion de feuilles séchées en usage ponctuel"],
    recettes: [
      {
        titre: "Infusion de pulmonaire",
        type: "infusion",
        ingredients: ["1 cuillère à café de feuilles séchées (environ 1,5 g)", "250 ml d'eau frémissante"],
        etapes: ["Infuser 10 minutes à couvert.", "Filtrer ; 2 tasses par jour au plus, quelques jours seulement."]
      }
    ],
    confusions: [
      {
        nom: "Digitale pourpre (rosette jeune)",
        latin: "Digitalis purpurea",
        danger: "mortel",
        differences: ["Feuilles douces et duveteuses, gris-vert, sans taches blanches.", "Bord des feuilles finement crénelé, nervures en réseau saillant dessous.", "Pas de fleurs au printemps la première année ; plus tard, longue grappe de grandes clochettes pourpres d'un seul côté."]
      },
      {
        nom: "Consoude officinale",
        latin: "Symphytum officinale",
        danger: "toxique",
        differences: ["Plante bien plus grande (50 à 100 cm), feuilles sans taches.", "Feuilles qui se prolongent en ailes le long de la tige.", "Fleurs en crosse, blanc crème, roses ou violettes ; riche en alcaloïdes toxiques pour le foie en usage interne."]
      }
    ],
    precautions: [
      "Contient comme d'autres Boraginacées de petites quantités d'alcaloïdes pyrrolizidiniques, toxiques pour le foie : éviter la consommation régulière ou prolongée.",
      "Déconseillée pendant la grossesse, l'allaitement, chez l'enfant et en cas de maladie du foie.",
      "Une toux persistante ou avec fièvre nécessite un avis médical."
    ],
    sources: [
      { titre: "Wikipédia : Pulmonaire officinale", url: "https://fr.wikipedia.org/wiki/Pulmonaria_officinalis" },
      { titre: "Wikipédia : Digitale pourpre", url: "https://fr.wikipedia.org/wiki/Digitalis_purpurea" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes, 1868 (article Pulmonaire)", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "geranium-herbe-a-robert",
    nom: "Géranium herbe-à-Robert",
    latin: "Geranium robertianum",
    famille: "Géraniacées",
    autresNoms: ["Herbe à Robert", "Bec-de-grue", "Herbe à l'esquinancie"],
    statut: "medicinale",
    resume: "Petit géranium sauvage aux tiges rougeâtres, aux feuilles très découpées et à l'odeur forte au froissement. Plante astringente de la tradition, surtout en usage externe et en gargarisme.",
    habitat: "Sous-bois, haies, vieux murs, rocailles ombragées, talus.",
    habitats: ["foret", "haie", "bord-chemin", "jardin"],
    regions: "Partout en France.",
    recolte: [5, 6, 7, 8, 9],
    floraison: [4, 5, 6, 7, 8, 9, 10],
    couleurFleur: ["rose"],
    typeFeuille: "Feuilles découpées en 3 à 5 segments eux-mêmes profondément divisés, souvent rougies.",
    reconnaissance: [
      "Tiges fragiles, velues, souvent rouges, renflées aux nœuds.",
      "Feuilles très découpées en lanières, rappelant une fougère, vertes à rouges.",
      "Odeur forte et désagréable quand on froisse la plante.",
      "Petites fleurs roses à 5 pétales arrondis, marqués de fines lignes blanches, groupées par deux.",
      "Fruit allongé en forme de bec de grue."
    ],
    partiesUtilisees: ["parties aériennes fleuries"],
    bienfaits: [
      "Plante astringente traditionnellement utilisée en gargarisme pour la gorge et la bouche, et en lotion sur petites plaies.",
      "Cazin (1868) la juge un peu astringente et rapporte un effet diurétique de son suc ; il récuse déjà les vertus miraculeuses que lui prêtaient d'anciens auteurs."
    ],
    usages: ["infusion en gargarisme ou bain de bouche", "lotion sur petites irritations", "plante répulsive contre les moustiques en froissant les feuilles (usage populaire)"],
    recettes: [
      {
        titre: "Gargarisme à l'herbe à Robert",
        type: "infusion",
        ingredients: ["1 cuillère à soupe de plante séchée (environ 2 g)", "250 ml d'eau frémissante"],
        etapes: ["Infuser 10 minutes à couvert.", "Filtrer et laisser tiédir.", "Utiliser en gargarisme ou bain de bouche 2 à 3 fois par jour, sans avaler."]
      }
    ],
    confusions: [
      {
        nom: "Géranium luisant",
        latin: "Geranium lucidum",
        danger: "sans-danger",
        differences: ["Feuilles arrondies, luisantes et seulement lobées, non découpées en lanières.", "Pas d'odeur forte au froissement.", "Petites fleurs roses sans lignes blanches."]
      },
      {
        nom: "Fumeterre officinale",
        latin: "Fumaria officinalis",
        danger: "toxique",
        differences: ["Feuilles finement découpées gris bleuté, sans poils ni odeur.", "Fleurs tubulaires roses à pointe pourpre foncé, en grappes allongées.", "Plante des cultures et jardins ; usage médicinal réservé aux cures courtes encadrées."]
      }
    ],
    precautions: [
      "Préférer l'usage externe et en gargarisme ; pas de cure interne prolongée.",
      "Déconseillée pendant la grossesse et l'allaitement par manque de données.",
      "Une angine avec fièvre ou une plaie infectée relève d'un avis médical."
    ],
    sources: [
      { titre: "Wikipédia : Géranium herbe-à-Robert", url: "https://fr.wikipedia.org/wiki/Geranium_robertianum" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes, 1868 (article Géranion)", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "angelique-sauvage",
    nom: "Angélique sauvage",
    latin: "Angelica sylvestris",
    famille: "Apiacées",
    autresNoms: ["Angélique des bois", "Impératoire sauvage"],
    statut: "comestible-medicinale",
    resume: "Grande ombellifère des lieux humides aux tiges creuses souvent violacées et aux larges ombelles blanc rosé. Ses jeunes tiges aromatiques se confisent comme l'angélique cultivée, mais la famille compte les plantes les plus mortelles de France : réservée aux cueilleurs confirmés.",
    habitat: "Prairies humides, mégaphorbiaies, bords de ruisseaux, fossés, bois humides.",
    habitats: ["bord-eau", "prairie", "foret"],
    regions: "Toute la France, de la plaine à la montagne.",
    recolte: [4, 5, 6, 8, 9],
    floraison: [7, 8, 9],
    couleurFleur: ["blanc", "rose"],
    typeFeuille: "Très grandes feuilles 2 à 3 fois divisées en folioles ovales dentées, pétiole creusé en gouttière et base renflée en large gaine.",
    reconnaissance: [
      "Tige creuse, lisse, de 1 à 2 m, souvent teintée de violet et couverte d'une pruine bleutée.",
      "Base des feuilles formant une large gaine ventrue qui enveloppe la tige, très visible sur les feuilles du haut.",
      "Folioles ovales dentées de 3 à 8 cm, assez larges, et non finement découpées.",
      "Grandes ombelles bombées de 20 à 40 rayons, fleurs blanches à rosées, sans grandes bractées.",
      "Odeur aromatique agréable de la tige froissée, proche de l'angélique cultivée, plus faible.",
      "Fruits ovales aplatis à ailes latérales minces."
    ],
    partiesUtilisees: ["jeunes tiges", "pétioles", "graines"],
    bienfaits: [
      "Traditionnellement employée comme l'angélique officinale pour faciliter la digestion et apaiser les ballonnements.",
      "Cazin (1868) cite d'anciens usages contre les maux nerveux et l'emploi des graines en poudre contre les poux : usages abandonnés."
    ],
    usages: ["jeunes tiges confites au sucre", "pétioles cuits en légume", "graines pour aromatiser liqueurs et pâtisseries"],
    recettes: [
      {
        titre: "Tiges d'angélique sauvage confites",
        type: "cuisine",
        ingredients: ["300 g de jeunes tiges tendres, identifiées pied par pied", "300 g de sucre", "30 cl d'eau"],
        etapes: ["Couper les tiges en tronçons de 5 cm et les blanchir 5 minutes à l'eau bouillante, puis retirer les fils.", "Préparer un sirop avec l'eau et le sucre et y faire frémir les tiges 10 minutes.", "Laisser reposer 24 heures dans le sirop, recommencer la cuisson 3 jours de suite.", "Égoutter et sécher les tiges sur une grille avant de les ranger dans une boîte."]
      }
    ],
    confusions: [
      {
        nom: "Grande ciguë",
        latin: "Conium maculatum",
        danger: "mortel",
        differences: ["Tige lisse et creuse tachée de petites marques pourpres, recouverte d'une pruine qui s'efface au doigt.", "Feuilles finement découpées comme du persil plat, à segments étroits et non en larges folioles ovales.", "Forte odeur d'urine de souris au froissement.", "Pas de gaine ventrue à la base des feuilles du haut."]
      },
      {
        nom: "Ciguë vireuse",
        latin: "Cicuta virosa",
        danger: "mortel",
        differences: ["Pousse les pieds dans l'eau des étangs et marais.", "Folioles très étroites et pointues, dentées en scie.", "Souche renflée creusée de chambres transversales, avec un suc jaunâtre.", "Très rare mais parmi les plantes les plus toxiques d'Europe."]
      },
      {
        nom: "Œnanthe safranée",
        latin: "Oenanthe crocata",
        danger: "mortel",
        differences: ["Racines en grappe de tubercules blancs comme des petits navets.", "Suc jaune qui vire à l'orange à l'air quand on coupe la tige.", "Folioles plus petites en coin, luisantes ; surtout dans l'Ouest au bord des ruisseaux."]
      }
    ],
    precautions: [
      "Ne jamais cueillir une ombellifère sans une identification certaine de chaque critère : plusieurs sosies sont mortels à faible dose.",
      "Contient des furanocoumarines : la sève sur la peau exposée au soleil peut provoquer des brûlures. Porter des gants.",
      "Déconseillée pendant la grossesse et en cas de prise de médicaments photosensibilisants.",
      "Dans le doute, renoncer et préférer l'angélique cultivée."
    ],
    sources: [
      { titre: "Wikipédia : Angélique sauvage", url: "https://fr.wikipedia.org/wiki/Angelica_sylvestris" },
      { titre: "Wikipédia : Grande ciguë", url: "https://fr.wikipedia.org/wiki/Conium_maculatum" },
      { titre: "Wikipédia : Ciguë vireuse", url: "https://fr.wikipedia.org/wiki/Cicuta_virosa" },
      { titre: "Wikipédia : Œnanthe safranée", url: "https://fr.wikipedia.org/wiki/Oenanthe_crocata" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes, 1868 (article Angélique)", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "cerfeuil-musque",
    nom: "Cerfeuil musqué",
    latin: "Myrrhis odorata",
    famille: "Apiacées",
    autresNoms: ["Cerfeuil anisé", "Cerfeuil d'Espagne", "Fougère musquée"],
    statut: "comestible",
    resume: "Ombellifère de montagne aux feuilles de fougère tendres et au goût sucré d'anis, dont toute la plante se consomme. Son parfum anisé franc est le meilleur repère, mais il ne dispense pas de vérifier tous les critères face aux ciguës.",
    habitat: "Prairies grasses et mégaphorbiaies de montagne, bords de ruisseaux, abords des chalets.",
    habitats: ["montagne", "prairie", "bord-eau"],
    regions: "Alpes, Pyrénées, Massif central, Jura, Vosges ; parfois échappé de jardin ailleurs.",
    recolte: [4, 5, 6, 7, 8],
    floraison: [5, 6, 7],
    couleurFleur: ["blanc"],
    typeFeuille: "Grandes feuilles très découpées comme une fougère, vert tendre, souvent tachées de blanc à la base, douces et un peu velues.",
    reconnaissance: [
      "Toute la plante froissée dégage une forte odeur d'anis ou de réglisse, et le goût est sucré.",
      "Feuilles très finement découpées, douces et légèrement velues, souvent avec de petites taches blanchâtres.",
      "Tige creuse, velue, cannelée, sans taches pourpres.",
      "Ombelles de fleurs blanches puis fruits très caractéristiques : longs (2 à 2,5 cm), effilés, à côtes saillantes, vert puis brun noir luisant.",
      "Plante robuste de 50 cm à 1,5 m qui forme des touffes."
    ],
    partiesUtilisees: ["feuilles", "jeunes fruits verts", "racine"],
    bienfaits: [
      "Traditionnellement considéré comme digestif et apéritif, comme les autres ombellifères anisées.",
      "Cazin (1868) note son parfum anisé et une activité plus marquée que le cerfeuil cultivé, qu'il peut remplacer en cuisine."
    ],
    usages: ["feuilles crues en salade et sur les crudités", "jeunes fruits verts croqués comme une friandise anisée", "feuilles cuites avec les fruits acides (rhubarbe) pour en adoucir l'acidité", "racine cuite comme légume"],
    recettes: [
      {
        titre: "Compote de rhubarbe au cerfeuil musqué",
        type: "cuisine",
        ingredients: ["500 g de rhubarbe", "Une poignée de feuilles de cerfeuil musqué hachées", "80 g de sucre"],
        etapes: ["Éplucher la rhubarbe et la couper en tronçons.", "Cuire 15 minutes à feu doux avec le sucre et le cerfeuil musqué.", "Le parfum anisé adoucit l'acidité : on peut réduire le sucre."]
      }
    ],
    confusions: [
      {
        nom: "Grande ciguë",
        latin: "Conium maculatum",
        danger: "mortel",
        differences: ["Tige glabre et lisse, tachée de pourpre, couverte d'une pruine bleutée.", "Feuilles glabres sans poils et sans taches blanches.", "Odeur désagréable d'urine de souris, jamais d'anis.", "Fruits petits et ronds, à côtes ondulées."]
      },
      {
        nom: "Petite ciguë",
        latin: "Aethusa cynapium",
        danger: "toxique",
        differences: ["Plante glabre et petite, aux feuilles luisantes dessous.", "Longues bractées pendantes comme une barbiche sous chaque petite ombelle.", "Odeur désagréable, aucun parfum anisé ; pousse dans les jardins et cultures."]
      },
      {
        nom: "Cerfeuil des bois",
        latin: "Anthriscus sylvestris",
        danger: "sans-danger",
        differences: ["Odeur légère de persil et non anisée forte.", "Fruits courts et lisses.", "Comestible mais ressemble lui-même aux ciguës."]
      }
    ],
    precautions: [
      "Ne se fier jamais à la seule odeur : vérifier la tige velue sans taches, les feuilles velues et, si possible, les fruits longs caractéristiques.",
      "En dehors des montagnes et des abords de jardins, une ombellifère blanche a peu de chances d'être un cerfeuil musqué.",
      "Dans le doute, s'abstenir : les ciguës peuvent tuer en petite quantité."
    ],
    sources: [
      { titre: "Wikipédia : Cerfeuil musqué", url: "https://fr.wikipedia.org/wiki/Myrrhis_odorata" },
      { titre: "Wikipédia : Grande ciguë", url: "https://fr.wikipedia.org/wiki/Conium_maculatum" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes, 1868 (article Cerfeuil musqué)", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "tussilage",
    nom: "Tussilage pas-d'âne",
    latin: "Tussilago farfara",
    famille: "Astéracées",
    autresNoms: ["Pas-d'âne", "Herbe de Saint-Quirin", "Taconnet"],
    statut: "medicinale",
    resume: "Une des premières fleurs jaunes de la fin de l'hiver, qui sort sur des tiges écailleuses avant les feuilles. Remède historique de la toux, il contient des alcaloïdes toxiques pour le foie : son usage interne est aujourd'hui déconseillé.",
    habitat: "Talus argileux, bords de chemins, carrières, éboulis, berges, terrains remués.",
    habitats: ["bord-chemin", "friche", "bord-eau", "montagne"],
    regions: "Partout en France, surtout sur sols argileux ou marneux.",
    recolte: [2, 3, 4],
    floraison: [2, 3, 4],
    couleurFleur: ["jaune"],
    typeFeuille: "Feuilles apparues après les fleurs, en forme de cœur arrondi ou de sabot, à bord denté anguleux, blanches et cotonneuses dessous.",
    reconnaissance: [
      "Fleurs jaunes en capitules rappelant un petit pissenlit, sur des tiges couvertes d'écailles rougeâtres, avant toute feuille.",
      "Feuilles plus tardives, larges, en sabot de cheval, avec un feutrage blanc dessous.",
      "Bord des feuilles à petites dents anguleuses noirâtres.",
      "Capitule qui se penche avant de fructifier, puis forme une boule de graines plumeuses.",
      "Plante en colonies grâce à des tiges souterraines rampantes."
    ],
    partiesUtilisees: ["fleurs", "feuilles"],
    bienfaits: [
      "Utilisé depuis l'Antiquité contre la toux, d'où son nom ; Cazin (1868) le cite comme adoucissant et expectorant, et rapporte même qu'on en fumait les feuilles, usage dangereux et abandonné.",
      "En raison de ses alcaloïdes pyrrolizidiniques, l'usage interne n'est plus recommandé ; l'usage externe en cataplasme de feuille reste traditionnel."
    ],
    usages: ["cataplasme de feuilles fraîches sur peau intacte (usage traditionnel)", "plante indicatrice des sols argileux et humides"],
    recettes: [
      {
        titre: "Cataplasme de feuilles de tussilage",
        type: "cataplasme",
        ingredients: ["2 ou 3 feuilles fraîches propres"],
        etapes: ["Rincer les feuilles et les écraser légèrement au rouleau.", "Appliquer la face cotonneuse sur une petite irritation de peau non blessée.", "Laisser 20 minutes ; ne pas appliquer sur une plaie ouverte et ne pas répéter plus de quelques jours."]
      }
    ],
    confusions: [
      {
        nom: "Pétasite hybride",
        latin: "Petasites hybridus",
        danger: "toxique",
        differences: ["Fleurs roses ou blanc rosé en grappe dense comme un épi, et non jaunes.", "Feuilles bien plus grandes (jusqu'à 60 cm), arrondies, en cœur profond.", "Pousse au bord des ruisseaux ; contient aussi des alcaloïdes pyrrolizidiniques."]
      },
      {
        nom: "Pissenlit",
        latin: "Taraxacum officinale",
        danger: "sans-danger",
        differences: ["Tige florale lisse sans écailles, avec du latex blanc.", "Feuilles déjà présentes au moment de la floraison, découpées en dents.", "Comestible."]
      }
    ],
    precautions: [
      "Contient des alcaloïdes pyrrolizidiniques (senkirkine) toxiques pour le foie et potentiellement cancérigènes : pas d'usage interne, ni en tisane ni en salade.",
      "Formellement déconseillé pendant la grossesse, l'allaitement, chez l'enfant et en cas de maladie du foie.",
      "Ne jamais fumer les feuilles, usage ancien abandonné.",
      "Une toux qui persiste ou avec fièvre relève d'un avis médical."
    ],
    sources: [
      { titre: "Wikipédia : Tussilage", url: "https://fr.wikipedia.org/wiki/Tussilago_farfara" },
      { titre: "Wikipédia : Pétasite hybride", url: "https://fr.wikipedia.org/wiki/Petasites_hybridus" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes, 1868 (article Tussilage)", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "valeriane-officinale",
    nom: "Valériane officinale",
    latin: "Valeriana officinalis",
    famille: "Caprifoliacées",
    autresNoms: ["Herbe aux chats", "Guérit-tout", "Herbe de Saint-Georges"],
    statut: "medicinale",
    resume: "Grande plante des lieux humides aux fleurs roses en bouquets, dont la racine à forte odeur attire les chats. C'est une des plantes de référence de la tradition pour le sommeil et la nervosité.",
    habitat: "Prairies humides, bords de ruisseaux, fossés, bois frais, mégaphorbiaies.",
    habitats: ["bord-eau", "prairie", "foret"],
    regions: "Toute la France, plus rare en région méditerranéenne.",
    recolte: [3, 9, 10],
    floraison: [6, 7, 8],
    couleurFleur: ["rose", "blanc"],
    typeFeuille: "Feuilles opposées, divisées en 11 à 21 folioles lancéolées dentées, comme une échelle.",
    reconnaissance: [
      "Grande tige creuse, cannelée, de 1 à 1,5 m, peu ramifiée.",
      "Feuilles opposées, composées de nombreuses folioles étroites et dentées.",
      "Petites fleurs rose pâle à blanches, parfumées, en larges bouquets arrondis au sommet (ce ne sont pas des ombelles : les rameaux partent à des hauteurs différentes).",
      "Racine courte entourée de nombreuses racines fines, à odeur forte et tenace qui rappelle les pieds en séchant.",
      "Fruits surmontés d'une aigrette plumeuse."
    ],
    partiesUtilisees: ["racine"],
    bienfaits: [
      "Racine traditionnellement utilisée pour favoriser l'endormissement et apaiser la nervosité ; son usage est reconnu en phytothérapie pour les troubles légers du sommeil.",
      "Cazin (1868) la décrit comme un antispasmodique majeur et cite des emplois anciens bien plus larges, non confirmés."
    ],
    usages: ["infusion ou macération de racine séchée", "teinture en phytothérapie"],
    recettes: [
      {
        titre: "Macération de racine de valériane",
        type: "macerat",
        ingredients: ["1 cuillère à café de racine séchée hachée (environ 2 à 3 g)", "250 ml d'eau froide"],
        etapes: ["Laisser macérer la racine 8 à 10 heures dans l'eau froide (le soir pour le lendemain).", "Filtrer et réchauffer doucement sans faire bouillir.", "Boire une tasse 30 minutes à une heure avant le coucher, en cure de 2 à 4 semaines au plus."]
      }
    ],
    confusions: [
      {
        nom: "Œnanthe safranée",
        latin: "Oenanthe crocata",
        danger: "mortel",
        differences: ["Fleurs blanches en vraies ombelles, tous les rayons partant du même point.", "Racines en grappe de tubercules blancs comme des petits navets.", "Suc jaune qui vire à l'orange quand on coupe la tige ; pas d'odeur de valériane.", "Pousse dans les mêmes fossés et bords de ruisseaux, surtout dans l'Ouest."]
      },
      {
        nom: "Valériane dioïque",
        latin: "Valeriana dioica",
        danger: "sans-danger",
        differences: ["Plante plus petite (15 à 40 cm).", "Feuilles de la base entières et ovales, celles de la tige découpées.", "Prairies tourbeuses ; propriétés plus faibles."]
      }
    ],
    precautions: [
      "Peut provoquer une somnolence : pas avant de conduire, ni en association avec somnifères, calmants ou alcool.",
      "Déconseillée pendant la grossesse, l'allaitement et chez l'enfant de moins de 12 ans.",
      "Quelques personnes réagissent par une agitation ou des maux de tête : arrêter dans ce cas.",
      "Des troubles du sommeil qui durent méritent un avis médical."
    ],
    sources: [
      { titre: "Wikipédia : Valériane officinale", url: "https://fr.wikipedia.org/wiki/Valeriana_officinalis" },
      { titre: "Wikipédia : Œnanthe safranée", url: "https://fr.wikipedia.org/wiki/Oenanthe_crocata" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes, 1868 (article Valériane)", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "melilot-officinal",
    nom: "Mélilot officinal",
    latin: "Melilotus officinalis",
    famille: "Fabacées",
    autresNoms: ["Mélilot jaune", "Trèfle des mouches", "Herbe aux puces"],
    statut: "medicinale",
    resume: "Grande légumineuse des friches aux longues grappes de petites fleurs jaunes, qui sent le foin et la vanille en séchant. Plante traditionnelle des jambes lourdes, à manier avec prudence car elle contient de la coumarine.",
    habitat: "Friches, talus, bords de chemins, terrains vagues, carrières.",
    habitats: ["friche", "bord-chemin", "prairie"],
    regions: "Partout en France, surtout sur sols calcaires.",
    recolte: [6, 7, 8],
    floraison: [6, 7, 8, 9],
    couleurFleur: ["jaune"],
    typeFeuille: "Feuilles alternes à 3 folioles allongées et dentées, comme un trèfle étiré, la foliole centrale portée par un petit pétiole.",
    reconnaissance: [
      "Plante dressée et ramifiée de 50 cm à 1,5 m.",
      "Feuilles en trèfle à folioles oblongues finement dentées.",
      "Longues grappes fines et effilées de petites fleurs jaunes en papillon, pendantes.",
      "Odeur de foin coupé et de vanille qui se développe en séchant.",
      "Petites gousses ovales ridées en travers, une ou deux graines."
    ],
    partiesUtilisees: ["sommités fleuries séchées"],
    bienfaits: [
      "Traditionnellement utilisé pour soulager les jambes lourdes et les troubles de la circulation veineuse.",
      "Employé en compresses tièdes sur les yeux fatigués et les petites contusions dans la tradition populaire."
    ],
    usages: ["infusion légère de sommités séchées", "compresses", "sachets parfumés pour le linge", "plante mellifère"],
    recettes: [
      {
        titre: "Infusion de mélilot",
        type: "infusion",
        ingredients: ["1 cuillère à café de sommités séchées (environ 1,5 g)", "250 ml d'eau frémissante"],
        etapes: ["Infuser 10 minutes à couvert.", "Filtrer ; 2 tasses par jour au plus, sur 2 semaines maximum."]
      },
      {
        titre: "Compresses de mélilot pour les yeux fatigués",
        type: "cataplasme",
        ingredients: ["1 cuillère à soupe de sommités séchées", "250 ml d'eau frémissante", "Compresses stériles"],
        etapes: ["Infuser 10 minutes puis filtrer très soigneusement dans un filtre à café.", "Laisser tiédir, imbiber les compresses.", "Poser 10 minutes sur les paupières fermées ; préparer une infusion neuve à chaque fois."]
      }
    ],
    confusions: [
      {
        nom: "Mélilot blanc",
        latin: "Melilotus albus",
        danger: "sans-danger",
        differences: ["Fleurs blanches et non jaunes.", "Port souvent plus grand ; mêmes précautions liées à la coumarine."]
      },
      {
        nom: "Luzerne lupuline",
        latin: "Medicago lupulina",
        danger: "sans-danger",
        differences: ["Plante basse et couchée.", "Fleurs jaunes en petites têtes rondes et non en longues grappes.", "Gousses noires enroulées en rein."]
      }
    ],
    precautions: [
      "Ne jamais utiliser de mélilot moisi : les moisissures transforment la coumarine en dicoumarol, un anticoagulant puissant qui provoque des hémorragies.",
      "Contre-indiqué avec un traitement anticoagulant ou antiagrégant, et avant une opération.",
      "Usage interne court et modéré : la coumarine à forte dose peut provoquer maux de tête et atteinte du foie.",
      "Déconseillé pendant la grossesse et l'allaitement."
    ],
    sources: [
      { titre: "Wikipédia : Mélilot officinal", url: "https://fr.wikipedia.org/wiki/Melilotus_officinalis" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes, 1868 (article Mélilot)", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "saponaire-officinale",
    nom: "Saponaire officinale",
    latin: "Saponaria officinalis",
    famille: "Caryophyllacées",
    autresNoms: ["Herbe à savon", "Savonnière", "Herbe à foulon"],
    statut: "medicinale",
    resume: "Plante des berges aux fleurs roses parfumées, dont les racines et les feuilles frottées dans l'eau font mousser comme du savon grâce aux saponines. Elle sert surtout en lessive douce et en usage externe ; l'usage interne est à proscrire.",
    habitat: "Berges de rivières, bords de chemins et de voies ferrées, talus, friches sablonneuses.",
    habitats: ["bord-eau", "bord-chemin", "friche"],
    regions: "Partout en France de plaine.",
    recolte: [6, 7, 8, 9, 10],
    floraison: [6, 7, 8, 9],
    couleurFleur: ["rose", "blanc"],
    typeFeuille: "Feuilles opposées, ovales lancéolées, lisses, à 3 nervures parallèles bien visibles.",
    reconnaissance: [
      "Tiges dressées de 30 à 80 cm, lisses, un peu renflées aux nœuds.",
      "Feuilles opposées à 3 nervures longitudinales, sans dents.",
      "Fleurs rose pâle à blanches à 5 pétales légèrement échancrés, en bouquets, à parfum doux le soir.",
      "Calice long en tube, lisse et sans poils.",
      "Feuilles ou racines frottées entre les mains mouillées : une mousse légère apparaît."
    ],
    partiesUtilisees: ["racine", "feuilles"],
    bienfaits: [
      "Utilisée en décoction externe comme lavant très doux pour la peau sensible et les tissus délicats.",
      "Cazin (1868) la cite contre les affections cutanées, rhumatismales et du foie en usage interne : usages anciens abandonnés à cause de la toxicité des saponines."
    ],
    usages: ["lessive douce pour laine et soie", "lotion lavante externe", "shampoing doux traditionnel"],
    recettes: [
      {
        titre: "Lessive douce à la saponaire",
        type: "macerat",
        ingredients: ["30 g de racine séchée et concassée (ou une grosse poignée de feuilles et tiges fraîches)", "1 litre d'eau"],
        etapes: ["Laisser tremper la racine une nuit dans l'eau.", "Faire bouillir 15 minutes puis laisser refroidir.", "Filtrer : le liquide mousse quand on l'agite.", "Utiliser dans la journée pour laver à la main la laine et la soie ; ne pas boire, garder hors de portée des enfants."]
      }
    ],
    confusions: [
      {
        nom: "Nielle des blés",
        latin: "Agrostemma githago",
        danger: "toxique",
        differences: ["Plante couverte de poils gris, feuilles très étroites.", "Grandes fleurs pourpres solitaires dont les sépales en longues lanières dépassent les pétales.", "Plante des moissons ; graines très toxiques."]
      },
      {
        nom: "Compagnon blanc",
        latin: "Silene latifolia",
        danger: "sans-danger",
        differences: ["Plante velue et un peu collante.", "Pétales blancs profondément échancrés en deux.", "Calice renflé en ballon chez les pieds femelles ; ne mousse pas."]
      }
    ],
    precautions: [
      "Pas d'usage interne : les saponines irritent fortement l'estomac et l'intestin, et les graines contiennent une protéine toxique (saporine).",
      "Éviter tout contact avec les yeux ; rincer abondamment en cas de projection.",
      "Ne pas rejeter de grandes quantités de décoction dans une rivière : les saponines sont toxiques pour les poissons."
    ],
    sources: [
      { titre: "Wikipédia : Saponaire officinale", url: "https://fr.wikipedia.org/wiki/Saponaria_officinalis" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes, 1868 (article Saponaire)", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "menthe-pouliot",
    nom: "Menthe pouliot",
    latin: "Mentha pulegium",
    famille: "Lamiacées",
    autresNoms: ["Pouliot", "Herbe aux puces", "Herbe de Saint-Laurent"],
    statut: "comestible-medicinale",
    resume: "Petite menthe rampante des lieux inondés l'hiver, à l'odeur puissante, entre menthe et camphre. Ses feuilles s'emploient en très petite quantité comme aromate, mais son huile essentielle est toxique pour le foie et peut être mortelle.",
    habitat: "Mares temporaires, prairies et chemins inondés en hiver, bords d'étangs, fossés.",
    habitats: ["bord-eau", "prairie", "bord-chemin"],
    regions: "Une grande partie de la France, surtout l'Ouest, le Centre et le Midi ; en régression avec l'assèchement des zones humides.",
    recolte: [6, 7, 8, 9],
    floraison: [7, 8, 9],
    couleurFleur: ["rose", "violet"],
    typeFeuille: "Petites feuilles opposées ovales de 1 à 2 cm, à peine dentées, vert franc.",
    reconnaissance: [
      "Tiges couchées puis redressées, de 10 à 40 cm, à section carrée, qui s'enracinent aux nœuds.",
      "Petites feuilles opposées ovales et peu dentées, nettement plus petites que celles des autres menthes.",
      "Fleurs rose lilas en boules étagées à l'aisselle des feuilles le long de la tige, et non en épi au sommet.",
      "Odeur très forte de menthe camphrée au froissement.",
      "Pousse sur sol nu ou peu herbeux qui a été inondé."
    ],
    partiesUtilisees: ["feuilles", "sommités fleuries"],
    bienfaits: [
      "Utilisée en tradition comme digestive et pour éloigner les insectes, d'où son nom latin rappelant les puces.",
      "Elle a été longtemps employée pour provoquer les règles et comme abortif, usage extrêmement dangereux qui a causé des décès."
    ],
    usages: ["quelques feuilles comme aromate (cuisine portugaise et espagnole)", "bouquet froissé contre les insectes", "infusion très légère et ponctuelle chez l'adulte"],
    recettes: [
      {
        titre: "Infusion digestive légère de pouliot",
        type: "infusion",
        ingredients: ["3 à 4 feuilles fraîches (ou une pincée de plante séchée)", "250 ml d'eau frémissante"],
        etapes: ["Infuser 5 minutes seulement.", "Filtrer ; une tasse après un repas, de façon occasionnelle, uniquement chez l'adulte en bonne santé et hors grossesse."]
      }
    ],
    confusions: [
      {
        nom: "Menthe des champs",
        latin: "Mentha arvensis",
        danger: "sans-danger",
        differences: ["Feuilles plus grandes et plus nettement dentées.", "Tige qui se termine par un bouquet de feuilles et non par des fleurs.", "Odeur de menthe moins camphrée."]
      },
      {
        nom: "Menthe aquatique",
        latin: "Mentha aquatica",
        danger: "sans-danger",
        differences: ["Plante dressée plus grande, aux feuilles ovales dentées plus grandes.", "Fleurs en tête arrondie au sommet de la tige.", "Usages beaucoup plus sûrs."]
      }
    ],
    precautions: [
      "Ne jamais utiliser l'huile essentielle de pouliot par voie interne : riche en pulégone, très toxique pour le foie, elle a causé des décès, même à faible dose.",
      "Strictement interdite pendant la grossesse et l'allaitement, et chez l'enfant.",
      "Déconseillée en cas de maladie du foie ou des reins, d'épilepsie.",
      "Rester sur des quantités d'aromate et un usage occasionnel ; espèce protégée dans certaines régions."
    ],
    sources: [
      { titre: "Wikipédia : Menthe pouliot", url: "https://fr.wikipedia.org/wiki/Mentha_pulegium" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes, 1868 (article Menthe pouliot)", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "menthe-a-longues-feuilles",
    nom: "Menthe à longues feuilles",
    latin: "Mentha longifolia",
    famille: "Lamiacées",
    autresNoms: ["Menthe sauvage", "Menthe des bois", "Menthe argentée"],
    statut: "comestible-medicinale",
    resume: "Grande menthe sauvage blanchâtre des bords de ruisseaux et des fossés, aux longs épis lilas. Elle s'emploie comme la menthe verte en cuisine et en infusion digestive.",
    habitat: "Bords de ruisseaux, fossés, prairies humides, suintements, jusqu'en montagne.",
    habitats: ["bord-eau", "prairie", "montagne"],
    regions: "Une grande partie de la France, surtout l'Est, le Centre et les montagnes.",
    recolte: [5, 6, 7, 8, 9],
    floraison: [7, 8, 9],
    couleurFleur: ["rose", "violet"],
    typeFeuille: "Feuilles opposées longues et étroites, presque sans pétiole, dentées, gris-vert et duveteuses, blanches dessous.",
    reconnaissance: [
      "Tiges dressées de 50 cm à 1 m, à section carrée, couvertes de poils blanchâtres.",
      "Feuilles allongées et étroites, presque sans pétiole, duveteuses et grisâtres, nettement blanches au revers.",
      "Fleurs lilas en longs épis fins et denses au sommet des tiges.",
      "Odeur franche de menthe au froissement, un peu plus rude que la menthe verte.",
      "Pousse en colonies grâce à des tiges souterraines."
    ],
    partiesUtilisees: ["feuilles", "sommités fleuries"],
    bienfaits: [
      "Traditionnellement utilisée en infusion pour faciliter la digestion et soulager les ballonnements.",
      "Cazin (1868) range la menthe sauvage parmi les menthes aux propriétés stimulantes voisines de la menthe poivrée."
    ],
    usages: ["feuilles fraîches dans les salades, taboulés et sauces", "thé à la menthe", "infusion après le repas", "sirop de menthe"],
    recettes: [
      {
        titre: "Infusion de menthe sauvage",
        type: "infusion",
        ingredients: ["Une petite poignée de feuilles fraîches (ou 1 cuillère à soupe de séchées)", "250 ml d'eau frémissante"],
        etapes: ["Verser l'eau sur les feuilles.", "Infuser 5 à 10 minutes à couvert.", "Filtrer ; une tasse après les repas."]
      },
      {
        titre: "Sirop de menthe sauvage",
        type: "sirop",
        ingredients: ["100 g de feuilles fraîches", "1 litre d'eau", "800 g de sucre", "Le jus d'un citron"],
        etapes: ["Faire infuser les feuilles 12 heures dans l'eau bouillante hors du feu.", "Filtrer en pressant, ajouter le sucre et le citron.", "Porter à ébullition 2 minutes et mettre en bouteilles stérilisées."]
      }
    ],
    confusions: [
      {
        nom: "Menthe pouliot",
        latin: "Mentha pulegium",
        danger: "toxique",
        differences: ["Petite plante rampante aux petites feuilles ovales de 1 à 2 cm.", "Fleurs en boules étagées le long de la tige.", "Odeur camphrée très forte ; à n'utiliser qu'en très petite quantité."]
      },
      {
        nom: "Épiaire des marais",
        latin: "Stachys palustris",
        danger: "sans-danger",
        differences: ["Pas d'odeur de menthe au froissement, odeur faible et désagréable.", "Fleurs plus grandes en casque, roses marbrées de blanc, en étages espacés.", "Ses tubercules sont comestibles."]
      }
    ],
    precautions: [
      "Déconseillée en cas de reflux gastrique, qu'elle peut aggraver.",
      "Ne pas cueillir dans les fossés pollués ou au bord des champs traités.",
      "Laver soigneusement : les plantes des bords d'eau pâturés peuvent porter la douve du foie, surtout consommées crues."
    ],
    sources: [
      { titre: "Wikipédia : Menthe à longues feuilles", url: "https://fr.wikipedia.org/wiki/Mentha_longifolia" },
      { titre: "Wikipédia : Menthe pouliot", url: "https://fr.wikipedia.org/wiki/Mentha_pulegium" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes, 1868 (article Menthe sauvage)", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "salicaire",
    nom: "Salicaire",
    latin: "Lythrum salicaria",
    famille: "Lythracées",
    autresNoms: ["Salicaire commune", "Herbe aux coliques", "Lysimaque rouge"],
    statut: "medicinale",
    resume: "Grande plante des berges aux longs épis pourpres en été, très visitée par les abeilles. Astringente, elle est un remède traditionnel des diarrhées.",
    habitat: "Berges de rivières et d'étangs, fossés, prairies humides, roselières.",
    habitats: ["bord-eau", "prairie"],
    regions: "Partout en France de plaine et de basse montagne.",
    recolte: [6, 7, 8],
    floraison: [6, 7, 8, 9],
    couleurFleur: ["rose", "violet"],
    typeFeuille: "Feuilles lancéolées sans pétiole, opposées ou par 3 autour de la tige, à bord entier.",
    reconnaissance: [
      "Tiges dressées de 60 cm à 1,5 m, raides, à 4 à 6 angles.",
      "Feuilles étroites à bord entier, sans pétiole, opposées ou verticillées par 3.",
      "Longs épis terminaux de fleurs rose pourpre vif à 6 pétales froissés.",
      "Fleurs groupées en petits paquets à l'aisselle de petites bractées tout le long de l'épi.",
      "Saveur herbacée un peu astringente, sans odeur marquée."
    ],
    partiesUtilisees: ["sommités fleuries", "jeunes pousses"],
    bienfaits: [
      "Traditionnellement employée en infusion ou décoction contre les diarrhées légères grâce à ses tanins.",
      "Cazin (1868) la juge peu active au goût mais rapporte son emploi ancien contre la diarrhée et la dysenterie."
    ],
    usages: ["infusion de sommités séchées", "jeunes pousses cuites en petite quantité (usage ancien de disette)", "plante mellifère"],
    recettes: [
      {
        titre: "Infusion de salicaire",
        type: "infusion",
        ingredients: ["1 cuillère à soupe de sommités fleuries séchées (environ 2 g)", "250 ml d'eau"],
        etapes: ["Porter à frémissement et laisser frémir 2 minutes.", "Infuser 10 minutes hors du feu, filtrer.", "2 à 3 tasses par jour pendant 2 à 3 jours au plus."]
      }
    ],
    confusions: [
      {
        nom: "Épilobe hérissé",
        latin: "Epilobium hirsutum",
        danger: "sans-danger",
        differences: ["Fleurs roses à 4 pétales échancrés, portées au bout d'un long ovaire en forme de tige.", "Plante velue, feuilles dentées embrassant la tige.", "Fruits en longues capsules libérant des graines à aigrette blanche."]
      },
      {
        nom: "Digitale pourpre",
        latin: "Digitalis purpurea",
        danger: "mortel",
        differences: ["Grandes fleurs en doigt de gant penchées d'un seul côté de la tige, tachetées à l'intérieur.", "Feuilles larges, molles et duveteuses, alternes.", "Lisières et coupes forestières acides plutôt que berges."]
      }
    ],
    precautions: [
      "Une diarrhée qui dure plus de 2 jours, avec fièvre ou sang, ou chez un enfant ou une personne âgée, nécessite un médecin.",
      "Déconseillée pendant la grossesse par manque de données.",
      "Cueillir loin des eaux polluées."
    ],
    sources: [
      { titre: "Wikipédia : Salicaire commune", url: "https://fr.wikipedia.org/wiki/Lythrum_salicaria" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes, 1868 (article Salicaire)", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "massette",
    nom: "Massette à larges feuilles",
    latin: "Typha latifolia",
    famille: "Typhacées",
    autresNoms: ["Quenouille", "Roseau à massette", "Typha"],
    statut: "comestible",
    resume: "Grande plante des marais à l'épi brun en forme de saucisse. Jeunes pousses, cœur des tiges, épis immatures, pollen et rhizome se consomment, à condition d'éviter l'iris des marais et les eaux polluées.",
    habitat: "Étangs, marais, fossés, bords de lacs et de rivières lentes, en eau peu profonde.",
    habitats: ["bord-eau"],
    regions: "Partout en France.",
    recolte: [4, 5, 6, 7, 10, 11],
    floraison: [6, 7, 8],
    couleurFleur: ["vert", "jaune"],
    typeFeuille: "Longues feuilles en ruban de 1 à 2 cm de large, épaisses et spongieuses, qui s'emboîtent à la base.",
    reconnaissance: [
      "Épi femelle brun foncé, cylindrique et velouté, en forme de saucisse, au sommet d'une tige raide.",
      "Juste au-dessus, épi mâle jaunâtre collé au premier (sans espace chez cette espèce), qui libère un pollen jaune.",
      "Feuilles en rubans épais, légèrement arrondis sur la face extérieure, à l'intérieur spongieux.",
      "À la base, les feuilles s'emboîtent les unes dans les autres en enveloppant un cœur blanc et tendre.",
      "Rhizomes épais et blancs dans la vase."
    ],
    partiesUtilisees: ["jeunes pousses", "cœur des tiges", "épis immatures", "pollen", "rhizome"],
    bienfaits: [
      "Rhizome riche en amidon, utilisé comme aliment de disette et en farine.",
      "Duvet des épis mûrs utilisé autrefois sur les brûlures et pour rembourrer ; Cazin (1868) mentionne la massette surtout pour ses usages domestiques."
    ],
    usages: ["cœur blanc des jeunes pousses cru ou cuit (asperge des Cosaques)", "épis mâles verts cuits et grignotés comme un épi de maïs", "pollen mêlé à la farine", "farine de rhizome"],
    recettes: [
      {
        titre: "Cœurs de massette poêlés",
        type: "cuisine",
        ingredients: ["10 jeunes pousses de massette de 50 cm à 1 m", "Beurre ou huile d'olive", "Ail, sel, poivre"],
        etapes: ["Tirer les pousses depuis la base pour les détacher du rhizome, en vérifiant chaque pied.", "Retirer les feuilles extérieures jusqu'au cœur blanc et tendre (10 à 20 cm).", "Couper en tronçons, blanchir 2 minutes puis faire sauter 5 minutes à la poêle avec l'ail.", "Assaisonner et servir chaud."]
      }
    ],
    confusions: [
      {
        nom: "Iris des marais",
        latin: "Iris pseudacorus",
        danger: "toxique",
        differences: ["Feuilles plates en lame d'épée, disposées en éventail sur un même plan, et non rondes et emboîtées.", "Feuilles plus raides avec une nervure centrale saillante, sans cœur spongieux.", "Grandes fleurs jaunes au printemps, puis capsules.", "Rhizome rose brunâtre à l'intérieur, âcre ; toute la plante est toxique."]
      },
      {
        nom: "Rubanier dressé",
        latin: "Sparganium erectum",
        danger: "sans-danger",
        differences: ["Feuilles à section triangulaire à la base, carénées.", "Fleurs et fruits en boules hérissées et non en épi brun velouté."]
      }
    ],
    precautions: [
      "La massette concentre les polluants et métaux lourds : ne cueillir que dans des eaux propres, loin des routes, des cultures et des rejets.",
      "Bien laver et cuire les parties poussant dans l'eau (risque de douve et de parasites aquatiques).",
      "Ne jamais se fier aux feuilles seules sans regarder leur disposition : l'iris pousse souvent au même endroit.",
      "Respecter les zones humides protégées ; ne prélever que quelques pieds."
    ],
    sources: [
      { titre: "Wikipédia : Massette à larges feuilles", url: "https://fr.wikipedia.org/wiki/Typha_latifolia" },
      { titre: "Wikipédia : Iris des marais", url: "https://fr.wikipedia.org/wiki/Iris_pseudacorus" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes, 1868 (article Massette à larges feuilles)", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "roseau-commun",
    nom: "Roseau commun",
    latin: "Phragmites australis",
    famille: "Poacées",
    autresNoms: ["Phragmite", "Roseau à balais", "Rouche"],
    statut: "comestible-medicinale",
    resume: "Grande graminée des roselières aux plumeaux violacés puis argentés. Les jeunes pousses printanières se mangent comme du bambou, et les rhizomes étaient un aliment de disette.",
    habitat: "Roselières, bords d'étangs et de rivières, marais, fossés, lagunes.",
    habitats: ["bord-eau", "littoral"],
    regions: "Partout en France.",
    recolte: [3, 4, 5, 10, 11],
    floraison: [7, 8, 9],
    couleurFleur: ["violet"],
    typeFeuille: "Feuilles larges de 1 à 4 cm, plates, rudes sur les bords, avec une couronne de poils à la place de la languette.",
    reconnaissance: [
      "Tiges creuses et raides de 1,5 à 4 m, à nœuds marqués, en peuplements serrés.",
      "Feuilles plates et larges qui tournent toutes du même côté au vent, rudes au bord.",
      "À la jonction de la feuille et de la tige, une frange de poils fins au lieu d'une petite membrane.",
      "Grand plumeau terminal violacé puis argenté et soyeux, qui reste en hiver.",
      "Rhizomes et stolons épais, blancs, traçants sur des mètres."
    ],
    partiesUtilisees: ["jeunes pousses", "rhizomes"],
    bienfaits: [
      "Racine considérée comme sudorifique et diurétique dans la tradition ; Cazin (1868) rapporte qu'on la vantait contre les rhumatismes et la goutte, usages anciens non confirmés.",
      "Rhizome nourrissant, riche en sucres et en amidon."
    ],
    usages: ["jeunes pousses tendres cuites comme des pousses de bambou", "rhizomes cuits ou séchés en farine", "tiges pour toits de chaume, vannerie et paillage"],
    recettes: [
      {
        titre: "Pousses de roseau sautées",
        type: "cuisine",
        ingredients: ["Une botte de jeunes pousses de 20 à 40 cm, pas encore déroulées", "Huile, sauce soja ou sel, ail"],
        etapes: ["Retirer les gaines extérieures pour ne garder que la partie tendre.", "Couper en tronçons, cuire 5 minutes à l'eau bouillante.", "Faire sauter 3 minutes à la poêle avec l'ail et assaisonner."]
      }
    ],
    confusions: [
      {
        nom: "Canne de Provence",
        latin: "Arundo donax",
        danger: "sans-danger",
        differences: ["Bien plus grande (jusqu'à 5 ou 6 m) avec des tiges épaisses comme des cannes.", "Feuilles larges qui embrassent la tige, alternées régulièrement sur deux rangs.", "Surtout dans le Midi, sur sols plus secs."]
      },
      {
        nom: "Iris des marais",
        latin: "Iris pseudacorus",
        danger: "toxique",
        differences: ["Feuilles en lame d'épée disposées en éventail plat.", "Pas de tige creuse à nœuds ni de plumeau.", "Grandes fleurs jaunes au printemps ; plante toxique."]
      }
    ],
    precautions: [
      "Ne cueillir que dans des eaux propres : les roselières filtrent et accumulent les polluants.",
      "Cuire les pousses et rhizomes issus de l'eau.",
      "Les roselières abritent de nombreux oiseaux nicheurs : éviter de les piétiner au printemps."
    ],
    sources: [
      { titre: "Wikipédia : Roseau commun", url: "https://fr.wikipedia.org/wiki/Phragmites_australis" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes, 1868 (article Roseau à balais)", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "ail-triquetre",
    nom: "Ail triquètre",
    latin: "Allium triquetrum",
    famille: "Amaryllidacées",
    autresNoms: ["Ail à trois angles", "Ail blanc des bois", "Poireau sauvage"],
    statut: "comestible",
    resume: "Ail sauvage aux clochettes blanches rayées de vert et à la tige à trois angles, qui colonise haies et talus de l'Ouest et du Midi en fin d'hiver. Toute la plante sent l'ail ; à distinguer de l'ornithogale et du perce-neige, toxiques.",
    habitat: "Haies, talus ombragés, bords de chemins, jardins, sous-bois frais, souvent près des habitations.",
    habitats: ["haie", "bord-chemin", "jardin", "foret"],
    regions: "Bretagne, littoral atlantique, Sud-Ouest, région méditerranéenne et Corse ; parfois naturalisé ailleurs.",
    recolte: [1, 2, 3, 4, 5],
    floraison: [3, 4, 5],
    couleurFleur: ["blanc"],
    typeFeuille: "Feuilles linéaires, plates, carénées en dessous, souples, sortant d'un petit bulbe.",
    reconnaissance: [
      "Tige florale nettement triangulaire en coupe, à trois angles vifs.",
      "Fleurs blanches en clochettes pendantes, chaque tépale marqué d'une fine ligne verte au centre, groupées d'un seul côté.",
      "Forte odeur d'ail ou de poireau quand on froisse une feuille, à tester sur chaque feuille avec des doigts propres.",
      "Feuilles plates et carénées, avec une arête dessous, sans ligne blanche au centre.",
      "Pousse en tapis denses et forme de petits bulbes blancs."
    ],
    partiesUtilisees: ["feuilles", "tiges", "fleurs", "bulbes"],
    bienfaits: [
      "Comme les autres aulx, traditionnellement réputé favorable à la digestion et à la circulation.",
      "Riche en composés soufrés aromatiques et en vitamine C."
    ],
    usages: ["feuilles et tiges ciselées comme de la ciboulette", "pesto et beurre d'ail", "fleurs crues en décoration de salades", "bulbes en petits oignons"],
    recettes: [
      {
        titre: "Omelette à l'ail triquètre",
        type: "cuisine",
        ingredients: ["Une poignée de feuilles et tiges d'ail triquètre", "4 œufs", "Beurre, sel, poivre", "Quelques fleurs pour décorer"],
        etapes: ["Vérifier l'odeur d'ail et la tige triangulaire de chaque brin.", "Ciseler les feuilles et tiges et les faire fondre 1 minute au beurre.", "Verser les œufs battus et cuire l'omelette ; décorer de fleurs."]
      }
    ],
    confusions: [
      {
        nom: "Ornithogale en ombelle (dame-d'onze-heures)",
        latin: "Ornithogalum umbellatum",
        danger: "toxique",
        differences: ["Aucune odeur d'ail au froissement.", "Feuilles étroites parcourues d'une ligne blanche au centre de la face supérieure.", "Fleurs en étoiles ouvertes vers le haut, vertes au revers, et non en clochettes pendantes.", "Tige ronde, non triangulaire ; toute la plante est toxique pour le cœur."]
      },
      {
        nom: "Perce-neige",
        latin: "Galanthus nivalis",
        danger: "toxique",
        differences: ["Aucune odeur d'ail.", "Seulement 2 ou 3 feuilles gris bleuté par pied.", "Une seule fleur pendante par tige, à 3 grands tépales externes blancs et 3 petits internes marqués d'une tache verte.", "Bulbe toxique, vomitif."]
      },
      {
        nom: "Nivéole printanière",
        latin: "Leucojum vernum",
        danger: "toxique",
        differences: ["Aucune odeur d'ail.", "Une ou deux grosses clochettes par tige à 6 tépales égaux, chacun marqué d'une tache verte ou jaune à la pointe.", "Feuilles larges et brillantes ; plante toxique."]
      }
    ],
    precautions: [
      "Sentir chaque feuille isolément avec des doigts propres : l'odeur d'ail reste sur les mains.",
      "Ne pas récolter à pleines poignées dans un massif où d'autres bulbeuses poussent mêlées.",
      "Prudence en cas de traitement anticoagulant ou d'estomac sensible, comme pour l'ail.",
      "Espèce envahissante dans certaines régions : la cueillir n'est pas un problème, mais ne pas la planter en milieu naturel."
    ],
    sources: [
      { titre: "Wikipédia : Ail triquètre", url: "https://fr.wikipedia.org/wiki/Allium_triquetrum" },
      { titre: "Wikipédia : Ornithogale en ombelle", url: "https://fr.wikipedia.org/wiki/Ornithogalum_umbellatum" },
      { titre: "Wikipédia : Perce-neige", url: "https://fr.wikipedia.org/wiki/Galanthus_nivalis" },
      { titre: "Wikipédia : Nivéole printanière", url: "https://fr.wikipedia.org/wiki/Leucojum_vernum" },
      { titre: "Plantes Sauvages Comestibles : 10 plantes sauvages comestibles en février", url: "https://plantes-sauvages-comestibles.com/10-plantes-sauvages-comestibles-en-fevrier/" }
    ]
  },
  {
    id: "poireau-des-vignes",
    nom: "Poireau des vignes",
    latin: "Allium polyanthum",
    famille: "Amaryllidacées",
    autresNoms: ["Ail à nombreuses fleurs", "Poireau sauvage", "Ail faux-poireau (Allium ampeloprasum)"],
    statut: "comestible",
    resume: "Poireau sauvage des vignes et des friches du Midi, ancêtre de nos poireaux, aux grosses boules de fleurs roses en été. Ses jeunes tiges, récoltées en fin d'hiver, ont un goût de poireau et d'ail très prononcé.",
    habitat: "Vignes, vergers, olivettes, friches, talus et bords de chemins ensoleillés.",
    habitats: ["friche", "bord-chemin", "jardin", "prairie"],
    regions: "Région méditerranéenne, vallée du Rhône, Sud-Ouest et littoral atlantique ; Allium ampeloprasum, très proche, dans les mêmes milieux.",
    recolte: [1, 2, 3, 4],
    floraison: [5, 6, 7],
    couleurFleur: ["rose", "violet", "blanc"],
    typeFeuille: "Feuilles plates et longues, carénées, gris-vert, qui engainent la tige comme celles du poireau.",
    reconnaissance: [
      "Jeune plante qui ressemble à un petit poireau : feuilles plates gris-vert emboîtées, sortant d'un fût blanc.",
      "Forte odeur de poireau et d'ail quand on froisse une feuille.",
      "Bulbe blanc souvent entouré de petits bulbilles.",
      "En été, tige de 50 cm à 1 m portant une grosse boule de nombreuses fleurs roses à violacées.",
      "Feuilles souvent fanées au moment de la floraison."
    ],
    partiesUtilisees: ["jeunes tiges", "feuilles", "bulbes"],
    bienfaits: [
      "Comme le poireau et l'ail, réputé favorable à la digestion et diurétique doux dans la tradition.",
      "Légume sauvage riche en fibres et en composés soufrés."
    ],
    usages: ["en vinaigrette comme des poireaux", "en omelette, tarte ou soupe", "fondue de poireaux sauvages", "bulbes en assaisonnement"],
    recettes: [
      {
        titre: "Poireaux sauvages en vinaigrette",
        type: "cuisine",
        ingredients: ["2 bottes de jeunes poireaux des vignes", "1 cuillère à soupe de moutarde", "1 cuillère à soupe de vinaigre", "3 cuillères à soupe d'huile d'olive", "Sel, poivre"],
        etapes: ["Vérifier l'odeur de chaque plant, nettoyer et retirer les feuilles abîmées.", "Cuire 8 à 10 minutes à l'eau bouillante salée, égoutter.", "Préparer la vinaigrette et en napper les poireaux tièdes."]
      }
    ],
    confusions: [
      {
        nom: "Colchique d'automne",
        latin: "Colchicum autumnale",
        danger: "mortel",
        differences: ["Feuilles larges, luisantes, vert franc, épaisses, sans aucune odeur d'ail ou de poireau.", "Feuilles en touffe au printemps, entourant souvent une capsule verte au centre.", "Fleurs roses en automne sans feuilles ; pousse surtout dans les prairies humides."]
      },
      {
        nom: "Narcisses (jeunes feuilles)",
        latin: "Narcissus pseudonarcissus",
        danger: "toxique",
        differences: ["Feuilles plates gris-vert mais sans odeur d'ail.", "Bulbe brun à tunique sèche sans bulbilles.", "Fleurs jaunes en trompette au printemps ; bulbe et feuilles toxiques."]
      },
      {
        nom: "Ail des vignes",
        latin: "Allium vineale",
        danger: "sans-danger",
        differences: ["Feuilles creuses et cylindriques comme de la ciboulette.", "Tête de fleurs souvent remplacée par des bulbilles.", "Comestible également."]
      }
    ],
    precautions: [
      "Tester l'odeur sur chaque plant, avec des doigts propres.",
      "Dans les vignes et vergers, se renseigner sur les traitements et ne pas cueillir après pulvérisation.",
      "Prudence en cas d'estomac sensible ou de traitement anticoagulant."
    ],
    sources: [
      { titre: "Wikipédia : Allium polyanthum", url: "https://fr.wikipedia.org/wiki/Allium_polyanthum" },
      { titre: "Wikipédia : Colchique d'automne", url: "https://fr.wikipedia.org/wiki/Colchique_d%27automne" }
    ]
  },
  {
    id: "asperge-sauvage",
    nom: "Asperge sauvage",
    latin: "Asparagus acutifolius",
    famille: "Asparagacées",
    autresNoms: ["Asperge à feuilles aiguës", "Asperge des bois", "Asperge sauvage du Midi"],
    statut: "comestible",
    resume: "Arbrisseau épineux des garrigues dont les fines pousses vertes printanières, amères et parfumées, sont une cueillette très appréciée du Midi. Ne pas la confondre avec les pousses de tamier, de bryone ou de fragon.",
    habitat: "Garrigues, maquis, bois clairs de chênes verts, haies et murets ensoleillés.",
    habitats: ["haie", "foret", "bord-chemin", "littoral"],
    regions: "Région méditerranéenne, Corse, basse vallée du Rhône et quelques stations du Sud-Ouest.",
    recolte: [3, 4, 5],
    floraison: [7, 8, 9],
    couleurFleur: ["jaune", "vert"],
    typeFeuille: "Pas de vraies feuilles : petits rameaux en aiguilles raides et piquantes (cladodes) groupés en bouquets, persistants.",
    reconnaissance: [
      "Touffe buissonnante de tiges ligneuses enchevêtrées, garnie de petites aiguilles vert foncé raides et piquantes, toute l'année.",
      "Au printemps, pousses fines comme un crayon, vertes à violacées, qui sortent de la souche au pied de la vieille touffe.",
      "Pousses portant de petites écailles triangulaires serrées vers la pointe, sans feuilles ni vrilles.",
      "Goût d'asperge nettement amer quand on croque la pointe crue.",
      "En automne, petites baies noires."
    ],
    partiesUtilisees: ["jeunes pousses"],
    bienfaits: [
      "Comme l'asperge cultivée, réputée diurétique dans la tradition ; Cazin (1868) cite surtout la racine d'asperge comme diurétique.",
      "Légume printanier riche en fibres et en vitamines."
    ],
    usages: ["en omelette (l'usage le plus classique)", "poêlée à l'huile d'olive", "en risotto", "blanchie en salade"],
    recettes: [
      {
        titre: "Omelette aux asperges sauvages",
        type: "cuisine",
        ingredients: ["Une botte d'asperges sauvages (une vingtaine de pousses)", "4 à 6 œufs", "Huile d'olive, ail, sel, poivre"],
        etapes: ["Casser les pousses à l'endroit où elles cèdent facilement sous les doigts, jeter la base dure.", "Les faire revenir 5 minutes à l'huile d'olive avec l'ail émincé.", "Verser les œufs battus assaisonnés et cuire à feu doux."]
      }
    ],
    confusions: [
      {
        nom: "Tamier commun",
        latin: "Dioscorea communis",
        danger: "toxique",
        differences: ["Pousses lianescentes qui s'enroulent autour des supports.", "Petites feuilles en cœur déjà visibles au sommet de la pousse, nervures courbes.", "Pas de touffe ligneuse à aiguilles piquantes au pied.", "Toute la plante est irritante ; baies rouges très toxiques. La consommation traditionnelle de ses pousses dans le Midi n'est pas recommandée."]
      },
      {
        nom: "Bryone dioïque",
        latin: "Bryonia dioica",
        danger: "toxique",
        differences: ["Pousses velues portant des vrilles en tire-bouchon.", "Feuilles lobées comme une feuille de vigne, rudes.", "Grosse racine en navet ; plante purgative et toxique."]
      },
      {
        nom: "Fragon petit-houx",
        latin: "Ruscus aculeatus",
        danger: "sans-danger",
        differences: ["Touffe à « feuilles » ovales rigides terminées par une épine, et non en aiguilles fines.", "Pousses plus épaisses, très amères ; elles sont comestibles cuites.", "Baies rouges au centre des fausses feuilles, toxiques."]
      }
    ],
    precautions: [
      "Ne cueillir que les pousses partant d'une touffe d'asperge bien identifiée.",
      "Laisser quelques pousses à chaque souche pour ne pas l'épuiser.",
      "Ne pas consommer les baies, toxiques.",
      "Odeur forte des urines après consommation : sans gravité."
    ],
    sources: [
      { titre: "Wikipédia : Asperge à feuilles aiguës", url: "https://fr.wikipedia.org/wiki/Asparagus_acutifolius" },
      { titre: "Wikipédia : Tamier commun", url: "https://fr.wikipedia.org/wiki/Dioscorea_communis" },
      { titre: "Wikipédia : Fragon petit-houx", url: "https://fr.wikipedia.org/wiki/Ruscus_aculeatus" },
      { titre: "Wikipédia : Bryone dioïque", url: "https://fr.wikipedia.org/wiki/Bryonia_dioica" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes, 1868 (article Asperge)", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "noyer-commun",
    nom: "Noyer commun",
    latin: "Juglans regia",
    famille: "Juglandacées",
    autresNoms: ["Noyer royal", "Noyer", "Gaugier"],
    statut: "comestible-medicinale",
    resume: "Grand arbre des campagnes, souvent subspontané en haies et lisières, connu pour ses noix. Les noix vertes de juin donnent le vin de noix, et les feuilles sont une plante astringente traditionnelle.",
    habitat: "Haies, lisières, bords de chemins, abords des villages, vallées chaudes ; souvent issu de plantations.",
    habitats: ["haie", "bord-chemin", "foret", "jardin"],
    regions: "Toute la France de plaine et de basse montagne, surtout le Sud-Ouest, le Dauphiné et le Périgord.",
    recolte: [6, 7, 9, 10],
    floraison: [4, 5],
    couleurFleur: ["vert"],
    typeFeuille: "Grandes feuilles alternes composées de 5 à 9 folioles ovales à bord entier, la foliole terminale plus grande, odeur aromatique au froissement.",
    reconnaissance: [
      "Grandes feuilles composées de 5 à 9 folioles lisses à bord entier, sentant fortement le brou de noix au froissement.",
      "Écorce gris clair, lisse chez le jeune arbre, crevassée avec l'âge.",
      "Rameaux à moelle cloisonnée en petites chambres quand on les fend.",
      "Fruit vert et lisse (le brou) qui noircit et s'ouvre à l'automne sur la noix.",
      "Chatons mâles verts pendants au printemps."
    ],
    partiesUtilisees: ["noix", "noix vertes", "feuilles", "brou"],
    bienfaits: [
      "Noix riches en acides gras oméga-3, réputées bonnes pour le cœur.",
      "Feuilles astringentes traditionnellement employées en décoction externe sur les problèmes de peau et en bain.",
      "Cazin (1868) décrit les différentes parties du noyer comme astringentes, toniques et vermifuges (brou), et met en garde contre les noix vieilles et rances."
    ],
    usages: ["noix fraîches ou sèches", "vin de noix avec les noix vertes de la Saint-Jean", "huile de noix", "décoction de feuilles en usage externe"],
    recettes: [
      {
        titre: "Vin de noix",
        type: "macerat",
        ingredients: ["20 noix vertes cueillies fin juin (une aiguille doit les traverser facilement)", "4 litres de vin rouge", "1 litre d'eau-de-vie de fruits à 40 degrés", "1 kg de sucre"],
        etapes: ["Avec des gants, couper les noix vertes en quatre (le brou tache fortement).", "Les faire macérer avec le vin et l'eau-de-vie dans un grand bocal 6 semaines au frais, à l'abri de la lumière.", "Filtrer, ajouter le sucre et mélanger jusqu'à dissolution.", "Mettre en bouteilles et attendre quelques mois ; à boire avec modération en apéritif."]
      },
      {
        titre: "Décoction de feuilles de noyer pour bain",
        type: "infusion",
        ingredients: ["50 g de feuilles séchées", "1 litre d'eau"],
        etapes: ["Faire bouillir 10 minutes, laisser infuser 15 minutes et filtrer.", "Utiliser en lotion ou ajouter à l'eau d'un bain de pieds ou de mains.", "Usage externe uniquement."]
      }
    ],
    confusions: [
      {
        nom: "Noyer noir",
        latin: "Juglans nigra",
        danger: "sans-danger",
        differences: ["Feuilles à 15 à 23 folioles étroites et dentées.", "Noix à coque très épaisse et sculptée, difficile à casser.", "Comestible ; surtout planté dans les parcs."]
      },
      {
        nom: "Ailante glanduleux",
        latin: "Ailanthus altissima",
        danger: "toxique",
        differences: ["Feuilles très longues à 13 à 25 folioles, chacune avec une ou deux dents glanduleuses à sa base.", "Odeur désagréable au froissement.", "Fruits en grappes de samares ailées rousses, aucune noix ; écorce et feuilles irritantes."]
      }
    ],
    precautions: [
      "Ne pas manger de noix moisies, rances ou noircies : elles peuvent contenir des toxines de moisissures.",
      "Allergie aux noix fréquente et parfois grave.",
      "Le brou contient de la juglone : il tache durablement et peut irriter la peau ; porter des gants.",
      "Le vin de noix contient de l'alcool : pas pour les enfants ni pendant la grossesse."
    ],
    sources: [
      { titre: "Wikipédia : Noyer commun", url: "https://fr.wikipedia.org/wiki/Juglans_regia" },
      { titre: "Plantes Sauvages Comestibles : vin de noix, mettez-le en route à la Saint-Jean", url: "https://plantes-sauvages-comestibles.com/vin-de-noix-mettez-le-en-route-a-la-saint-jean/" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes, 1868 (article Noyer)", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "groseillier-a-maquereau",
    nom: "Groseillier à maquereau sauvage",
    latin: "Ribes uva-crispa",
    famille: "Grossulariacées",
    autresNoms: ["Groseillier épineux", "Groseille à maquereau", "Gadelle"],
    statut: "comestible",
    resume: "Petit arbuste épineux des haies et des bois frais aux baies vertes à rougeâtres, veinées et translucides. Acidulées vertes, sucrées mûres, elles accompagnaient autrefois le maquereau d'où leur nom.",
    habitat: "Haies, lisières, bois frais, ripisylves, rocailles de montagne, vieux murs.",
    habitats: ["haie", "foret", "montagne"],
    regions: "Une grande partie de la France, surtout le Nord-Est, l'Est et les montagnes ; souvent échappé de jardins.",
    recolte: [6, 7, 8],
    floraison: [3, 4, 5],
    couleurFleur: ["vert", "rose"],
    typeFeuille: "Petites feuilles arrondies à 3 à 5 lobes crénelés, comme une petite feuille de vigne, en bouquets.",
    reconnaissance: [
      "Arbuste de 50 cm à 1,5 m aux rameaux portant 1 à 3 épines robustes sous chaque bouquet de feuilles.",
      "Feuilles petites, arrondies, découpées en 3 à 5 lobes à dents arrondies.",
      "Fleurs verdâtres teintées de rouge, pendantes, par 1 à 3, aux sépales retournés.",
      "Baies isolées de 1 à 2 cm, vertes, jaunes ou rougeâtres, translucides et parcourues de lignes claires, souvent poilues.",
      "Petit reste de fleur séché au bout de chaque baie."
    ],
    partiesUtilisees: ["fruits"],
    bienfaits: [
      "Fruits riches en vitamine C et en fibres.",
      "Cazin (1868) note que les fruits verts sont laxatifs et rafraîchissants, effets qui s'atténuent à maturité."
    ],
    usages: ["fruits mûrs crus", "sauce acidulée de fruits verts pour poissons gras", "confiture et gelée", "crumble et tartes"],
    recettes: [
      {
        titre: "Sauce aux groseilles à maquereau",
        type: "cuisine",
        ingredients: ["250 g de groseilles à maquereau encore vertes", "30 g de sucre", "20 g de beurre", "5 cl d'eau"],
        etapes: ["Équeuter les baies des deux côtés.", "Les cuire 10 minutes avec l'eau et le sucre jusqu'à ce qu'elles éclatent.", "Écraser, ajouter le beurre et servir avec un maquereau grillé."]
      }
    ],
    confusions: [
      {
        nom: "Groseillier des Alpes",
        latin: "Ribes alpinum",
        danger: "sans-danger",
        differences: ["Rameaux sans épines.", "Petites baies rouges en grappes dressées, fades.", "Comestible mais sans intérêt."]
      },
      {
        nom: "Bryone dioïque (baies)",
        latin: "Bryonia dioica",
        danger: "toxique",
        differences: ["Liane herbacée à vrilles, sans épines ni bois.", "Petites baies rondes lisses, vertes puis rouges, groupées sur les tiges grimpantes.", "Baies toxiques, dangereuses pour les enfants."]
      }
    ],
    precautions: [
      "Laver ou cuire les baies cueillies basses dans les zones à échinococcose.",
      "Les baies vertes en quantité peuvent être laxatives.",
      "Se piquer est facile : porter des gants pour la cueillette."
    ],
    sources: [
      { titre: "Wikipédia : Groseillier à maquereau", url: "https://fr.wikipedia.org/wiki/Ribes_uva-crispa" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes, 1868 (article Groseillier rouge, mention du groseillier épineux)", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "ronce-bleue",
    nom: "Ronce bleue",
    latin: "Rubus caesius",
    famille: "Rosacées",
    autresNoms: ["Ronce à fruits bleus", "Ronce bleuâtre", "Ronce des champs"],
    statut: "comestible-medicinale",
    resume: "Ronce basse et rampante des lieux frais, reconnaissable à ses tiges et à ses mûres couvertes d'une pruine bleutée. Ses fruits juteux et acidulés et ses feuilles s'utilisent comme ceux de la ronce commune.",
    habitat: "Bords de rivières, bois humides, haies, fossés, champs et friches sur sols frais.",
    habitats: ["bord-eau", "haie", "friche", "foret"],
    regions: "Partout en France, surtout sur sols riches et calcaires.",
    recolte: [4, 5, 7, 8, 9],
    floraison: [5, 6, 7, 8],
    couleurFleur: ["blanc"],
    typeFeuille: "Feuilles alternes à 3 folioles (jamais 5), vertes des deux côtés, à dents irrégulières.",
    reconnaissance: [
      "Tiges grêles, rampantes ou à peine arquées, rondes, recouvertes d'une pruine bleu grisâtre qui s'efface au doigt.",
      "Aiguillons fins et peu nombreux.",
      "Feuilles toujours à 3 folioles, vertes dessus et dessous, avec souvent les folioles latérales bilobées.",
      "Mûres noires couvertes d'une pruine bleue, formées de peu de grains assez gros.",
      "Fleurs blanches à 5 pétales, en petits bouquets."
    ],
    partiesUtilisees: ["fruits", "jeunes feuilles", "jeunes pousses"],
    bienfaits: [
      "Feuilles riches en tanins, traditionnellement utilisées en infusion ou gargarisme pour la gorge et les diarrhées légères, comme celles de la ronce commune (Cazin, 1868, article Ronce).",
      "Fruits riches en vitamines et en antioxydants."
    ],
    usages: ["mûres crues", "confiture et gelée", "infusion de jeunes feuilles séchées", "jeunes pousses épluchées crues ou cuites"],
    recettes: [
      {
        titre: "Gelée de mûres bleues",
        type: "cuisine",
        ingredients: ["1 kg de mûres de ronce bleue", "20 cl d'eau", "Sucre (750 g par litre de jus)", "Le jus d'un citron"],
        etapes: ["Cuire les mûres avec l'eau 10 minutes en écrasant.", "Filtrer dans un linge pour retirer les graines.", "Peser le jus, ajouter sucre et citron, cuire 8 à 10 minutes à ébullition.", "Mettre en pots stérilisés."]
      },
      {
        titre: "Infusion de feuilles de ronce",
        type: "infusion",
        ingredients: ["1 cuillère à soupe de jeunes feuilles séchées (environ 2 g)", "250 ml d'eau frémissante"],
        etapes: ["Infuser 10 minutes à couvert.", "Filtrer ; 2 à 3 tasses par jour, ou en gargarisme tiède."]
      }
    ],
    confusions: [
      {
        nom: "Ronce commune",
        latin: "Rubus fruticosus",
        danger: "sans-danger",
        differences: ["Tiges robustes et arquées, anguleuses, sans pruine, armées de gros aiguillons crochus.", "Feuilles souvent à 5 folioles, parfois blanchâtres dessous.", "Mûres noires brillantes à nombreux petits grains ; comestible."]
      },
      {
        nom: "Framboisier",
        latin: "Rubus idaeus",
        danger: "sans-danger",
        differences: ["Tiges dressées à aiguillons fins comme des poils.", "Feuilles blanches et feutrées dessous.", "Fruits rouges creux ; comestible."]
      }
    ],
    precautions: [
      "Ses fruits bas et rampants sont plus exposés : bien les laver ou les cuire dans les zones à échinococcose et près des chemins à chiens.",
      "Feuilles astringentes : éviter l'usage prolongé en cas de constipation.",
      "Éviter les bords de champs traités et de routes."
    ],
    sources: [
      { titre: "Wikipédia : Ronce bleue", url: "https://fr.wikipedia.org/wiki/Rubus_caesius" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes, 1868 (article Ronce)", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  }
);
