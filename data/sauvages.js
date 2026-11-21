// Plantes sauvages comestibles et médicinales de France métropolitaine.
// Données synthétisées et reformulées à partir des sources citées pour chaque plante.
// Outil d'apprentissage : ne remplace ni un avis médical, ni la vérification sur le terrain par une personne compétente.
// En cas d'ingestion suspecte : centre antipoison (numéros sur centres-antipoison.net) ou le 15.
window.SAUVAGES = [
  {
    id: "ail-des-ours",
    nom: "Ail des ours",
    latin: "Allium ursinum",
    famille: "Amaryllidacées",
    autresNoms: ["Ail sauvage", "Ail des bois", "Ail à larges feuilles"],
    statut: "comestible-medicinale",
    resume: "Grandes feuilles tendres à forte odeur d'ail qui tapissent les sous-bois humides au printemps. Une des cueillettes les plus populaires, et une des plus impliquées dans des intoxications graves par confusion.",
    habitat: "Sous-bois frais et humides, fonds de vallons, bords de ruisseaux ombragés, sols riches.",
    habitats: ["foret", "bord-eau"],
    regions: "Une grande partie de la France, surtout le Nord-Est, l'Est, le Centre et les montagnes ; rare ou absent en région méditerranéenne sèche et sur les sols très pauvres.",
    recolte: [2, 3, 4, 5],
    floraison: [4, 5],
    couleurFleur: ["blanc"],
    typeFeuille: "Feuilles elliptiques pointues, souples, chacune portée par son propre pétiole sortant directement du sol.",
    reconnaissance: [
      "Chaque feuille sort seule du sol au bout de son propre pétiole fin, jamais deux feuilles emboîtées dans une gaine commune.",
      "Une feuille froissée dégage immédiatement une nette odeur d'ail ; tester chaque feuille isolément, avec des doigts propres, car l'odeur reste sur les mains.",
      "Limbe mince et tendre, d'un vert vif, plus brillant dessus que dessous, nervures parallèles.",
      "Pétiole légèrement vrillé, comme pincé sur les côtés.",
      "Fleurs blanches étoilées à six tépales réunies en ombelle arrondie au sommet d'une tige à section triangulaire.",
      "Pousse en tapis denses, souvent de plusieurs mètres carrés."
    ],
    partiesUtilisees: ["feuilles", "boutons floraux", "fleurs", "bulbe"],
    bienfaits: [
      "Traditionnellement utilisé comme l'ail cultivé pour soutenir la circulation et la digestion.",
      "Réputé dépuratif en cure de printemps dans la tradition populaire."
    ],
    usages: ["en pesto", "cru ciselé dans les salades et fromages frais", "en soupe ou en beurre aromatisé", "boutons floraux confits au vinaigre comme des câpres"],
    recettes: [
      {
        titre: "Pesto d'ail des ours",
        type: "cuisine",
        ingredients: ["100 g de feuilles d'ail des ours identifiées une par une", "50 g de parmesan râpé", "40 g de noisettes ou pignons", "15 cl d'huile d'olive", "Sel"],
        etapes: ["Laver et bien sécher les feuilles en vérifiant chacune (forme, pétiole, odeur).", "Mixer grossièrement avec les noisettes et le fromage.", "Ajouter l'huile en filet et saler.", "Conserver au frais sous une couche d'huile, à consommer dans la semaine."]
      }
    ],
    confusions: [
      {
        nom: "Colchique d'automne",
        latin: "Colchicum autumnale",
        danger: "mortel",
        differences: ["Feuilles sans pétiole, épaisses et raides, groupées en touffe serrée qui sort du sol comme un poireau.", "Aucune odeur d'ail au froissement.", "Au printemps, une capsule verte (le fruit) apparaît souvent au cœur de la touffe.", "Pousse plutôt dans les prairies humides, mais peut se trouver en lisière."]
      },
      {
        nom: "Muguet",
        latin: "Convallaria majalis",
        danger: "mortel",
        differences: ["Deux ou trois feuilles par pied, enroulées l'une dans l'autre à la base dans une gaine commune.", "Feuilles plus fermes, au revers plus brillant que le dessus (l'inverse de l'ail des ours).", "Aucune odeur d'ail.", "Fleurs en clochettes blanches pendantes sur un seul côté de la tige."]
      },
      {
        nom: "Arum tacheté",
        latin: "Arum maculatum",
        danger: "toxique",
        differences: ["Feuilles en fer de flèche avec deux oreillettes à la base, nervures ramifiées en réseau et non parallèles.", "Souvent des taches sombres sur le limbe.", "Pétiole creusé en gouttière sur le dessus, aucune odeur d'ail.", "Pousse souvent mêlé à l'ail des ours : vérifier chaque feuille."]
      }
    ],
    precautions: [
      "Ne jamais récolter à pleines poignées : cueillir feuille par feuille et vérifier chacune.",
      "Le test de l'odeur n'est fiable que sur une feuille isolée et des doigts propres.",
      "En cas de doute ou de symptômes digestifs après un repas d'ail des ours, appeler sans attendre un centre antipoison : l'intoxication au colchique est retardée et peut être mortelle.",
      "Comme pour l'ail, prudence en cas de traitement anticoagulant ou d'estomac sensible.",
      "Laver soigneusement : les sous-bois peuvent être fréquentés par les renards (échinococcose)."
    ],
    sources: [
      { titre: "Wikipédia : Ail des ours", url: "https://fr.wikipedia.org/wiki/Ail_des_ours" },
      { titre: "Wikipédia : Colchique d'automne", url: "https://fr.wikipedia.org/wiki/Colchique_d%27automne" },
      { titre: "Wikipédia : Muguet (Convallaria majalis)", url: "https://fr.wikipedia.org/wiki/Convallaria_majalis" },
      { titre: "Wikipédia : Arum tacheté", url: "https://fr.wikipedia.org/wiki/Arum_maculatum" },
      { titre: "Centres antipoison de France", url: "https://centres-antipoison.net/" }
    ]
  },
  {
    id: "ortie",
    nom: "Ortie dioïque",
    latin: "Urtica dioica",
    famille: "Urticacées",
    autresNoms: ["Grande ortie", "Ortie commune"],
    statut: "comestible-medicinale",
    resume: "Plante très nourrissante, riche en protéines et minéraux, qui se cuisine comme les épinards. Ses poils urticants disparaissent à la cuisson, au séchage ou en mixant.",
    habitat: "Sols riches en azote : abords des fermes, friches, lisières, bords de chemins, jardins.",
    habitats: ["friche", "foret", "haie", "jardin", "bord-chemin"],
    regions: "Partout en France, de la plaine à la montagne.",
    recolte: [3, 4, 5, 6, 9, 10],
    floraison: [6, 7, 8, 9],
    couleurFleur: ["vert"],
    typeFeuille: "Feuilles opposées, en cœur allongé, bordées de grosses dents, couvertes de poils piquants.",
    reconnaissance: [
      "Le contact provoque une brûlure et des cloques : c'est le test le plus sûr.",
      "Tige à section carrée, dressée, couverte de poils urticants.",
      "Feuilles opposées deux à deux, à dents régulières et pointe allongée.",
      "Fleurs minuscules verdâtres en grappes pendantes à l'aisselle des feuilles.",
      "Pousse en colonies denses grâce à des racines jaunes traçantes.",
      "Odeur faible, herbacée."
    ],
    partiesUtilisees: ["jeunes pousses", "feuilles", "graines", "racine"],
    bienfaits: [
      "Traditionnellement utilisée comme reminéralisante et en cure de printemps.",
      "Réputée diurétique et utilisée en tradition pour les douleurs articulaires.",
      "La racine est employée en phytothérapie pour le confort urinaire masculin."
    ],
    usages: ["en soupe", "en quiche ou en gratin comme les épinards", "séchée en infusion", "graines saupoudrées sur les plats", "purin d'ortie au jardin"],
    recettes: [
      {
        titre: "Infusion d'ortie",
        type: "infusion",
        ingredients: ["1 cuillère à soupe de feuilles séchées (environ 2 g)", "250 ml d'eau frémissante"],
        etapes: ["Verser l'eau sur les feuilles.", "Couvrir et laisser infuser 10 minutes.", "Filtrer. Jusqu'à 2 à 3 tasses par jour, en cure de 2 à 3 semaines."]
      },
      {
        titre: "Soupe d'ortie",
        type: "cuisine",
        ingredients: ["2 grosses poignées de sommités d'ortie (cueillies avec des gants)", "2 pommes de terre", "1 oignon", "1 litre de bouillon", "Crème, sel, poivre"],
        etapes: ["Faire revenir l'oignon, ajouter les pommes de terre en dés et le bouillon.", "Cuire 15 minutes, ajouter les orties lavées et cuire 5 minutes de plus.", "Mixer, ajouter un peu de crème et assaisonner."]
      }
    ],
    confusions: [
      {
        nom: "Lamier blanc (ortie blanche)",
        latin: "Lamium album",
        danger: "sans-danger",
        differences: ["Ne pique pas au toucher.", "Grandes fleurs blanches en casque groupées en étages autour de la tige.", "Également comestible."]
      }
    ],
    precautions: [
      "Riche en vitamine K : demander un avis médical en cas de traitement anticoagulant de type antivitamine K.",
      "Effet diurétique : prudence en cas d'insuffisance cardiaque ou rénale et de traitement diurétique.",
      "Ne pas cueillir près des routes, des champs traités ni des dépôts d'ordures : l'ortie concentre nitrates et polluants.",
      "Préférer les jeunes pousses avant floraison ; les feuilles âgées deviennent fibreuses.",
      "Usage prolongé de la racine : avis médical, notamment en cas de troubles prostatiques."
    ],
    sources: [
      { titre: "Wikipédia : Ortie dioïque", url: "https://fr.wikipedia.org/wiki/Ortie_dio%C3%AFque" },
      { titre: "Althea Provence : l'ortie", url: "https://www.altheaprovence.com/ortie/" }
    ]
  },
  {
    id: "pissenlit",
    nom: "Pissenlit",
    latin: "Taraxacum officinale",
    famille: "Astéracées",
    autresNoms: ["Dent-de-lion", "Salade de taupe"],
    statut: "comestible-medicinale",
    resume: "Rosette de feuilles dentées et fleur jaune très commune, dont toute la plante se consomme. Plante amère de référence pour la digestion dans la tradition.",
    habitat: "Prairies, pelouses, bords de chemins, jardins, friches.",
    habitats: ["prairie", "jardin", "friche", "bord-chemin", "montagne"],
    regions: "Partout en France, jusqu'en altitude.",
    recolte: [2, 3, 4, 9, 10, 11],
    floraison: [3, 4, 5, 9, 10],
    couleurFleur: ["jaune"],
    typeFeuille: "Rosette basale de feuilles allongées, profondément découpées en dents tournées vers le cœur.",
    reconnaissance: [
      "Une seule fleur jaune par tige ; la tige florale est creuse, lisse et sans feuilles.",
      "Toute la plante laisse couler un latex blanc et amer quand on la casse.",
      "Feuilles en rosette au ras du sol, dents en forme de crochets dirigés vers le centre.",
      "Nervure centrale souvent rougeâtre, feuilles glabres ou presque.",
      "Fruits en boule blanche plumeuse que l'on souffle.",
      "Racine pivotante épaisse, brune dehors et blanche dedans."
    ],
    partiesUtilisees: ["feuilles", "fleurs", "boutons", "racine"],
    bienfaits: [
      "Traditionnellement utilisé pour stimuler la digestion et la production de bile.",
      "Réputé diurétique, d'où son nom populaire."
    ],
    usages: ["jeunes feuilles en salade (avec lardons, œuf)", "fleurs en gelée ou « miel » de pissenlit", "boutons au vinaigre", "racine torréfiée en substitut de café"],
    recettes: [
      {
        titre: "Infusion de racine et feuilles de pissenlit",
        type: "infusion",
        ingredients: ["1 cuillère à café de racine séchée hachée", "1 cuillère à café de feuilles séchées", "250 ml d'eau"],
        etapes: ["Faire frémir la racine 5 minutes dans l'eau.", "Retirer du feu, ajouter les feuilles et laisser infuser 10 minutes.", "Filtrer et boire avant les repas, 2 tasses par jour au plus."]
      },
      {
        titre: "Cramaillotte (gelée de fleurs)",
        type: "sirop",
        ingredients: ["300 fleurs de pissenlit", "1 litre d'eau", "1 citron et 1 orange", "1 kg de sucre"],
        etapes: ["Retirer au maximum la partie verte des fleurs.", "Faire bouillir les fleurs avec les agrumes en rondelles 1 heure, puis laisser reposer une nuit.", "Filtrer en pressant, ajouter le sucre et cuire jusqu'à consistance de gelée.", "Mettre en pots stérilisés."]
      }
    ],
    confusions: [
      {
        nom: "Laiterons, crépides, porcelles",
        latin: "Sonchus spp., Crepis spp., Hypochaeris radicata",
        danger: "sans-danger",
        differences: ["Tiges florales ramifiées ou portant plusieurs fleurs, ou feuillées.", "Feuilles souvent velues (porcelle) ou embrassantes (laiteron).", "Ces plantes sont globalement comestibles."]
      }
    ],
    precautions: [
      "Ne pas consommer cru s'il pousse dans des prés humides pâturés : risque de douve du foie.",
      "Déconseillé en cas d'obstruction des voies biliaires ou de calculs biliaires sans avis médical.",
      "Allergie possible chez les personnes sensibles aux Astéracées.",
      "Éviter les pelouses traitées, les bords de route et les endroits fréquentés par les chiens."
    ],
    sources: [
      { titre: "Wikipédia : Pissenlit", url: "https://fr.wikipedia.org/wiki/Pissenlit" },
      { titre: "Wikipédia : Fasciolose", url: "https://fr.wikipedia.org/wiki/Fasciolose" }
    ]
  },
  {
    id: "plantain-lanceole",
    nom: "Plantain lancéolé",
    latin: "Plantago lanceolata",
    famille: "Plantaginacées",
    autresNoms: ["Herbe aux cinq coutures", "Oreille de lièvre"],
    statut: "comestible-medicinale",
    resume: "Rosette de feuilles étroites à nervures parallèles, présente dans presque toutes les prairies. Remède de terrain réputé contre les piqûres d'insectes et utilisé traditionnellement pour la toux.",
    habitat: "Prairies, pelouses, bords de chemins, terrains piétinés.",
    habitats: ["prairie", "bord-chemin", "friche", "jardin"],
    regions: "Partout en France.",
    recolte: [4, 5, 6, 7, 8, 9],
    floraison: [4, 5, 6, 7, 8, 9],
    couleurFleur: ["blanc", "vert"],
    typeFeuille: "Rosette basale de feuilles longues et étroites en fer de lance, 3 à 5 nervures parallèles saillantes.",
    reconnaissance: [
      "Feuilles étroites et pointues parcourues de 3 à 5 nervures parallèles bien marquées en relief.",
      "En tirant doucement sur une feuille cassée, on voit sortir des fils blancs (les nervures).",
      "Épi floral court, brun, ovale, au bout d'une longue hampe sillonnée et sans feuilles.",
      "Étamines blanc crème qui forment un anneau autour de l'épi à la floraison.",
      "Jeunes feuilles au goût de champignon de Paris."
    ],
    partiesUtilisees: ["feuilles", "épis floraux", "graines"],
    bienfaits: [
      "Traditionnellement utilisé en sirop ou infusion pour apaiser la toux et la gorge.",
      "Feuille fraîche écrasée réputée calmer les piqûres d'ortie et d'insectes."
    ],
    usages: ["jeunes feuilles ciselées en salade", "épis immatures poêlés (goût de champignon)", "feuille froissée sur une piqûre", "sirop pour la gorge"],
    recettes: [
      {
        titre: "Sirop de plantain",
        type: "sirop",
        ingredients: ["100 g de feuilles fraîches", "50 cl d'eau", "500 g de sucre ou de miel"],
        etapes: ["Hacher les feuilles et les faire infuser 12 heures dans l'eau bouillante hors du feu.", "Filtrer en pressant.", "Ajouter le sucre et chauffer doucement jusqu'à dissolution, sans bouillir longtemps.", "Mettre en bouteille, conserver au frais ; 2 à 3 cuillères à café par jour."]
      },
      {
        titre: "Infusion de plantain",
        type: "infusion",
        ingredients: ["1 cuillère à soupe de feuilles séchées (environ 2 g)", "250 ml d'eau frémissante"],
        etapes: ["Verser l'eau sur les feuilles.", "Laisser infuser 10 minutes à couvert.", "Filtrer ; jusqu'à 3 tasses par jour."]
      }
    ],
    confusions: [
      {
        nom: "Digitale pourpre (rosette jeune)",
        latin: "Digitalis purpurea",
        danger: "mortel",
        differences: ["Feuilles bien plus larges, molles et duveteuses, grisâtres dessous.", "Nervures ramifiées en réseau, jamais parallèles.", "Aucun fil ne sort quand on casse la feuille."]
      }
    ],
    precautions: [
      "Plante considérée comme sûre aux doses alimentaires.",
      "Éviter les bords de route et les chemins fréquentés par les chiens.",
      "Une toux qui dure ou s'accompagne de fièvre nécessite un avis médical."
    ],
    sources: [
      { titre: "Wikipédia : Plantain lancéolé", url: "https://fr.wikipedia.org/wiki/Plantain_lanc%C3%A9ol%C3%A9" },
      { titre: "Wikipédia : Digitale pourpre", url: "https://fr.wikipedia.org/wiki/Digitale_pourpre" }
    ]
  },
  {
    id: "plantain-majeur",
    nom: "Plantain majeur",
    latin: "Plantago major",
    famille: "Plantaginacées",
    autresNoms: ["Grand plantain", "Plantain des oiseaux"],
    statut: "comestible-medicinale",
    resume: "Rosette de larges feuilles ovales qui résiste au piétinement des chemins et des cours. Même usage traditionnel que le plantain lancéolé, notamment sur la peau.",
    habitat: "Chemins de terre, cours, pelouses piétinées, bords de champs.",
    habitats: ["bord-chemin", "jardin", "prairie", "friche"],
    regions: "Partout en France.",
    recolte: [4, 5, 6, 7, 8, 9],
    floraison: [6, 7, 8, 9, 10],
    couleurFleur: ["vert", "blanc"],
    typeFeuille: "Rosette plaquée au sol de feuilles larges et ovales, longuement pétiolées, 5 à 9 nervures parallèles.",
    reconnaissance: [
      "Feuilles larges, ovales, plaquées au sol, avec 5 à 9 nervures parallèles qui convergent vers le pétiole.",
      "Fils élastiques visibles quand on casse le pétiole.",
      "Épis longs et fins, verdâtres, dressés comme des crayons.",
      "Pousse là où l'on marche, souvent dans les fissures des cours.",
      "Goût légèrement amer, texture un peu fibreuse."
    ],
    partiesUtilisees: ["feuilles", "graines"],
    bienfaits: [
      "Traditionnellement appliqué en feuille écrasée sur petites plaies, piqûres et irritations.",
      "Réputé adoucissant pour la gorge et les voies digestives."
    ],
    usages: ["très jeunes feuilles en salade ou en soupe", "graines en mucilage", "cataplasme de feuille fraîche"],
    recettes: [
      {
        titre: "Cataplasme de feuille fraîche",
        type: "cataplasme",
        ingredients: ["1 ou 2 feuilles propres de plantain"],
        etapes: ["Rincer la feuille, la mâchouiller ou l'écraser entre les doigts.", "Appliquer sur la piqûre ou l'irritation et maintenir quelques minutes.", "Renouveler si besoin ; ne pas utiliser sur une plaie profonde ou infectée."]
      }
    ],
    confusions: [
      {
        nom: "Digitale pourpre (rosette jeune)",
        latin: "Digitalis purpurea",
        danger: "mortel",
        differences: ["Feuilles allongées, duveteuses et douces, gris-vert dessous.", "Nervures ramifiées en réseau et non parallèles.", "Préfère les sols acides des clairières et lisières, pas les chemins piétinés."]
      }
    ],
    precautions: [
      "Plante sûre aux doses alimentaires.",
      "Ne pas cueillir là où passent chiens et voitures.",
      "Une plaie qui rougit, chauffe ou suppure relève d'un avis médical."
    ],
    sources: [
      { titre: "Wikipédia : Plantain majeur", url: "https://fr.wikipedia.org/wiki/Plantain_majeur" },
      { titre: "Wikipédia : Digitale pourpre", url: "https://fr.wikipedia.org/wiki/Digitale_pourpre" }
    ]
  },
  {
    id: "sureau-noir",
    nom: "Sureau noir",
    latin: "Sambucus nigra",
    famille: "Adoxacées",
    autresNoms: ["Sureau commun", "Grand sureau", "Seuillet"],
    statut: "comestible-medicinale",
    resume: "Arbuste des haies aux larges ombelles de fleurs crème parfumées puis aux grappes de baies noires. Fleurs et baies cuites se consomment, mais il faut absolument le distinguer du sureau yèble, toxique.",
    habitat: "Haies, lisières, abords des fermes et des villages, friches, sols riches.",
    habitats: ["haie", "foret", "friche", "bord-chemin", "jardin"],
    regions: "Partout en France sauf haute montagne.",
    recolte: [5, 6, 8, 9],
    floraison: [5, 6],
    couleurFleur: ["blanc"],
    typeFeuille: "Feuilles opposées, composées de 5 à 7 folioles ovales dentées, odeur désagréable au froissement.",
    reconnaissance: [
      "Arbuste ou petit arbre ligneux de 2 à 8 m, écorce grise liégeuse et crevassée.",
      "Rameaux remplis d'une moelle blanche spongieuse.",
      "Fleurs crème en grandes ombelles plates, parfum doux et sucré de muscat.",
      "Baies noir violacé luisantes, en grappes qui pendent vers le bas à maturité.",
      "Feuilles à 5 à 7 folioles, sans stipules foliacées à la base."
    ],
    partiesUtilisees: ["fleurs", "baies mûres cuites"],
    bienfaits: [
      "Fleurs traditionnellement utilisées en infusion pour favoriser la transpiration lors des refroidissements.",
      "Baies cuites réputées soutenir les défenses en hiver dans la tradition populaire."
    ],
    usages: ["beignets de fleurs", "sirop ou limonade de fleurs", "confiture et gelée de baies cuites", "sirop de baies"],
    recettes: [
      {
        titre: "Sirop de fleurs de sureau",
        type: "sirop",
        ingredients: ["20 ombelles de fleurs bien ouvertes", "1,5 litre d'eau", "1,2 kg de sucre", "2 citrons non traités"],
        etapes: ["Secouer les ombelles pour chasser les insectes, couper un maximum de tiges vertes.", "Faire macérer fleurs et citrons en rondelles 24 à 48 heures dans l'eau froide, au frais.", "Filtrer, ajouter le sucre, porter à ébullition 2 minutes.", "Mettre en bouteilles stérilisées ; diluer comme un sirop."]
      },
      {
        titre: "Infusion de fleurs de sureau",
        type: "infusion",
        ingredients: ["1 cuillère à soupe de fleurs séchées (environ 3 g)", "250 ml d'eau frémissante"],
        etapes: ["Verser l'eau sur les fleurs.", "Infuser 10 minutes à couvert.", "Filtrer ; 2 à 3 tasses chaudes par jour."]
      }
    ],
    confusions: [
      {
        nom: "Sureau yèble (hièble)",
        latin: "Sambucus ebulus",
        danger: "toxique",
        differences: ["Plante herbacée de 1 à 2 m qui meurt chaque hiver, pas de tronc ligneux.", "Ombelles et grappes de fruits qui restent dressées vers le ciel.", "Étamines à anthères pourpres, fleurs à odeur forte et peu agréable.", "Feuilles à 7 à 11 folioles étroites avec des stipules foliacées à leur base.", "Pousse en colonies le long des chemins et talus ; ses baies restent toxiques même cuites."]
      },
      {
        nom: "Sureau à grappes",
        latin: "Sambucus racemosa",
        danger: "toxique",
        differences: ["Fleurs en grappes ovoïdes jaunâtres dès avril.", "Baies rouge vif en été.", "Surtout en montagne ; ses graines crues sont toxiques."]
      }
    ],
    precautions: [
      "Ne jamais consommer les baies crues ou vertes : nausées et vomissements. Toujours les cuire et retirer les rafles.",
      "Feuilles, écorce, tiges vertes et racines sont toxiques.",
      "Ne pas confondre avec le sureau yèble : dans le doute, s'abstenir.",
      "Grossesse et allaitement : éviter l'usage médicinal par manque de données."
    ],
    sources: [
      { titre: "Wikipédia : Sureau noir", url: "https://fr.wikipedia.org/wiki/Sureau_noir" },
      { titre: "Wikipédia : Sureau hièble", url: "https://fr.wikipedia.org/wiki/Sureau_hi%C3%A8ble" }
    ]
  },
  {
    id: "aubepine",
    nom: "Aubépine monogyne",
    latin: "Crataegus monogyna",
    famille: "Rosacées",
    autresNoms: ["Épine blanche", "Senellier", "Noble épine"],
    statut: "comestible-medicinale",
    resume: "Arbuste épineux des haies couvert de fleurs blanches au printemps puis de petits fruits rouges, les cenelles. Plante phare de la tradition pour le cœur et la nervosité.",
    habitat: "Haies, lisières, bois clairs, pâtures.",
    habitats: ["haie", "foret", "prairie", "bord-chemin"],
    regions: "Partout en France jusqu'à moyenne montagne.",
    recolte: [4, 5, 9, 10, 11],
    floraison: [4, 5],
    couleurFleur: ["blanc", "rose"],
    typeFeuille: "Feuilles alternes, profondément découpées en 3 à 7 lobes, sur des rameaux épineux.",
    reconnaissance: [
      "Rameaux munis d'épines droites et pointues.",
      "Feuilles petites, lobées très profondément, vert brillant dessus.",
      "Fleurs blanches à 5 pétales en bouquets, étamines à anthères roses à rouges, odeur forte un peu ammoniaquée.",
      "Fleurs apparaissant après les feuilles (contrairement au prunellier).",
      "Fruits rouges ovoïdes à chair farineuse et un seul noyau (monogyne)."
    ],
    partiesUtilisees: ["sommités fleuries", "fruits", "jeunes feuilles"],
    bienfaits: [
      "Traditionnellement utilisée pour la nervosité, les palpitations bénignes et le sommeil léger.",
      "Réputée soutenir le confort cardiaque dans la tradition, toujours en complément d'un suivi médical."
    ],
    usages: ["infusion de sommités fleuries", "jeunes feuilles et pétales en salade", "cenelles en gelée ou compote"],
    recettes: [
      {
        titre: "Infusion d'aubépine",
        type: "infusion",
        ingredients: ["1 cuillère à café de sommités fleuries séchées (environ 1,5 g)", "250 ml d'eau frémissante"],
        etapes: ["Verser l'eau sur les fleurs.", "Infuser 10 à 15 minutes à couvert.", "Filtrer ; 1 tasse le soir, au plus 3 par jour."]
      }
    ],
    confusions: [
      {
        nom: "Prunellier",
        latin: "Prunus spinosa",
        danger: "sans-danger",
        differences: ["Fleurit plus tôt, sur rameaux nus avant les feuilles.", "Feuilles ovales non lobées.", "Fruits bleu-noir pruineux."]
      },
      {
        nom: "Cotonéasters et buissons ardents (fruits)",
        latin: "Cotoneaster spp., Pyracantha spp.",
        danger: "toxique",
        differences: ["Feuilles entières, non lobées, souvent persistantes.", "Fruits en grappes denses, plusieurs pépins.", "Plantes ornementales des haies de jardins et parkings."]
      }
    ],
    precautions: [
      "Interactions possibles avec les médicaments du cœur et de la tension (digitaliques, bêtabloquants, dérivés nitrés) : avis médical indispensable.",
      "Ne jamais remplacer un traitement cardiaque.",
      "Grossesse, allaitement et enfants : déconseillé par manque de données."
    ],
    sources: [
      { titre: "Wikipédia : Aubépine monogyne", url: "https://fr.wikipedia.org/wiki/Aub%C3%A9pine_monogyne" }
    ]
  },
  {
    id: "tilleul",
    nom: "Tilleul",
    latin: "Tilia cordata, Tilia platyphyllos",
    famille: "Malvacées",
    autresNoms: ["Tilleul à petites feuilles", "Tilleul à grandes feuilles", "Tilleul des bois"],
    statut: "medicinale",
    resume: "Grand arbre dont les fleurs parfumées, attachées à une bractée en languette, font une infusion du soir très classique. Jeunes feuilles comestibles en salade.",
    habitat: "Forêts de feuillus, ravins, haies, très planté en ville et sur les places.",
    habitats: ["foret", "haie", "bord-chemin"],
    regions: "Partout en France, spontané surtout dans le Nord, l'Est et les montagnes, planté ailleurs.",
    recolte: [4, 6, 7],
    floraison: [6, 7],
    couleurFleur: ["jaune", "blanc"],
    typeFeuille: "Feuilles alternes en cœur, asymétriques à la base, finement dentées.",
    reconnaissance: [
      "Feuilles en cœur à base inégale, pointe effilée.",
      "Petites touffes de poils roux à l'aisselle des nervures sous la feuille (tilleul à petites feuilles).",
      "Fleurs blanc-jaunâtre très parfumées, miellées, bourdonnantes d'abeilles.",
      "Inflorescence attachée à une bractée allongée, pâle, en forme de languette.",
      "Petits fruits ronds et durs qui tournoient en tombant avec la bractée."
    ],
    partiesUtilisees: ["fleurs avec bractées", "jeunes feuilles", "aubier"],
    bienfaits: [
      "Traditionnellement utilisé pour la nervosité légère et l'endormissement.",
      "Réputé favoriser la transpiration lors des refroidissements."
    ],
    usages: ["infusion du soir", "jeunes feuilles tendres en salade", "bain apaisant"],
    recettes: [
      {
        titre: "Infusion de tilleul",
        type: "infusion",
        ingredients: ["1 cuillère à soupe de fleurs et bractées séchées (environ 2 g)", "250 ml d'eau frémissante"],
        etapes: ["Verser l'eau sur les fleurs.", "Infuser 10 minutes à couvert, pas plus pour éviter l'amertume.", "Filtrer ; 1 à 2 tasses le soir."]
      }
    ],
    confusions: [
      {
        nom: "Tilleul argenté",
        latin: "Tilia tomentosa",
        danger: "sans-danger",
        differences: ["Feuilles blanches et feutrées dessous.", "Arbre ornemental surtout planté en ville.", "Moins recommandé en infusion que les espèces indigènes."]
      }
    ],
    precautions: [
      "Récolter les fleurs dès leur ouverture et les sécher vite : les fleurs trop vieilles seraient moins bonnes et plus excitantes selon la tradition.",
      "Éviter les arbres d'alignement le long des routes à fort trafic.",
      "Usage prolongé à forte dose déconseillé chez les personnes souffrant du cœur sans avis médical."
    ],
    sources: [
      { titre: "Wikipédia : Tilleul à petites feuilles", url: "https://fr.wikipedia.org/wiki/Tilleul_%C3%A0_petites_feuilles" }
    ]
  },
  {
    id: "achillee-millefeuille",
    nom: "Achillée millefeuille",
    latin: "Achillea millefolium",
    famille: "Astéracées",
    autresNoms: ["Herbe aux charpentiers", "Saigne-nez", "Millefeuille"],
    statut: "comestible-medicinale",
    resume: "Plante des prairies aux feuilles finement découpées comme des plumes et aux petites fleurs blanches en bouquets plats. Traditionnellement utilisée pour la digestion, les règles douloureuses et les petites coupures.",
    habitat: "Prairies, talus, bords de chemins, pelouses sèches, jusqu'en montagne.",
    habitats: ["prairie", "bord-chemin", "friche", "montagne"],
    regions: "Partout en France.",
    recolte: [5, 6, 7, 8, 9],
    floraison: [6, 7, 8, 9, 10],
    couleurFleur: ["blanc", "rose"],
    typeFeuille: "Feuilles alternes, étroites, découpées en très nombreux segments fins disposés en trois dimensions, comme une plume.",
    reconnaissance: [
      "Feuilles très finement divisées, douces, rappelant une plume ou une queue de renard.",
      "Odeur aromatique, camphrée et un peu amère au froissement.",
      "Fleurs groupées en corymbe plat, chaque « fleur » est en réalité un petit capitule à 5 languettes blanches ou rosées et un cœur jaunâtre.",
      "Tige dressée, raide, souvent velue.",
      "Pousse en petites colonies grâce à des tiges souterraines."
    ],
    partiesUtilisees: ["sommités fleuries", "jeunes feuilles"],
    bienfaits: [
      "Traditionnellement utilisée pour faciliter la digestion et calmer les spasmes.",
      "Réputée apaiser les règles douloureuses.",
      "Feuille écrasée employée en tradition sur les petites coupures pour arrêter le saignement."
    ],
    usages: ["jeunes feuilles ciselées en petite quantité dans les salades et omelettes", "infusion de sommités", "aromate amer pour liqueurs"],
    recettes: [
      {
        titre: "Infusion d'achillée",
        type: "infusion",
        ingredients: ["1 cuillère à café de sommités fleuries séchées (environ 1,5 g)", "250 ml d'eau frémissante"],
        etapes: ["Verser l'eau sur les sommités.", "Infuser 10 minutes à couvert.", "Filtrer ; 2 tasses par jour au plus, en cure courte."]
      }
    ],
    confusions: [
      {
        nom: "Grande ciguë et autres ombellifères toxiques",
        latin: "Conium maculatum",
        danger: "mortel",
        differences: ["Les ombellifères ont de vraies ombelles : rayons partant tous d'un même point, fleurs à 5 pétales minuscules, pas de capitules.", "Feuilles de ciguë plus larges, triangulaires, divisées dans un plan, odeur d'urine de souris.", "Tige de grande ciguë lisse, creuse, tachée de pourpre."]
      }
    ],
    precautions: [
      "Déconseillée pendant la grossesse et l'allaitement.",
      "Allergie possible chez les personnes sensibles aux Astéracées (camomille, arnica, armoise).",
      "Peut rendre la peau plus sensible au soleil chez certaines personnes.",
      "Usage modéré et de courte durée."
    ],
    sources: [
      { titre: "Wikipédia : Achillée millefeuille", url: "https://fr.wikipedia.org/wiki/Achill%C3%A9e_millefeuille" },
      { titre: "Wikipédia : Grande ciguë", url: "https://fr.wikipedia.org/wiki/Grande_cigu%C3%AB" }
    ]
  },
  {
    id: "mauve",
    nom: "Mauve sylvestre",
    latin: "Malva sylvestris",
    famille: "Malvacées",
    autresNoms: ["Grande mauve", "Fouassier"],
    statut: "comestible-medicinale",
    resume: "Plante des talus aux fleurs roses striées de pourpre, riche en mucilages adoucissants. Feuilles et fleurs se mangent, et l'infusion est un classique pour la gorge.",
    habitat: "Friches, bords de chemins, talus, abords des villages, décombres.",
    habitats: ["friche", "bord-chemin", "jardin", "haie"],
    regions: "Partout en France, surtout en plaine.",
    recolte: [4, 5, 6, 7, 8, 9],
    floraison: [5, 6, 7, 8, 9],
    couleurFleur: ["rose", "violet"],
    typeFeuille: "Feuilles alternes arrondies, à 5 à 7 lobes peu profonds, crénelées, longuement pétiolées.",
    reconnaissance: [
      "Fleurs à 5 pétales échancrés, rose mauve, parcourus de stries pourpres foncées.",
      "Étamines soudées en colonne centrale.",
      "Feuilles rondes à lobes peu marqués, légèrement velues, au toucher doux.",
      "Les feuilles mâchées deviennent visqueuses (mucilage).",
      "Fruits en petites galettes rondes et plates comme un fromage miniature."
    ],
    partiesUtilisees: ["feuilles", "fleurs", "jeunes fruits"],
    bienfaits: [
      "Traditionnellement utilisée pour adoucir la gorge et calmer la toux sèche.",
      "Réputée apaiser les irritations digestives et le transit paresseux."
    ],
    usages: ["jeunes feuilles en salade ou cuites pour lier les soupes", "fleurs décoratives en salade", "jeunes fruits croqués à l'apéritif", "infusion"],
    recettes: [
      {
        titre: "Infusion de fleurs de mauve",
        type: "infusion",
        ingredients: ["1 cuillère à soupe de fleurs séchées (environ 2 g)", "250 ml d'eau frémissante"],
        etapes: ["Verser l'eau sur les fleurs.", "Infuser 10 minutes à couvert : l'infusion devient bleutée.", "Filtrer ; 3 tasses par jour, éventuellement avec du miel."]
      }
    ],
    confusions: [
      {
        nom: "Géraniums sauvages",
        latin: "Geranium spp.",
        danger: "sans-danger",
        differences: ["Feuilles plus profondément découpées.", "Fruit allongé en bec de grue.", "Pas de colonne d'étamines soudées."]
      }
    ],
    precautions: [
      "Les mucilages peuvent ralentir l'absorption des médicaments : les prendre à 2 heures d'intervalle.",
      "Éviter les bords de route : la mauve accumule facilement les nitrates et les polluants.",
      "Plante considérée comme sûre aux doses alimentaires."
    ],
    sources: [
      { titre: "Wikipédia : Mauve sylvestre", url: "https://fr.wikipedia.org/wiki/Mauve_sylvestre" }
    ]
  },
  {
    id: "consoude",
    nom: "Consoude officinale",
    latin: "Symphytum officinale",
    famille: "Boraginacées",
    autresNoms: ["Grande consoude", "Oreille d'âne", "Herbe aux coupures"],
    statut: "medicinale",
    resume: "Grande plante rêche des lieux humides aux fleurs en clochettes, célèbre en usage externe pour les contusions et entorses. Elle contient des alcaloïdes pyrrolizidiniques toxiques pour le foie : pas d'usage interne.",
    habitat: "Prairies humides, fossés, bords de ruisseaux, lisières fraîches.",
    habitats: ["bord-eau", "prairie", "haie"],
    regions: "Partout en France, plus rare dans la zone méditerranéenne sèche.",
    recolte: [4, 5, 6, 10, 11],
    floraison: [5, 6, 7],
    couleurFleur: ["violet", "rose", "blanc"],
    typeFeuille: "Grandes feuilles alternes lancéolées, rugueuses, dont la base se prolonge sur la tige en ailes.",
    reconnaissance: [
      "Toute la plante est couverte de poils raides : rêche, presque piquante au toucher.",
      "Tige épaisse portant des ailes vertes formées par la base des feuilles qui descend le long de la tige.",
      "Grandes feuilles lancéolées à nervures en réseau bien marquées.",
      "Fleurs en clochettes tubulaires pendantes, en grappes enroulées en crosse.",
      "Racine noire dehors, blanche et gluante à l'intérieur."
    ],
    partiesUtilisees: ["racine (usage externe)", "feuilles (usage externe)"],
    bienfaits: [
      "Traditionnellement utilisée en cataplasme ou pommade sur les contusions, entorses et douleurs articulaires.",
      "Réputée favoriser la réparation des tissus, d'où son nom populaire."
    ],
    usages: ["cataplasme de feuilles ou de racine sur peau intacte", "macérat huileux pour pommade", "engrais vert et purin au jardin"],
    recettes: [
      {
        titre: "Cataplasme de racine de consoude",
        type: "cataplasme",
        ingredients: ["1 morceau de racine fraîche lavée", "Un peu d'eau", "Une compresse ou un linge"],
        etapes: ["Râper ou mixer la racine avec un peu d'eau pour obtenir une pâte gluante.", "Étaler sur un linge et appliquer sur la zone contusionnée, sur peau non blessée.", "Laisser 1 à 2 heures ; ne pas dépasser une dizaine de jours d'utilisation."]
      }
    ],
    confusions: [
      {
        nom: "Digitale pourpre",
        latin: "Digitalis purpurea",
        danger: "mortel",
        differences: ["Feuilles douces, laineuses, comme du velours, alors que la consoude est rêche.", "Pas d'ailes sur la tige.", "Fleurs en grands doigts de gant pourpres tachetés à l'intérieur, toutes du même côté d'une longue tige.", "Pousse plutôt sur sols acides secs, clairières et talus forestiers."]
      },
      {
        nom: "Bourrache officinale",
        latin: "Borago officinalis",
        danger: "toxique",
        differences: ["Fleurs bleues en étoile, pas en clochette.", "Plante annuelle plus petite.", "Contient aussi des alcaloïdes pyrrolizidiniques."]
      }
    ],
    precautions: [
      "Contient des alcaloïdes pyrrolizidiniques toxiques pour le foie, cumulatifs et suspectés cancérigènes : usage interne (tisane, consommation des feuilles) déconseillé.",
      "Usage externe seulement sur peau intacte, jamais sur plaie ouverte, et pendant une durée limitée.",
      "Interdite chez la femme enceinte ou allaitante et chez l'enfant, même en usage externe prolongé.",
      "La racine en contient bien plus que les feuilles."
    ],
    sources: [
      { titre: "Wikipédia : Consoude officinale", url: "https://fr.wikipedia.org/wiki/Consoude_officinale" },
      { titre: "Wikipédia : Digitale pourpre", url: "https://fr.wikipedia.org/wiki/Digitale_pourpre" }
    ]
  },
  {
    id: "berce-commune",
    nom: "Berce commune",
    latin: "Heracleum sphondylium",
    famille: "Apiacées",
    autresNoms: ["Berce des prés", "Branc-ursine bâtarde", "Patte d'ours"],
    statut: "comestible",
    resume: "Grande ombellifère velue des prés et lisières, délicieuse en jeunes pousses et boutons floraux au goût d'agrume. Sa sève est phototoxique et elle doit être distinguée des ciguës et de la berce du Caucase.",
    habitat: "Prairies fraîches, lisières, bords de chemins, talus.",
    habitats: ["prairie", "haie", "bord-chemin", "foret", "montagne"],
    regions: "Partout en France, plus rare en région méditerranéenne.",
    recolte: [4, 5, 6, 7, 8, 9],
    floraison: [6, 7, 8, 9],
    couleurFleur: ["blanc", "rose"],
    typeFeuille: "Grandes feuilles alternes, rugueuses et velues, divisées en 5 à 7 larges lobes dentés, pétiole engainant.",
    reconnaissance: [
      "Toute la plante est couverte de poils blanchâtres doux, y compris les feuilles.",
      "Tige creuse et cannelée, de 50 à 150 cm, rarement plus de 2 m, sans grosses taches pourpres.",
      "Grandes feuilles rugueuses à larges segments, à la manière d'une patte d'ours.",
      "Grandes ombelles plates de 15 à 30 rayons, fleurs extérieures à pétales plus grands.",
      "Graines plates, rondes, ailées.",
      "Odeur aromatique forte, rappelant un peu l'agrume et la carotte."
    ],
    partiesUtilisees: ["jeunes feuilles", "jeunes tiges pelées", "boutons floraux", "graines"],
    bienfaits: [
      "Réputée stimulante et tonique dans la tradition populaire."
    ],
    usages: ["boutons floraux poêlés au beurre", "jeunes tiges pelées crues ou cuites", "graines comme épice aux notes d'orange"],
    recettes: [
      {
        titre: "Boutons de berce poêlés",
        type: "cuisine",
        ingredients: ["2 poignées de boutons floraux encore enfermés dans leur gaine", "Beurre", "Sel, poivre"],
        etapes: ["Cueillir avec des gants et éviter tout contact de la sève avec la peau au soleil.", "Faire revenir les boutons au beurre 5 minutes à feu moyen.", "Saler, poivrer et servir aussitôt."]
      }
    ],
    confusions: [
      {
        nom: "Berce du Caucase",
        latin: "Heracleum mantegazzianum",
        danger: "toxique",
        differences: ["Plante géante de 2 à 4 m, ombelle principale pouvant dépasser 50 cm et 50 rayons.", "Tige épaisse marquée de nombreuses taches pourpres, poils raides et clairsemés.", "Feuilles immenses, très découpées et pointues, glabres sur le limbe.", "Sève provoquant de graves brûlures au soleil (photodermatite), parfois durables : ne pas toucher."]
      },
      {
        nom: "Grande ciguë",
        latin: "Conium maculatum",
        danger: "mortel",
        differences: ["Tige totalement glabre, lisse, couverte d'une pruine bleutée et tachée de pourpre.", "Feuilles très finement découpées, comme celles du persil, et non en larges lobes.", "Odeur désagréable d'urine de souris au froissement."]
      },
      {
        nom: "Œnanthe safranée",
        latin: "Oenanthe crocata",
        danger: "mortel",
        differences: ["Pousse les pieds dans l'eau ou dans les sols détrempés.", "Plante glabre et luisante.", "Racines renflées en grappe de tubercules, suc devenant jaune orangé à l'air."]
      }
    ],
    precautions: [
      "Sa sève contient des furocoumarines : manipuler avec des gants et ne pas exposer au soleil une peau qui l'a touchée.",
      "Les ombellifères comptent les plantes les plus mortelles de France : ne consommer qu'une berce identifiée avec certitude, idéalement avec une personne expérimentée.",
      "Le seul fait d'être velue n'est pas une preuve : vérifier l'ensemble des critères.",
      "Éviter pendant la grossesse."
    ],
    sources: [
      { titre: "Wikipédia : Berce commune", url: "https://fr.wikipedia.org/wiki/Berce_commune" },
      { titre: "Wikipédia : Berce du Caucase", url: "https://fr.wikipedia.org/wiki/Berce_du_Caucase" },
      { titre: "Wikipédia : Œnanthe safranée", url: "https://fr.wikipedia.org/wiki/%C5%92nanthe_safran%C3%A9e" }
    ]
  },
  {
    id: "carotte-sauvage",
    nom: "Carotte sauvage",
    latin: "Daucus carota",
    famille: "Apiacées",
    autresNoms: ["Daucus", "Nid d'oiseau", "Carotte à moucher"],
    statut: "comestible",
    resume: "Ancêtre de la carotte cultivée, reconnaissable à son ombelle blanche souvent marquée d'une fleur pourpre au centre et qui se referme en nid. Comestible, mais très proche d'aspect des ciguës et de l'œnanthe, mortelles.",
    habitat: "Prairies sèches, talus, friches, bords de chemins, dunes.",
    habitats: ["prairie", "friche", "bord-chemin", "littoral"],
    regions: "Partout en France, très commune en plaine.",
    recolte: [3, 4, 6, 7, 8, 9, 10],
    floraison: [6, 7, 8, 9],
    couleurFleur: ["blanc"],
    typeFeuille: "Feuilles alternes très découpées (2 à 3 fois pennées), velues, à segments fins.",
    reconnaissance: [
      "Tige pleine, raide, couverte de poils rudes, sans taches pourpres.",
      "Racine et feuilles froissées sentent nettement la carotte.",
      "Sous l'ombelle, une collerette de longues bractées divisées en lanières fines, comme une fourche.",
      "Souvent une petite fleur pourpre foncé au centre de l'ombelle blanche.",
      "En graines, l'ombelle se recourbe en nid d'oiseau.",
      "Racine blanchâtre, fine, dure dès la deuxième année."
    ],
    partiesUtilisees: ["racine de première année", "jeunes feuilles", "fleurs", "graines"],
    bienfaits: [
      "Graines traditionnellement utilisées pour la digestion et contre les ballonnements.",
      "Réputée diurétique dans la tradition populaire."
    ],
    usages: ["racine jeune râpée ou cuite", "fleurs en beignets", "graines en épice", "feuilles ciselées comme du persil"],
    recettes: [
      {
        titre: "Beignets d'ombelles de carotte sauvage",
        type: "cuisine",
        ingredients: ["10 ombelles bien identifiées", "100 g de farine", "1 œuf", "15 cl de lait ou de bière", "Huile de friture"],
        etapes: ["Préparer une pâte à beignets avec la farine, l'œuf et le liquide.", "Tremper chaque ombelle en la tenant par la tige.", "Frire 1 à 2 minutes dans l'huile chaude et égoutter.", "Saler ou sucrer selon l'envie."]
      }
    ],
    confusions: [
      {
        nom: "Grande ciguë",
        latin: "Conium maculatum",
        danger: "mortel",
        differences: ["Tige lisse sans aucun poil, couverte d'une pruine bleutée qui s'efface au doigt, tachée de pourpre.", "Odeur désagréable d'urine de souris, jamais de carotte.", "Plante souvent bien plus haute (jusqu'à 2 m), feuilles molles et luisantes.", "Pas de longues bractées en fourche sous l'ombelle."]
      },
      {
        nom: "Petite ciguë",
        latin: "Aethusa cynapium",
        danger: "mortel",
        differences: ["Plante glabre aux feuilles luisantes dessous.", "Trois petites bractéoles pendantes, comme une barbiche, sous chaque petite ombelle, toutes tournées vers l'extérieur.", "Odeur fétide au froissement.", "Pousse dans les jardins et cultures."]
      },
      {
        nom: "Œnanthe safranée",
        latin: "Oenanthe crocata",
        danger: "mortel",
        differences: ["Pousse dans l'eau ou en sol détrempé.", "Plante glabre, tige épaisse et creuse.", "Racines en grappe de tubercules, suc jaune à l'air."]
      },
      {
        nom: "Ciguë vireuse",
        latin: "Cicuta virosa",
        danger: "mortel",
        differences: ["Plante des marais et bords d'étangs, glabre.", "Souche creuse cloisonnée en chambres quand on la coupe.", "Rare en France mais extrêmement toxique."]
      }
    ],
    precautions: [
      "Ne jamais se fier à un seul critère : poils, odeur, bractées et habitat doivent tous concorder.",
      "Débutant : ne consommer qu'après identification par une personne expérimentée.",
      "Ses feuilles peuvent irriter la peau au soleil chez les personnes sensibles.",
      "Graines déconseillées pendant la grossesse."
    ],
    sources: [
      { titre: "Wikipédia : Carotte sauvage", url: "https://fr.wikipedia.org/wiki/Carotte_sauvage" },
      { titre: "Wikipédia : Grande ciguë", url: "https://fr.wikipedia.org/wiki/Grande_cigu%C3%AB" },
      { titre: "Wikipédia : Petite ciguë", url: "https://fr.wikipedia.org/wiki/Petite_cigu%C3%AB" },
      { titre: "Wikipédia : Œnanthe safranée", url: "https://fr.wikipedia.org/wiki/%C5%92nanthe_safran%C3%A9e" },
      { titre: "Wikipédia : Ciguë vireuse", url: "https://fr.wikipedia.org/wiki/Cigu%C3%AB_vireuse" }
    ]
  },
  {
    id: "cerfeuil-des-bois",
    nom: "Cerfeuil des bois",
    latin: "Anthriscus sylvestris",
    famille: "Apiacées",
    autresNoms: ["Cerfeuil sauvage", "Persil des ânes", "Anthrisque des bois"],
    statut: "comestible",
    resume: "Ombellifère printanière très commune des haies, au goût de cerfeuil et de persil. Considérée par certains botanistes comme un comestible suspect, et dangereuse surtout par sa ressemblance avec les ciguës.",
    habitat: "Haies, lisières, prairies grasses, bords de chemins et de fossés.",
    habitats: ["haie", "prairie", "bord-chemin", "foret"],
    regions: "Partout en France, surtout au Nord de la Loire et en montagne.",
    recolte: [3, 4, 5],
    floraison: [4, 5, 6],
    couleurFleur: ["blanc"],
    typeFeuille: "Feuilles alternes triangulaires, 2 à 3 fois divisées, d'un vert franc, un peu luisantes, finement découpées comme de la fougère.",
    reconnaissance: [
      "Tige creuse, cannelée, verte, poilue en bas et lisse en haut, sans taches pourpres.",
      "Nœuds de la tige légèrement renflés.",
      "Pas de collerette de bractées sous l'ombelle principale, mais de petites bractéoles sous les ombellules.",
      "Fleurs blanches en ombelles légères, très tôt au printemps (avril, mai).",
      "Feuilles froissées à odeur de cerfeuil un peu anisée.",
      "Fruits allongés, lisses, noirs et brillants à maturité."
    ],
    partiesUtilisees: ["jeunes feuilles", "jeunes tiges"],
    bienfaits: [
      "Peu d'usages médicinaux reconnus ; plante surtout aromatique."
    ],
    usages: ["jeunes feuilles ciselées en petite quantité comme du cerfeuil", "dans les soupes vertes"],
    recettes: [
      {
        titre: "Soupe verte au cerfeuil des bois",
        type: "cuisine",
        ingredients: ["1 petite poignée de jeunes feuilles identifiées avec certitude", "2 pommes de terre", "1 poireau", "1 litre d'eau ou de bouillon"],
        etapes: ["Cuire poireau et pommes de terre 20 minutes dans le bouillon.", "Ajouter les feuilles ciselées hors du feu.", "Mixer et servir ; garder une consommation occasionnelle."]
      }
    ],
    confusions: [
      {
        nom: "Grande ciguë",
        latin: "Conium maculatum",
        danger: "mortel",
        differences: ["Tige totalement glabre, pruineuse, tachée de pourpre en bas.", "Odeur d'urine de souris au froissement.", "Fleurit plus tard, en été.", "Feuilles plus grandes, molles et vert bleuté."]
      },
      {
        nom: "Petite ciguë",
        latin: "Aethusa cynapium",
        danger: "mortel",
        differences: ["Bractéoles pendantes en barbiche sous les ombellules, côté extérieur.", "Feuilles très luisantes dessous, odeur désagréable.", "Plante annuelle des jardins et cultures, fleurissant en été."]
      },
      {
        nom: "Cerfeuil des fous (cerfeuil penché)",
        latin: "Chaerophyllum temulum",
        danger: "toxique",
        differences: ["Tige pleine, entièrement couverte de poils raides et tachetée de pourpre.", "Nœuds nettement renflés.", "Boutons d'ombelles penchés avant floraison."]
      }
    ],
    precautions: [
      "Classé « comestible suspect » par certains spécialistes des ombellifères en raison de sa composition (lignanes cytotoxiques) : consommation occasionnelle et en petite quantité.",
      "Aucune intoxication humaine documentée, mais les confusions avec les ciguës sont les vrais dangers : ne cueillir qu'avec une identification certaine.",
      "Déconseillé pendant la grossesse et chez l'enfant.",
      "Débutant : préférer l'observation à la consommation."
    ],
    sources: [
      { titre: "Wikipédia : Anthriscus sylvestris", url: "https://fr.wikipedia.org/wiki/Anthriscus_sylvestris" },
      { titre: "Wikipédia : Grande ciguë", url: "https://fr.wikipedia.org/wiki/Grande_cigu%C3%AB" },
      { titre: "Wikipédia : Petite ciguë", url: "https://fr.wikipedia.org/wiki/Petite_cigu%C3%AB" },
      { titre: "Wikipédia : Chaerophyllum temulum", url: "https://fr.wikipedia.org/wiki/Chaerophyllum_temulum" }
    ]
  },
  {
    id: "egopode",
    nom: "Égopode podagraire",
    latin: "Aegopodium podagraria",
    famille: "Apiacées",
    autresNoms: ["Herbe aux goutteux", "Herbe à Gérard", "Petit frêne"],
    statut: "comestible-medicinale",
    resume: "Ombellifère envahissante des jardins ombragés et sous-bois, au goût de céleri et de carotte. Ses feuilles divisées en trois puis trois la distinguent assez bien des ciguës, à condition de bien regarder.",
    habitat: "Sous-bois frais, lisières, haies, jardins ombragés, parcs.",
    habitats: ["foret", "haie", "jardin"],
    regions: "Moitié nord de la France et montagnes ; plus rare dans le Midi.",
    recolte: [3, 4, 5, 6],
    floraison: [5, 6, 7],
    couleurFleur: ["blanc"],
    typeFeuille: "Feuilles à long pétiole, divisées en 3 groupes de 3 folioles ovales dentées, comme une petite feuille de frêne.",
    reconnaissance: [
      "Feuilles divisées en trois, puis chaque branche encore en trois : souvent 9 folioles ovales et dentées.",
      "Pétiole à section triangulaire, creusé en gouttière.",
      "Odeur de céleri, de carotte ou de persil au froissement.",
      "Forme des tapis denses par ses rhizomes blancs traçants.",
      "Ombelles blanches sans collerette de bractées, en début d'été."
    ],
    partiesUtilisees: ["jeunes feuilles", "jeunes pousses"],
    bienfaits: [
      "Traditionnellement utilisé contre la goutte et les douleurs articulaires, d'où son nom.",
      "Réputé diurétique."
    ],
    usages: ["jeunes feuilles crues en salade", "cuit comme des épinards", "dans les soupes et quiches"],
    recettes: [
      {
        titre: "Égopode à la crème",
        type: "cuisine",
        ingredients: ["300 g de jeunes feuilles d'égopode", "1 échalote", "10 cl de crème", "Sel, poivre, muscade"],
        etapes: ["Laver et hacher grossièrement les feuilles.", "Faire revenir l'échalote, ajouter les feuilles et cuire 5 minutes.", "Ajouter la crème, assaisonner et servir."]
      }
    ],
    confusions: [
      {
        nom: "Œnanthe safranée",
        latin: "Oenanthe crocata",
        danger: "mortel",
        differences: ["Pousse dans l'eau ou en sol détrempé.", "Feuilles plus divisées, à segments en coin, luisantes.", "Racines en tubercules groupés, suc jaune à l'air."]
      },
      {
        nom: "Grande ciguë",
        latin: "Conium maculatum",
        danger: "mortel",
        differences: ["Feuilles très finement découpées, jamais en 9 folioles larges.", "Tige glabre tachée de pourpre, odeur d'urine de souris."]
      },
      {
        nom: "Angélique sauvage (jeunes feuilles)",
        latin: "Angelica sylvestris",
        danger: "sans-danger",
        differences: ["Plante plus grande, pétiole très engainant et renflé.", "Folioles plus nombreuses et plus grandes."]
      }
    ],
    precautions: [
      "Comme toute ombellifère, ne consommer qu'après identification certaine.",
      "Récolter jeune : les feuilles âgées deviennent fortes et légèrement laxatives.",
      "Usage médicinal prolongé : avis médical."
    ],
    sources: [
      { titre: "Wikipédia : Égopode podagraire", url: "https://fr.wikipedia.org/wiki/%C3%89gopode_podagraire" },
      { titre: "Wikipédia : Œnanthe safranée", url: "https://fr.wikipedia.org/wiki/%C5%92nanthe_safran%C3%A9e" }
    ]
  },
  {
    id: "lierre-terrestre",
    nom: "Lierre terrestre",
    latin: "Glechoma hederacea",
    famille: "Lamiacées",
    autresNoms: ["Gléchome", "Rondelette"],
    statut: "comestible-medicinale",
    resume: "Petite plante rampante aux feuilles rondes crénelées et aux fleurs violettes, très aromatique. Aromate puissant et remède traditionnel des bronches, à utiliser en petites quantités.",
    habitat: "Haies, lisières, pelouses, jardins, sous-bois clairs.",
    habitats: ["haie", "foret", "jardin", "prairie", "bord-chemin"],
    regions: "Partout en France.",
    recolte: [3, 4, 5, 6],
    floraison: [3, 4, 5, 6],
    couleurFleur: ["violet", "bleu"],
    typeFeuille: "Feuilles opposées, rondes à réniformes, bordées de grosses crénelures arrondies, sur tiges rampantes.",
    reconnaissance: [
      "Tiges rampantes qui s'enracinent aux nœuds, rameaux fleuris redressés, tige carrée.",
      "Feuilles rondes ou en rein, à gros festons arrondis, opposées deux à deux.",
      "Odeur balsamique forte entre menthe et résine quand on froisse.",
      "Fleurs violettes en gueule, tachées de pourpre sur la lèvre inférieure, par 2 à 4 à l'aisselle des feuilles."
    ],
    partiesUtilisees: ["feuilles", "sommités fleuries"],
    bienfaits: [
      "Traditionnellement utilisé pour dégager les bronches et calmer la toux grasse.",
      "Réputé digestif."
    ],
    usages: ["quelques feuilles ciselées comme aromate dans les salades, omelettes et sauces", "infusion", "fleurs en décoration"],
    recettes: [
      {
        titre: "Infusion de lierre terrestre",
        type: "infusion",
        ingredients: ["1 cuillère à café de sommités séchées (environ 1,5 g)", "250 ml d'eau frémissante", "Miel"],
        etapes: ["Verser l'eau sur la plante.", "Infuser 10 minutes à couvert.", "Filtrer, sucrer au miel ; 2 tasses par jour au plus, en cure courte."]
      }
    ],
    confusions: [
      {
        nom: "Lierre grimpant",
        latin: "Hedera helix",
        danger: "toxique",
        differences: ["Confusion de nom plus que d'aspect : liane ligneuse aux feuilles coriaces et luisantes, persistantes.", "Feuilles lobées en étoile, sans odeur aromatique.", "Baies noires toxiques."]
      },
      {
        nom: "Alliaire officinale",
        latin: "Alliaria petiolata",
        danger: "sans-danger",
        differences: ["Feuilles plus claires et alternes, odeur d'ail.", "Fleurs blanches à 4 pétales."]
      }
    ],
    precautions: [
      "Plante puissante : ne pas en consommer en grande quantité.",
      "Toxique pour les chevaux, les chiens, les chats et les tortues.",
      "Déconseillé pendant la grossesse et l'allaitement, et chez l'enfant.",
      "Éviter en cas de maladie du foie ou des reins sans avis médical."
    ],
    sources: [
      { titre: "Wikipédia : Lierre terrestre", url: "https://fr.wikipedia.org/wiki/Lierre_terrestre" }
    ]
  },
  {
    id: "alliaire",
    nom: "Alliaire officinale",
    latin: "Alliaria petiolata",
    famille: "Brassicacées",
    autresNoms: ["Herbe à ail", "Alliaire"],
    statut: "comestible",
    resume: "Plante des haies au goût d'ail et de moutarde, aux feuilles en cœur et aux petites fleurs blanches en croix. Excellent condiment de printemps, sans confusion grave quand on vérifie l'odeur.",
    habitat: "Haies, lisières, sous-bois clairs, bords de chemins ombragés, jardins.",
    habitats: ["haie", "foret", "bord-chemin", "jardin"],
    regions: "Partout en France, plus rare en région méditerranéenne.",
    recolte: [2, 3, 4, 5, 6],
    floraison: [4, 5, 6],
    couleurFleur: ["blanc"],
    typeFeuille: "Feuilles alternes en cœur ou en triangle, bordées de dents irrégulières, longuement pétiolées.",
    reconnaissance: [
      "Feuilles froissées à odeur d'ail mêlée de chou ou de moutarde.",
      "Feuilles de la base rondes à réniformes, celles du haut triangulaires et pointues.",
      "Petites fleurs blanches à 4 pétales disposés en croix.",
      "Fruits en longues siliques fines et dressées.",
      "Tige dressée de 30 à 100 cm, peu ramifiée."
    ],
    partiesUtilisees: ["feuilles", "fleurs", "graines", "racine"],
    bienfaits: [
      "Réputée dépurative et anti-infectieuse dans la tradition populaire."
    ],
    usages: ["feuilles ciselées dans les salades et sauces", "pesto doux à l'ail", "graines en moutarde", "racine râpée façon raifort"],
    recettes: [
      {
        titre: "Sauce verte à l'alliaire",
        type: "cuisine",
        ingredients: ["1 poignée de feuilles d'alliaire", "1 yaourt ou fromage blanc", "1 filet d'huile d'olive", "Sel, poivre"],
        etapes: ["Hacher finement les feuilles.", "Mélanger au fromage blanc avec l'huile.", "Assaisonner et servir avec des pommes de terre ou des crudités."]
      }
    ],
    confusions: [
      {
        nom: "Ficaire fausse-renoncule",
        latin: "Ficaria verna",
        danger: "irritant",
        differences: ["Feuilles en cœur plus petites, épaisses, très luisantes, à bords presque lisses.", "Aucune odeur d'ail.", "Fleurs jaunes brillantes à nombreux pétales."]
      },
      {
        nom: "Lierre terrestre",
        latin: "Glechoma hederacea",
        danger: "sans-danger",
        differences: ["Feuilles opposées, plus foncées, crénelures régulières.", "Odeur balsamique, pas d'ail."]
      }
    ],
    precautions: [
      "Goût fort : à utiliser comme condiment.",
      "Les feuilles âgées deviennent amères.",
      "Contient des composés soufrés comme la moutarde : modération en cas d'estomac ou de thyroïde fragiles."
    ],
    sources: [
      { titre: "Wikipédia : Alliaire officinale", url: "https://fr.wikipedia.org/wiki/Alliaire_officinale" },
      { titre: "Wikipédia : Lierre terrestre", url: "https://fr.wikipedia.org/wiki/Lierre_terrestre" }
    ]
  },
  {
    id: "ronce",
    nom: "Ronce commune",
    latin: "Rubus fruticosus",
    famille: "Rosacées",
    autresNoms: ["Mûrier sauvage", "Ronce des bois", "Mûre de ronce"],
    statut: "comestible-medicinale",
    resume: "Arbuste épineux omniprésent, connu pour ses mûres de fin d'été. Ses jeunes feuilles sont un remède astringent traditionnel pour la gorge et les petits troubles digestifs.",
    habitat: "Haies, friches, lisières, coupes forestières, talus.",
    habitats: ["haie", "friche", "foret", "bord-chemin"],
    regions: "Partout en France.",
    recolte: [4, 5, 6, 8, 9],
    floraison: [5, 6, 7, 8],
    couleurFleur: ["blanc", "rose"],
    typeFeuille: "Feuilles alternes composées de 3 à 5 folioles dentées, aiguillons crochus sous les nervures.",
    reconnaissance: [
      "Tiges arquées couvertes d'aiguillons crochus qui accrochent.",
      "Feuilles à 3 ou 5 folioles disposées en main, souvent blanchâtres dessous.",
      "Fleurs blanches ou rose pâle à 5 pétales froissés.",
      "Mûres formées de petites drupes noires luisantes serrées, qui ne se détachent pas en dé creux comme la framboise."
    ],
    partiesUtilisees: ["fruits", "jeunes feuilles", "jeunes pousses pelées"],
    bienfaits: [
      "Feuilles traditionnellement utilisées en gargarisme pour les maux de gorge et aphtes.",
      "Réputées calmer les diarrhées légères grâce à leurs tanins."
    ],
    usages: ["mûres crues, en confiture, gelée, sirop, tarte", "infusion de jeunes feuilles", "jeunes pousses pelées crues"],
    recettes: [
      {
        titre: "Infusion de feuilles de ronce",
        type: "infusion",
        ingredients: ["1 cuillère à soupe de jeunes feuilles séchées (environ 2 g)", "250 ml d'eau frémissante"],
        etapes: ["Verser l'eau sur les feuilles.", "Infuser 10 minutes.", "Filtrer ; en boisson 2 à 3 tasses par jour, ou en gargarisme tiède."]
      },
      {
        titre: "Gelée de mûres",
        type: "cuisine",
        ingredients: ["1 kg de mûres", "Sucre (même poids que le jus obtenu)", "1 citron"],
        etapes: ["Cuire les mûres 10 minutes avec un fond d'eau.", "Filtrer le jus à travers un linge.", "Cuire jus, sucre et citron jusqu'à ce qu'une goutte fige sur une assiette froide.", "Mettre en pots stérilisés."]
      }
    ],
    confusions: [
      {
        nom: "Framboisier",
        latin: "Rubus idaeus",
        danger: "sans-danger",
        differences: ["Fruits rouges qui se détachent en dé creux.", "Aiguillons fins et nombreux, tiges dressées."]
      }
    ],
    precautions: [
      "Cueillir les mûres au-dessus de la hauteur d'un chien et éviter les bords de chemins : risque d'échinococcose et de souillures.",
      "Laver les fruits ; en zone à risque d'échinococcose (Est, Jura, Alpes, Massif central), préférer les cuire.",
      "Éviter les ronces des bords de routes et des champs traités."
    ],
    sources: [
      { titre: "Wikipédia : Ronce commune", url: "https://fr.wikipedia.org/wiki/Ronce_commune" },
      { titre: "Wikipédia : Myrtille (échinococcose)", url: "https://fr.wikipedia.org/wiki/Myrtille" }
    ]
  },
  {
    id: "eglantier",
    nom: "Églantier",
    latin: "Rosa canina",
    famille: "Rosacées",
    autresNoms: ["Rosier des chiens", "Rosier sauvage", "Gratte-cul"],
    statut: "comestible-medicinale",
    resume: "Rosier sauvage des haies dont les fruits rouges, les cynorrhodons, sont parmi les plus riches en vitamine C. Les poils intérieurs sont irritants et doivent être retirés.",
    habitat: "Haies, lisières, talus, friches, pâtures embroussaillées.",
    habitats: ["haie", "friche", "bord-chemin", "foret"],
    regions: "Partout en France jusqu'à moyenne montagne.",
    recolte: [9, 10, 11],
    floraison: [5, 6, 7],
    couleurFleur: ["rose", "blanc"],
    typeFeuille: "Feuilles alternes composées de 5 à 7 folioles ovales dentées, aiguillons crochus sur les tiges.",
    reconnaissance: [
      "Arbuste aux longues tiges arquées munies d'aiguillons crochus.",
      "Fleurs simples à 5 pétales rose pâle à blancs, parfum léger.",
      "Fruits ovoïdes rouge vif, lisses et luisants, couronnés par les restes du calice.",
      "Intérieur du fruit rempli de graines dures entourées de poils raides (le « poil à gratter »)."
    ],
    partiesUtilisees: ["fruits", "pétales"],
    bienfaits: [
      "Fruits traditionnellement utilisés comme source de vitamine C en hiver.",
      "Réputés toniques et soutenir les défenses naturelles."
    ],
    usages: ["confiture et purée de cynorrhodons filtrés", "infusion de fruits séchés", "pétales en sirop ou en salade"],
    recettes: [
      {
        titre: "Infusion de cynorrhodons",
        type: "infusion",
        ingredients: ["1 cuillère à soupe de fruits séchés et épépinés (environ 3 g)", "250 ml d'eau"],
        etapes: ["Faire frémir les fruits 5 minutes dans l'eau.", "Laisser infuser 10 minutes hors du feu.", "Filtrer à travers un filtre fin pour retenir tous les poils ; 2 à 3 tasses par jour."]
      },
      {
        titre: "Confiture de cynorrhodons",
        type: "cuisine",
        ingredients: ["1 kg de cynorrhodons blettis après les premiers froids", "Eau", "Sucre (même poids que la purée)"],
        etapes: ["Cuire les fruits couverts d'eau jusqu'à ce qu'ils soient tendres.", "Passer au moulin à légumes grille fine puis au tamis pour éliminer graines et poils.", "Cuire la purée avec le sucre 10 minutes et mettre en pots."]
      }
    ],
    confusions: [
      {
        nom: "Morelle douce-amère",
        latin: "Solanum dulcamara",
        danger: "toxique",
        differences: ["Liane sans aiguillons, fleurs violettes à cœur jaune.", "Baies rouges plus petites, molles, en grappes pendantes, sans couronne de sépales.", "Feuilles simples, souvent avec deux oreillettes à la base."]
      },
      {
        nom: "If",
        latin: "Taxus baccata",
        danger: "mortel",
        differences: ["Conifère à aiguilles plates vert foncé.", "Fruit rouge en coupe ouverte laissant voir une graine (très toxique).", "Toutes les parties sauf la chair rouge sont mortelles."]
      }
    ],
    precautions: [
      "Retirer soigneusement graines et poils : ils irritent la bouche et l'intestin.",
      "Bien filtrer les infusions.",
      "Éviter les haies bordant routes et cultures traitées."
    ],
    sources: [
      { titre: "Wikipédia : Rosier des chiens", url: "https://fr.wikipedia.org/wiki/Rosier_des_chiens" }
    ]
  },
  {
    id: "prunellier",
    nom: "Prunellier",
    latin: "Prunus spinosa",
    famille: "Rosacées",
    autresNoms: ["Épine noire", "Prunier épineux", "Pelossier"],
    statut: "comestible-medicinale",
    resume: "Arbuste très épineux qui fleurit en blanc sur bois nu dès la fin de l'hiver. Ses petites prunes bleu-noir, très âpres, s'adoucissent après les gelées.",
    habitat: "Haies, lisières, talus, pâtures embroussaillées, coteaux.",
    habitats: ["haie", "friche", "bord-chemin", "foret"],
    regions: "Partout en France jusqu'à moyenne montagne.",
    recolte: [3, 4, 10, 11, 12],
    floraison: [3, 4],
    couleurFleur: ["blanc"],
    typeFeuille: "Petites feuilles alternes ovales, finement dentées, sur rameaux noirâtres épineux.",
    reconnaissance: [
      "Floraison blanche très précoce sur rameaux sans feuilles.",
      "Rameaux sombres terminés en épines longues et dures.",
      "Petites feuilles ovales non lobées, finement dentées.",
      "Fruits ronds bleu-noir couverts d'une pruine bleutée, chair verte très âpre, un noyau.",
      "Forme des fourrés denses par drageons."
    ],
    partiesUtilisees: ["fruits", "fleurs"],
    bienfaits: [
      "Fleurs traditionnellement utilisées comme laxatif doux et dépuratif.",
      "Fruits réputés astringents, employés en tradition pour les diarrhées légères."
    ],
    usages: ["prunelles blettes en confiture ou gelée", "liqueur de prunelles", "infusion de fleurs"],
    recettes: [
      {
        titre: "Infusion de fleurs de prunellier",
        type: "infusion",
        ingredients: ["1 cuillère à café de fleurs séchées (environ 1 g)", "250 ml d'eau frémissante"],
        etapes: ["Verser l'eau sur les fleurs.", "Infuser 10 minutes.", "Filtrer ; 1 à 2 tasses par jour, en cure courte."]
      }
    ],
    confusions: [
      {
        nom: "Troène commun (fruits)",
        latin: "Ligustrum vulgare",
        danger: "toxique",
        differences: ["Arbuste sans épines, feuilles opposées étroites et lisses.", "Baies noires luisantes, sans pruine, en grappes dressées.", "Fleurs blanches odorantes en été, pas au printemps sur bois nu."]
      },
      {
        nom: "Aubépine",
        latin: "Crataegus monogyna",
        danger: "sans-danger",
        differences: ["Fleurit après l'apparition des feuilles.", "Feuilles lobées, fruits rouges."]
      }
    ],
    precautions: [
      "Ne pas croquer ni broyer les noyaux : ils contiennent des composés libérant du cyanure.",
      "Attendre les gelées ou congeler les fruits pour diminuer l'âpreté.",
      "Fleurs : usage ponctuel, déconseillé pendant la grossesse."
    ],
    sources: [
      { titre: "Wikipédia : Prunellier", url: "https://fr.wikipedia.org/wiki/Prunellier" }
    ]
  },
  {
    id: "chataignier",
    nom: "Châtaignier",
    latin: "Castanea sativa",
    famille: "Fagacées",
    autresNoms: ["Arbre à pain", "Châtaigne"],
    statut: "comestible",
    resume: "Grand arbre des sols acides dont les châtaignes, protégées par une bogue très piquante, sont un aliment de base traditionnel. À ne pas confondre avec le marron d'Inde, toxique.",
    habitat: "Forêts et coteaux sur sols acides (granite, schiste, grès), vergers anciens.",
    habitats: ["foret", "haie", "montagne"],
    regions: "Massif central, Cévennes, Ardèche, Bretagne, Limousin, Corse, Pyrénées, Vosges ; absent des sols calcaires.",
    recolte: [10, 11],
    floraison: [6, 7],
    couleurFleur: ["jaune", "blanc"],
    typeFeuille: "Feuilles simples, alternes, longues et étroites, bordées de dents pointues régulières comme une scie.",
    reconnaissance: [
      "Feuille simple, allongée, à dents aiguës bien régulières.",
      "Bogue couverte de piquants fins, longs et très serrés, comme un oursin.",
      "Châtaigne aplatie d'un côté, terminée par une petite pointe ou une touffe de poils.",
      "Chatons jaunâtres à odeur forte en début d'été.",
      "Écorce de vieux arbre crevassée en spirale."
    ],
    partiesUtilisees: ["fruits"],
    bienfaits: [
      "Aliment énergétique riche en amidon, sans gluten.",
      "Feuilles réputées astringentes dans la tradition populaire."
    ],
    usages: ["châtaignes grillées ou bouillies", "farine de châtaigne", "crème et soupe de châtaignes"],
    recettes: [
      {
        titre: "Châtaignes grillées",
        type: "cuisine",
        ingredients: ["500 g de châtaignes", "Une poêle à fond percé ou le four"],
        etapes: ["Fendre l'écorce de chaque châtaigne avec un couteau pour éviter qu'elle n'éclate.", "Griller 20 à 25 minutes en remuant, ou au four à 220 degrés.", "Envelopper dans un linge 5 minutes avant d'éplucher."]
      }
    ],
    confusions: [
      {
        nom: "Marronnier d'Inde",
        latin: "Aesculus hippocastanum",
        danger: "toxique",
        differences: ["Feuilles composées en main de 5 à 7 grandes folioles, jamais une feuille simple dentée.", "Capsule épaisse portant seulement quelques pointes courtes et espacées.", "Marron rond, lisse et très brillant, sans pointe, avec une grande cicatrice claire.", "Arbre de parcs et d'alignements, fleurs en grandes chandelles dressées au printemps."]
      }
    ],
    precautions: [
      "Le marron d'Inde provoque des troubles digestifs sévères : vérifier feuilles et bogue avant de ramasser.",
      "Préférer les châtaignes cuites ; crues, elles sont indigestes en quantité.",
      "Jeter les fruits véreux ou moisis.",
      "Ramasser avec des gants à cause des piquants."
    ],
    sources: [
      { titre: "Wikipédia : Châtaignier commun", url: "https://fr.wikipedia.org/wiki/Ch%C3%A2taignier_commun" },
      { titre: "Wikipédia : Marronnier commun", url: "https://fr.wikipedia.org/wiki/Marronnier_commun" }
    ]
  },
  {
    id: "menthe-aquatique",
    nom: "Menthe aquatique",
    latin: "Mentha aquatica",
    famille: "Lamiacées",
    autresNoms: ["Menthe à grenouille", "Baume d'eau"],
    statut: "comestible-medicinale",
    resume: "Menthe sauvage des bords d'eau aux fleurs lilas en boules au sommet des tiges, au parfum puissant. Traditionnellement utilisée pour la digestion.",
    habitat: "Bords de ruisseaux, fossés, prairies marécageuses, berges d'étangs.",
    habitats: ["bord-eau", "prairie"],
    regions: "Partout en France dans les zones humides.",
    recolte: [6, 7, 8, 9],
    floraison: [7, 8, 9, 10],
    couleurFleur: ["rose", "violet"],
    typeFeuille: "Feuilles opposées ovales, dentées, pétiolées, souvent velues et teintées de rouge.",
    reconnaissance: [
      "Tige carrée, souvent rougeâtre, velue.",
      "Feuilles opposées deux à deux, ovales et dentées.",
      "Forte odeur de menthe au froissement, parfois un peu poivrée.",
      "Fleurs lilas groupées en tête arrondie au sommet de la tige, avec parfois 1 ou 2 verticilles plus bas.",
      "Pousse les pieds dans l'eau ou en sol détrempé."
    ],
    partiesUtilisees: ["feuilles", "sommités fleuries"],
    bienfaits: [
      "Traditionnellement utilisée pour faciliter la digestion et calmer les ballonnements.",
      "Réputée rafraîchissante et légèrement stimulante."
    ],
    usages: ["infusion", "aromate cuit dans les plats", "sirop de menthe"],
    recettes: [
      {
        titre: "Infusion de menthe aquatique",
        type: "infusion",
        ingredients: ["1 cuillère à café de feuilles séchées (environ 1,5 g) ou 5 feuilles fraîches", "250 ml d'eau frémissante"],
        etapes: ["Verser l'eau sur les feuilles.", "Infuser 5 à 10 minutes à couvert.", "Filtrer ; après les repas, 3 tasses par jour au plus."]
      }
    ],
    confusions: [
      {
        nom: "Lycope d'Europe",
        latin: "Lycopus europaeus",
        danger: "sans-danger",
        differences: ["Aucune odeur de menthe.", "Feuilles profondément découpées à la base.", "Petites fleurs blanches en verticilles le long de la tige."]
      },
      {
        nom: "Épiaire des marais",
        latin: "Stachys palustris",
        danger: "sans-danger",
        differences: ["Odeur désagréable, pas mentholée.", "Fleurs roses en épi allongé, lèvre tachée."]
      }
    ],
    precautions: [
      "Plante de milieu humide pâturé : ne pas consommer crue à cause du risque de douve du foie ; l'infusion à l'eau bouillante et la cuisson réduisent ce risque.",
      "Déconseillée à forte dose en cas de reflux gastrique.",
      "Huile essentielle de menthe interdite chez le jeune enfant et pendant la grossesse."
    ],
    sources: [
      { titre: "Wikipédia : Menthe aquatique", url: "https://fr.wikipedia.org/wiki/Menthe_aquatique" },
      { titre: "Wikipédia : Fasciolose", url: "https://fr.wikipedia.org/wiki/Fasciolose" }
    ]
  },
  {
    id: "melisse",
    nom: "Mélisse officinale",
    latin: "Melissa officinalis",
    famille: "Lamiacées",
    autresNoms: ["Citronnelle", "Herbe au citron", "Piment des abeilles"],
    statut: "comestible-medicinale",
    resume: "Lamiacée au parfum de citron, souvent échappée des jardins, très appréciée en tisane du soir. Utilisée traditionnellement pour la nervosité et la digestion.",
    habitat: "Lisières, haies, abords des villages, friches fraîches, jardins.",
    habitats: ["haie", "jardin", "friche", "bord-chemin"],
    regions: "Spontanée surtout dans le Sud, naturalisée ailleurs près des habitations.",
    recolte: [5, 6, 7, 8, 9],
    floraison: [6, 7, 8],
    couleurFleur: ["blanc"],
    typeFeuille: "Feuilles opposées ovales, crénelées, gaufrées, vert clair.",
    reconnaissance: [
      "Odeur nette de citron au froissement.",
      "Tige carrée, feuilles opposées ovales à grosses crénelures, aspect gaufré.",
      "Ne pique pas, légèrement velue.",
      "Petites fleurs blanches ou rosées en verticilles à l'aisselle des feuilles du haut."
    ],
    partiesUtilisees: ["feuilles", "sommités fleuries"],
    bienfaits: [
      "Traditionnellement utilisée pour la nervosité, le stress et les troubles légers du sommeil.",
      "Réputée apaiser les digestions difficiles et les spasmes."
    ],
    usages: ["infusion", "feuilles fraîches dans les salades de fruits, desserts et boissons", "sirop"],
    recettes: [
      {
        titre: "Infusion de mélisse",
        type: "infusion",
        ingredients: ["1 cuillère à soupe de feuilles séchées (environ 2 g)", "250 ml d'eau frémissante"],
        etapes: ["Verser l'eau sur les feuilles.", "Infuser 10 minutes à couvert pour garder l'arôme.", "Filtrer ; 1 tasse après le repas et 1 le soir."]
      }
    ],
    confusions: [
      {
        nom: "Ortie dioïque",
        latin: "Urtica dioica",
        danger: "sans-danger",
        differences: ["Pique au toucher.", "Pas d'odeur de citron, fleurs vertes pendantes."]
      },
      {
        nom: "Népéta cataire",
        latin: "Nepeta cataria",
        danger: "sans-danger",
        differences: ["Feuilles grisâtres et duveteuses.", "Odeur forte et mentholée, attire les chats."]
      }
    ],
    precautions: [
      "Prudence en cas d'hypothyroïdie traitée : avis médical.",
      "Peut renforcer l'effet des médicaments sédatifs.",
      "Grossesse et allaitement : usage alimentaire seulement."
    ],
    sources: [
      { titre: "Wikipédia : Mélisse officinale", url: "https://fr.wikipedia.org/wiki/M%C3%A9lisse_officinale" }
    ]
  },
  {
    id: "millepertuis",
    nom: "Millepertuis perforé",
    latin: "Hypericum perforatum",
    famille: "Hypéricacées",
    autresNoms: ["Herbe de la Saint-Jean", "Herbe à mille trous", "Chasse-diable"],
    statut: "medicinale",
    resume: "Plante des talus aux fleurs jaunes d'or dont les feuilles paraissent percées de mille trous. Très utilisée en phytothérapie, elle interagit avec de nombreux médicaments.",
    habitat: "Talus, prairies sèches, friches, lisières, bords de chemins.",
    habitats: ["prairie", "friche", "bord-chemin", "haie"],
    regions: "Partout en France.",
    recolte: [6, 7, 8],
    floraison: [6, 7, 8],
    couleurFleur: ["jaune"],
    typeFeuille: "Petites feuilles opposées, ovales allongées, sans pétiole, ponctuées de points translucides.",
    reconnaissance: [
      "Feuille regardée à contre-jour : nombreux petits points translucides comme des trous d'épingle.",
      "Fleurs jaune d'or à 5 pétales bordés de petits points noirs.",
      "Fleurs ou boutons écrasés entre les doigts laissent une trace rouge violacé.",
      "Tige ronde marquée de deux lignes saillantes opposées.",
      "Feuilles opposées sans pétiole."
    ],
    partiesUtilisees: ["sommités fleuries"],
    bienfaits: [
      "Traditionnellement utilisé pour les baisses de moral passagères (usage encadré en phytothérapie).",
      "Huile rouge de millepertuis réputée apaiser petites brûlures et douleurs musculaires, en usage externe."
    ],
    usages: ["macérat huileux (huile rouge) en usage externe", "infusion sur avis d'un professionnel"],
    recettes: [
      {
        titre: "Huile de millepertuis (macérat)",
        type: "macerat",
        ingredients: ["Sommités fleuries fraîches, bien sèches en surface", "Huile d'olive", "Un bocal en verre transparent"],
        etapes: ["Remplir le bocal de fleurs sans tasser et couvrir entièrement d'huile.", "Fermer et exposer au soleil 3 à 4 semaines en secouant de temps en temps : l'huile devient rouge.", "Filtrer, laisser reposer pour éliminer l'eau au fond, mettre en flacon teinté.", "Usage externe seulement, et ne pas exposer la peau traitée au soleil."]
      }
    ],
    confusions: [
      {
        nom: "Séneçon jacobée",
        latin: "Jacobaea vulgaris",
        danger: "toxique",
        differences: ["Fleurs jaunes en capitules (fausses fleurs composées de nombreux petits fleurons), non à 5 pétales.", "Feuilles profondément découpées, sans points translucides.", "Contient des alcaloïdes pyrrolizidiniques toxiques pour le foie."]
      },
      {
        nom: "Autres millepertuis",
        latin: "Hypericum spp.",
        danger: "sans-danger",
        differences: ["Tige carrée ou ailée, ou sans les deux lignes.", "Points translucides absents ou rares.", "Moins riches en principes actifs."]
      }
    ],
    precautions: [
      "Nombreuses interactions médicamenteuses : pilule contraceptive (risque de grossesse), anticoagulants, antidépresseurs, immunosuppresseurs, traitements du VIH, de l'épilepsie, digoxine. Avis médical indispensable avant tout usage interne.",
      "Photosensibilisant : éviter le soleil pendant l'usage interne et sur la peau traitée à l'huile.",
      "Contre-indiqué pendant la grossesse, l'allaitement et chez l'enfant.",
      "Une déprime qui dure relève d'une consultation médicale."
    ],
    sources: [
      { titre: "Wikipédia : Millepertuis perforé", url: "https://fr.wikipedia.org/wiki/Millepertuis_perfor%C3%A9" },
      { titre: "Vidal : Millepertuis", url: "https://www.vidal.fr/parapharmacie/phytotherapie-plantes-medicinales/millepertuis-hypericum-perforatum.html" }
    ]
  },
  {
    id: "matricaire",
    nom: "Matricaire camomille",
    latin: "Matricaria chamomilla",
    famille: "Astéracées",
    autresNoms: ["Camomille allemande", "Camomille sauvage", "Petite camomille"],
    statut: "medicinale",
    resume: "Petite marguerite à l'odeur de pomme dont le cœur jaune est creux et bombé. C'est la camomille de la tisane classique, pour la digestion et le sommeil.",
    habitat: "Champs, bords de cultures, friches, chemins, terrains remués.",
    habitats: ["friche", "bord-chemin", "jardin", "prairie"],
    regions: "Partout en France, surtout en plaine.",
    recolte: [5, 6, 7, 8],
    floraison: [5, 6, 7, 8, 9],
    couleurFleur: ["blanc", "jaune"],
    typeFeuille: "Feuilles alternes très finement découpées en lanières filiformes.",
    reconnaissance: [
      "Capitules à cœur jaune bombé en cône et languettes blanches qui se rabattent vers le bas avec l'âge.",
      "Coupé en deux, le cœur du capitule est creux : critère décisif.",
      "Odeur douce et fruitée de pomme au froissement.",
      "Feuilles très finement divisées, comme des fils.",
      "Plante annuelle de 15 à 50 cm, ramifiée."
    ],
    partiesUtilisees: ["capitules floraux"],
    bienfaits: [
      "Traditionnellement utilisée pour les digestions difficiles, ballonnements et spasmes.",
      "Réputée favoriser la détente et l'endormissement.",
      "Infusion refroidie employée en compresse pour les yeux et la peau irrités."
    ],
    usages: ["infusion", "compresse", "bain de vapeur"],
    recettes: [
      {
        titre: "Infusion de camomille",
        type: "infusion",
        ingredients: ["1 cuillère à soupe de capitules séchés (environ 2 à 3 g)", "250 ml d'eau frémissante"],
        etapes: ["Verser l'eau sur les fleurs.", "Couvrir et infuser 5 à 10 minutes.", "Filtrer ; après le repas ou le soir, 3 tasses par jour au plus."]
      }
    ],
    confusions: [
      {
        nom: "Matricaire inodore",
        latin: "Tripleurospermum inodorum",
        danger: "sans-danger",
        differences: ["Cœur du capitule plein quand on le coupe.", "Pas d'odeur de pomme.", "Capitules plus grands."]
      },
      {
        nom: "Anthémis fétide (camomille puante)",
        latin: "Anthemis cotula",
        danger: "irritant",
        differences: ["Odeur désagréable au froissement.", "Cœur plein, avec de petites écailles entre les fleurons.", "Peut irriter la peau."]
      }
    ],
    precautions: [
      "Allergie possible chez les personnes sensibles aux Astéracées (ambroisie, armoise, arnica).",
      "Prudence en cas de traitement anticoagulant à forte dose.",
      "Grossesse : usage occasionnel en tisane seulement."
    ],
    sources: [
      { titre: "Wikipédia : Matricaire camomille", url: "https://fr.wikipedia.org/wiki/Matricaire_camomille" }
    ]
  },
  {
    id: "reine-des-pres",
    nom: "Reine-des-prés",
    latin: "Filipendula ulmaria",
    famille: "Rosacées",
    autresNoms: ["Spirée ulmaire", "Ulmaire", "Barbe de bouc"],
    statut: "comestible-medicinale",
    resume: "Grande plante des prés humides aux panaches crème qui sentent le miel et l'amande. Contient des dérivés salicylés, à l'origine historique de l'aspirine.",
    habitat: "Prairies humides, fossés, bords de rivières, mégaphorbiaies.",
    habitats: ["bord-eau", "prairie", "montagne"],
    regions: "Partout en France dans les zones humides, plus rare dans le Midi méditerranéen.",
    recolte: [6, 7, 8],
    floraison: [6, 7, 8],
    couleurFleur: ["blanc"],
    typeFeuille: "Feuilles alternes pennées, à grandes folioles dentées alternant avec de petites, foliole terminale à 3 à 5 lobes ; dessous blanchâtre.",
    reconnaissance: [
      "Panaches irréguliers de petites fleurs crème mousseuses, pas une ombelle régulière.",
      "Parfum de miel et d'amande des fleurs ; feuilles froissées à odeur médicinale salicylée.",
      "Tige rougeâtre, raide, de 50 à 150 cm.",
      "Grandes folioles séparées par de petites folioles, terminale découpée en 3 à 5 lobes.",
      "Fruits secs enroulés en spirale."
    ],
    partiesUtilisees: ["sommités fleuries", "feuilles"],
    bienfaits: [
      "Traditionnellement utilisée pour les douleurs articulaires et les états grippaux.",
      "Réputée diurétique et favorisant l'élimination."
    ],
    usages: ["infusion", "fleurs pour parfumer crèmes, desserts et sirops (goût amandé)", "limonade"],
    recettes: [
      {
        titre: "Infusion de reine-des-prés",
        type: "infusion",
        ingredients: ["1 cuillère à soupe de sommités fleuries séchées (environ 2 g)", "250 ml d'eau chaude non bouillante (environ 80 degrés)"],
        etapes: ["Verser l'eau chaude sur les fleurs : l'eau bouillante détruirait une partie des composés.", "Infuser 10 minutes à couvert.", "Filtrer ; 2 à 3 tasses par jour, en cure courte."]
      },
      {
        titre: "Crème dessert parfumée",
        type: "cuisine",
        ingredients: ["50 cl de lait", "3 ombelles fleuries", "3 jaunes d'œufs", "60 g de sucre"],
        etapes: ["Infuser les fleurs 15 minutes dans le lait chaud puis filtrer.", "Fouetter jaunes et sucre, verser le lait dessus.", "Cuire doucement en remuant jusqu'à ce que la crème nappe la cuillère, puis refroidir."]
      }
    ],
    confusions: [
      {
        nom: "Œnanthe safranée",
        latin: "Oenanthe crocata",
        danger: "mortel",
        differences: ["Vraie ombelle : tous les rayons partent du même point.", "Feuilles très découpées en segments en coin, luisantes, sans dessous blanchâtre.", "Pas de parfum de miel ; suc jaune à la coupe des racines."]
      },
      {
        nom: "Ciguë vireuse",
        latin: "Cicuta virosa",
        danger: "mortel",
        differences: ["Ombelles régulières.", "Souche creuse cloisonnée.", "Feuilles divisées en segments étroits et pointus."]
      }
    ],
    precautions: [
      "Contient des salicylés : éviter en cas d'allergie à l'aspirine, d'asthme lié à l'aspirine, d'ulcère et de traitement anticoagulant.",
      "Déconseillée pendant la grossesse, l'allaitement et chez l'enfant.",
      "Ne pas associer à l'aspirine ou aux anti-inflammatoires."
    ],
    sources: [
      { titre: "Wikipédia : Reine-des-prés", url: "https://fr.wikipedia.org/wiki/Reine-des-pr%C3%A9s" },
      { titre: "Wikipédia : Œnanthe safranée", url: "https://fr.wikipedia.org/wiki/%C5%92nanthe_safran%C3%A9e" },
      { titre: "Wikipédia : Ciguë vireuse", url: "https://fr.wikipedia.org/wiki/Cigu%C3%AB_vireuse" }
    ]
  },
  {
    id: "violette",
    nom: "Violette odorante",
    latin: "Viola odorata",
    famille: "Violacées",
    autresNoms: ["Violette de mars", "Violette des haies"],
    statut: "comestible-medicinale",
    resume: "Petite fleur parfumée de la fin de l'hiver aux feuilles en cœur. Fleurs et feuilles se mangent, et la tradition l'emploie pour adoucir la toux.",
    habitat: "Haies, lisières, bords de chemins ombragés, parcs, jardins.",
    habitats: ["haie", "foret", "jardin", "bord-chemin"],
    regions: "Partout en France en plaine et basse montagne.",
    recolte: [2, 3, 4, 5],
    floraison: [2, 3, 4],
    couleurFleur: ["violet", "blanc"],
    typeFeuille: "Feuilles en rosette, en cœur arrondi, finement crénelées, sur longs pétioles.",
    reconnaissance: [
      "Fleurs violettes (parfois blanches) à 5 pétales inégaux, le pétale du bas prolongé en éperon.",
      "Parfum doux et caractéristique des fleurs.",
      "Feuilles en cœur, crénelées, légèrement velues, toutes à la base.",
      "Stolons rampants qui forment des tapis.",
      "Pas de tige feuillée : fleurs et feuilles partent du collet."
    ],
    partiesUtilisees: ["fleurs", "feuilles"],
    bienfaits: [
      "Fleurs traditionnellement utilisées en sirop pour adoucir la toux et la gorge.",
      "Réputée émolliente grâce à ses mucilages."
    ],
    usages: ["fleurs crues en salade ou cristallisées au sucre", "jeunes feuilles en salade ou soupe", "sirop de violette"],
    recettes: [
      {
        titre: "Sirop de violette",
        type: "sirop",
        ingredients: ["2 poignées de fleurs fraîches sans tiges", "25 cl d'eau", "400 g de sucre"],
        etapes: ["Verser l'eau frémissante sur les fleurs et laisser infuser 12 heures.", "Filtrer en pressant.", "Ajouter le sucre et chauffer doucement sans bouillir jusqu'à dissolution.", "Conserver au frais ; quelques cuillères par jour en cas de gorge irritée."]
      }
    ],
    confusions: [
      {
        nom: "Ficaire fausse-renoncule (feuilles)",
        latin: "Ficaria verna",
        danger: "irritant",
        differences: ["Feuilles en cœur très luisantes, épaisses, glabres, à bords presque lisses.", "Fleurs jaunes brillantes.", "Crue, elle irrite la bouche et le tube digestif."]
      },
      {
        nom: "Violettes non odorantes",
        latin: "Viola riviniana, Viola reichenbachiana",
        danger: "sans-danger",
        differences: ["Fleurs sans parfum, souvent plus pâles.", "Tiges feuillées portant les fleurs.", "Également comestibles."]
      }
    ],
    precautions: [
      "Ne pas consommer la racine ni les graines : elles sont émétiques (font vomir).",
      "Cueillir avec modération, la plante est parfois peu abondante."
    ],
    sources: [
      { titre: "Wikipédia : Violette odorante", url: "https://fr.wikipedia.org/wiki/Violette_odorante" }
    ]
  },
  {
    id: "paquerette",
    nom: "Pâquerette",
    latin: "Bellis perennis",
    famille: "Astéracées",
    autresNoms: ["Petite marguerite", "Fleur de Pâques"],
    statut: "comestible-medicinale",
    resume: "Petite fleur blanche à cœur jaune des pelouses, en fleur presque toute l'année. Fleurs et jeunes feuilles se mangent crues.",
    habitat: "Pelouses, prairies rases, bords de chemins, parcs.",
    habitats: ["prairie", "jardin", "bord-chemin"],
    regions: "Partout en France.",
    recolte: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    floraison: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    couleurFleur: ["blanc", "jaune", "rose"],
    typeFeuille: "Rosette basale de petites feuilles en spatule, légèrement crénelées.",
    reconnaissance: [
      "Un seul capitule par tige, tige sans feuilles et velue.",
      "Languettes blanches souvent rosées en dessous, cœur jaune plat.",
      "Feuilles en spatule en rosette plaquée au sol.",
      "Capitules qui se referment la nuit et par mauvais temps.",
      "Plante de 5 à 15 cm."
    ],
    partiesUtilisees: ["fleurs", "boutons", "jeunes feuilles"],
    bienfaits: [
      "Traditionnellement utilisée en usage externe sur les bleus et petites contusions.",
      "Réputée adoucissante pour la toux dans la tradition populaire."
    ],
    usages: ["fleurs et boutons crus en salade", "boutons au vinaigre", "jeunes feuilles en salade mélangée"],
    recettes: [
      {
        titre: "Infusion de pâquerette",
        type: "infusion",
        ingredients: ["1 cuillère à soupe de capitules séchés (environ 2 g)", "250 ml d'eau frémissante"],
        etapes: ["Verser l'eau sur les fleurs.", "Infuser 10 minutes.", "Filtrer ; 2 tasses par jour."]
      }
    ],
    confusions: [
      {
        nom: "Matricaires et petites marguerites",
        latin: "Tripleurospermum inodorum, Leucanthemum vulgare",
        danger: "sans-danger",
        differences: ["Tiges feuillées et ramifiées.", "Plantes plus hautes, feuilles découpées."]
      }
    ],
    precautions: [
      "Allergie possible chez les personnes sensibles aux Astéracées.",
      "Éviter les pelouses traitées et les zones fréquentées par les chiens."
    ],
    sources: [
      { titre: "Wikipédia : Pâquerette", url: "https://fr.wikipedia.org/wiki/P%C3%A2querette" }
    ]
  },
  {
    id: "primevere",
    nom: "Primevère officinale",
    latin: "Primula veris",
    famille: "Primulacées",
    autresNoms: ["Coucou", "Herbe de saint Pierre", "Brayette"],
    statut: "comestible-medicinale",
    resume: "Primevère des prés aux clochettes jaune d'or groupées au sommet d'une tige, au parfum doux. Fleurs traditionnellement utilisées pour la toux et le sommeil.",
    habitat: "Prairies sèches à fraîches, pelouses calcaires, lisières claires.",
    habitats: ["prairie", "haie", "montagne"],
    regions: "Une grande partie de la France, surtout sur sols calcaires ; rare en Bretagne et dans le Midi.",
    recolte: [3, 4, 5],
    floraison: [3, 4, 5],
    couleurFleur: ["jaune"],
    typeFeuille: "Rosette de feuilles ovales, gaufrées, rétrécies brusquement en pétiole ailé, duveteuses dessous.",
    reconnaissance: [
      "Fleurs jaune vif en clochettes, groupées en ombelle penchée au sommet d'une tige de 10 à 30 cm.",
      "Chaque pétale porte une petite tache orange à sa base.",
      "Calice renflé vert pâle, comme une petite lanterne.",
      "Feuilles gaufrées, ridées, en rosette.",
      "Parfum doux des fleurs."
    ],
    partiesUtilisees: ["fleurs", "jeunes feuilles", "racine"],
    bienfaits: [
      "Racine traditionnellement utilisée pour faciliter l'expectoration.",
      "Fleurs réputées calmantes et favorisant le sommeil."
    ],
    usages: ["fleurs en salade ou en infusion", "jeunes feuilles cuites en soupe"],
    recettes: [
      {
        titre: "Infusion de fleurs de primevère",
        type: "infusion",
        ingredients: ["1 cuillère à soupe de fleurs séchées (environ 2 g)", "250 ml d'eau frémissante"],
        etapes: ["Verser l'eau sur les fleurs.", "Infuser 10 minutes.", "Filtrer ; 1 à 2 tasses par jour, le soir de préférence."]
      }
    ],
    confusions: [
      {
        nom: "Primevère acaule",
        latin: "Primula vulgaris",
        danger: "sans-danger",
        differences: ["Fleurs jaune pâle, isolées sur de courts pédoncules partant du sol.", "Pas de tige commune.", "Également comestible."]
      }
    ],
    precautions: [
      "Espèce parfois réglementée localement : cueillir avec parcimonie, jamais arracher la racine dans la nature.",
      "Éviter en cas d'allergie à l'aspirine et de traitement anticoagulant (racine).",
      "Déconseillée pendant la grossesse ; la racine peut irriter l'estomac."
    ],
    sources: [
      { titre: "Wikipédia : Primevère officinale", url: "https://fr.wikipedia.org/wiki/Primev%C3%A8re_officinale" }
    ]
  },
  {
    id: "bourrache",
    nom: "Bourrache officinale",
    latin: "Borago officinalis",
    famille: "Boraginacées",
    autresNoms: ["Bourrache", "Langue de bœuf"],
    statut: "comestible-medicinale",
    resume: "Plante velue aux fleurs bleues en étoile, au goût de concombre. Comme la consoude, elle contient des alcaloïdes pyrrolizidiniques : consommation occasionnelle seulement.",
    habitat: "Jardins, friches, bords de cultures, décombres.",
    habitats: ["jardin", "friche", "bord-chemin"],
    regions: "Surtout dans le Sud, échappée des jardins ailleurs.",
    recolte: [5, 6, 7, 8, 9],
    floraison: [5, 6, 7, 8, 9],
    couleurFleur: ["bleu"],
    typeFeuille: "Feuilles alternes ovales, épaisses, ridées, couvertes de poils raides.",
    reconnaissance: [
      "Fleurs bleu vif en étoile à 5 pétales pointus, cône d'étamines noires au centre.",
      "Toute la plante est hérissée de poils raides et piquants.",
      "Tige épaisse, creuse et juteuse.",
      "Feuilles et fleurs au goût frais de concombre."
    ],
    partiesUtilisees: ["fleurs", "jeunes feuilles"],
    bienfaits: [
      "Fleurs traditionnellement utilisées pour favoriser la transpiration lors des refroidissements.",
      "L'huile des graines est utilisée en complément pour la peau (produit transformé)."
    ],
    usages: ["fleurs crues en décoration de salades et desserts", "jeunes feuilles cuites en beignets, occasionnellement"],
    recettes: [
      {
        titre: "Glaçons fleuris",
        type: "boisson",
        ingredients: ["Une dizaine de fleurs de bourrache", "Eau"],
        etapes: ["Retirer le calice velu de chaque fleur.", "Placer une fleur par compartiment de bac à glaçons, couvrir d'eau.", "Congeler et utiliser dans les boissons d'été."]
      }
    ],
    confusions: [
      {
        nom: "Vipérine commune",
        latin: "Echium vulgare",
        danger: "toxique",
        differences: ["Fleurs en tube évasé, bleu-violet, étamines rouges qui dépassent.", "Tige ponctuée de pourpre.", "Contient aussi des alcaloïdes pyrrolizidiniques."]
      },
      {
        nom: "Consoude officinale",
        latin: "Symphytum officinale",
        danger: "toxique",
        differences: ["Fleurs en clochettes pendantes.", "Tige ailée par la base des feuilles.", "Plus riche en alcaloïdes pyrrolizidiniques."]
      }
    ],
    precautions: [
      "Contient des alcaloïdes pyrrolizidiniques toxiques pour le foie : pas de consommation régulière ni prolongée.",
      "Déconseillée pendant la grossesse, l'allaitement, chez l'enfant et en cas de maladie du foie.",
      "Les poils peuvent irriter la peau sensible."
    ],
    sources: [
      { titre: "Wikipédia : Bourrache officinale", url: "https://fr.wikipedia.org/wiki/Bourrache_officinale" }
    ]
  },
  {
    id: "chenopode-bon-henri",
    nom: "Chénopode bon-Henri",
    latin: "Blitum bonus-henricus",
    famille: "Amaranthacées",
    autresNoms: ["Épinard sauvage", "Bon-Henri", "Épinard des montagnes"],
    statut: "comestible",
    resume: "Épinard sauvage des montagnes qui pousse près des chalets et des étables. Ses feuilles triangulaires farineuses se cuisinent comme des épinards.",
    habitat: "Abords des fermes, chalets d'alpage, reposoirs à bétail, sols très riches en azote.",
    habitats: ["montagne", "friche", "prairie"],
    regions: "Surtout en montagne (Alpes, Pyrénées, Massif central, Jura, Vosges), plus rare en plaine.",
    recolte: [4, 5, 6, 7],
    floraison: [5, 6, 7, 8],
    couleurFleur: ["vert"],
    typeFeuille: "Feuilles alternes en fer de lance (hastées), à bords ondulés, couvertes dessous d'une poudre farineuse.",
    reconnaissance: [
      "Feuilles triangulaires en fer de flèche, avec deux oreillettes à la base, bords un peu ondulés.",
      "Jeunes feuilles couvertes d'une fine pellicule farineuse, collante au toucher.",
      "Petites fleurs vertes en épis dressés au sommet de la tige.",
      "Pousse en touffes près des bâtiments d'élevage en montagne."
    ],
    partiesUtilisees: ["feuilles", "jeunes pousses", "inflorescences"],
    bienfaits: [
      "Légume riche en fer et en minéraux dans la tradition montagnarde."
    ],
    usages: ["cuit comme des épinards", "jeunes pousses comme des asperges", "en soupe et en gratin"],
    recettes: [
      {
        titre: "Bon-Henri aux pommes de terre",
        type: "cuisine",
        ingredients: ["500 g de feuilles de bon-Henri", "500 g de pommes de terre", "Beurre", "Sel, poivre"],
        etapes: ["Blanchir les feuilles 2 minutes dans l'eau bouillante et jeter l'eau de cuisson.", "Cuire les pommes de terre à part et les écraser.", "Mélanger avec les feuilles hachées et du beurre, assaisonner."]
      }
    ],
    confusions: [
      {
        nom: "Datura stramoine",
        latin: "Datura stramonium",
        danger: "mortel",
        differences: ["Feuilles plus grandes, glabres, à grosses dents irrégulières pointues, sans poudre farineuse.", "Odeur désagréable au froissement.", "Grandes fleurs blanches en trompette et fruit épineux comme une châtaigne.", "Plante des cultures et friches de plaine, non des alpages."]
      },
      {
        nom: "Mercuriale annuelle",
        latin: "Mercurialis annua",
        danger: "toxique",
        differences: ["Feuilles opposées, ovales, luisantes, finement dentées, non farineuses.", "Plante des jardins et cultures de plaine."]
      }
    ],
    precautions: [
      "Contient des oxalates et des saponines : préférer cuit et jeter la première eau de cuisson.",
      "Déconseillé en cas de calculs rénaux, de goutte ou de rhumatismes.",
      "Attention aux reposoirs à bétail : laver soigneusement."
    ],
    sources: [
      { titre: "Wikipédia : Chénopode bon-Henri", url: "https://fr.wikipedia.org/wiki/Ch%C3%A9nopode_bon-Henri" },
      { titre: "Wikipédia : Datura stramoine", url: "https://fr.wikipedia.org/wiki/Datura_stramoine" }
    ]
  },
  {
    id: "oseille-sauvage",
    nom: "Oseille sauvage",
    latin: "Rumex acetosa",
    famille: "Polygonacées",
    autresNoms: ["Grande oseille", "Oseille des prés", "Surette"],
    statut: "comestible",
    resume: "Plante des prairies aux feuilles en fer de flèche et au goût acidulé de citron. Ses jeunes feuilles peuvent être confondues avec celles de l'arum, toxique.",
    habitat: "Prairies, pâtures, bords de chemins, talus, jusqu'en montagne.",
    habitats: ["prairie", "bord-chemin", "montagne"],
    regions: "Partout en France.",
    recolte: [3, 4, 5, 6, 9, 10],
    floraison: [5, 6, 7],
    couleurFleur: ["rouge", "vert"],
    typeFeuille: "Feuilles alternes en fer de flèche, oreillettes pointues dirigées vers le bas, celles du haut embrassant la tige.",
    reconnaissance: [
      "Goût franchement acide, citronné, dès qu'on mâche un petit bout.",
      "Feuilles en fer de flèche avec deux oreillettes pointues tournées vers le bas.",
      "Une gaine membraneuse brunâtre (ochréa) entoure la tige à la base de chaque feuille.",
      "Nervures pennées fines, limbe mat, un peu charnu.",
      "Épis de petites fleurs rougeâtres en été."
    ],
    partiesUtilisees: ["feuilles"],
    bienfaits: [
      "Riche en vitamine C, réputée rafraîchissante et apéritive."
    ],
    usages: ["crue en petite quantité dans les salades", "sauce à l'oseille pour le poisson", "soupe à l'oseille"],
    recettes: [
      {
        titre: "Sauce à l'oseille",
        type: "cuisine",
        ingredients: ["2 poignées de feuilles d'oseille", "1 noix de beurre", "15 cl de crème", "Sel, poivre"],
        etapes: ["Retirer les tiges et ciseler les feuilles.", "Les faire fondre 2 minutes dans le beurre : elles deviennent brunes, c'est normal.", "Ajouter la crème, assaisonner et servir avec un poisson."]
      }
    ],
    confusions: [
      {
        nom: "Arum tacheté (jeunes feuilles)",
        latin: "Arum maculatum",
        danger: "toxique",
        differences: ["Feuilles plus luisantes, nervures ramifiées en réseau visible.", "Souvent des taches sombres sur le limbe.", "Pas de gaine membraneuse autour d'une tige : les feuilles sortent directement du sol sur un long pétiole.", "Pas de goût acide mais une brûlure intense de la bouche : ne jamais goûter une feuille douteuse."]
      },
      {
        nom: "Muguet (jeunes feuilles)",
        latin: "Convallaria majalis",
        danger: "mortel",
        differences: ["Feuilles elliptiques sans oreillettes, à nervures parallèles.", "Deux feuilles emboîtées à la base.", "Pousse en sous-bois, pas en prairie."]
      }
    ],
    precautions: [
      "Riche en acide oxalique : déconseillée en cas de calculs rénaux, de goutte, de rhumatismes ; modérer chez l'enfant.",
      "Ne pas cuire dans des ustensiles en aluminium ou en fer.",
      "Prairies humides pâturées : ne pas consommer crue (douve du foie)."
    ],
    sources: [
      { titre: "Wikipédia : Rumex acetosa", url: "https://fr.wikipedia.org/wiki/Rumex_acetosa" },
      { titre: "Wikipédia : Arum tacheté", url: "https://fr.wikipedia.org/wiki/Arum_maculatum" }
    ]
  },
  {
    id: "pourpier",
    nom: "Pourpier",
    latin: "Portulaca oleracea",
    famille: "Portulacacées",
    autresNoms: ["Pourpier potager", "Porcelane"],
    statut: "comestible",
    resume: "Petite plante grasse rampante des jardins et trottoirs en été, croquante et acidulée. Riche en oméga-3, elle se mange crue en salade.",
    habitat: "Jardins, potagers, cultures, fissures des trottoirs, sols sableux chauds.",
    habitats: ["jardin", "friche", "bord-chemin", "littoral"],
    regions: "Partout en France, surtout dans le Sud et les zones chaudes.",
    recolte: [6, 7, 8, 9],
    floraison: [6, 7, 8, 9],
    couleurFleur: ["jaune"],
    typeFeuille: "Petites feuilles charnues en forme de spatule, lisses, alternes ou presque opposées.",
    reconnaissance: [
      "Tiges rougeâtres, charnues et lisses, étalées en rosette au sol.",
      "Feuilles épaisses, juteuses, en spatule, sans poils.",
      "Petites fleurs jaunes à 5 pétales qui ne s'ouvrent que le matin au soleil.",
      "Aucun latex : la sève est claire et aqueuse.",
      "Goût acidulé et texture croquante."
    ],
    partiesUtilisees: ["tiges", "feuilles", "graines"],
    bienfaits: [
      "Riche en oméga-3 et en antioxydants, réputé rafraîchissant."
    ],
    usages: ["cru en salade", "en tzatziki ou en soupe froide", "tiges au vinaigre"],
    recettes: [
      {
        titre: "Salade de pourpier et tomate",
        type: "cuisine",
        ingredients: ["2 poignées de pourpier", "2 tomates", "1 oignon rouge", "Huile d'olive, vinaigre, sel"],
        etapes: ["Laver soigneusement le pourpier et le couper grossièrement.", "Ajouter tomates en dés et oignon émincé.", "Assaisonner et servir frais."]
      }
    ],
    confusions: [
      {
        nom: "Euphorbes prostrées",
        latin: "Euphorbia maculata, Euphorbia prostrata",
        danger: "toxique",
        differences: ["Feuilles fines, plates, petites, souvent tachées de rouge, pas charnues.", "Tige cassée laissant couler un latex blanc irritant.", "Fleurs minuscules sans pétales jaunes."]
      }
    ],
    precautions: [
      "Contient de l'acide oxalique : modération en cas de calculs rénaux.",
      "Casser une tige pour vérifier l'absence de latex blanc avant de cueillir.",
      "Éviter les trottoirs et lieux souillés."
    ],
    sources: [
      { titre: "Wikipédia : Pourpier potager", url: "https://fr.wikipedia.org/wiki/Pourpier_potager" }
    ]
  },
  {
    id: "ail-des-vignes",
    nom: "Ail des vignes",
    latin: "Allium vineale",
    famille: "Amaryllidacées",
    autresNoms: ["Ail sauvage", "Ail des champs", "Oignon bâtard"],
    statut: "comestible",
    resume: "Ail sauvage aux feuilles creuses comme de la ciboulette, qui produit souvent des bulbilles à la place des fleurs. Se consomme comme la ciboulette ou l'ail.",
    habitat: "Vignes, cultures, prairies sèches, talus, bords de chemins.",
    habitats: ["prairie", "friche", "bord-chemin", "jardin"],
    regions: "Partout en France, plus commun en plaine et dans les régions viticoles.",
    recolte: [2, 3, 4, 6, 7],
    floraison: [6, 7],
    couleurFleur: ["rose", "violet"],
    typeFeuille: "Feuilles cylindriques, creuses, fines, engainant la base de la tige.",
    reconnaissance: [
      "Feuilles en tube creux, comme la ciboulette, sillonnées sur une face.",
      "Forte odeur d'ail au froissement.",
      "Tête au sommet de la tige formée surtout de petites bulbilles, parfois avec quelques fleurs rose violacé.",
      "Petit bulbe entouré de bulbilles secondaires."
    ],
    partiesUtilisees: ["feuilles", "bulbilles", "bulbe"],
    bienfaits: [
      "Mêmes usages traditionnels que l'ail cultivé, en plus doux."
    ],
    usages: ["feuilles ciselées comme de la ciboulette", "bulbilles en condiment", "bulbe comme de l'ail"],
    recettes: [
      {
        titre: "Fromage frais à l'ail des vignes",
        type: "cuisine",
        ingredients: ["1 poignée de feuilles d'ail des vignes", "250 g de fromage frais", "Sel, poivre"],
        etapes: ["Ciseler finement les feuilles.", "Mélanger au fromage frais et assaisonner.", "Laisser reposer 1 heure au frais avant de servir."]
      }
    ],
    confusions: [
      {
        nom: "Ornithogale en ombelle",
        latin: "Ornithogalum umbellatum",
        danger: "toxique",
        differences: ["Feuilles plates en gouttière, marquées d'une ligne blanche au centre, non creuses.", "Aucune odeur d'ail.", "Fleurs blanches en étoile."]
      },
      {
        nom: "Colchique d'automne",
        latin: "Colchicum autumnale",
        danger: "mortel",
        differences: ["Feuilles larges, plates et luisantes, sans odeur d'ail.", "Feuilles en touffe au printemps avec une capsule au centre."]
      }
    ],
    precautions: [
      "Toujours vérifier l'odeur d'ail sur chaque plante.",
      "Les autres Allium sauvages sont sans danger, mais pas les plantes à bulbe qui leur ressemblent.",
      "Éviter les vignes et cultures récemment traitées."
    ],
    sources: [
      { titre: "Wikipédia : Ail des vignes", url: "https://fr.wikipedia.org/wiki/Ail_des_vignes" },
      { titre: "Wikipédia : Ornithogale en ombelle", url: "https://fr.wikipedia.org/wiki/Ornithogale_en_ombelle" }
    ]
  },
  {
    id: "coquelicot",
    nom: "Coquelicot",
    latin: "Papaver rhoeas",
    famille: "Papavéracées",
    autresNoms: ["Pavot des champs", "Ponceau"],
    statut: "comestible-medicinale",
    resume: "Fleur rouge emblématique des champs et talus, aux pétales soyeux et fragiles. Pétales traditionnellement utilisés en infusion pour la toux et le sommeil léger, jeunes feuilles comestibles cuites.",
    habitat: "Champs de céréales, talus, friches, terrains remués.",
    habitats: ["friche", "bord-chemin", "prairie"],
    regions: "Partout en France en plaine.",
    recolte: [2, 3, 4, 5, 6, 7],
    floraison: [5, 6, 7],
    couleurFleur: ["rouge"],
    typeFeuille: "Feuilles alternes, velues, profondément découpées en lobes dentés.",
    reconnaissance: [
      "Fleurs rouge écarlate à 4 pétales froissés, souvent tachés de noir à la base.",
      "Tige couverte de poils raides étalés.",
      "Bouton velu penché qui se redresse à l'ouverture.",
      "Capsule ronde et lisse couronnée d'un disque étoilé.",
      "Latex blanc quand on casse la tige."
    ],
    partiesUtilisees: ["pétales", "jeunes feuilles", "graines"],
    bienfaits: [
      "Pétales traditionnellement utilisés pour calmer la toux d'irritation.",
      "Réputés légèrement apaisants et favorisant l'endormissement."
    ],
    usages: ["infusion de pétales", "sirop de coquelicot", "jeunes rosettes cuites", "graines mûres sur le pain"],
    recettes: [
      {
        titre: "Infusion de pétales de coquelicot",
        type: "infusion",
        ingredients: ["1 cuillère à café de pétales séchés (environ 1 g)", "250 ml d'eau frémissante"],
        etapes: ["Verser l'eau sur les pétales.", "Infuser 10 minutes.", "Filtrer ; 1 à 2 tasses par jour, le soir de préférence."]
      }
    ],
    confusions: [
      {
        nom: "Pavot somnifère",
        latin: "Papaver somniferum",
        danger: "toxique",
        differences: ["Feuilles glabres, bleutées, qui embrassent la tige.", "Fleurs plus grandes, lilas, blanches ou rouges, et grosse capsule.", "Plante cultivée ou échappée des jardins, riche en alcaloïdes."]
      },
      {
        nom: "Pavot douteux",
        latin: "Papaver dubium",
        danger: "sans-danger",
        differences: ["Fleurs orangé plus pâle.", "Capsule allongée."]
      }
    ],
    precautions: [
      "Contient de faibles quantités d'alcaloïdes : déconseillé chez le jeune enfant, pendant la grossesse et l'allaitement.",
      "Ne pas associer aux médicaments sédatifs sans avis médical.",
      "Ne pas consommer la plante en grande quantité ni les capsules vertes."
    ],
    sources: [
      { titre: "Wikipédia : Coquelicot", url: "https://fr.wikipedia.org/wiki/Coquelicot" }
    ]
  },
  {
    id: "sauge-des-pres",
    nom: "Sauge des prés",
    latin: "Salvia pratensis",
    famille: "Lamiacées",
    autresNoms: ["Sauge sauvage", "Sauge commune des prés"],
    statut: "comestible-medicinale",
    resume: "Sauge sauvage des prairies sèches aux grandes fleurs bleu violet en épis. Utilisée comme la sauge officinale, avec un effet plus doux.",
    habitat: "Prairies sèches et pelouses, surtout calcaires, talus ensoleillés.",
    habitats: ["prairie", "bord-chemin", "montagne"],
    regions: "Une grande partie de la France, surtout sur calcaire ; rare dans l'Ouest et le Nord-Ouest siliceux.",
    recolte: [5, 6, 7],
    floraison: [5, 6, 7, 8],
    couleurFleur: ["bleu", "violet"],
    typeFeuille: "Rosette basale de grandes feuilles ovales, gaufrées, crénelées, quelques petites feuilles opposées sur la tige.",
    reconnaissance: [
      "Grandes fleurs bleu violet en gueule, la lèvre supérieure en forme de faucille.",
      "Fleurs en étages le long d'une tige carrée dressée.",
      "Feuilles basales ridées et gaufrées, en rosette.",
      "Odeur aromatique un peu forte au froissement, moins que la sauge officinale.",
      "Tige velue et un peu collante en haut."
    ],
    partiesUtilisees: ["feuilles", "fleurs"],
    bienfaits: [
      "Traditionnellement utilisée pour la digestion et contre les spasmes.",
      "Réputée apaiser la gorge en gargarisme."
    ],
    usages: ["feuilles en aromate dans les plats", "fleurs en salade", "infusion", "gargarisme"],
    recettes: [
      {
        titre: "Infusion de sauge des prés",
        type: "infusion",
        ingredients: ["1 cuillère à café de feuilles séchées (environ 1,5 g)", "250 ml d'eau frémissante"],
        etapes: ["Verser l'eau sur les feuilles.", "Infuser 10 minutes à couvert.", "Filtrer ; 2 tasses par jour au plus, en cure courte, ou en gargarisme tiède."]
      }
    ],
    confusions: [
      {
        nom: "Bugle rampante",
        latin: "Ajuga reptans",
        danger: "sans-danger",
        differences: ["Plante plus petite, stolons rampants.", "Lèvre supérieure presque absente, pas de faucille.", "Pas d'odeur aromatique."]
      }
    ],
    precautions: [
      "Contient un peu de thuyone comme les autres sauges : déconseillée pendant la grossesse, l'allaitement et en cas d'épilepsie.",
      "Usage médicinal limité à de courtes cures.",
      "Espèce en régression dans certaines régions : cueillir avec modération."
    ],
    sources: [
      { titre: "Wikipédia : Sauge des prés", url: "https://fr.wikipedia.org/wiki/Sauge_des_pr%C3%A9s" }
    ]
  },
  {
    id: "thym-serpolet",
    nom: "Thym serpolet",
    latin: "Thymus serpyllum",
    famille: "Lamiacées",
    autresNoms: ["Serpolet", "Thym sauvage"],
    statut: "comestible-medicinale",
    resume: "Petit thym rampant des pelouses sèches et des montagnes, au parfum plus doux que le thym des garrigues. Aromate et remède traditionnel des refroidissements.",
    habitat: "Pelouses sèches, rochers, talus ensoleillés, landes, alpages.",
    habitats: ["prairie", "montagne", "bord-chemin", "littoral"],
    regions: "Partout en France ; l'espèce exacte varie selon les régions (le groupe des serpolets est difficile à départager).",
    recolte: [5, 6, 7, 8, 9],
    floraison: [6, 7, 8, 9],
    couleurFleur: ["rose", "violet"],
    typeFeuille: "Très petites feuilles opposées, ovales, sur tiges rampantes un peu ligneuses.",
    reconnaissance: [
      "Tapis ras de tiges rampantes et ligneuses à la base.",
      "Minuscules feuilles opposées, bordées de cils à la base.",
      "Odeur de thym nette au froissement, plus douce et citronnée que le thym commun.",
      "Petites fleurs rose violacé en têtes arrondies au bout des rameaux."
    ],
    partiesUtilisees: ["sommités fleuries", "feuilles"],
    bienfaits: [
      "Traditionnellement utilisé pour les rhumes, la toux et la gorge.",
      "Réputé faciliter la digestion."
    ],
    usages: ["aromate pour viandes, légumes et sauces", "infusion", "sirop"],
    recettes: [
      {
        titre: "Infusion de serpolet au miel",
        type: "infusion",
        ingredients: ["1 cuillère à café de sommités séchées (environ 1,5 g)", "250 ml d'eau frémissante", "1 cuillère à café de miel"],
        etapes: ["Verser l'eau sur la plante.", "Couvrir et infuser 10 minutes.", "Filtrer, ajouter le miel ; 3 tasses par jour au plus."]
      }
    ],
    confusions: [
      {
        nom: "Thym commun",
        latin: "Thymus vulgaris",
        danger: "sans-danger",
        differences: ["Petit arbrisseau dressé, non rampant.", "Feuilles à bords enroulés, grisâtres.", "Garrigues du Midi ; même usage."]
      }
    ],
    precautions: [
      "Plante sûre en usage alimentaire.",
      "Les huiles essentielles de thym sont puissantes : à éviter pendant la grossesse et chez l'enfant.",
      "Couper les sommités sans arracher la plante."
    ],
    sources: [
      { titre: "Wikipédia : Serpolet", url: "https://fr.wikipedia.org/wiki/Serpolet" }
    ]
  },
  {
    id: "origan",
    nom: "Origan sauvage",
    latin: "Origanum vulgare",
    famille: "Lamiacées",
    autresNoms: ["Marjolaine sauvage", "Origan commun", "Grand origan"],
    statut: "comestible-medicinale",
    resume: "Lamiacée aromatique des talus secs, aux bouquets de fleurs roses entourées de bractées pourpres. Aromate de la pizza et remède traditionnel de la digestion.",
    habitat: "Talus secs, lisières, pelouses calcaires, bords de chemins ensoleillés.",
    habitats: ["prairie", "haie", "bord-chemin", "montagne"],
    regions: "Partout en France, surtout sur calcaire.",
    recolte: [6, 7, 8, 9],
    floraison: [7, 8, 9],
    couleurFleur: ["rose", "violet"],
    typeFeuille: "Feuilles opposées ovales, entières ou à peine dentées, légèrement velues, ponctuées de glandes.",
    reconnaissance: [
      "Tige carrée, rougeâtre, velue, de 30 à 60 cm.",
      "Petites fleurs roses en corymbes arrondis, entourées de bractées pourpres.",
      "Forte odeur d'origan au froissement.",
      "Feuilles opposées ovales à bord presque lisse.",
      "Très visité par les papillons."
    ],
    partiesUtilisees: ["sommités fleuries", "feuilles"],
    bienfaits: [
      "Traditionnellement utilisé pour faciliter la digestion et calmer les spasmes.",
      "Réputé apaiser la toux et les refroidissements."
    ],
    usages: ["aromate séché pour pizzas, sauces tomate, grillades", "infusion"],
    recettes: [
      {
        titre: "Infusion d'origan",
        type: "infusion",
        ingredients: ["1 cuillère à café de sommités séchées (environ 1,5 g)", "250 ml d'eau frémissante"],
        etapes: ["Verser l'eau sur la plante.", "Infuser 10 minutes à couvert.", "Filtrer ; après le repas, 2 à 3 tasses par jour."]
      }
    ],
    confusions: [
      {
        nom: "Clinopode commun",
        latin: "Clinopodium vulgare",
        danger: "sans-danger",
        differences: ["Fleurs en verticilles laineux étagés, non en bouquets terminaux.", "Odeur faible."]
      }
    ],
    precautions: [
      "Plante sûre en usage alimentaire.",
      "Usage médicinal à éviter pendant la grossesse.",
      "Huile essentielle très irritante : jamais pure sur la peau ni chez l'enfant."
    ],
    sources: [
      { titre: "Wikipédia : Origan commun", url: "https://fr.wikipedia.org/wiki/Origan_commun" }
    ]
  },
  {
    id: "myrtille",
    nom: "Myrtille",
    latin: "Vaccinium myrtillus",
    famille: "Éricacées",
    autresNoms: ["Brimbelle", "Airelle noire", "Embrune"],
    statut: "comestible-medicinale",
    resume: "Petit arbrisseau des sous-bois acides et des montagnes aux baies bleu-noir à pulpe violette. Fruits savoureux, feuilles traditionnellement utilisées en tisane.",
    habitat: "Sous-bois de conifères et de hêtres sur sol acide, landes, pentes montagnardes.",
    habitats: ["foret", "montagne"],
    regions: "Vosges, Massif central, Alpes, Pyrénées, Jura, Morvan, Bretagne intérieure ; absente des plaines calcaires.",
    recolte: [7, 8, 9],
    floraison: [4, 5, 6],
    couleurFleur: ["rose", "vert"],
    typeFeuille: "Petites feuilles alternes ovales, finement dentées, caduques, sur tiges vertes anguleuses.",
    reconnaissance: [
      "Arbrisseau de 20 à 50 cm aux rameaux verts à angles saillants.",
      "Feuilles petites, ovales, finement dentées, vert clair, qui tombent en hiver.",
      "Fleurs en petits grelots rose verdâtre pendants.",
      "Baies isolées, bleu-noir pruineuses, avec une petite couronne circulaire au sommet.",
      "Pulpe violette qui tache les doigts et la langue."
    ],
    partiesUtilisees: ["fruits", "feuilles"],
    bienfaits: [
      "Fruits traditionnellement réputés pour le confort de la vision nocturne et la circulation.",
      "Fruits séchés utilisés en tradition contre les diarrhées légères."
    ],
    usages: ["crues ou en tarte, confiture, coulis", "fruits séchés", "infusion de feuilles"],
    recettes: [
      {
        titre: "Tarte aux myrtilles",
        type: "cuisine",
        ingredients: ["1 pâte brisée", "500 g de myrtilles", "3 cuillères à soupe de sucre", "2 cuillères à soupe de semoule fine"],
        etapes: ["Étaler la pâte dans un moule et la piquer.", "Saupoudrer de semoule pour absorber le jus.", "Répartir les myrtilles et le sucre.", "Cuire 35 minutes à 200 degrés."]
      }
    ],
    confusions: [
      {
        nom: "Belladone",
        latin: "Atropa belladonna",
        danger: "mortel",
        differences: ["Grande plante herbacée de 50 cm à 1,5 m, non un petit arbrisseau.", "Baies noires luisantes de la taille d'une cerise, isolées, posées sur une étoile verte de 5 sépales.", "Grandes feuilles ovales entières, molles.", "Pulpe et jus violacés : ne jamais goûter une baie noire inconnue."]
      },
      {
        nom: "Airelle des marais",
        latin: "Vaccinium uliginosum",
        danger: "irritant",
        differences: ["Feuilles entières, bleutées, non dentées.", "Rameaux ronds, bruns.", "Pulpe blanche ; consommée en quantité, elle provoquerait des troubles légers."]
      }
    ],
    precautions: [
      "Risque d'échinococcose alvéolaire (parasite des renards) dans l'Est, le Jura, les Alpes et le Massif central : laver, et préférer les fruits cuits dans ces zones.",
      "Feuilles : prudence en cas de diabète traité ou de traitement anticoagulant ; pas d'usage prolongé.",
      "Ramasser à la main plutôt qu'au peigne pour ne pas abîmer les plants."
    ],
    sources: [
      { titre: "Wikipédia : Myrtille", url: "https://fr.wikipedia.org/wiki/Myrtille" }
    ]
  },
  {
    id: "fraisier-des-bois",
    nom: "Fraisier des bois",
    latin: "Fragaria vesca",
    famille: "Rosacées",
    autresNoms: ["Fraise des bois", "Fraisier sauvage"],
    statut: "comestible-medicinale",
    resume: "Petit fraisier des lisières aux fruits minuscules très parfumés. Les feuilles sont utilisées traditionnellement en infusion astringente.",
    habitat: "Lisières, clairières, talus forestiers, bords de chemins ombragés.",
    habitats: ["foret", "haie", "bord-chemin", "montagne"],
    regions: "Partout en France, de la plaine à la montagne.",
    recolte: [4, 5, 6, 7, 8],
    floraison: [4, 5, 6],
    couleurFleur: ["blanc"],
    typeFeuille: "Feuilles en rosette, composées de 3 folioles ovales dentées, soyeuses dessous.",
    reconnaissance: [
      "Feuilles à 3 folioles dentées, la dent terminale de chaque foliole dépassant ses voisines.",
      "Fleurs blanches à 5 pétales arrondis, cœur jaune.",
      "Fruits rouges coniques, petits, très parfumés, akènes saillants à la surface.",
      "Stolons rampants qui forment de nouveaux pieds."
    ],
    partiesUtilisees: ["fruits", "feuilles", "racine"],
    bienfaits: [
      "Feuilles traditionnellement utilisées pour les diarrhées légères grâce à leurs tanins.",
      "Réputées diurétiques."
    ],
    usages: ["fruits frais", "confiture", "infusion de feuilles", "sirop"],
    recettes: [
      {
        titre: "Infusion de feuilles de fraisier",
        type: "infusion",
        ingredients: ["1 cuillère à soupe de feuilles séchées (environ 2 g)", "250 ml d'eau frémissante"],
        etapes: ["Verser l'eau sur les feuilles.", "Infuser 10 minutes.", "Filtrer ; 2 à 3 tasses par jour."]
      }
    ],
    confusions: [
      {
        nom: "Potentille faux-fraisier",
        latin: "Potentilla sterilis",
        danger: "sans-danger",
        differences: ["Pétales échancrés et espacés.", "Dent terminale des folioles plus courte que ses voisines.", "Ne donne pas de fraise charnue."]
      },
      {
        nom: "Fraisier des Indes",
        latin: "Duchesnea indica",
        danger: "sans-danger",
        differences: ["Fleurs jaunes.", "Fruit rouge rond, dressé, sans goût."]
      }
    ],
    precautions: [
      "Risque d'échinococcose (renards) : laver les fraises, et dans les zones à risque préférer les cuire.",
      "Allergie aux fraises possible.",
      "Éviter les bords de chemins fréquentés par les chiens."
    ],
    sources: [
      { titre: "Wikipédia : Fraisier des bois", url: "https://fr.wikipedia.org/wiki/Fraisier_des_bois" }
    ]
  },
  {
    id: "noisetier",
    nom: "Noisetier",
    latin: "Corylus avellana",
    famille: "Bétulacées",
    autresNoms: ["Coudrier", "Avelinier"],
    statut: "comestible",
    resume: "Arbuste des haies aux chatons jaunes en plein hiver, puis aux noisettes de fin d'été. Aucune confusion dangereuse connue.",
    habitat: "Haies, lisières, sous-bois clairs, taillis.",
    habitats: ["haie", "foret", "bord-chemin", "montagne"],
    regions: "Partout en France jusqu'à moyenne montagne.",
    recolte: [8, 9, 10],
    floraison: [1, 2, 3],
    couleurFleur: ["jaune", "rouge"],
    typeFeuille: "Feuilles alternes arrondies, doublement dentées, velues, pointe courte, base en cœur.",
    reconnaissance: [
      "Arbuste à nombreuses tiges partant de la souche, écorce lisse brun-gris.",
      "Feuilles rondes, rêches, doublement dentées, avec une courte pointe.",
      "Chatons jaunes pendants dès janvier, fleurs femelles minuscules en bourgeon à styles rouges.",
      "Noisettes dans une cupule verte découpée en franges."
    ],
    partiesUtilisees: ["fruits"],
    bienfaits: [
      "Fruits nourrissants, riches en graisses insaturées et en vitamine E."
    ],
    usages: ["noisettes crues ou torréfiées", "pâtisserie", "pâte à tartiner maison"],
    recettes: [
      {
        titre: "Noisettes torréfiées",
        type: "cuisine",
        ingredients: ["Noisettes décortiquées"],
        etapes: ["Étaler sur une plaque.", "Torréfier 10 à 12 minutes à 160 degrés.", "Frotter dans un torchon pour retirer les peaux."]
      }
    ],
    confusions: [
      {
        nom: "Charme",
        latin: "Carpinus betulus",
        danger: "sans-danger",
        differences: ["Feuilles plus allongées, plissées le long des nervures.", "Petits fruits ailés en grappes, pas de noisette."]
      }
    ],
    precautions: [
      "Allergie à la noisette ou au pollen de noisetier possible, parfois grave.",
      "Jeter les noisettes moisies ou rances.",
      "Laisser une part aux animaux sauvages."
    ],
    sources: [
      { titre: "Wikipédia : Noisetier commun", url: "https://fr.wikipedia.org/wiki/Noisetier_commun" }
    ]
  },
  {
    id: "cresson-de-fontaine",
    nom: "Cresson de fontaine",
    latin: "Nasturtium officinale",
    famille: "Brassicacées",
    autresNoms: ["Cresson officinal", "Cresson d'eau"],
    statut: "comestible-medicinale",
    resume: "Plante aquatique au goût poivré, très riche en vitamines. Sauvage, il ne doit jamais être mangé cru à cause de la douve du foie.",
    habitat: "Ruisseaux, sources, fossés à eau claire et courante.",
    habitats: ["bord-eau"],
    regions: "Partout en France dans les eaux claires.",
    recolte: [3, 4, 5, 6, 9, 10, 11],
    floraison: [5, 6, 7, 8, 9],
    couleurFleur: ["blanc"],
    typeFeuille: "Feuilles alternes pennées, à folioles arrondies, la terminale plus grande, vert foncé et luisantes.",
    reconnaissance: [
      "Tiges creuses, couchées ou flottantes, qui s'enracinent aux nœuds dans l'eau.",
      "Feuilles divisées en 3 à 9 folioles arrondies, la terminale plus grande.",
      "Goût piquant de radis quand on mâche une feuille (après cuisson).",
      "Petites fleurs blanches à 4 pétales en croix.",
      "Fruits en petites siliques arquées."
    ],
    partiesUtilisees: ["feuilles", "tiges"],
    bienfaits: [
      "Riche en vitamine C, en fer et en composés soufrés.",
      "Réputé stimulant et dépuratif dans la tradition."
    ],
    usages: ["soupe de cresson", "cuit comme les épinards", "cultivé et contrôlé : cru en salade"],
    recettes: [
      {
        titre: "Soupe de cresson",
        type: "cuisine",
        ingredients: ["1 botte de cresson", "3 pommes de terre", "1 oignon", "1 litre de bouillon", "Crème"],
        etapes: ["Faire revenir l'oignon, ajouter pommes de terre et bouillon, cuire 15 minutes.", "Ajouter le cresson lavé et laisser bouillir au moins 5 minutes.", "Mixer et ajouter un peu de crème."]
      }
    ],
    confusions: [
      {
        nom: "Berle dressée",
        latin: "Berula erecta",
        danger: "toxique",
        differences: ["Ombellifère à folioles allongées et dentées, plus nombreuses.", "Fleurs blanches en ombelles.", "Pas de goût piquant."]
      },
      {
        nom: "Œnanthe safranée et ciguë vireuse",
        latin: "Oenanthe crocata, Cicuta virosa",
        danger: "mortel",
        differences: ["Grandes ombellifères dressées des mêmes milieux.", "Feuilles bien plus découpées, en segments pointus ou en coin.", "Fleurs en ombelles, jamais en croix."]
      },
      {
        nom: "Cardamine amère",
        latin: "Cardamine amara",
        danger: "sans-danger",
        differences: ["Anthères violettes.", "Tige pleine.", "Également comestible."]
      }
    ],
    precautions: [
      "Ne jamais manger cru du cresson sauvage : risque de douve du foie (fasciolose), maladie grave du foie, surtout près des pâturages.",
      "Toujours le cuire au moins 5 minutes à ébullition.",
      "Éviter les eaux stagnantes ou polluées.",
      "Usage médicinal déconseillé pendant la grossesse et en cas de calculs ou d'inflammation urinaire."
    ],
    sources: [
      { titre: "Wikipédia : Cresson de fontaine", url: "https://fr.wikipedia.org/wiki/Cresson_de_fontaine" },
      { titre: "Wikipédia : Fasciolose", url: "https://fr.wikipedia.org/wiki/Fasciolose" },
      { titre: "Wikipédia : Œnanthe safranée", url: "https://fr.wikipedia.org/wiki/%C5%92nanthe_safran%C3%A9e" }
    ]
  }
];
