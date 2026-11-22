// Lot A : plantes des prés, friches, jardins et bords de chemin (complète window.SAUVAGES défini dans sauvages.js).
// Données synthétisées et reformulées à partir des sources citées pour chaque plante.
// Outil d'apprentissage : ne remplace ni un avis médical, ni la vérification sur le terrain par une personne compétente.
window.SAUVAGES.push(
  {
    id: "lamier-blanc",
    nom: "Lamier blanc",
    latin: "Lamium album",
    famille: "Lamiacées",
    autresNoms: ["Ortie blanche", "Ortie morte", "Archangélique"],
    statut: "comestible-medicinale",
    resume: "Sosie inoffensif de l'ortie, qui ne pique pas et porte des étages de grandes fleurs blanches en casque. Jeunes feuilles et fleurs se mangent crues ou cuites ; la plante fleurie est une tisane traditionnelle de la sphère féminine.",
    habitat: "Haies, lisières, talus, bords de chemins, friches et abords des maisons, sur sols riches en azote.",
    habitats: ["haie", "friche", "bord-chemin", "jardin"],
    regions: "Commun dans presque toute la France, plus rare dans le Midi méditerranéen et l'Ouest.",
    recolte: [3, 4, 5, 6, 7, 8, 9],
    floraison: [4, 5, 6, 7, 8, 9],
    couleurFleur: ["blanc"],
    typeFeuille: "Feuilles opposées, en cœur pointu, à grosses dents, finement velues mais non piquantes.",
    reconnaissance: [
      "Ressemble à une ortie mais ne pique pas du tout au toucher.",
      "Tige carrée, creuse, dressée, de 20 à 60 cm.",
      "Fleurs blanc crème de 2 cm, en forme de gueule avec une lèvre supérieure en casque velu, groupées en couronnes à l'aisselle des feuilles.",
      "Feuilles opposées, chaque paire croisée à angle droit avec la suivante.",
      "Odeur faible, un peu terreuse au froissement ; la base de la fleur contient une goutte de nectar sucré."
    ],
    partiesUtilisees: ["jeunes pousses", "feuilles", "fleurs", "sommités fleuries"],
    bienfaits: [
      "Traditionnellement employé en tisane contre les pertes blanches et les règles abondantes (usage déjà rapporté par Cazin au XIXe siècle).",
      "Réputé légèrement astringent et adoucissant pour les muqueuses digestives et respiratoires.",
      "Utilisé en tradition populaire en compresses sur les petites irritations de la peau."
    ],
    usages: ["jeunes feuilles en salade ou cuites comme les épinards", "fleurs crues pour décorer et sucrer un dessert", "en soupe mêlé à l'ortie", "sommités séchées en tisane"],
    recettes: [
      {
        titre: "Tisane de fleurs de lamier blanc",
        type: "infusion",
        ingredients: ["1 cuillère à soupe de fleurs ou sommités fleuries séchées (environ 2 g)", "250 ml d'eau frémissante"],
        etapes: ["Verser l'eau sur les fleurs.", "Couvrir et laisser infuser 10 minutes.", "Filtrer ; 2 à 3 tasses par jour pendant quelques semaines au plus."]
      },
      {
        titre: "Poêlée de jeunes pousses de lamier",
        type: "cuisine",
        ingredients: ["2 poignées de sommités tendres de lamier blanc", "1 échalote", "1 noix de beurre", "1 œuf", "Sel, poivre"],
        etapes: ["Laver les sommités et les hacher grossièrement.", "Faire fondre l'échalote dans le beurre, ajouter les feuilles et cuire 3 minutes.", "Casser l'œuf par-dessus, mélanger jusqu'à ce qu'il prenne et assaisonner."]
      }
    ],
    confusions: [
      {
        nom: "Ortie dioïque",
        latin: "Urtica dioica",
        danger: "irritant",
        differences: ["L'ortie pique et laisse des cloques au moindre contact.", "Fleurs minuscules vertes en grappes pendantes, jamais de grandes fleurs blanches en gueule.", "Également comestible une fois cuite."]
      },
      {
        nom: "Lamier jaune",
        latin: "Lamiastrum galeobdolon",
        danger: "sans-danger",
        differences: ["Fleurs jaune vif, souvent dans les sous-bois.", "Feuilles parfois tachées d'argent.", "Odeur plus désagréable, peu intéressant en cuisine."]
      }
    ],
    precautions: [
      "Aucune toxicité connue aux doses alimentaires ou en tisane ; les ouvrages anciens comme modernes ne signalent pas de contre-indication particulière.",
      "Par prudence, éviter l'usage en tisane prolongée pendant la grossesse et l'allaitement, faute de données.",
      "Cueillir loin des routes et des zones de dépôts : la plante affectionne les sols chargés en azote.",
      "Des règles anormalement abondantes ou des pertes inhabituelles justifient un avis médical avant toute tisane."
    ],
    sources: [
      { titre: "Wikipédia : Lamier blanc", url: "https://fr.wikipedia.org/wiki/Lamium_album" },
      { titre: "Althea Provence : lamier blanc", url: "https://www.altheaprovence.com/lamier-blanc-lamium-album-leucorrhees-metrorragies-et-conditions-allergiques/" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes (1868), article Lamier blanc", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "lamier-pourpre",
    nom: "Lamier pourpre",
    latin: "Lamium purpureum",
    famille: "Lamiacées",
    autresNoms: ["Ortie rouge", "Lamier rouge", "Ortie puante"],
    statut: "comestible-medicinale",
    resume: "Petite plante des jardins et des cultures, fleurie dès la fin de l'hiver, au sommet teinté de pourpre. Ses sommités tendres se mangent crues ou cuites et ses fleurs nourrissent les premiers bourdons.",
    habitat: "Potagers, champs cultivés, friches, bords de chemins, pieds de murs, sols meubles et riches.",
    habitats: ["jardin", "friche", "bord-chemin"],
    regions: "Très commun dans toute la France, de la plaine à la moyenne montagne.",
    recolte: [2, 3, 4, 5, 10, 11],
    floraison: [2, 3, 4, 5, 6, 9, 10, 11],
    couleurFleur: ["rose", "violet"],
    typeFeuille: "Petites feuilles opposées, triangulaires à ovales, crénelées, velues, les supérieures serrées et teintées de pourpre.",
    reconnaissance: [
      "Plante basse de 10 à 30 cm, à tige carrée souvent rougeâtre, ne piquant pas.",
      "Feuilles du sommet tassées les unes sur les autres et colorées de violet pourpre.",
      "Petites fleurs roses à pourpres en gueule, de 1 à 1,5 cm, nichées entre les feuilles supérieures.",
      "Toutes les feuilles ont un court pétiole, aucune n'embrasse la tige.",
      "Odeur un peu forte et désagréable au froissement."
    ],
    partiesUtilisees: ["sommités tendres", "feuilles", "fleurs"],
    bienfaits: [
      "Utilisé en tradition populaire comme le lamier blanc, en tisane légèrement astringente.",
      "Réputé adoucissant en usage externe sur les petites plaies et irritations.",
      "Apporte des fibres et des minéraux comme la plupart des légumes-feuilles sauvages."
    ],
    usages: ["sommités crues en salade mélangée", "en soupe ou en farce avec d'autres herbes", "fleurs pour décorer les plats", "mêlé à un pesto d'herbes sauvages"],
    recettes: [
      {
        titre: "Salade de fin d'hiver aux sommités de lamier pourpre",
        type: "cuisine",
        ingredients: ["2 poignées de sommités de lamier pourpre", "1 poignée de mouron des oiseaux ou de mâche", "1 pomme", "Quelques noix", "Vinaigrette à l'huile de noix"],
        etapes: ["Laver soigneusement les sommités et les égoutter.", "Couper la pomme en lamelles et concasser les noix.", "Mélanger le tout avec la vinaigrette juste avant de servir."]
      }
    ],
    confusions: [
      {
        nom: "Lamier amplexicaule",
        latin: "Lamium amplexicaule",
        danger: "sans-danger",
        differences: ["Feuilles supérieures sans pétiole, qui embrassent la tige en collerette.", "Fleurs plus longues et plus fines, au tube très étroit.", "Également comestible."]
      },
      {
        nom: "Lierre terrestre",
        latin: "Glechoma hederacea",
        danger: "sans-danger",
        differences: ["Feuilles rondes en rein, longuement pétiolées, sur des tiges rampantes.", "Fleurs bleu violet, odeur aromatique marquée.", "Comestible en petite quantité comme aromate."]
      }
    ],
    precautions: [
      "Pas de toxicité connue ; goût assez neutre à légèrement fort, à mélanger plutôt qu'à consommer seul.",
      "Récolter dans des potagers et champs non traités : la plante pousse volontiers dans les cultures.",
      "Laver soigneusement, la plante étant basse et souvent terreuse."
    ],
    sources: [
      { titre: "Wikipédia : Lamium purpureum", url: "https://fr.wikipedia.org/wiki/Lamium_purpureum" }
    ]
  },
  {
    id: "bouillon-blanc",
    nom: "Bouillon-blanc",
    latin: "Verbascum thapsus",
    famille: "Scrophulariacées",
    autresNoms: ["Molène thapsus", "Molène bouillon-blanc", "Herbe de saint Fiacre", "Cierge de Notre-Dame"],
    statut: "medicinale",
    resume: "Grande plante laineuse qui dresse en deuxième année une hampe couverte de fleurs jaunes. Ses fleurs sont une des tisanes pectorales classiques pour la toux et la gorge irritée.",
    habitat: "Friches, talus secs, bords de chemins, carrières, coupes forestières, sols pierreux ou sableux ensoleillés.",
    habitats: ["friche", "bord-chemin", "prairie"],
    regions: "Toute la France, de la plaine à la montagne.",
    recolte: [6, 7, 8, 9],
    floraison: [6, 7, 8, 9],
    couleurFleur: ["jaune"],
    typeFeuille: "Grandes feuilles ovales, très épaisses, couvertes des deux côtés d'un épais feutre gris blanc doux comme de la flanelle.",
    reconnaissance: [
      "Bisannuelle : la première année une rosette de grandes feuilles laineuses, la deuxième une tige raide de 1 à 2 m.",
      "Feuilles entièrement feutrées de poils gris argentés sur les deux faces, douces au toucher.",
      "Les feuilles de la tige se prolongent vers le bas sur la tige en formant des ailes.",
      "Fleurs jaunes à cinq lobes, de 1,5 à 3 cm, serrées sur un long épi cylindrique.",
      "Les fleurs s'ouvrent peu à peu, quelques-unes chaque jour, du bas vers le haut de l'épi."
    ],
    partiesUtilisees: ["fleurs", "feuilles"],
    bienfaits: [
      "Les fleurs sont traditionnellement utilisées en tisane contre la toux, l'enrouement et les irritations de la gorge, grâce à leurs mucilages adoucissants.",
      "Les feuilles sont réputées adoucissantes en cataplasme sur les petites inflammations de la peau.",
      "L'huile de fleurs macérées est un remède populaire des douleurs d'oreille, à réserver au cas où le tympan est intact et après avis médical."
    ],
    usages: ["fleurs séchées en tisane pectorale", "macérât huileux de fleurs", "feuilles en cataplasme", "anciennement mèches de lampe et torches avec la hampe séchée"],
    recettes: [
      {
        titre: "Tisane de fleurs de bouillon-blanc",
        type: "infusion",
        ingredients: ["1 cuillère à soupe de fleurs séchées (environ 2 g)", "250 ml d'eau frémissante", "Miel au goût"],
        etapes: ["Verser l'eau sur les fleurs et couvrir.", "Laisser infuser 10 minutes.", "Filtrer à travers un filtre à café en papier ou un linge fin pour retenir tous les poils irritants.", "2 à 3 tasses par jour pendant un rhume."]
      },
      {
        titre: "Huile de fleurs de bouillon-blanc",
        type: "macerat",
        ingredients: ["Fleurs fraîches cueillies par temps sec et légèrement flétries quelques heures", "Huile d'olive"],
        etapes: ["Remplir un bocal propre et sec de fleurs sans les tasser.", "Couvrir entièrement d'huile.", "Laisser macérer 3 semaines au soleil en secouant de temps en temps.", "Filtrer finement et conserver au frais à l'abri de la lumière ; usage externe uniquement."]
      }
    ],
    confusions: [
      {
        nom: "Digitale pourpre (rosette)",
        latin: "Digitalis purpurea",
        danger: "mortel",
        differences: ["Feuilles de rosette plus minces, vert sombre dessus, simplement duveteuses et non épaissement feutrées.", "Réseau de nervures en creux bien visible sur le dessus du limbe.", "Pétiole ailé net et bord finement crénelé.", "En fleur, grandes clochettes pourpres pendantes d'un seul côté de la hampe : aucune confusion possible. Ne jamais récolter les feuilles de rosette sans certitude."]
      },
      {
        nom: "Autres molènes",
        latin: "Verbascum densiflorum, Verbascum phlomoides",
        danger: "sans-danger",
        differences: ["Fleurs plus grandes, souvent plus larges et plus aplaties.", "Utilisées de la même façon en herboristerie."]
      }
    ],
    precautions: [
      "Toujours filtrer très finement les tisanes : les poils des feuilles et des fleurs irritent fortement la gorge.",
      "Ne rien instiller dans l'oreille en cas d'écoulement, de douleur forte ou de suspicion de perforation du tympan : consulter.",
      "Ne pas utiliser les graines, qui contiennent des saponines et servaient autrefois à étourdir les poissons.",
      "Une toux qui dure plus d'une semaine, avec fièvre ou essoufflement, nécessite un avis médical."
    ],
    sources: [
      { titre: "Wikipédia : Molène thapsus", url: "https://fr.wikipedia.org/wiki/Verbascum_thapsus" },
      { titre: "Althea Provence : bouillon-blanc", url: "https://www.altheaprovence.com/bouillon-blanc-verbascum-thapsus/" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes (1868), article Bouillon-blanc", url: "https://archive.org/details/traitpratiquee1868cazi" },
      { titre: "Wikipédia : Digitale pourpre", url: "https://fr.wikipedia.org/wiki/Digitalis_purpurea" }
    ]
  },
  {
    id: "bardane",
    nom: "Grande bardane",
    latin: "Arctium lappa",
    famille: "Astéracées",
    autresNoms: ["Bardane", "Herbe aux teigneux", "Glouteron", "Gobo (au Japon)"],
    statut: "comestible-medicinale",
    resume: "Plante imposante aux immenses feuilles en cœur dont les capitules crochus s'accrochent aux vêtements. Sa racine, légume au Japon, est une grande plante dépurative de la tradition pour la peau.",
    habitat: "Friches, décombres, bords de chemins, lisières, abords des fermes, sols riches et frais.",
    habitats: ["friche", "bord-chemin", "haie"],
    regions: "Une grande partie de la France, plus commune dans le Nord et l'Est, plus rare en région méditerranéenne.",
    recolte: [3, 4, 5, 9, 10, 11],
    floraison: [7, 8, 9],
    couleurFleur: ["violet", "rose"],
    typeFeuille: "Très grandes feuilles en cœur à la base, jusqu'à 50 cm, vertes dessus et couvertes d'un feutre blanchâtre dessous.",
    reconnaissance: [
      "Bisannuelle : rosette de feuilles géantes la première année, tige ramifiée de 1 à 2 m la deuxième.",
      "Feuilles en cœur, à bord ondulé, vert terne dessus et nettement blanc grisâtre et cotonneux dessous.",
      "Pétiole des feuilles de base plein (non creux) et sillonné, chez la grande bardane.",
      "Capitules globuleux de 3 à 4 cm, fleurs pourpres au sommet d'une boule de bractées terminées en crochets.",
      "Les capitules secs s'accrochent aux poils et aux vêtements (inspiration du velcro).",
      "Racine pivotante longue, brune dehors, blanche dedans."
    ],
    partiesUtilisees: ["racine", "jeunes tiges", "pétioles", "feuilles", "graines"],
    bienfaits: [
      "La racine est traditionnellement utilisée comme dépurative, notamment pour les peaux à tendance acnéique ou les petites affections cutanées.",
      "Réputée diurétique et sudorifique dans la médecine populaire.",
      "Les feuilles étaient appliquées autrefois en cataplasme sur les ulcères et plaies atones, selon Cazin.",
      "Les fibres de la racine (inuline) nourrissent la flore intestinale."
    ],
    usages: ["racine de première année épluchée, sautée ou mijotée comme le salsifis", "jeunes tiges et pétioles pelés, cuits comme des cardons", "racine séchée en décoction", "feuilles en cataplasme"],
    recettes: [
      {
        titre: "Racine de bardane sautée à la japonaise (kinpira)",
        type: "cuisine",
        ingredients: ["1 racine de bardane de première année", "1 carotte", "1 cuillère à soupe d'huile de sésame", "1 cuillère à soupe de sauce soja", "1 cuillère à café de sucre", "Graines de sésame"],
        etapes: ["Gratter la racine et la couper en fins bâtonnets, les plonger aussitôt dans l'eau pour éviter qu'ils noircissent.", "Couper la carotte en bâtonnets de même taille.", "Faire sauter le tout 5 minutes dans l'huile.", "Ajouter soja et sucre, cuire encore 3 minutes et parsemer de sésame."]
      },
      {
        titre: "Décoction de racine de bardane",
        type: "infusion",
        ingredients: ["1 cuillère à soupe de racine séchée coupée (environ 3 g)", "300 ml d'eau froide"],
        etapes: ["Mettre la racine dans l'eau froide et porter à ébullition.", "Laisser frémir 10 minutes à couvert, puis infuser encore 10 minutes.", "Filtrer ; 2 tasses par jour en cure de 3 semaines."]
      }
    ],
    confusions: [
      {
        nom: "Belladone",
        latin: "Atropa belladonna",
        danger: "mortel",
        differences: ["Des intoxications graves sont survenues avec des racines de bardane du commerce contaminées par de la racine de belladone.", "Feuilles ovales pointues, entières, sans feutre blanc dessous, groupées par paires inégales.", "Fleurs en cloche brun violacé, puis baies noires luisantes de la taille d'une cerise.", "Plante des clairières et coupes forestières ; ne jamais déterrer une racine sans avoir identifié les feuilles de la même plante."]
      },
      {
        nom: "Pétasite hybride",
        latin: "Petasites hybridus",
        danger: "toxique",
        differences: ["Feuilles presque rondes, profondément échancrées en cœur, au pétiole creusé en gouttière.", "Pousse en vastes colonies au bord de l'eau.", "Fleurs roses en épi trapu qui apparaissent avant les feuilles au début du printemps.", "Contient des alcaloïdes toxiques pour le foie."]
      },
      {
        nom: "Petite bardane",
        latin: "Arctium minus",
        danger: "sans-danger",
        differences: ["Capitules plus petits, en grappes serrées.", "Pétioles creux.", "S'utilise de la même façon."]
      }
    ],
    precautions: [
      "Récolter la racine sur des plantes de première année (rosette sans tige florale), plus tendres.",
      "Allergie possible chez les personnes sensibles aux Astéracées.",
      "Réputée hypoglycémiante : prudence et avis médical en cas de diabète traité.",
      "Effet diurétique : éviter en cas de traitement diurétique, pendant la grossesse et l'allaitement.",
      "Acheter la racine séchée en herboristerie de confiance, pour éviter tout mélange avec d'autres racines."
    ],
    sources: [
      { titre: "Wikipédia : Grande bardane", url: "https://fr.wikipedia.org/wiki/Arctium_lappa" },
      { titre: "Althea Provence : grande bardane", url: "https://www.altheaprovence.com/grande-bardane-arctium-lappa-detox-et-problemes-de-peau/" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes (1868), article Bardane", url: "https://archive.org/details/traitpratiquee1868cazi" },
      { titre: "Wikipédia : Belladone", url: "https://fr.wikipedia.org/wiki/Atropa_belladonna" }
    ]
  },
  {
    id: "chicoree-sauvage",
    nom: "Chicorée sauvage",
    latin: "Cichorium intybus",
    famille: "Astéracées",
    autresNoms: ["Chicorée amère", "Barbe de capucin", "Écoubette"],
    statut: "comestible-medicinale",
    resume: "Ancêtre de l'endive et de la chicorée à café, aux fleurs d'un bleu ciel lumineux qui ne s'ouvrent que le matin. Ses jeunes feuilles amères se mangent en salade et sa racine torréfiée remplace le café.",
    habitat: "Bords de chemins et de routes, friches, talus, prairies sèches, terrains vagues ensoleillés.",
    habitats: ["bord-chemin", "friche", "prairie"],
    regions: "Commune dans toute la France de plaine.",
    recolte: [2, 3, 4, 5, 9, 10, 11],
    floraison: [6, 7, 8, 9, 10],
    couleurFleur: ["bleu"],
    typeFeuille: "Rosette de feuilles allongées, profondément découpées en lobes dirigés vers la base, à nervure centrale souvent rougeâtre et poilue.",
    reconnaissance: [
      "Fleurs en capitules bleu ciel de 3 à 4 cm, à languettes dentées au bout, collés directement contre la tige.",
      "Les fleurs s'ouvrent le matin et se referment vers midi.",
      "Tige raide, ramifiée, presque sans feuilles, de 30 cm à 1,2 m, aux rameaux écartés.",
      "Rosette de base rappelant le pissenlit, mais feuilles un peu rudes et poilues dessous sur la nervure.",
      "Latex blanc et amer à la cassure.",
      "Racine pivotante épaisse."
    ],
    partiesUtilisees: ["jeunes feuilles", "racine", "fleurs"],
    bienfaits: [
      "Traditionnellement utilisée comme tonique amer, pour stimuler l'appétit et la digestion.",
      "Réputée favoriser le fonctionnement du foie et la sécrétion de bile, et légèrement laxative.",
      "La racine riche en inuline est un aliment pour la flore intestinale."
    ],
    usages: ["jeunes feuilles en salade, blanchies si trop amères", "racine torréfiée en boisson type café", "fleurs crues pour décorer une salade", "jeunes rosettes cuites à l'huile d'olive comme en Italie"],
    recettes: [
      {
        titre: "Boisson de racine de chicorée torréfiée",
        type: "boisson",
        ingredients: ["Racines de chicorée sauvage lavées", "Eau"],
        etapes: ["Couper les racines en petits dés et les sécher plusieurs jours.", "Les torréfier au four à 180 °C en remuant jusqu'à ce qu'elles soient bien brunes et odorantes (20 à 30 minutes).", "Moudre, puis faire bouillir 1 cuillère à café par tasse d'eau pendant 3 minutes et filtrer."]
      },
      {
        titre: "Salade de jeunes feuilles de chicorée",
        type: "cuisine",
        ingredients: ["2 poignées de jeunes feuilles de chicorée sauvage", "1 œuf dur", "Lardons ou croûtons", "Vinaigrette à la moutarde"],
        etapes: ["Laver les feuilles ; si elles sont très amères, les laisser tremper 30 minutes dans l'eau froide.", "Faire dorer les lardons ou les croûtons.", "Mélanger avec l'œuf écrasé et la vinaigrette."]
      }
    ],
    confusions: [
      {
        nom: "Pissenlit",
        latin: "Taraxacum officinale",
        danger: "sans-danger",
        differences: ["Feuilles lisses et sans poils, tige florale creuse et sans feuilles portant un seul capitule jaune.", "Également comestible."]
      },
      {
        nom: "Laitue vireuse",
        latin: "Lactuca virosa",
        danger: "toxique",
        differences: ["Une rangée de petites épines sur la nervure centrale sous la feuille.", "Feuilles vert bleuté, lisses, souvent tachées de pourpre, qui embrassent la tige par deux oreillettes.", "Odeur vireuse désagréable du latex.", "Fleurs jaune pâle et non bleues."]
      }
    ],
    precautions: [
      "Allergie possible chez les personnes sensibles aux Astéracées.",
      "Réputée stimuler la sécrétion de bile : avis médical en cas de calculs biliaires.",
      "Ne pas cueillir au bord des routes fréquentées, son habitat favori, à cause des polluants."
    ],
    sources: [
      { titre: "Wikipédia : Chicorée sauvage", url: "https://fr.wikipedia.org/wiki/Cichorium_intybus" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes (1868), article Chicorée sauvage", url: "https://archive.org/details/traitpratiquee1868cazi" },
      { titre: "Wikipédia : Laitue vireuse", url: "https://fr.wikipedia.org/wiki/Lactuca_virosa" }
    ]
  },
  {
    id: "laiteron-maraicher",
    nom: "Laiteron maraîcher",
    latin: "Sonchus oleraceus",
    famille: "Astéracées",
    autresNoms: ["Laiteron potager", "Laitron", "Lait d'âne"],
    statut: "comestible",
    resume: "Mauvaise herbe des potagers pleine de latex, qui était autrefois un légume courant. Ses feuilles tendres, à peine amères, se mangent crues ou cuites.",
    habitat: "Potagers, cultures, friches, décombres, pieds de murs, bords de chemins.",
    habitats: ["jardin", "friche", "bord-chemin"],
    regions: "Très commun dans toute la France, y compris en ville.",
    recolte: [3, 4, 5, 6, 7, 8, 9, 10, 11],
    floraison: [5, 6, 7, 8, 9, 10, 11],
    couleurFleur: ["jaune"],
    typeFeuille: "Feuilles tendres, vert bleuté mat, découpées en lobes avec un grand lobe terminal triangulaire, embrassant la tige par deux oreillettes pointues.",
    reconnaissance: [
      "Tige creuse, épaisse, lisse, de 30 cm à 1 m, qui laisse couler un abondant latex blanc à la cassure.",
      "Feuilles de la tige embrassantes, avec deux oreillettes pointues dirigées vers l'arrière.",
      "Bord des feuilles à petites dents molles qui ne piquent pas.",
      "Capitules jaune pâle de 2 à 2,5 cm, groupés au sommet, semblables à de petits pissenlits.",
      "Fruits surmontés d'une aigrette blanche soyeuse."
    ],
    partiesUtilisees: ["jeunes feuilles", "jeunes tiges pelées", "boutons floraux"],
    bienfaits: [
      "Ancienne plante médicinale très estimée dans l'Antiquité, réputée rafraîchissante et légèrement laxative ; Cazin la signalait déjà comme tombée en désuétude.",
      "Légume-feuille riche en minéraux et en vitamines."
    ],
    usages: ["jeunes feuilles en salade", "cuit comme des épinards", "dans les soupes et tartes aux herbes", "jeunes tiges pelées croquées crues"],
    recettes: [
      {
        titre: "Laiterons à l'ail et au citron",
        type: "cuisine",
        ingredients: ["3 poignées de feuilles de laiteron", "2 gousses d'ail", "Huile d'olive", "1/2 citron", "Sel"],
        etapes: ["Laver les feuilles et retirer les parties dures.", "Les blanchir 2 minutes à l'eau bouillante salée et égoutter.", "Faire revenir l'ail dans l'huile, ajouter les feuilles et sauter 3 minutes.", "Arroser de jus de citron au moment de servir."]
      }
    ],
    confusions: [
      {
        nom: "Laiteron rude",
        latin: "Sonchus asper",
        danger: "sans-danger",
        differences: ["Feuilles luisantes bordées de dents épineuses qui piquent.", "Oreillettes arrondies et enroulées.", "Comestible aussi, mais on coupe les bords piquants."]
      },
      {
        nom: "Laitue vireuse",
        latin: "Lactuca virosa",
        danger: "toxique",
        differences: ["Rangée d'aiguillons sous la nervure centrale de la feuille.", "Feuilles plus épaisses, souvent tachées de pourpre, latex à odeur désagréable.", "Tige pleine, souvent rougeâtre, et inflorescence très ramifiée en pyramide."]
      }
    ],
    precautions: [
      "Cueillir dans des jardins non traités et loin des routes, la plante poussant souvent en milieu urbain.",
      "Allergie possible chez les personnes sensibles aux Astéracées.",
      "Les feuilles âgées deviennent amères : préférer les plantes jeunes avant la floraison."
    ],
    sources: [
      { titre: "Wikipédia : Sonchus oleraceus", url: "https://fr.wikipedia.org/wiki/Sonchus_oleraceus" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes (1868), article Laiteron", url: "https://archive.org/details/traitpratiquee1868cazi" },
      { titre: "Wikipédia : Laitue vireuse", url: "https://fr.wikipedia.org/wiki/Lactuca_virosa" }
    ]
  },
  {
    id: "porcelle-enracinee",
    nom: "Porcelle enracinée",
    latin: "Hypochaeris radicata",
    famille: "Astéracées",
    autresNoms: ["Salade de porc", "Herbe à l'épervier", "Pissenlit bâtard"],
    statut: "comestible",
    resume: "Faux pissenlit très commun des pelouses, aux feuilles velues et aux tiges fines et ramifiées. Ses rosettes se mangent comme le pissenlit, en un peu moins amer.",
    habitat: "Pelouses, prairies sèches, talus, bords de chemins, dunes, sols plutôt pauvres et sablonneux.",
    habitats: ["prairie", "bord-chemin", "jardin", "littoral"],
    regions: "Très commune dans toute la France.",
    recolte: [2, 3, 4, 5, 9, 10, 11],
    floraison: [5, 6, 7, 8, 9, 10],
    couleurFleur: ["jaune"],
    typeFeuille: "Rosette plaquée au sol de feuilles oblongues à lobes arrondis, couvertes de poils raides.",
    reconnaissance: [
      "Rosette de feuilles très velues et rudes au toucher, aux lobes arrondis.",
      "Tiges florales fines, pleines, souvent ramifiées, presque sans feuilles, portant quelques petites écailles.",
      "Capitules jaunes de 2,5 à 4 cm, semblables au pissenlit, à l'extrémité des rameaux.",
      "Tige légèrement renflée sous le capitule.",
      "Latex blanc peu abondant à la cassure."
    ],
    partiesUtilisees: ["jeunes feuilles", "boutons floraux", "racine"],
    bienfaits: [
      "Utilisée comme le pissenlit en tradition populaire, comme légère plante dépurative de printemps.",
      "Légume-feuille riche en fibres et minéraux."
    ],
    usages: ["jeunes feuilles en salade ou cuites", "boutons floraux sautés", "racine grillée en succédané de café"],
    recettes: [
      {
        titre: "Rosettes de porcelle à la poêle",
        type: "cuisine",
        ingredients: ["2 poignées de rosettes de porcelle", "1 oignon", "Huile d'olive", "Sel, poivre"],
        etapes: ["Laver les rosettes en éliminant terre et feuilles abîmées.", "Les blanchir 2 minutes pour assouplir les poils.", "Faire fondre l'oignon dans l'huile, ajouter les feuilles et cuire 5 minutes."]
      }
    ],
    confusions: [
      {
        nom: "Pissenlit",
        latin: "Taraxacum officinale",
        danger: "sans-danger",
        differences: ["Feuilles glabres à dents pointues dirigées vers la base.", "Tige florale creuse, non ramifiée, portant un seul capitule.", "Comestible aussi : la confusion est sans gravité."]
      },
      {
        nom: "Séneçon jacobée (rosette)",
        latin: "Jacobaea vulgaris",
        danger: "toxique",
        differences: ["Feuilles glabres ou presque, profondément découpées en segments eux-mêmes dentés, comme frisées.", "Pas de latex à la cassure.", "En fleur, tige feuillée portant de nombreux petits capitules jaunes à 13 languettes en large bouquet plat.", "Contient des alcaloïdes toxiques pour le foie."]
      }
    ],
    precautions: [
      "Allergie possible chez les personnes sensibles aux Astéracées.",
      "Éviter les pelouses traitées et les zones fréquentées par les chiens.",
      "Toujours vérifier la présence de latex et l'absence de feuilles finement découpées sur la tige pour écarter le séneçon."
    ],
    sources: [
      { titre: "Wikipédia : Porcelle enracinée", url: "https://fr.wikipedia.org/wiki/Hypochaeris_radicata" },
      { titre: "Wikipédia : Séneçon jacobée", url: "https://fr.wikipedia.org/wiki/Jacobaea_vulgaris" }
    ]
  },
  {
    id: "lampsane",
    nom: "Lampsane commune",
    latin: "Lapsana communis",
    famille: "Astéracées",
    autresNoms: ["Lapsane", "Herbe aux mamelles", "Graveline"],
    statut: "comestible",
    resume: "Herbe des ombrages et des jardins aux petites fleurs jaunes, aux feuilles en lyre douces et légèrement amères. Elle se mange en salade ou cuite et servait autrefois en cataplasme sur les seins engorgés.",
    habitat: "Lisières, haies, sous-bois clairs, jardins, pieds de murs, bords de chemins ombragés.",
    habitats: ["haie", "jardin", "bord-chemin", "foret"],
    regions: "Commune dans toute la France.",
    recolte: [3, 4, 5, 6, 9, 10],
    floraison: [5, 6, 7, 8, 9, 10],
    couleurFleur: ["jaune"],
    typeFeuille: "Feuilles de base en lyre : un grand lobe terminal ovale denté et quelques petits lobes sur le pétiole.",
    reconnaissance: [
      "Feuilles inférieures en forme de lyre, au grand lobe terminal arrondi, minces et tendres.",
      "Tige dressée, ramifiée en haut, de 30 cm à 1 m, un peu velue à la base.",
      "Nombreux petits capitules jaunes de 1 à 2 cm, sur de longs pédoncules fins.",
      "Fruits sans aigrette (différence avec la plupart des Astéracées à fleurs jaunes).",
      "Latex blanc peu abondant."
    ],
    partiesUtilisees: ["jeunes feuilles", "jeunes pousses"],
    bienfaits: [
      "Ses feuilles en cataplasme étaient préconisées autrefois sur les seins engorgés des nourrices, d'où son nom d'herbe aux mamelles (usage rapporté par Cazin, aujourd'hui abandonné).",
      "Réputée proche de la chicorée par ses propriétés légèrement amères et digestives."
    ],
    usages: ["jeunes feuilles en salade mélangée", "cuite comme les épinards", "dans les soupes aux herbes"],
    recettes: [
      {
        titre: "Soupe verte à la lampsane",
        type: "cuisine",
        ingredients: ["3 poignées de feuilles de lampsane", "1 poireau", "2 pommes de terre", "1 litre de bouillon", "Crème, sel, poivre"],
        etapes: ["Faire suer le poireau émincé.", "Ajouter les pommes de terre en dés et le bouillon, cuire 15 minutes.", "Ajouter les feuilles lavées et cuire 5 minutes.", "Mixer et ajouter un peu de crème."]
      }
    ],
    confusions: [
      {
        nom: "Séneçon commun",
        latin: "Senecio vulgaris",
        danger: "toxique",
        differences: ["Feuilles charnues découpées tout du long en lobes irréguliers, sans grand lobe terminal arrondi.", "Capitules jaunes en petits pinceaux sans languettes, entourés de bractées à pointe noire.", "Pas de latex à la cassure.", "Contient des alcaloïdes toxiques pour le foie."]
      },
      {
        nom: "Moutardes et roquettes",
        latin: "Sinapis arvensis",
        danger: "sans-danger",
        differences: ["Fleurs à quatre pétales en croix et non en capitules.", "Saveur piquante de moutarde, pas de latex."]
      }
    ],
    precautions: [
      "Plante considérée sans toxicité ; préférer les feuilles jeunes, qui deviennent amères avec l'âge.",
      "Vérifier l'absence de latex et la forme en lyre pour écarter les séneçons toxiques.",
      "Allergie possible chez les personnes sensibles aux Astéracées."
    ],
    sources: [
      { titre: "Wikipédia : Lampsane commune", url: "https://fr.wikipedia.org/wiki/Lapsana_communis" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes (1868), article Lapsane", url: "https://archive.org/details/traitpratiquee1868cazi" },
      { titre: "Wikipédia : Séneçon commun", url: "https://fr.wikipedia.org/wiki/Senecio_vulgaris" }
    ]
  },
  {
    id: "mouron-des-oiseaux",
    nom: "Mouron des oiseaux",
    latin: "Stellaria media",
    famille: "Caryophyllacées",
    autresNoms: ["Stellaire intermédiaire", "Mouron blanc", "Morgeline", "Mouron des petits oiseaux"],
    statut: "comestible-medicinale",
    resume: "Petite plante tendre et rampante des potagers, verte même en hiver, au goût de jeune maïs ou de petits pois. Excellente crue en salade ; il faut bien la distinguer du mouron rouge, toxique.",
    habitat: "Potagers, champs cultivés, friches, pieds de haies, sols frais et riches.",
    habitats: ["jardin", "friche", "haie", "bord-chemin"],
    regions: "Partout en France, presque toute l'année.",
    recolte: [1, 2, 3, 4, 5, 9, 10, 11, 12],
    floraison: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    couleurFleur: ["blanc"],
    typeFeuille: "Petites feuilles opposées, ovales pointues, lisses et tendres, les inférieures pétiolées.",
    reconnaissance: [
      "Une seule ligne de poils court le long de la tige et change de côté à chaque nœud : critère décisif.",
      "Tige ronde, fragile, couchée puis redressée ; si on l'étire, elle se casse en laissant un fil élastique central.",
      "Petites fleurs blanches en étoile de 5 mm : cinq pétales si profondément fendus qu'on croit en compter dix.",
      "Feuilles opposées, vert tendre, sans points noirs dessous.",
      "Aucun latex à la cassure."
    ],
    partiesUtilisees: ["sommités", "feuilles", "tiges tendres"],
    bienfaits: [
      "Traditionnellement appliqué frais en cataplasme ou en pommade pour apaiser les démangeaisons et les petites irritations de la peau.",
      "Réputé rafraîchissant et légèrement diurétique en usage interne.",
      "Riche en vitamine C et en minéraux, précieux en hiver quand les légumes frais manquent."
    ],
    usages: ["cru en salade", "dans les sandwichs et tartines", "en pesto ou en soupe ajouté en fin de cuisson", "en cataplasme frais sur la peau"],
    recettes: [
      {
        titre: "Salade d'hiver au mouron des oiseaux",
        type: "cuisine",
        ingredients: ["2 poignées de sommités de mouron des oiseaux", "1 betterave cuite", "Quelques cerneaux de noix", "Fromage de chèvre frais", "Vinaigrette"],
        etapes: ["Couper aux ciseaux les sommités, en laissant les tiges basses plus filandreuses.", "Laver et égoutter soigneusement.", "Ajouter la betterave en dés, les noix et le chèvre émietté, assaisonner."]
      },
      {
        titre: "Cataplasme frais de mouron contre les démangeaisons",
        type: "cataplasme",
        ingredients: ["1 poignée de mouron des oiseaux frais", "1 compresse ou un linge propre"],
        etapes: ["Laver et hacher finement la plante, ou l'écraser au mortier.", "L'étaler sur la compresse et appliquer sur la zone qui démange.", "Laisser 20 à 30 minutes et renouveler si besoin."]
      }
    ],
    confusions: [
      {
        nom: "Mouron rouge",
        latin: "Lysimachia arvensis",
        danger: "toxique",
        differences: ["Tige carrée et entièrement glabre, sans ligne de poils.", "Feuilles sans pétiole, ponctuées de petits points noirs sur la face inférieure.", "Fleurs orange rouge ou bleues, à cinq pétales entiers, non fendus.", "Pas de fil élastique au centre de la tige."]
      },
      {
        nom: "Euphorbe des jardins",
        latin: "Euphorbia peplus",
        danger: "irritant",
        differences: ["Laisse couler un latex blanc à la moindre blessure.", "Feuilles alternes, ovales arrondies, sans fleurs blanches en étoile.", "Petites inflorescences vertes en coupe."]
      }
    ],
    precautions: [
      "Contient des saponines : rester raisonnable sur les quantités, une grosse consommation peut être laxative.",
      "Peut accumuler nitrates et métaux lourds : ne pas cueillir sur des sols pollués ou très fumés.",
      "Vérifier chaque poignée : le mouron rouge pousse souvent au même endroit."
    ],
    sources: [
      { titre: "Wikipédia : Stellaria media", url: "https://fr.wikipedia.org/wiki/Stellaria_media" },
      { titre: "Wikipédia : Lysimachia arvensis (mouron rouge)", url: "https://fr.wikipedia.org/wiki/Lysimachia_arvensis" }
    ]
  },
  {
    id: "gaillet-gratteron",
    nom: "Gaillet gratteron",
    latin: "Galium aparine",
    famille: "Rubiacées",
    autresNoms: ["Gratteron", "Grateron", "Herbe collante", "Rièble"],
    statut: "comestible-medicinale",
    resume: "La plante qui colle aux vêtements, grâce à de minuscules crochets. Ses jeunes pousses se mangent cuites ou en jus et elle est une plante traditionnelle du drainage et de la peau.",
    habitat: "Haies, lisières, friches, bords de champs, jardins, broussailles, sols riches en azote.",
    habitats: ["haie", "friche", "jardin", "bord-chemin"],
    regions: "Très commun dans toute la France, jusqu'à environ 1 000 m d'altitude.",
    recolte: [2, 3, 4, 5],
    floraison: [5, 6, 7, 8, 9],
    couleurFleur: ["blanc"],
    typeFeuille: "Feuilles étroites et pointues, par verticilles de 6 à 8 autour de la tige, bordées de petits aiguillons tournés vers l'arrière.",
    reconnaissance: [
      "Toute la plante accroche fortement aux doigts et aux vêtements.",
      "Tige carrée, faible, qui grimpe en s'appuyant sur les autres plantes, jusqu'à 1,5 m.",
      "Feuilles disposées en étoiles de 6 à 8 à chaque nœud.",
      "Minuscules fleurs blanches à quatre pétales.",
      "Fruits en petites boules doubles couvertes de crochets, qui s'accrochent aux poils des animaux."
    ],
    partiesUtilisees: ["jeunes pousses", "parties aériennes", "graines"],
    bienfaits: [
      "Traditionnellement utilisé comme dépuratif et tonique du système lymphatique, notamment en cure de printemps.",
      "Réputé diurétique ; Cazin le mentionne contre l'hydropisie et certaines affections de la peau.",
      "Employé en usage externe en tradition populaire sur les petites plaies et les peaux irritées."
    ],
    usages: ["jeunes pousses hachées dans les soupes et omelettes", "jus frais ou eau macérée à froid", "graines torréfiées en succédané de café", "infusion de la plante sèche"],
    recettes: [
      {
        titre: "Eau de gaillet macérée à froid",
        type: "boisson",
        ingredients: ["1 grosse poignée de jeunes pousses de gaillet gratteron", "1 litre d'eau fraîche"],
        etapes: ["Rincer les pousses et les froisser ou les hacher grossièrement.", "Les plonger dans l'eau et laisser macérer une nuit au réfrigérateur.", "Filtrer et boire dans la journée."]
      },
      {
        titre: "Soupe de printemps au gratteron",
        type: "cuisine",
        ingredients: ["2 poignées de jeunes sommités de gaillet", "1 poignée d'orties", "2 pommes de terre", "1 oignon", "1 litre de bouillon"],
        etapes: ["Faire revenir l'oignon et ajouter pommes de terre et bouillon.", "Cuire 15 minutes, ajouter les herbes hachées finement et cuire 5 minutes.", "Mixer longuement pour bien broyer les fibres."]
      }
    ],
    confusions: [
      {
        nom: "Gaillet mollugine",
        latin: "Galium mollugo",
        danger: "sans-danger",
        differences: ["Ne colle pas aux vêtements, tige lisse.", "Fleurs blanches plus nombreuses en grappes mousseuses.", "Sans danger également."]
      },
      {
        nom: "Aspérule odorante",
        latin: "Galium odoratum",
        danger: "irritant",
        differences: ["Plante des sous-bois, dressée, lisse, ne colle pas.", "Odeur de foin coupé en séchant, due à la coumarine.", "À utiliser en petite quantité seulement, la coumarine pouvant causer des maux de tête à forte dose."]
      }
    ],
    precautions: [
      "Ne récolter que les jeunes pousses tendres pour la cuisine : la plante devient vite fibreuse et rêche.",
      "Effet diurétique : prudence en cas de traitement diurétique ou d'insuffisance rénale.",
      "Pas de toxicité connue, mais par principe de précaution éviter les cures pendant la grossesse."
    ],
    sources: [
      { titre: "Wikipédia : Gaillet gratteron", url: "https://fr.wikipedia.org/wiki/Galium_aparine" },
      { titre: "Althea Provence : gaillet gratteron", url: "https://www.altheaprovence.com/gaillet-gratteron-galium-aparine-tonique-lymphatique/" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes (1868), article Grateron", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "gaillet-jaune",
    nom: "Gaillet jaune",
    latin: "Galium verum",
    famille: "Rubiacées",
    autresNoms: ["Caille-lait jaune", "Gaillet vrai", "Fleur de la Saint-Jean"],
    statut: "comestible-medicinale",
    resume: "Plante des prés secs aux panicules mousseuses jaune d'or, au doux parfum de miel. Ses fleurs faisaient autrefois cailler le lait et colorer les fromages ; elles se boivent en tisane.",
    habitat: "Prairies sèches, pelouses calcaires, talus, bords de chemins, dunes.",
    habitats: ["prairie", "bord-chemin", "littoral"],
    regions: "Commun dans presque toute la France.",
    recolte: [6, 7, 8],
    floraison: [6, 7, 8, 9],
    couleurFleur: ["jaune"],
    typeFeuille: "Feuilles très étroites comme des aiguilles, enroulées par les bords, par verticilles de 8 à 12.",
    reconnaissance: [
      "Fleurs minuscules jaune vif à quatre pétales, réunies en panicules denses au sommet des tiges.",
      "Odeur sucrée de miel des fleurs, plus nette en fin de journée.",
      "Feuilles linéaires, à bords roulés en dessous, en étoiles de 8 à 12 autour de la tige.",
      "Tiges fines, dressées ou étalées, de 20 à 80 cm, ne collant pas.",
      "La plante noircit en séchant."
    ],
    partiesUtilisees: ["sommités fleuries", "jeunes pousses"],
    bienfaits: [
      "Traditionnellement utilisé en tisane comme légèrement diurétique et apaisant.",
      "Réputé calmant léger dans la tradition populaire ; il fut même recommandé contre l'épilepsie au XIXe siècle, usage abandonné et sans fondement.",
      "Utilisé en usage externe en bain ou compresse sur les peaux irritées."
    ],
    usages: ["sommités fleuries en tisane", "jeunes pousses cuites dans les potages", "fleurs pour colorer et parfumer des boissons", "anciennement pour faire cailler le lait"],
    recettes: [
      {
        titre: "Tisane de fleurs de gaillet jaune",
        type: "infusion",
        ingredients: ["1 cuillère à soupe de sommités fleuries séchées (environ 2 g)", "250 ml d'eau frémissante"],
        etapes: ["Verser l'eau sur les sommités.", "Couvrir et laisser infuser 10 minutes.", "Filtrer ; 1 à 2 tasses par jour, de préférence le soir."]
      }
    ],
    confusions: [
      {
        nom: "Gaillet mollugine",
        latin: "Galium mollugo",
        danger: "sans-danger",
        differences: ["Fleurs blanches et non jaunes.", "Feuilles plus larges, non enroulées, par 6 à 8."]
      },
      {
        nom: "Gaillet croisette",
        latin: "Cruciata laevipes",
        danger: "sans-danger",
        differences: ["Feuilles ovales velues par 4 seulement.", "Fleurs jaunes en petits bouquets à l'aisselle des feuilles, pas en panicule terminale."]
      }
    ],
    precautions: [
      "Aucune toxicité connue ; les usages anciens contre l'épilepsie ne doivent pas être repris.",
      "Effet diurétique léger : prudence en cas de traitement diurétique.",
      "Cueillir avec modération, la plante étant en régression dans les prairies amendées."
    ],
    sources: [
      { titre: "Wikipédia : Caille-lait jaune", url: "https://fr.wikipedia.org/wiki/Galium_verum" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes (1868), article Caille-lait", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "trefle-des-pres",
    nom: "Trèfle des prés",
    latin: "Trifolium pratense",
    famille: "Fabacées",
    autresNoms: ["Trèfle rouge", "Trèfle violet", "Tête de mouton"],
    statut: "comestible-medicinale",
    resume: "Trèfle aux grosses têtes roses très sucrées, butinées par les bourdons. Les fleurs se mangent crues ou en tisane ; la plante est riche en isoflavones, des composés proches des hormones.",
    habitat: "Prairies, pâturages, bords de chemins, talus, pelouses.",
    habitats: ["prairie", "bord-chemin", "jardin"],
    regions: "Partout en France, de la plaine à la haute montagne.",
    recolte: [4, 5, 6, 7, 8, 9],
    floraison: [5, 6, 7, 8, 9, 10],
    couleurFleur: ["rose", "violet"],
    typeFeuille: "Feuilles à trois folioles ovales, souvent marquées d'un croissant pâle, avec de larges stipules triangulaires terminées en pointe fine.",
    reconnaissance: [
      "Trois folioles ovales par feuille, souvent ornées d'une tache claire en forme de V.",
      "Têtes florales globuleuses rose violacé de 2 à 3 cm, posées directement sur une paire de feuilles.",
      "Tiges dressées ou étalées, un peu velues, de 15 à 50 cm.",
      "Chaque petite fleur tubulaire contient du nectar sucré qu'on peut aspirer.",
      "Stipules membraneuses veinées à la base des feuilles."
    ],
    partiesUtilisees: ["fleurs", "jeunes feuilles"],
    bienfaits: [
      "Traditionnellement utilisé en tisane comme dépuratif et adoucissant de la toux.",
      "Ses isoflavones ont fait l'objet d'études pour le confort de la ménopause, avec des résultats inconstants.",
      "Réputé en usage externe pour les peaux irritées."
    ],
    usages: ["fleurs crues en salade ou en dessert", "fleurs séchées en tisane", "jeunes feuilles cuites en petite quantité", "fleurs en beignets"],
    recettes: [
      {
        titre: "Tisane de fleurs de trèfle rouge",
        type: "infusion",
        ingredients: ["2 à 3 têtes florales séchées (environ 2 g)", "250 ml d'eau frémissante"],
        etapes: ["Verser l'eau sur les fleurs.", "Infuser 10 minutes à couvert.", "Filtrer ; 2 tasses par jour au maximum, en cure courte."]
      },
      {
        titre: "Sirop de fleurs de trèfle",
        type: "sirop",
        ingredients: ["2 poignées de têtes fraîches bien ouvertes", "500 ml d'eau", "400 g de sucre", "1/2 citron"],
        etapes: ["Verser l'eau bouillante sur les fleurs et laisser infuser une nuit.", "Filtrer en pressant, ajouter le sucre et le jus de citron.", "Faire réduire à petit feu 15 minutes et mettre en bouteille ébouillantée."]
      }
    ],
    confusions: [
      {
        nom: "Trèfle intermédiaire",
        latin: "Trifolium medium",
        danger: "sans-danger",
        differences: ["Tête florale portée sur un court pédoncule au-dessus des feuilles.", "Stipules étroites et pointues.", "Usages similaires."]
      },
      {
        nom: "Mélilot officinal",
        latin: "Melilotus officinalis",
        danger: "toxique",
        differences: ["Fleurs jaunes en longues grappes fines, et non en têtes rondes.", "Feuilles à trois folioles allongées et dentées.", "Odeur de foin en séchant : il contient de la coumarine qui, dans la plante moisie, se transforme en anticoagulant puissant."]
      }
    ],
    precautions: [
      "Riche en isoflavones (phyto-œstrogènes) : déconseillé pendant la grossesse, l'allaitement et en cas de cancer hormono-dépendant ou d'antécédents.",
      "Avis médical en cas de traitement anticoagulant ou hormonal.",
      "Les feuilles crues en quantité peuvent ballonner ; les consommer cuites et avec modération.",
      "Ne jamais utiliser de fleurs moisies ou mal séchées."
    ],
    sources: [
      { titre: "Wikipédia : Trèfle des prés", url: "https://fr.wikipedia.org/wiki/Trifolium_pratense" },
      { titre: "Wikipédia : Mélilot officinal", url: "https://fr.wikipedia.org/wiki/Melilotus_officinalis" }
    ]
  },
  {
    id: "trefle-blanc",
    nom: "Trèfle blanc",
    latin: "Trifolium repens",
    famille: "Fabacées",
    autresNoms: ["Trèfle rampant", "Petit trèfle", "Trèfle de Hollande"],
    statut: "comestible",
    resume: "Le trèfle des pelouses, aux têtes blanches parfumées sur des tiges rampantes. Ses fleurs sucrées se mangent crues, en beignets ou en tisane.",
    habitat: "Pelouses, prairies pâturées, bords de chemins, parcs, terrains piétinés.",
    habitats: ["prairie", "jardin", "bord-chemin"],
    regions: "Partout en France, de la plaine à la montagne.",
    recolte: [4, 5, 6, 7, 8, 9, 10],
    floraison: [5, 6, 7, 8, 9, 10],
    couleurFleur: ["blanc", "rose"],
    typeFeuille: "Trois folioles arrondies finement dentées, souvent marquées d'un chevron pâle, sur de longs pétioles dressés.",
    reconnaissance: [
      "Tiges rampantes qui s'enracinent aux nœuds et forment des tapis.",
      "Feuilles à trois folioles rondes, souvent avec un chevron blanchâtre, pétioles partant des tiges couchées.",
      "Têtes florales blanches ou rosées de 1,5 à 2 cm, sur un long pédoncule nu, au-dessus des feuilles.",
      "Les fleurs fanées se rabattent vers le bas et brunissent.",
      "Plante glabre, à odeur de miel en fleur."
    ],
    partiesUtilisees: ["fleurs", "jeunes feuilles"],
    bienfaits: [
      "Traditionnellement utilisé en tisane comme légèrement astringent et adoucissant.",
      "Ses fleurs servaient en tradition populaire en lotion pour les yeux fatigués."
    ],
    usages: ["fleurs crues en salade", "fleurs en beignets ou dans les crêpes", "fleurs séchées en tisane au goût sucré", "jeunes feuilles cuites en petite quantité"],
    recettes: [
      {
        titre: "Beignets de fleurs de trèfle blanc",
        type: "cuisine",
        ingredients: ["2 poignées de têtes fleuries avec un bout de tige", "100 g de farine", "1 œuf", "15 cl de lait ou de bière", "Huile de friture", "Sucre"],
        etapes: ["Préparer une pâte en mélangeant farine, œuf et lait.", "Tremper les têtes une à une en les tenant par la tige.", "Frire quelques secondes dans l'huile chaude jusqu'à ce qu'elles dorent.", "Égoutter et saupoudrer de sucre."]
      }
    ],
    confusions: [
      {
        nom: "Oxalis petite oseille",
        latin: "Oxalis acetosella",
        danger: "irritant",
        differences: ["Folioles en forme de cœur, pliées en deux le long de la nervure.", "Fleurs isolées blanches veinées de mauve à cinq pétales, pas de têtes rondes.", "Goût acide : comestible en très petite quantité seulement, à cause de l'acide oxalique."]
      },
      {
        nom: "Luzerne lupuline",
        latin: "Medicago lupulina",
        danger: "sans-danger",
        differences: ["Minuscules têtes jaunes.", "Foliole centrale portée par un petit pédoncule et terminée par une petite pointe."]
      }
    ],
    precautions: [
      "Certaines souches contiennent des composés cyanogènes en faible quantité : consommer avec modération, de préférence les fleurs.",
      "Éviter les pelouses traitées ou fréquentées par les chiens.",
      "Les feuilles crues en quantité peuvent provoquer des ballonnements."
    ],
    sources: [
      { titre: "Wikipédia : Trèfle blanc", url: "https://fr.wikipedia.org/wiki/Trifolium_repens" }
    ]
  },
  {
    id: "petite-pimprenelle",
    nom: "Petite pimprenelle",
    latin: "Poterium sanguisorba",
    famille: "Rosacées",
    autresNoms: ["Pimprenelle", "Sanguisorbe mineure", "Pimprenelle des prés"],
    statut: "comestible-medicinale",
    resume: "Jolie rosette de feuilles en petites folioles dentées, au goût frais de concombre et de noix. Herbe aromatique classique des salades, autrefois employée comme astringente.",
    habitat: "Pelouses sèches, prairies calcaires, talus, bords de chemins, rocailles ensoleillées.",
    habitats: ["prairie", "bord-chemin", "friche", "montagne"],
    regions: "Commune dans toute la France, surtout sur sols calcaires.",
    recolte: [2, 3, 4, 5, 6, 9, 10, 11],
    floraison: [5, 6, 7, 8],
    couleurFleur: ["vert", "rouge"],
    typeFeuille: "Feuilles composées de 9 à 25 petites folioles arrondies, profondément dentées, disposées par paires.",
    reconnaissance: [
      "Rosette de feuilles divisées en nombreuses petites folioles rondes et bien dentées, comme des petites fraises de feuilles.",
      "Goût et odeur de concombre quand on froisse une foliole.",
      "Tiges florales de 20 à 50 cm portant des têtes globuleuses vertes de 1 cm.",
      "Sur les têtes florales, fleurs à pinceaux rouges en haut (femelles) et étamines jaunes pendantes en bas.",
      "Pas de pétales visibles."
    ],
    partiesUtilisees: ["jeunes feuilles", "folioles"],
    bienfaits: [
      "Traditionnellement employée comme astringente contre les diarrhées légères et en usage externe sur les petites plaies, selon les traités anciens.",
      "Réputée apéritive et digestive, comme beaucoup d'herbes de salade."
    ],
    usages: ["folioles crues dans les salades et fromages frais", "dans les sauces vertes et vinaigrettes", "pour aromatiser une boisson fraîche ou un vinaigre", "en omelette"],
    recettes: [
      {
        titre: "Fromage frais à la pimprenelle",
        type: "cuisine",
        ingredients: ["200 g de fromage blanc ou de faisselle égouttée", "1 poignée de folioles de pimprenelle", "1 échalote", "Sel, poivre, filet d'huile d'olive"],
        etapes: ["Détacher les folioles des tiges dures et les ciseler.", "Hacher l'échalote très finement.", "Mélanger au fromage, assaisonner et servir frais sur du pain grillé."]
      },
      {
        titre: "Vinaigre de pimprenelle",
        type: "macerat",
        ingredients: ["1 poignée de feuilles de pimprenelle", "50 cl de vinaigre de cidre"],
        etapes: ["Rincer et sécher les feuilles.", "Les mettre dans une bouteille et couvrir de vinaigre.", "Laisser macérer 3 semaines à l'abri de la lumière, filtrer et utiliser en vinaigrette."]
      }
    ],
    confusions: [
      {
        nom: "Grande pimprenelle",
        latin: "Sanguisorba officinalis",
        danger: "sans-danger",
        differences: ["Plante plus grande des prés humides.", "Têtes florales allongées rouge sombre.", "Également comestible."]
      },
      {
        nom: "Aigremoine eupatoire (jeunes rosettes)",
        latin: "Agrimonia eupatoria",
        danger: "sans-danger",
        differences: ["Folioles inégales, grandes et petites alternées, velues et grisâtres dessous.", "Pas de goût de concombre.", "Épis de fleurs jaunes en été."]
      }
    ],
    precautions: [
      "Riche en tanins : une consommation importante peut constiper.",
      "Préférer les jeunes feuilles, plus tendres et moins amères."
    ],
    sources: [
      { titre: "Wikipédia : Pimprenelle", url: "https://fr.wikipedia.org/wiki/Sanguisorba_minor" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes (1868), article Pimprenelle", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "benoite",
    nom: "Benoîte commune",
    latin: "Geum urbanum",
    famille: "Rosacées",
    autresNoms: ["Herbe de saint Benoît", "Galiote", "Racine de giroflée"],
    statut: "comestible-medicinale",
    resume: "Plante discrète des ombrages aux petites fleurs jaunes, dont la racine sent le clou de girofle. Cette racine aromatise les plats et les boissons et fut autrefois un remède réputé contre les fièvres.",
    habitat: "Haies, lisières, sous-bois clairs, jardins, pieds de murs, bords de chemins ombragés.",
    habitats: ["haie", "foret", "jardin", "bord-chemin"],
    regions: "Commune dans toute la France.",
    recolte: [3, 4, 9, 10, 11],
    floraison: [5, 6, 7, 8, 9],
    couleurFleur: ["jaune"],
    typeFeuille: "Feuilles de base divisées, avec un grand lobe terminal arrondi et quelques petites folioles inégales ; feuilles de la tige à trois lobes avec de grandes stipules.",
    reconnaissance: [
      "Racine brun rougeâtre à forte odeur de clou de girofle quand on la gratte ou la coupe.",
      "Petites fleurs jaunes de 1 à 1,5 cm à cinq pétales, dressées au bout de tiges fines et velues.",
      "Fruits en boule de petits akènes terminés chacun par un crochet qui s'accroche aux vêtements.",
      "Feuilles de base à grand lobe terminal et petites folioles inégales le long du pétiole.",
      "Grandes stipules foliacées à la base des feuilles de la tige."
    ],
    partiesUtilisees: ["racine", "jeunes feuilles"],
    bienfaits: [
      "La racine riche en tanins est traditionnellement utilisée comme astringente contre les diarrhées légères et en gargarisme pour les gencives.",
      "Elle fut célèbre comme remède contre les fièvres intermittentes et un substitut indigène du quinquina, usage que rapporte Cazin et aujourd'hui abandonné.",
      "Réputée tonique et digestive dans la tradition populaire."
    ],
    usages: ["racine pour aromatiser les desserts, le vin et la bière comme une épice", "jeunes feuilles cuites dans les soupes", "racine séchée en décoction"],
    recettes: [
      {
        titre: "Vin aromatisé à la racine de benoîte",
        type: "macerat",
        ingredients: ["20 g de racines de benoîte fraîches nettoyées", "75 cl de vin blanc", "2 cuillères à soupe de sucre"],
        etapes: ["Brosser les racines et les couper en petits morceaux.", "Les mettre dans le vin avec le sucre.", "Laisser macérer une semaine au frais, filtrer et servir en petit verre à l'apéritif, avec modération."]
      },
      {
        titre: "Décoction de racine de benoîte",
        type: "infusion",
        ingredients: ["1 cuillère à café de racine séchée (environ 2 g)", "250 ml d'eau"],
        etapes: ["Faire frémir la racine dans l'eau 10 minutes.", "Laisser infuser 10 minutes hors du feu.", "Filtrer ; 2 tasses par jour pendant 2 à 3 jours, ou en bain de bouche."]
      }
    ],
    confusions: [
      {
        nom: "Renoncule rampante",
        latin: "Ranunculus repens",
        danger: "toxique",
        differences: ["Feuilles à trois segments eux-mêmes lobés, sans grand lobe terminal arrondi entouré de petites folioles.", "Fleurs jaune brillant, laquées, plus grandes (2 à 3 cm).", "Racine sans odeur de girofle.", "Stolons rampants qui s'enracinent ; plante irritante et toxique crue."]
      },
      {
        nom: "Benoîte des ruisseaux",
        latin: "Geum rivale",
        danger: "sans-danger",
        differences: ["Fleurs pendantes en cloche rose orangé.", "Lieux humides ; usages comparables."]
      }
    ],
    precautions: [
      "Riche en tanins : ne pas prolonger l'usage interne, qui peut constiper et irriter l'estomac.",
      "Récolter la racine au printemps ou à l'automne, quand son parfum est le plus fort.",
      "Une diarrhée qui dure plus de 2 jours, avec fièvre ou sang, nécessite un avis médical."
    ],
    sources: [
      { titre: "Wikipédia : Benoîte commune", url: "https://fr.wikipedia.org/wiki/Geum_urbanum" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes (1868), article Benoite", url: "https://archive.org/details/traitpratiquee1868cazi" },
      { titre: "Wikipédia : Renoncule rampante", url: "https://fr.wikipedia.org/wiki/Ranunculus_repens" }
    ]
  },
  {
    id: "potentille-anserine",
    nom: "Potentille ansérine",
    latin: "Potentilla anserina",
    famille: "Rosacées",
    autresNoms: ["Argentine", "Herbe aux oies", "Bec d'oie"],
    statut: "comestible-medicinale",
    resume: "Plante rampante aux feuilles soyeuses argentées dessous et aux fleurs jaunes. Remède traditionnel des crampes et des diarrhées, ses racines étaient autrefois mangées en temps de disette.",
    habitat: "Bords de chemins humides, prairies piétinées, abords des mares, fossés, rivages, sols tassés.",
    habitats: ["bord-chemin", "prairie", "bord-eau", "littoral"],
    regions: "Commune dans la plus grande partie de la France, plus rare dans le Midi.",
    recolte: [4, 5, 6, 7, 8, 9, 10],
    floraison: [5, 6, 7, 8],
    couleurFleur: ["jaune"],
    typeFeuille: "Feuilles composées de 15 à 25 folioles dentées, vert soyeux dessus et couvertes de poils blanc argenté dessous.",
    reconnaissance: [
      "Revers des feuilles d'un blanc argenté soyeux, très visible quand le vent les retourne.",
      "Feuilles pennées à folioles dentées, grandes et petites alternées.",
      "Longs stolons rouges qui courent au sol et s'enracinent aux nœuds.",
      "Fleurs jaunes isolées à cinq pétales arrondis, de 2 cm, sur de longs pédoncules.",
      "Plante basse, en rosettes reliées par les stolons."
    ],
    partiesUtilisees: ["parties aériennes", "racines", "jeunes feuilles"],
    bienfaits: [
      "Traditionnellement utilisée en infusion contre les crampes, les règles douloureuses et les spasmes digestifs.",
      "Réputée astringente grâce à ses tanins, contre les diarrhées légères ; Cazin la cite aussi en gargarisme.",
      "Utilisée en tradition populaire en compresses sur les petites plaies."
    ],
    usages: ["parties aériennes séchées en tisane", "racines cuites, au goût de panais", "jeunes feuilles cuites en petite quantité"],
    recettes: [
      {
        titre: "Tisane d'argentine",
        type: "infusion",
        ingredients: ["1 cuillère à soupe de parties aériennes séchées (environ 2 g)", "250 ml d'eau frémissante"],
        etapes: ["Verser l'eau sur la plante.", "Couvrir et laisser infuser 10 minutes.", "Filtrer ; 2 à 3 tasses par jour en cas de crampes, quelques jours au plus."]
      },
      {
        titre: "Racines d'ansérine rôties",
        type: "cuisine",
        ingredients: ["Une poignée de racines d'ansérine nettoyées", "Beurre ou huile", "Sel"],
        etapes: ["Brosser les racines, les plus charnues étant récoltées à l'automne.", "Les cuire 10 minutes à l'eau bouillante.", "Les faire dorer à la poêle dans le beurre et saler."]
      }
    ],
    confusions: [
      {
        nom: "Potentille rampante",
        latin: "Potentilla reptans",
        danger: "sans-danger",
        differences: ["Feuilles palmées à cinq folioles, vertes des deux côtés.", "Fleurs jaunes semblables ; plante aussi astringente."]
      },
      {
        nom: "Renoncule rampante",
        latin: "Ranunculus repens",
        danger: "toxique",
        differences: ["Feuilles à trois segments lobés, vertes et non argentées dessous.", "Fleurs jaune brillant, comme vernies.", "Plante irritante, toxique crue."]
      }
    ],
    precautions: [
      "Tanins : ne pas prolonger l'usage, peut constiper.",
      "Pousse souvent sur des sols piétinés et des bords de chemins : récolter loin des routes et des zones de passage d'animaux.",
      "Des règles très douloureuses ou des crampes fréquentes justifient un avis médical."
    ],
    sources: [
      { titre: "Wikipédia : Potentille ansérine", url: "https://fr.wikipedia.org/wiki/Potentilla_anserina" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes (1868), article Argentine", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "aigremoine",
    nom: "Aigremoine eupatoire",
    latin: "Agrimonia eupatoria",
    famille: "Rosacées",
    autresNoms: ["Aigremoine", "Herbe de Saint-Guillaume", "Thé des bois", "Soubeirette"],
    statut: "medicinale",
    resume: "Plante des talus aux longs épis de petites fleurs jaunes et aux fruits accrocheurs. Riche en tanins, c'est la tisane et le gargarisme traditionnels des maux de gorge et des intestins irrités.",
    habitat: "Talus, lisières, haies, bords de chemins, prairies sèches et friches ensoleillées.",
    habitats: ["bord-chemin", "haie", "prairie", "friche"],
    regions: "Commune dans toute la France.",
    recolte: [6, 7, 8],
    floraison: [6, 7, 8, 9],
    couleurFleur: ["jaune"],
    typeFeuille: "Feuilles pennées, vert foncé dessus et grisâtres velues dessous, à grandes folioles dentées séparées par de petites folioles intercalaires.",
    reconnaissance: [
      "Long épi effilé de petites fleurs jaunes à cinq pétales, de 5 à 8 mm, sur une tige dressée de 30 à 80 cm.",
      "Feuilles composées alternant grandes et minuscules folioles.",
      "Fruits en petites toupies couronnées de crochets qui s'accrochent aux vêtements.",
      "Tige et feuilles velues, revers des feuilles grisâtre.",
      "Légère odeur aromatique au froissement."
    ],
    partiesUtilisees: ["sommités fleuries", "feuilles"],
    bienfaits: [
      "Traditionnellement utilisée en gargarisme contre les maux de gorge, l'enrouement et les inflammations de la bouche.",
      "Réputée astringente grâce à ses tanins, contre les diarrhées légères.",
      "Cazin note qu'elle était très vantée par les anciens pour le foie, mais qu'à son époque on l'employait surtout en gargarisme."
    ],
    usages: ["tisane des sommités fleuries", "gargarisme pour la gorge", "compresses sur les petites plaies", "anciennement boisson de remplacement du thé"],
    recettes: [
      {
        titre: "Gargarisme d'aigremoine",
        type: "infusion",
        ingredients: ["2 cuillères à soupe de sommités séchées (environ 4 g)", "250 ml d'eau", "1 cuillère à café de miel"],
        etapes: ["Faire frémir la plante 5 minutes dans l'eau, puis laisser infuser 10 minutes.", "Filtrer et ajouter le miel.", "Se gargariser 3 à 4 fois par jour avec la préparation tiède, sans l'avaler."]
      },
      {
        titre: "Tisane d'aigremoine",
        type: "infusion",
        ingredients: ["1 cuillère à soupe de sommités séchées (environ 2 g)", "250 ml d'eau frémissante"],
        etapes: ["Verser l'eau sur la plante.", "Infuser 10 minutes à couvert.", "Filtrer ; 2 à 3 tasses par jour pendant quelques jours."]
      }
    ],
    confusions: [
      {
        nom: "Aigremoine odorante",
        latin: "Agrimonia procera",
        danger: "sans-danger",
        differences: ["Plante plus grande, plus odorante, à revers des feuilles moins gris.", "Fruits à crochets étalés ou réfléchis.", "Usages identiques."]
      },
      {
        nom: "Séneçon jacobée",
        latin: "Jacobaea vulgaris",
        danger: "toxique",
        differences: ["Fleurs jaunes en capitules à languettes groupés en large bouquet plat, et non en long épi.", "Feuilles découpées en segments frisés, glabres.", "Fruits à aigrette blanche, sans crochets."]
      }
    ],
    precautions: [
      "Riche en tanins : peut constiper et réduire l'absorption du fer ; prendre à distance des repas et des médicaments.",
      "Éviter en cas de constipation chronique et pendant la grossesse, par prudence.",
      "Un mal de gorge avec forte fièvre, plaques ou gêne pour avaler nécessite un avis médical."
    ],
    sources: [
      { titre: "Wikipédia : Aigremoine eupatoire", url: "https://fr.wikipedia.org/wiki/Agrimonia_eupatoria" },
      { titre: "Althea Provence : aigremoine", url: "https://www.altheaprovence.com/aigremoine-agrimonia-eupatoria-angines-calculs-insuffisance-veineuse/" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes (1868), article Aigremoine", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "prele-des-champs",
    nom: "Prêle des champs",
    latin: "Equisetum arvense",
    famille: "Équisétacées",
    autresNoms: ["Queue de cheval", "Queue de rat", "Petite prêle"],
    statut: "medicinale",
    resume: "Plante préhistorique sans fleurs, aux tiges articulées en petits sapins verts, très riche en silice. Reminéralisante réputée, elle doit être bien distinguée de la prêle des marais, toxique.",
    habitat: "Champs, talus humides, bords de chemins, fossés, friches, remblais, sols frais souvent argileux.",
    habitats: ["friche", "bord-chemin", "bord-eau", "prairie", "jardin"],
    regions: "Commune dans toute la France.",
    recolte: [5, 6, 7],
    floraison: [3, 4],
    couleurFleur: ["aucune"],
    typeFeuille: "Feuilles réduites à de petites gaines dentées entourant la tige à chaque nœud ; rameaux verts fins disposés en verticilles.",
    reconnaissance: [
      "Deux sortes de tiges : au début du printemps des tiges fertiles brun clair, sans chlorophylle, terminées par un épi à spores, puis des tiges stériles vertes en forme de petit sapin.",
      "Sur la tige verte, le premier segment de chaque rameau est plus long que la gaine de la tige d'où il part : critère essentiel.",
      "Rameaux pleins, à quatre angles, qui ne se ramifient pas eux-mêmes.",
      "Gaines de la tige principale à 7 à 13 dents.",
      "Tige rêche au toucher, se démontant en segments emboîtés.",
      "Pas de fleurs, reproduction par spores."
    ],
    partiesUtilisees: ["tiges stériles vertes"],
    bienfaits: [
      "Traditionnellement utilisée comme reminéralisante grâce à sa richesse en silice, pour les ongles cassants, les cheveux et les articulations.",
      "Réputée diurétique.",
      "Employée autrefois pour arrêter les saignements, en usage interne et externe, selon Cazin et d'autres auteurs anciens."
    ],
    usages: ["décoction des tiges stériles séchées", "en bain ou compresses", "décoction au jardin contre les maladies fongiques", "autrefois pour récurer les étains (herbe à polir)"],
    recettes: [
      {
        titre: "Décoction de prêle des champs",
        type: "infusion",
        ingredients: ["1 cuillère à soupe de tiges stériles séchées et coupées (environ 2 g)", "300 ml d'eau"],
        etapes: ["Mettre la prêle dans l'eau froide et porter à ébullition.", "Faire frémir 10 à 15 minutes pour extraire la silice.", "Laisser infuser 10 minutes, filtrer ; 2 tasses par jour en cure de 3 semaines au plus, suivie d'une pause."]
      }
    ],
    confusions: [
      {
        nom: "Prêle des marais",
        latin: "Equisetum palustre",
        danger: "toxique",
        differences: ["Le premier segment des rameaux est plus court que la gaine de la tige principale.", "Une seule sorte de tige : l'épi à spores se trouve au sommet de tiges vertes en été.", "Gaines à dents noires bordées de blanc, peu nombreuses (5 à 10).", "Pousse dans les marais et prairies humides ; contient de la palustrine et de la thiaminase, toxiques pour le bétail."]
      },
      {
        nom: "Grande prêle",
        latin: "Equisetum telmateia",
        danger: "toxique",
        differences: ["Tiges stériles beaucoup plus grandes, jusqu'à 1,5 m, d'un blanc ivoire entre les rameaux.", "Gaines à 20 à 40 dents.", "Lieux humides et suintants ; à ne pas utiliser à la place de la prêle des champs."]
      }
    ],
    precautions: [
      "Contient une enzyme qui détruit la vitamine B1 (thiaminase) : pas d'usage prolongé, préférer des cures courtes avec des pauses.",
      "Déconseillée pendant la grossesse, l'allaitement et chez l'enfant.",
      "Effet diurétique : contre-indiquée en cas d'œdème d'origine cardiaque ou rénale et avec des diurétiques sans avis médical.",
      "Ne récolter que des tiges vertes de prêle des champs certaines, dans des lieux non pollués : la plante concentre ce qu'il y a dans le sol."
    ],
    sources: [
      { titre: "Wikipédia : Prêle des champs", url: "https://fr.wikipedia.org/wiki/Equisetum_arvense" },
      { titre: "Wikipédia : Prêle des marais", url: "https://fr.wikipedia.org/wiki/Equisetum_palustre" },
      { titre: "Althea Provence : prêle des champs", url: "https://www.altheaprovence.com/prele-des-champs-equisetum-arvense-silicium-collagene-restructurante/" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes (1868), article Prèle", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "bourse-a-pasteur",
    nom: "Bourse-à-pasteur",
    latin: "Capsella bursa-pastoris",
    famille: "Brassicacées",
    autresNoms: ["Capselle", "Boursette", "Molette", "Tabouret"],
    statut: "comestible-medicinale",
    resume: "Petite plante omniprésente reconnaissable à ses fruits en cœur, comme de minuscules bourses. Ses rosettes ont un goût de chou doux, et elle est une plante traditionnelle des saignements.",
    habitat: "Jardins, cultures, friches, bords de chemins, pieds de murs, pelouses, jusqu'en montagne.",
    habitats: ["jardin", "friche", "bord-chemin"],
    regions: "Partout en France, presque toute l'année.",
    recolte: [1, 2, 3, 4, 5, 6, 9, 10, 11, 12],
    floraison: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    couleurFleur: ["blanc"],
    typeFeuille: "Rosette de feuilles très variables, souvent découpées en lobes comme celles du pissenlit ; feuilles de la tige embrassantes en fer de flèche.",
    reconnaissance: [
      "Fruits plats en forme de cœur ou de triangle, sur de longs pédicelles étalés tout le long de la tige.",
      "Minuscules fleurs blanches à quatre pétales en croix au sommet.",
      "Rosette de feuilles plaquées au sol, découpées ou presque entières.",
      "Feuilles de la tige rares, étroites, embrassant la tige par deux oreillettes.",
      "Saveur de chou au mâchonnement, aucun latex."
    ],
    partiesUtilisees: ["rosettes", "jeunes feuilles", "parties aériennes", "graines"],
    bienfaits: [
      "Traditionnellement utilisée pour freiner les petits saignements, notamment les règles abondantes et les saignements de nez.",
      "Réputée astringente et légèrement diurétique.",
      "Les jeunes feuilles apportent vitamines et minéraux comme les autres choux sauvages."
    ],
    usages: ["rosettes crues en salade ou cuites comme un petit chou", "dans les soupes", "graines comme succédané de moutarde", "parties aériennes séchées en tisane"],
    recettes: [
      {
        titre: "Rosettes de bourse-à-pasteur sautées",
        type: "cuisine",
        ingredients: ["3 poignées de rosettes de bourse-à-pasteur", "1 gousse d'ail", "Huile de sésame ou d'olive", "Sauce soja"],
        etapes: ["Nettoyer les rosettes en coupant la racine et en lavant soigneusement la terre.", "Faire sauter à feu vif 3 minutes avec l'ail.", "Assaisonner de quelques gouttes de sauce soja."]
      },
      {
        titre: "Infusion de bourse-à-pasteur",
        type: "infusion",
        ingredients: ["1 cuillère à soupe de parties aériennes séchées (environ 2 g)", "250 ml d'eau frémissante"],
        etapes: ["Verser l'eau sur la plante.", "Infuser 10 minutes à couvert.", "Filtrer ; 2 à 3 tasses par jour, quelques jours avant et pendant les règles abondantes."]
      }
    ],
    confusions: [
      {
        nom: "Séneçon commun",
        latin: "Senecio vulgaris",
        danger: "toxique",
        differences: ["Feuilles charnues, découpées, sans rosette plaquée bien nette.", "Capitules jaunes en pinceau, aucune fleur blanche en croix.", "Fruits à aigrette blanche, jamais de fruits en cœur.", "Contient des alcaloïdes toxiques pour le foie."]
      },
      {
        nom: "Tabouret des champs",
        latin: "Thlaspi arvense",
        danger: "sans-danger",
        differences: ["Fruits ronds, larges et ailés, échancrés au sommet.", "Odeur d'ail au froissement.", "Comestible, goût plus fort."]
      }
    ],
    precautions: [
      "Déconseillée pendant la grossesse : elle est réputée stimuler les contractions de l'utérus.",
      "Avis médical en cas de traitement anticoagulant, de troubles de la coagulation ou d'hypertension.",
      "Des saignements anormaux ou répétés doivent toujours être explorés par un médecin.",
      "Ne pas récolter au bord des cultures traitées."
    ],
    sources: [
      { titre: "Wikipédia : Capsella bursa-pastoris", url: "https://fr.wikipedia.org/wiki/Capsella_bursa-pastoris" },
      { titre: "Althea Provence : bourse-à-pasteur", url: "https://www.altheaprovence.com/bourse-a-pasteur-capsella-bursa-pastoris/" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes (1868), article Bourse à pasteur", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "cardamine-des-pres",
    nom: "Cardamine des prés",
    latin: "Cardamine pratensis",
    famille: "Brassicacées",
    autresNoms: ["Cresson des prés", "Cressonnette", "Passerage sauvage"],
    statut: "comestible",
    resume: "Jolie fleur rose pâle des prairies humides au printemps, aux feuilles au goût piquant de cresson. Elle se croque en petite quantité et nourrit la chenille du papillon aurore.",
    habitat: "Prairies humides, bords de ruisseaux, fossés, prés fauchés, lisières fraîches.",
    habitats: ["prairie", "bord-eau"],
    regions: "Commune dans la plus grande partie de la France, plus rare dans le Midi.",
    recolte: [3, 4, 5],
    floraison: [4, 5, 6],
    couleurFleur: ["rose", "violet", "blanc"],
    typeFeuille: "Feuilles de base pennées à folioles arrondies ; feuilles de la tige à folioles étroites et linéaires.",
    reconnaissance: [
      "Fleurs lilas pâle à blanches de 1,5 à 2 cm, à quatre pétales en croix, en grappe au sommet.",
      "Rosette de feuilles divisées en petites folioles rondes, rappelant le cresson.",
      "Feuilles de la tige très différentes, aux folioles fines comme des lanières.",
      "Tige creuse, dressée, de 20 à 50 cm.",
      "Goût piquant de cresson ; fruits en longues siliques dressées."
    ],
    partiesUtilisees: ["feuilles", "fleurs", "boutons floraux"],
    bienfaits: [
      "Traditionnellement considérée comme antiscorbutique et apéritive, comme le cresson ; Cazin la signale aussi comme anciennement employée contre l'épilepsie, usage abandonné.",
      "Riche en vitamine C."
    ],
    usages: ["feuilles et fleurs crues dans les salades", "dans les fromages frais et sandwichs", "en garniture de soupe au dernier moment"],
    recettes: [
      {
        titre: "Tartines à la cardamine des prés",
        type: "cuisine",
        ingredients: ["Pain de campagne", "Beurre ou fromage frais", "1 petite poignée de feuilles et fleurs de cardamine", "Sel"],
        etapes: ["Laver et sécher les feuilles et les fleurs.", "Tartiner le pain de beurre ou de fromage frais.", "Parsemer de feuilles ciselées et de fleurs entières, saler légèrement."]
      }
    ],
    confusions: [
      {
        nom: "Renoncule âcre",
        latin: "Ranunculus acris",
        danger: "toxique",
        differences: ["Feuilles palmées, découpées en segments profonds, et non divisées en folioles rondes alignées.", "Fleurs jaune brillant à cinq pétales.", "Saveur brûlante et non simplement piquante ; plante irritante crue.", "Pousse dans les mêmes prairies : vérifier chaque rosette."]
      },
      {
        nom: "Cardamine amère",
        latin: "Cardamine amara",
        danger: "sans-danger",
        differences: ["Fleurs blanches à anthères violettes.", "Tige pleine, au bord des ruisseaux ; comestible, plus amère."]
      }
    ],
    precautions: [
      "Consommer en petite quantité : comme les autres crucifères piquantes, elle peut irriter l'estomac et les reins à forte dose.",
      "Dans les prés humides, risque de douve du foie si des bovins ou ovins pâturent : laver très soigneusement ou cuire.",
      "Cueillir avec modération : plante hôte de la chenille de l'aurore et parfois en régression avec le drainage des prairies."
    ],
    sources: [
      { titre: "Wikipédia : Cardamine des prés", url: "https://fr.wikipedia.org/wiki/Cardamine_pratensis" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes (1868), article Cardamine", url: "https://archive.org/details/traitpratiquee1868cazi" },
      { titre: "Wikipédia : Renoncule âcre", url: "https://fr.wikipedia.org/wiki/Ranunculus_acris" }
    ]
  },
  {
    id: "cardamine-herissee",
    nom: "Cardamine hérissée",
    latin: "Cardamine hirsuta",
    famille: "Brassicacées",
    autresNoms: ["Cardamine hirsute", "Cresson de muraille", "Petit cresson"],
    statut: "comestible",
    resume: "Minuscule crucifère des jardins et des pots, qui projette ses graines au moindre contact. Ses petites rosettes au goût de cresson doux se mangent crues en fin d'hiver.",
    habitat: "Jardins, potagers, pots de fleurs, allées, pieds de murs, cultures, pelouses.",
    habitats: ["jardin", "friche", "bord-chemin"],
    regions: "Très commune dans toute la France.",
    recolte: [1, 2, 3, 4, 10, 11, 12],
    floraison: [2, 3, 4, 5, 6],
    couleurFleur: ["blanc"],
    typeFeuille: "Rosette de feuilles pennées, à petites folioles arrondies, avec quelques poils sur le dessus.",
    reconnaissance: [
      "Rosette plate de feuilles divisées en petites folioles rondes, la terminale plus grande.",
      "Minuscules fleurs blanches à quatre pétales, en petits bouquets au sommet de tiges fines de 5 à 30 cm.",
      "Fruits en siliques fines dressées qui dépassent les fleurs.",
      "Siliques mûres qui éclatent en projetant les graines quand on les touche.",
      "Goût de cresson doux, légèrement piquant."
    ],
    partiesUtilisees: ["rosettes", "feuilles", "fleurs"],
    bienfaits: [
      "Comme les autres cressons sauvages, apporte vitamine C et composés soufrés réputés stimulants de l'appétit."
    ],
    usages: ["rosettes crues en salade", "sur des tartines ou dans les sandwichs", "en garniture comme le cresson"],
    recettes: [
      {
        titre: "Salade de rosettes de cardamine et œufs",
        type: "cuisine",
        ingredients: ["2 poignées de rosettes de cardamine hérissée", "2 œufs durs", "Vinaigrette à l'huile de colza", "Ciboulette"],
        etapes: ["Couper les rosettes au ras du sol et les laver soigneusement.", "Écaler et couper les œufs en quartiers.", "Mélanger avec la vinaigrette et la ciboulette au moment de servir."]
      }
    ],
    confusions: [
      {
        nom: "Cardamine flexueuse",
        latin: "Cardamine flexuosa",
        danger: "sans-danger",
        differences: ["Tige en zigzag, plus feuillée.", "Lieux plus humides et ombragés ; comestible aussi."]
      },
      {
        nom: "Fumeterre officinale",
        latin: "Fumaria officinalis",
        danger: "toxique",
        differences: ["Feuilles finement découpées en segments étroits, d'un vert grisâtre, sans folioles rondes.", "Fleurs roses tubulaires à pointe pourpre foncé.", "Goût amer et non piquant ; contient des alcaloïdes."]
      }
    ],
    precautions: [
      "Laver soigneusement : la plante pousse au ras du sol et dans les allées.",
      "Éviter les pots et massifs traités, ainsi que les jardins de ville près des routes."
    ],
    sources: [
      { titre: "Wikipédia : Cardamine hirsute", url: "https://fr.wikipedia.org/wiki/Cardamine_hirsuta" },
      { titre: "Wikipédia : Fumeterre officinale", url: "https://fr.wikipedia.org/wiki/Fumaria_officinalis" }
    ]
  },
  {
    id: "barbaree-commune",
    nom: "Barbarée commune",
    latin: "Barbarea vulgaris",
    famille: "Brassicacées",
    autresNoms: ["Herbe de sainte Barbe", "Roquette des marais", "Cresson de terre sauvage"],
    statut: "comestible",
    resume: "Crucifère aux feuilles vert sombre luisant, présente en rosette tout l'hiver, puis couverte de fleurs jaune vif. Ses feuilles amères et piquantes et ses boutons se mangent comme un brocoli sauvage.",
    habitat: "Bords de chemins humides, fossés, berges, friches, champs, prairies fraîches.",
    habitats: ["bord-chemin", "bord-eau", "friche", "prairie"],
    regions: "Commune dans la plupart des régions de France.",
    recolte: [1, 2, 3, 4, 10, 11, 12],
    floraison: [4, 5, 6, 7],
    couleurFleur: ["jaune"],
    typeFeuille: "Feuilles de base glabres, vert foncé luisant, en lyre : un grand lobe terminal arrondi et 2 à 5 paires de petits lobes ; feuilles de la tige embrassantes.",
    reconnaissance: [
      "Rosette de feuilles brillantes, sans poils, au grand lobe terminal arrondi parfois en cœur à la base.",
      "Fleurs jaune vif à quatre pétales en croix, en grappes serrées au sommet de tiges de 30 à 80 cm.",
      "Feuilles supérieures embrassant la tige par deux oreillettes.",
      "Fruits en siliques étroites dressées.",
      "Goût amer et piquant de crucifère."
    ],
    partiesUtilisees: ["feuilles", "boutons floraux", "jeunes tiges"],
    bienfaits: [
      "Traditionnellement considérée comme antiscorbutique et apéritive ; Cazin la cite aussi comme vulnéraire, appliquée sur les plaies.",
      "Riche en vitamine C, précieuse en hiver."
    ],
    usages: ["jeunes feuilles en salade en petite quantité", "feuilles cuites, en changeant l'eau si elles sont trop amères", "boutons floraux cuits comme un brocoli", "en soupe"],
    recettes: [
      {
        titre: "Boutons de barbarée façon brocoli",
        type: "cuisine",
        ingredients: ["2 poignées de grappes de boutons encore fermés", "Huile d'olive", "1 gousse d'ail", "Citron, sel"],
        etapes: ["Laver les boutons et les blanchir 2 minutes dans l'eau bouillante salée.", "Égoutter et faire sauter 2 minutes à l'huile avec l'ail.", "Arroser de citron et servir aussitôt."]
      }
    ],
    confusions: [
      {
        nom: "Séneçon jacobée",
        latin: "Jacobaea vulgaris",
        danger: "toxique",
        differences: ["Fleurs en capitules à languettes groupés en bouquet plat, et non en croix à quatre pétales.", "Feuilles mates, découpées en segments frisés, à odeur désagréable.", "Fruits à aigrette, pas de siliques.", "Contient des alcaloïdes toxiques pour le foie."]
      },
      {
        nom: "Barbarée dressée",
        latin: "Barbarea stricta",
        danger: "sans-danger",
        differences: ["Feuilles à une ou deux paires de lobes seulement et lobe terminal allongé.", "Usages proches."]
      }
    ],
    precautions: [
      "Amère et piquante : à consommer avec modération, les crucifères en excès pouvant irriter l'estomac et gêner la thyroïde.",
      "Pousse souvent près de l'eau : laver soigneusement ou cuire si des animaux pâturent à proximité.",
      "Les rosettes d'hiver sont les plus douces ; les feuilles d'été deviennent très amères."
    ],
    sources: [
      { titre: "Wikipédia : Barbarea vulgaris", url: "https://fr.wikipedia.org/wiki/Barbarea_vulgaris" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes (1868), article Barbarée", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "moutarde-des-champs",
    nom: "Moutarde des champs",
    latin: "Sinapis arvensis",
    famille: "Brassicacées",
    autresNoms: ["Sanve", "Moutarde sauvage", "Sénevé sauvage", "Ravenelle jaune"],
    statut: "comestible",
    resume: "Crucifère aux fleurs jaune vif qui colore les champs au printemps. Jeunes feuilles, boutons et fleurs se mangent avec leur saveur piquante, et ses graines donnent une moutarde rustique.",
    habitat: "Champs cultivés, moissons, friches, bords de chemins, terrains remués.",
    habitats: ["friche", "bord-chemin", "jardin"],
    regions: "Commune dans toute la France, surtout sur sols calcaires.",
    recolte: [3, 4, 5, 6, 9, 10],
    floraison: [4, 5, 6, 7, 8, 9],
    couleurFleur: ["jaune"],
    typeFeuille: "Feuilles rudes, poilues, ovales à bord irrégulièrement denté, les inférieures lobées à la base avec un grand lobe terminal.",
    reconnaissance: [
      "Fleurs jaune vif de 1,5 à 2 cm à quatre pétales en croix, sépales étalés à l'horizontale.",
      "Tige poilue, souvent violacée à la base, de 30 à 80 cm.",
      "Feuilles rudes au toucher, les supérieures non embrassantes.",
      "Siliques bosselées terminées par un bec conique, nettement séparées en articles.",
      "Goût piquant de moutarde des feuilles et des boutons."
    ],
    partiesUtilisees: ["jeunes feuilles", "boutons floraux", "fleurs", "graines"],
    bienfaits: [
      "Les graines ont les propriétés de la moutarde noire à un plus faible degré (Cazin) : elles étaient utilisées en cataplasmes révulsifs.",
      "Feuilles réputées apéritives et stimulantes de la digestion."
    ],
    usages: ["jeunes feuilles crues en petite quantité ou cuites", "boutons floraux sautés comme un brocoli", "fleurs crues en salade", "graines moulues en condiment"],
    recettes: [
      {
        titre: "Moutarde sauvage maison",
        type: "cuisine",
        ingredients: ["3 cuillères à soupe de graines mûres de moutarde des champs", "3 cuillères à soupe de vinaigre de cidre", "2 cuillères à soupe d'eau", "1 pincée de sel", "1 cuillère à café de miel"],
        etapes: ["Faire tremper les graines une nuit dans le vinaigre et l'eau.", "Mixer ou piler au mortier avec le sel et le miel jusqu'à la texture voulue.", "Laisser reposer 2 jours au frais avant de goûter ; conserver au réfrigérateur."]
      },
      {
        titre: "Pousses de moutarde sautées",
        type: "cuisine",
        ingredients: ["2 poignées de jeunes feuilles et boutons", "1 oignon", "Huile d'olive", "Sel"],
        etapes: ["Laver et hacher grossièrement les feuilles.", "Faire revenir l'oignon puis ajouter les feuilles et les boutons.", "Cuire 4 à 5 minutes à feu moyen et saler."]
      }
    ],
    confusions: [
      {
        nom: "Ravenelle",
        latin: "Raphanus raphanistrum",
        danger: "sans-danger",
        differences: ["Pétales souvent jaune pâle ou blancs, parcourus de veines violettes bien visibles.", "Fruits en chapelet qui se cassent en morceaux.", "Comestible aussi."]
      },
      {
        nom: "Séneçon jacobée",
        latin: "Jacobaea vulgaris",
        danger: "toxique",
        differences: ["Fleurs en capitules à languettes groupés en bouquet plat, pas de fleurs en croix.", "Feuilles découpées en segments frisés, glabres.", "Aucune silique ; contient des alcaloïdes toxiques pour le foie."]
      }
    ],
    precautions: [
      "Consommer avec modération : en excès, les crucifères piquantes irritent l'estomac et les graines contiennent des composés pouvant gêner la thyroïde.",
      "Les cataplasmes de graines peuvent brûler la peau : ne pas les appliquer sans encadrement, jamais chez l'enfant.",
      "Ne pas cueillir dans les cultures traitées, son habitat le plus fréquent."
    ],
    sources: [
      { titre: "Wikipédia : Moutarde des champs", url: "https://fr.wikipedia.org/wiki/Sinapis_arvensis" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes (1868), article Moutarde sauvage", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "chenopode-blanc",
    nom: "Chénopode blanc",
    latin: "Chenopodium album",
    famille: "Amaranthacées",
    autresNoms: ["Ansérine blanche", "Senousse", "Poule grasse", "Farineuse"],
    statut: "comestible",
    resume: "Mauvaise herbe des potagers aux feuilles poudrées de blanc, cousine du quinoa et de l'épinard. Très nutritive, elle se cuisine comme les épinards, plutôt cuite que crue.",
    habitat: "Potagers, cultures, friches, décombres, tas de fumier, bords de chemins, sols riches.",
    habitats: ["jardin", "friche", "bord-chemin"],
    regions: "Très commun dans toute la France.",
    recolte: [5, 6, 7, 8, 9, 10],
    floraison: [6, 7, 8, 9, 10],
    couleurFleur: ["vert"],
    typeFeuille: "Feuilles alternes en losange ou en patte d'oie, irrégulièrement dentées, couvertes d'une poudre blanche farineuse surtout dessous et au sommet.",
    reconnaissance: [
      "Jeunes feuilles et sommet de la plante couverts d'une pruine blanche farineuse, qui s'efface au doigt.",
      "Feuilles en losange, dentées, vert grisâtre.",
      "L'eau perle sur les feuilles sans les mouiller.",
      "Tige dressée, striée, parfois rayée de rouge, de 30 cm à 1,5 m.",
      "Fleurs minuscules vertes en glomérules farineux groupés en épis.",
      "Odeur faible, pas désagréable."
    ],
    partiesUtilisees: ["jeunes pousses", "feuilles", "graines"],
    bienfaits: [
      "Légume-feuille très riche en protéines, en vitamines A et C et en calcium.",
      "Utilisé en tradition populaire de divers pays comme légèrement laxatif."
    ],
    usages: ["cuit comme les épinards", "en soupe, gratin, quiche ou farce", "graines cuites comme le quinoa, après rinçage", "quelques jeunes feuilles crues seulement"],
    recettes: [
      {
        titre: "Chénopode à la crème",
        type: "cuisine",
        ingredients: ["500 g de jeunes sommités de chénopode", "1 échalote", "1 noix de beurre", "10 cl de crème", "Muscade, sel, poivre"],
        etapes: ["Laver les feuilles et les blanchir 2 minutes à l'eau bouillante, jeter l'eau.", "Faire fondre l'échalote dans le beurre.", "Ajouter le chénopode égoutté et la crème, cuire 5 minutes.", "Assaisonner de muscade, sel et poivre."]
      }
    ],
    confusions: [
      {
        nom: "Morelle noire",
        latin: "Solanum nigrum",
        danger: "toxique",
        differences: ["Feuilles vert sombre, lisses, sans poudre blanche farineuse.", "Petites fleurs blanches en étoile à cœur jaune, puis baies vertes devenant noires.", "Pousse souvent au même endroit dans les potagers : vérifier chaque pied."]
      },
      {
        nom: "Chénopode fausse-ambroisie",
        latin: "Dysphania ambrosioides",
        danger: "toxique",
        differences: ["Forte odeur aromatique et désagréable au froissement.", "Feuilles vertes non farineuses, couvertes de petites glandes.", "Contient une essence toxique."]
      }
    ],
    precautions: [
      "Riche en oxalates : ne pas en abuser et éviter en cas de calculs rénaux, de goutte ou d'arthrite ; préférer la cuisson en jetant l'eau.",
      "Peut accumuler les nitrates sur des sols très fumés ou engraissés : récolter sur des terres saines.",
      "Les graines contiennent des saponines : bien les rincer avant cuisson.",
      "Éviter de le consommer cru en grande quantité."
    ],
    sources: [
      { titre: "Wikipédia : Chenopodium album", url: "https://fr.wikipedia.org/wiki/Chenopodium_album" },
      { titre: "Wikipédia : Morelle noire", url: "https://fr.wikipedia.org/wiki/Solanum_nigrum" }
    ]
  },
  {
    id: "amarante-reflechie",
    nom: "Amarante réfléchie",
    latin: "Amaranthus retroflexus",
    famille: "Amaranthacées",
    autresNoms: ["Amarante à racine rouge", "Blé rouge", "Queue de renard sauvage"],
    statut: "comestible",
    resume: "Plante d'origine américaine devenue une mauvaise herbe courante des potagers d'été. Ses feuilles se cuisinent comme les épinards et ses petites graines comme une céréale.",
    habitat: "Potagers, champs de maïs et de légumes, friches, décombres, bords de chemins, sols riches et chauds.",
    habitats: ["jardin", "friche", "bord-chemin"],
    regions: "Commune dans toute la France de plaine, surtout dans le Sud et l'Ouest.",
    recolte: [6, 7, 8, 9, 10],
    floraison: [7, 8, 9, 10],
    couleurFleur: ["vert"],
    typeFeuille: "Feuilles alternes, ovales en losange, longuement pétiolées, à nervures saillantes dessous et pointe souvent légèrement échancrée.",
    reconnaissance: [
      "Tige épaisse, dressée, velue, de 20 cm à 1 m, souvent rougeâtre à la base.",
      "Racine pivotante d'un rose rouge caractéristique.",
      "Fleurs minuscules vert pâle en épis denses et rêches, groupés au sommet en panicule compacte.",
      "Bractées piquantes entre les fleurs qui rendent l'épi rugueux au toucher.",
      "Feuilles ternes, sans poudre blanche, aux nervures bien visibles."
    ],
    partiesUtilisees: ["jeunes feuilles", "jeunes pousses", "graines"],
    bienfaits: [
      "Légume-feuille riche en protéines, calcium, fer et vitamines.",
      "Les graines, comme celles des amarantes cultivées, sont nourrissantes et sans gluten."
    ],
    usages: ["jeunes feuilles cuites comme les épinards", "dans les soupes et ragoûts", "graines grillées ou cuites en bouillie", "quelques jeunes feuilles crues dans une salade"],
    recettes: [
      {
        titre: "Amarante sautée à l'ail",
        type: "cuisine",
        ingredients: ["500 g de jeunes feuilles et sommités d'amarante", "2 gousses d'ail", "Huile d'olive", "Piment, sel"],
        etapes: ["Laver les feuilles et les blanchir 2 minutes à l'eau bouillante, jeter l'eau.", "Faire revenir l'ail dans l'huile.", "Ajouter les feuilles égouttées, sauter 5 minutes et assaisonner."]
      },
      {
        titre: "Graines d'amarante soufflées",
        type: "cuisine",
        ingredients: ["2 cuillères à soupe de graines d'amarante triées et vannées"],
        etapes: ["Faire chauffer à sec une casserole à fond épais.", "Verser les graines par petites quantités et remuer : elles éclatent en quelques secondes.", "Les verser aussitôt dans un bol ; à ajouter aux céréales du matin ou aux yaourts."]
      }
    ],
    confusions: [
      {
        nom: "Datura stramoine (jeune plant)",
        latin: "Datura stramonium",
        danger: "mortel",
        differences: ["Grandes feuilles glabres à grosses dents irrégulières, à odeur désagréable au froissement.", "Grandes fleurs blanches en trompette, puis capsule épineuse comme une châtaigne.", "Racine blanche, jamais rose rouge.", "Pousse dans les mêmes cultures d'été : vérifier chaque pied."]
      },
      {
        nom: "Morelle noire",
        latin: "Solanum nigrum",
        danger: "toxique",
        differences: ["Feuilles vert sombre sans nervures saillantes en relief ni pointe échancrée.", "Fleurs blanches étoilées à cœur jaune, puis baies noires.", "Aucun épi de fleurs vertes rêches."]
      }
    ],
    precautions: [
      "Contient de l'acide oxalique : préférer la cuisson en jetant l'eau, et modérer en cas de calculs rénaux.",
      "Accumule fortement les nitrates sur les sols très fumés ou engraissés : récolter sur des terres non surfertilisées.",
      "Ne pas cueillir dans les cultures traitées aux herbicides, où elle est fréquente."
    ],
    sources: [
      { titre: "Wikipédia : Amarante réfléchie", url: "https://fr.wikipedia.org/wiki/Amaranthus_retroflexus" },
      { titre: "Wikipédia : Datura stramoine", url: "https://fr.wikipedia.org/wiki/Datura_stramonium" }
    ]
  },
  {
    id: "arroche-etalee",
    nom: "Arroche étalée",
    latin: "Atriplex patula",
    famille: "Amaranthacées",
    autresNoms: ["Arroche des champs", "Arroche sauvage"],
    statut: "comestible",
    resume: "Cousine sauvage de l'arroche des jardins et des épinards, aux feuilles en fer de lance légèrement farineuses. Elle se cuisine comme le chénopode, au goût doux et légèrement salé.",
    habitat: "Cultures, potagers, friches, décombres, bords de chemins, terrains remués, parfois près du littoral.",
    habitats: ["jardin", "friche", "bord-chemin", "littoral"],
    regions: "Commune dans presque toute la France.",
    recolte: [5, 6, 7, 8, 9],
    floraison: [7, 8, 9, 10],
    couleurFleur: ["vert"],
    typeFeuille: "Feuilles alternes, les inférieures en fer de lance avec deux lobes pointus à la base, les supérieures étroites et presque entières.",
    reconnaissance: [
      "Tiges très étalées, ramifiées, souvent striées de vert et de blanc, de 30 à 80 cm.",
      "Feuilles inférieures triangulaires en fer de hallebarde, lobes de base pointés vers l'extérieur.",
      "Jeunes feuilles légèrement farineuses, puis vertes.",
      "Fleurs vertes minuscules en épis grêles ; les fruits sont enveloppés de deux petites bractées triangulaires accolées.",
      "Aucune odeur forte."
    ],
    partiesUtilisees: ["jeunes pousses", "feuilles", "graines"],
    bienfaits: [
      "Légume-feuille nutritif, riche en minéraux et vitamines, comme le chénopode et l'épinard.",
      "Les arroches étaient anciennement réputées émollientes et légèrement laxatives."
    ],
    usages: ["cuite comme les épinards", "en soupe, tarte, beignets", "quelques jeunes feuilles crues dans une salade mélangée"],
    recettes: [
      {
        titre: "Tarte aux arroches sauvages",
        type: "cuisine",
        ingredients: ["1 pâte brisée", "400 g de feuilles d'arroche", "1 oignon", "3 œufs", "20 cl de crème", "50 g de fromage râpé", "Sel, poivre, muscade"],
        etapes: ["Blanchir les feuilles 2 minutes, les égoutter en pressant et les hacher.", "Faire fondre l'oignon émincé et le mélanger aux feuilles.", "Battre œufs, crème et fromage, assaisonner et ajouter les légumes.", "Verser sur la pâte et cuire 35 minutes à 180 °C."]
      }
    ],
    confusions: [
      {
        nom: "Morelle noire",
        latin: "Solanum nigrum",
        danger: "toxique",
        differences: ["Feuilles ovales à bord ondulé, sans lobes pointus à la base.", "Fleurs blanches étoilées à cœur jaune et baies noires.", "Pousse dans les mêmes potagers : vérifier chaque plant."]
      },
      {
        nom: "Chénopode blanc",
        latin: "Chenopodium album",
        danger: "sans-danger",
        differences: ["Feuilles en losange dentées, nettement farineuses.", "Fruits sans paire de bractées triangulaires.", "Également comestible et cuisiné de la même façon."]
      }
    ],
    precautions: [
      "Contient des oxalates et peut accumuler les nitrates : cuire en jetant l'eau et modérer en cas de calculs rénaux.",
      "Éviter les terrains pollués et les cultures traitées."
    ],
    sources: [
      { titre: "Wikipédia : Atriplex patula", url: "https://fr.wikipedia.org/wiki/Atriplex_patula" },
      { titre: "Wikipédia : Morelle noire", url: "https://fr.wikipedia.org/wiki/Solanum_nigrum" }
    ]
  },
  {
    id: "renouee-bistorte",
    nom: "Renouée bistorte",
    latin: "Bistorta officinalis",
    famille: "Polygonacées",
    autresNoms: ["Bistorte", "Langue de bœuf", "Serpentaire rouge", "Polygonum bistorta"],
    statut: "comestible-medicinale",
    resume: "Plante des prairies humides de montagne aux épis roses dressés comme des goupillons. Ses jeunes feuilles sont un légume traditionnel et son rhizome tordu un remède astringent puissant.",
    habitat: "Prairies humides, prés de fauche de montagne, bords de ruisseaux, mégaphorbiaies.",
    habitats: ["prairie", "montagne", "bord-eau"],
    regions: "Surtout en montagne (Alpes, Pyrénées, Massif central, Jura, Vosges) et dans quelques plaines humides du Nord-Est ; rare ailleurs.",
    recolte: [4, 5, 6],
    floraison: [5, 6, 7, 8],
    couleurFleur: ["rose"],
    typeFeuille: "Feuilles de base ovales allongées, à base tronquée, prolongées par un pétiole largement ailé ; dessous bleuté.",
    reconnaissance: [
      "Épi floral dense, cylindrique, rose, de 3 à 7 cm, au sommet d'une tige simple de 30 à 80 cm.",
      "Feuilles basales grandes, oblongues, au pétiole bordé d'une aile verte.",
      "Gaine membraneuse brune (ochréa) entourant la tige à la base de chaque feuille.",
      "Rhizome épais tordu deux fois sur lui-même, rouge brun à l'intérieur.",
      "Pousse souvent en colonies denses."
    ],
    partiesUtilisees: ["jeunes feuilles", "rhizome"],
    bienfaits: [
      "Le rhizome, très riche en tanins, est traditionnellement utilisé comme astringent contre les diarrhées et en gargarisme contre les inflammations de la bouche et de la gorge.",
      "Cazin le décrit comme un des astringents indigènes les plus puissants.",
      "Les jeunes feuilles sont un légume printanier nutritif."
    ],
    usages: ["jeunes feuilles cuites comme les épinards", "dans le pudding d'herbes du nord de l'Angleterre", "rhizome séché en décoction ou gargarisme"],
    recettes: [
      {
        titre: "Soupe de feuilles de bistorte",
        type: "cuisine",
        ingredients: ["2 poignées de jeunes feuilles de bistorte", "1 poignée d'orties", "1 oignon", "2 pommes de terre", "1 litre de bouillon"],
        etapes: ["Faire revenir l'oignon, ajouter les pommes de terre et le bouillon.", "Cuire 15 minutes, ajouter les feuilles hachées et cuire 5 minutes.", "Mixer et assaisonner."]
      },
      {
        titre: "Gargarisme de bistorte",
        type: "infusion",
        ingredients: ["1 cuillère à café de rhizome séché en morceaux (environ 2 g)", "250 ml d'eau"],
        etapes: ["Faire bouillir doucement 10 minutes.", "Laisser tiédir et filtrer.", "Se gargariser ou se rincer la bouche 3 fois par jour sans avaler."]
      }
    ],
    confusions: [
      {
        nom: "Vératre blanc",
        latin: "Veratrum album",
        danger: "mortel",
        differences: ["Grandes feuilles plissées en accordéon, aux nervures parallèles, embrassant la tige sans pétiole ailé.", "Feuilles alternes sur une tige épaisse et feuillée, sans gaine brune.", "Fleurs vert blanchâtre en grande panicule, jamais en épi rose.", "Pousse dans les mêmes prairies de montagne : ne récolter que des feuilles à pétiole ailé."]
      },
      {
        nom: "Renouée amphibie",
        latin: "Persicaria amphibia",
        danger: "sans-danger",
        differences: ["Plante aquatique ou des berges, aux feuilles flottantes luisantes.", "Épis roses plus courts et compacts."]
      }
    ],
    precautions: [
      "Plante en régression et menacée dans plusieurs régions de plaine : ne récolter que quelques feuilles là où elle abonde, et jamais le rhizome dans les populations rares.",
      "Rhizome très astringent : usage interne bref, il peut constiper et gêner l'absorption du fer.",
      "Feuilles riches en acide oxalique comme les rumex : modérer en cas de calculs rénaux.",
      "En montagne, le vératre toxique pousse au même endroit : vérifier chaque feuille."
    ],
    sources: [
      { titre: "Wikipédia : Renouée bistorte", url: "https://fr.wikipedia.org/wiki/Bistorta_officinalis" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes (1868), article Bistorte", url: "https://archive.org/details/traitpratiquee1868cazi" },
      { titre: "Wikipédia : Vératre blanc", url: "https://fr.wikipedia.org/wiki/Veratrum_album" }
    ]
  },
  {
    id: "rumex-crepu",
    nom: "Rumex crépu",
    latin: "Rumex crispus",
    famille: "Polygonacées",
    autresNoms: ["Patience crépue", "Oseille crépue", "Parelle"],
    statut: "comestible-medicinale",
    resume: "Grande patience aux feuilles longues et étroites, au bord fortement ondulé. Ses très jeunes feuilles acidulées se cuisent en petite quantité et sa racine jaune est un dépuratif traditionnel.",
    habitat: "Prairies, champs, friches, bords de chemins, fossés, décombres, sols tassés et riches.",
    habitats: ["prairie", "friche", "bord-chemin", "bord-eau"],
    regions: "Très commun dans toute la France.",
    recolte: [3, 4, 5, 9, 10],
    floraison: [6, 7, 8, 9],
    couleurFleur: ["vert", "rouge"],
    typeFeuille: "Grandes feuilles lancéolées, étroites, à bords très ondulés et crépus, glabres.",
    reconnaissance: [
      "Feuilles de base longues et étroites (jusqu'à 30 cm), au bord fortement frisé et ondulé.",
      "Gaine membraneuse (ochréa) entourant la tige à la base des feuilles.",
      "Tige dressée de 50 cm à 1 m, cannelée, devenant rouge brun.",
      "Fleurs vertes en verticilles serrés formant de longues grappes, puis fruits rouille à trois valves en cœur.",
      "Racine pivotante jaune orangé à l'intérieur."
    ],
    partiesUtilisees: ["très jeunes feuilles", "racine", "graines"],
    bienfaits: [
      "La racine est traditionnellement utilisée comme dépurative et légèrement laxative, pour la peau et le foie ; Cazin la range avec la patience parmi les dépuratifs.",
      "Les feuilles en cataplasme étaient appliquées en tradition populaire sur les piqûres d'ortie et les irritations."
    ],
    usages: ["très jeunes feuilles cuites en changeant l'eau", "quelques feuilles en salade mélangée", "graines moulues mêlées à la farine", "racine séchée en décoction"],
    recettes: [
      {
        titre: "Jeunes feuilles de rumex braisées",
        type: "cuisine",
        ingredients: ["2 poignées de très jeunes feuilles encore enroulées", "1 oignon", "1 noix de beurre", "Sel, poivre"],
        etapes: ["Laver les feuilles et les blanchir 2 minutes à l'eau bouillante ; jeter l'eau.", "Faire fondre l'oignon dans le beurre.", "Ajouter les feuilles, couvrir et cuire 5 minutes à feu doux, assaisonner."]
      }
    ],
    confusions: [
      {
        nom: "Arum tacheté",
        latin: "Arum maculatum",
        danger: "toxique",
        differences: ["Feuilles en fer de flèche avec deux oreillettes pointues à la base, aux nervures en réseau.", "Limbe souvent taché de noir, luisant, sans bord frisé.", "Aucune gaine membraneuse autour de la tige.", "Goût brûlant au moindre contact avec la langue."]
      },
      {
        nom: "Rumex à feuilles obtuses",
        latin: "Rumex obtusifolius",
        danger: "sans-danger",
        differences: ["Feuilles beaucoup plus larges, en cœur à la base, peu ondulées.", "Usages comparables, plus amer."]
      }
    ],
    precautions: [
      "Riche en acide oxalique : consommer en petite quantité, cuire en changeant l'eau, et éviter en cas de calculs rénaux, de goutte ou de rhumatismes.",
      "La racine contient des dérivés laxatifs : pas d'usage prolongé, ni pendant la grossesse et l'allaitement.",
      "Toxique pour le bétail en grande quantité ; ne pas le consommer en abondance.",
      "Ne récolter que les toutes jeunes feuilles, les feuilles âgées étant amères et dures."
    ],
    sources: [
      { titre: "Wikipédia : Rumex crispus", url: "https://fr.wikipedia.org/wiki/Rumex_crispus" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes (1868), article Patience crépue", url: "https://archive.org/details/traitpratiquee1868cazi" },
      { titre: "Wikipédia : Arum tacheté", url: "https://fr.wikipedia.org/wiki/Arum_maculatum" }
    ]
  },
  {
    id: "petite-oseille",
    nom: "Petite oseille",
    latin: "Rumex acetosella",
    famille: "Polygonacées",
    autresNoms: ["Oseille des brebis", "Surelle", "Petite vinette"],
    statut: "comestible",
    resume: "Petite oseille des sols sableux et acides, aux feuilles en fer de lance très acidulées. Elle relève salades et sauces comme sa grande cousine, en petite quantité.",
    habitat: "Pelouses sèches, landes, friches sableuses, bords de chemins, clairières, sols acides et pauvres.",
    habitats: ["prairie", "friche", "bord-chemin", "montagne"],
    regions: "Commune dans toute la France sur sols siliceux, rare sur calcaire.",
    recolte: [3, 4, 5, 6, 9, 10],
    floraison: [5, 6, 7, 8],
    couleurFleur: ["rouge", "vert"],
    typeFeuille: "Petites feuilles en fer de hallebarde, avec deux oreillettes étroites écartées à la base, au goût très acide.",
    reconnaissance: [
      "Feuilles de 2 à 5 cm en forme de hallebarde, aux deux lobes de base dirigés vers l'extérieur ou vers l'avant.",
      "Goût franchement acide dès qu'on mâchonne une feuille.",
      "Plante basse (10 à 30 cm) qui forme des colonies grâce à des racines traçantes.",
      "Petites fleurs rougeâtres en grappes lâches, plantes mâles et femelles séparées.",
      "Gaine membraneuse argentée à la base des feuilles."
    ],
    partiesUtilisees: ["feuilles", "jeunes pousses"],
    bienfaits: [
      "Comme l'oseille, réputée rafraîchissante, apéritive et riche en vitamine C.",
      "Utilisée en tradition populaire en jus frais légèrement diurétique."
    ],
    usages: ["quelques feuilles crues en salade", "dans les sauces vertes pour le poisson", "en soupe mêlée à d'autres herbes", "à croquer en randonnée pour la soif"],
    recettes: [
      {
        titre: "Sauce à la petite oseille",
        type: "cuisine",
        ingredients: ["1 poignée de feuilles de petite oseille", "1 échalote", "1 noix de beurre", "15 cl de crème", "Sel, poivre"],
        etapes: ["Ciseler les feuilles et l'échalote.", "Faire fondre l'échalote dans le beurre, ajouter les feuilles qui fondent en 1 minute.", "Ajouter la crème, chauffer sans bouillir et assaisonner ; servir avec un poisson ou des œufs."]
      }
    ],
    confusions: [
      {
        nom: "Arum tacheté (jeune feuille)",
        latin: "Arum maculatum",
        danger: "toxique",
        differences: ["Feuilles bien plus grandes, épaisses, luisantes, souvent tachées de noir.", "Nervures ramifiées en réseau, pas de gaine membraneuse.", "Goût immédiatement brûlant, non acide.", "Pousse en sous-bois frais et non sur sables secs."]
      },
      {
        nom: "Oseille sauvage",
        latin: "Rumex acetosa",
        danger: "sans-danger",
        differences: ["Plante plus grande, feuilles en fer de flèche aux oreillettes dirigées vers le bas.", "Prairies plus riches ; même usage."]
      }
    ],
    precautions: [
      "Riche en acide oxalique : en petite quantité seulement, et à éviter en cas de calculs rénaux, de goutte ou de rhumatismes.",
      "Ne pas cuisiner dans des ustensiles en aluminium ou en fer, que l'acidité attaque.",
      "Éviter les terrains pollués et les bords de routes."
    ],
    sources: [
      { titre: "Wikipédia : Rumex acetosella", url: "https://fr.wikipedia.org/wiki/Rumex_acetosella" },
      { titre: "Wikipédia : Arum tacheté", url: "https://fr.wikipedia.org/wiki/Arum_maculatum" }
    ]
  },
  {
    id: "salsifis-des-pres",
    nom: "Salsifis des prés",
    latin: "Tragopogon pratensis",
    famille: "Astéracées",
    autresNoms: ["Barbe de bouc", "Salsifis sauvage", "Petit salsifis"],
    statut: "comestible",
    resume: "Plante des prés de fauche aux fleurs jaunes qui se ferment vers midi, puis aux grosses boules de graines comme un pissenlit géant. Racine, jeunes pousses et boutons se mangent comme le salsifis.",
    habitat: "Prairies de fauche, bords de chemins, talus, prés frais et riches.",
    habitats: ["prairie", "bord-chemin"],
    regions: "Commun dans une grande partie de la France, plus rare dans l'Ouest et le Midi.",
    recolte: [3, 4, 5, 9, 10],
    floraison: [5, 6, 7],
    couleurFleur: ["jaune"],
    typeFeuille: "Feuilles longues et étroites comme celles d'une graminée, élargies et embrassantes à la base, glabres, d'un vert un peu bleuté.",
    reconnaissance: [
      "Feuilles linéaires ressemblant à de l'herbe, mais épaisses, sans nœuds, élargies à la base et laissant couler un latex blanc à la cassure.",
      "Capitules jaunes de 3 à 5 cm, entourés de 8 bractées vertes pointues à peu près aussi longues que les fleurs.",
      "Fleurs ouvertes le matin et refermées vers midi.",
      "Grosse boule de fruits à aigrettes plumeuses d'environ 8 cm, comme un pissenlit géant.",
      "Racine pivotante, contenant du latex."
    ],
    partiesUtilisees: ["racine", "jeunes pousses", "boutons floraux", "jeunes tiges"],
    bienfaits: [
      "Légume racine riche en inuline, une fibre favorable à la flore intestinale.",
      "Réputé légèrement diurétique et dépuratif dans la tradition populaire."
    ],
    usages: ["racine cuite comme le salsifis cultivé", "jeunes pousses et feuilles crues ou cuites", "boutons floraux sautés", "jeunes tiges florales cuites comme des asperges"],
    recettes: [
      {
        titre: "Tiges et boutons de salsifis au beurre",
        type: "cuisine",
        ingredients: ["2 poignées de jeunes tiges avec leurs boutons fermés", "1 noix de beurre", "Persil, sel, poivre"],
        etapes: ["Couper les tiges tendres de 10 à 15 cm sous le bouton.", "Les cuire 5 minutes à l'eau bouillante salée.", "Égoutter et faire revenir 2 minutes au beurre avec le persil."]
      }
    ],
    confusions: [
      {
        nom: "Ornithogale en ombelle",
        latin: "Ornithogalum umbellatum",
        danger: "toxique",
        differences: ["Feuilles étroites parcourues d'une ligne blanche au milieu, sans latex à la cassure.", "Pousse à partir d'un petit bulbe.", "Fleurs blanches étoilées à six pétales, rayées de vert au revers.", "Toute la plante est toxique."]
      },
      {
        nom: "Colchique d'automne (feuilles)",
        latin: "Colchicum autumnale",
        danger: "mortel",
        differences: ["Feuilles larges (2 à 4 cm), épaisses, groupées en touffe serrée qui sort d'un bulbe profond.", "Aucun latex à la cassure.", "Capsule verte au centre de la touffe au printemps.", "Pousse dans les mêmes prairies : ne récolter que des pieds identifiés en fleur ou avec du latex."]
      }
    ],
    precautions: [
      "Toujours vérifier la présence de latex blanc avant de récolter une feuille étroite : c'est ce qui distingue le salsifis des plantes à bulbe toxiques.",
      "Allergie possible chez les personnes sensibles aux Astéracées.",
      "Récolter la racine avant la montée en fleur, quand elle est la plus tendre."
    ],
    sources: [
      { titre: "Wikipédia : Salsifis des prés", url: "https://fr.wikipedia.org/wiki/Tragopogon_pratensis" },
      { titre: "Wikipédia : Ornithogale en ombelle", url: "https://fr.wikipedia.org/wiki/Ornithogalum_umbellatum" },
      { titre: "Wikipédia : Colchique d'automne", url: "https://fr.wikipedia.org/wiki/Colchique_d%27automne" }
    ]
  },
  {
    id: "campanule-raiponce",
    nom: "Campanule raiponce",
    latin: "Campanula rapunculus",
    famille: "Campanulacées",
    autresNoms: ["Raiponce", "Rave sauvage", "Bâton de Jacob"],
    statut: "comestible",
    resume: "Campanule aux clochettes bleu lilas dont la racine blanche et les rosettes étaient un légume cultivé jusqu'au XVIIe siècle. Racine et jeunes feuilles se mangent crues en salade.",
    habitat: "Talus, prairies sèches, bords de chemins, lisières, haies, vignes, sols plutôt légers.",
    habitats: ["prairie", "bord-chemin", "haie"],
    regions: "Commune dans une grande partie de la France, plus rare dans le Nord-Ouest.",
    recolte: [2, 3, 4, 10, 11],
    floraison: [5, 6, 7, 8],
    couleurFleur: ["bleu", "violet"],
    typeFeuille: "Rosette de feuilles oblongues un peu ondulées ; feuilles de la tige étroites et sans pétiole.",
    reconnaissance: [
      "Clochettes bleu lilas pâle de 1,5 à 2 cm, à cinq lobes, dressées en longue grappe étroite.",
      "Tige fine, raide, de 40 cm à 1 m, peu ramifiée.",
      "Racine blanche, charnue, en forme de petit navet allongé.",
      "Latex blanc à la cassure des feuilles et de la tige.",
      "Feuilles de base en rosette, oblongues, à pétiole ailé ; feuilles supérieures étroites."
    ],
    partiesUtilisees: ["racine", "rosettes", "jeunes pousses", "fleurs"],
    bienfaits: [
      "Ancien légume racine au goût de noisette, réputé rafraîchissant.",
      "Apporte fibres et minéraux."
    ],
    usages: ["racine crue râpée ou en lamelles en salade", "racine cuite comme un petit navet", "rosettes en salade d'hiver", "fleurs crues pour décorer"],
    recettes: [
      {
        titre: "Salade de raiponces à l'ancienne",
        type: "cuisine",
        ingredients: ["Une dizaine de racines de raiponce avec leurs rosettes", "1 cuillère à soupe de vinaigre", "3 cuillères à soupe d'huile de noix", "Sel, poivre"],
        etapes: ["Brosser et laver les racines sans les éplucher, couper le bout fibreux.", "Couper les racines en rondelles et garder les rosettes entières.", "Assaisonner avec la vinaigrette à l'huile de noix et servir aussitôt."]
      }
    ],
    confusions: [
      {
        nom: "Digitale pourpre (rosette)",
        latin: "Digitalis purpurea",
        danger: "mortel",
        differences: ["Feuilles bien plus grandes et larges, veloutées, à réseau de nervures en creux.", "Aucun latex à la cassure.", "En fleur, grandes clochettes pourpres pendantes d'un seul côté.", "Ne récolter que des rosettes qui laissent couler du latex blanc."]
      },
      {
        nom: "Campanule à feuilles rondes",
        latin: "Campanula rotundifolia",
        danger: "sans-danger",
        differences: ["Feuilles de base rondes, fleurs pendantes bleu vif sur des tiges très fines.", "Racine non charnue."]
      }
    ],
    precautions: [
      "Bien vérifier le latex blanc sur chaque rosette pour écarter la digitale, plus fréquente sur les talus acides.",
      "Ne prélever que quelques racines par station : chaque récolte détruit la plante."
    ],
    sources: [
      { titre: "Wikipédia : Campanule raiponce", url: "https://fr.wikipedia.org/wiki/Campanula_rapunculus" },
      { titre: "Wikipédia : Digitale pourpre", url: "https://fr.wikipedia.org/wiki/Digitalis_purpurea" }
    ]
  },
  {
    id: "raiponce-en-epi",
    nom: "Raiponce en épi",
    latin: "Phyteuma spicatum",
    famille: "Campanulacées",
    autresNoms: ["Raiponce", "Phyteume en épi", "Cornes de bouc"],
    statut: "comestible",
    resume: "Plante des bois frais et des prés de montagne aux épis crème de fleurs en petites griffes recourbées. Ses jeunes feuilles douces et sa racine charnue se mangent crues ou cuites.",
    habitat: "Forêts fraîches de feuillus, lisières, prairies et pâturages de montagne, sols riches.",
    habitats: ["foret", "prairie", "montagne"],
    regions: "Surtout dans le Nord-Est, l'Est, le Centre et les montagnes ; absente ou rare dans l'Ouest et la région méditerranéenne.",
    recolte: [3, 4, 5, 9, 10],
    floraison: [5, 6, 7],
    couleurFleur: ["blanc", "jaune"],
    typeFeuille: "Feuilles de base en cœur, longuement pétiolées, à bord denté ; feuilles de la tige plus étroites.",
    reconnaissance: [
      "Épi cylindrique dense de 3 à 8 cm de fleurs blanc crème à jaunâtre, au sommet d'une tige de 30 à 80 cm.",
      "Chaque fleur en bouton forme un tube étroit recourbé comme une petite griffe, qui s'ouvre ensuite en cinq lanières.",
      "Feuilles de base en cœur, dentées, à long pétiole, parfois tachées de noir.",
      "Feuilles de la tige alternes, sans pétiole, de plus en plus étroites vers le haut.",
      "Racine charnue, épaisse."
    ],
    partiesUtilisees: ["jeunes feuilles", "racine", "jeunes pousses"],
    bienfaits: [
      "Légume sauvage nutritif et doux, consommé traditionnellement en montagne."
    ],
    usages: ["jeunes feuilles crues en salade", "feuilles cuites comme les épinards", "racine crue ou cuite comme celle de la campanule raiponce"],
    recettes: [
      {
        titre: "Salade de printemps aux feuilles de raiponce",
        type: "cuisine",
        ingredients: ["1 poignée de jeunes feuilles de raiponce en épi", "1 poignée de mâche ou de laitue", "Quelques radis", "Vinaigrette à l'huile de noix"],
        etapes: ["Laver et sécher les feuilles.", "Couper les radis en rondelles.", "Mélanger avec la vinaigrette au moment de servir."]
      }
    ],
    confusions: [
      {
        nom: "Mercuriale vivace",
        latin: "Mercurialis perennis",
        danger: "toxique",
        differences: ["Feuilles opposées par paires, ovales allongées, sans forme en cœur.", "Tige simple feuillée surtout dans sa moitié haute.","Petites fleurs vertes sans épi crème.", "Tapisse les mêmes sous-bois, avec une odeur désagréable."]
      },
      {
        nom: "Raiponce noire",
        latin: "Phyteuma nigrum",
        danger: "sans-danger",
        differences: ["Fleurs bleu violet foncé.", "Même usage."]
      }
    ],
    precautions: [
      "Protégée dans certaines régions : se renseigner localement avant toute cueillette et ne jamais déterrer la racine là où elle est rare.",
      "Vérifier les feuilles en cœur alternes et l'épi crème caractéristique pour écarter les plantes de sous-bois toxiques."
    ],
    sources: [
      { titre: "Wikipédia : Raiponce en épi", url: "https://fr.wikipedia.org/wiki/Phyteuma_spicatum" },
      { titre: "Wikipédia : Mercuriale vivace", url: "https://fr.wikipedia.org/wiki/Mercurialis_perennis" }
    ]
  },
  {
    id: "onagre-bisannuelle",
    nom: "Onagre bisannuelle",
    latin: "Oenothera biennis",
    famille: "Onagracées",
    autresNoms: ["Onagre", "Herbe aux ânes", "Belle de nuit", "Jambon du jardinier"],
    statut: "comestible-medicinale",
    resume: "Plante d'origine américaine aux grandes fleurs jaune soufre qui s'ouvrent au crépuscule. Sa racine de première année rosit à la cuisson, d'où son surnom de jambon du jardinier ; ses graines donnent l'huile d'onagre.",
    habitat: "Friches, talus sableux, ballasts de voies ferrées, bords de chemins, gravières, dunes.",
    habitats: ["friche", "bord-chemin", "littoral"],
    regions: "Naturalisée dans une grande partie de la France, surtout sur sols sableux ou caillouteux.",
    recolte: [3, 4, 6, 7, 8, 9, 10, 11],
    floraison: [6, 7, 8, 9, 10],
    couleurFleur: ["jaune"],
    typeFeuille: "Rosette de feuilles lancéolées à nervure centrale blanchâtre ou rosée ; feuilles de la tige alternes, étroites, finement dentées.",
    reconnaissance: [
      "Bisannuelle : rosette plaquée la première année, tige raide de 50 cm à 1,5 m la deuxième.",
      "Grandes fleurs jaune soufre de 4 à 6 cm à quatre pétales en cœur, qui s'ouvrent le soir en quelques minutes.",
      "Stigmate en croix à quatre branches au centre de la fleur.",
      "Fruits en capsules allongées, dressées le long de la tige.",
      "Racine pivotante blanche à collet rosé dans les rosettes."
    ],
    partiesUtilisees: ["racine", "jeunes feuilles", "fleurs", "boutons", "graines"],
    bienfaits: [
      "L'huile des graines, riche en acide gamma-linolénique, est utilisée en complément pour la peau sèche et le confort prémenstruel, avec des preuves limitées.",
      "Les feuilles sont réputées adoucissantes en cataplasme dans la tradition des Amérindiens."
    ],
    usages: ["racine de première année cuite comme le salsifis", "jeunes feuilles cuites", "fleurs et boutons crus en salade", "graines grillées en petite quantité"],
    recettes: [
      {
        titre: "Racines d'onagre poêlées",
        type: "cuisine",
        ingredients: ["4 à 6 racines de rosettes d'onagre récoltées en automne ou en fin d'hiver", "Beurre", "Persil, sel"],
        etapes: ["Brosser et éplucher les racines, les couper en tronçons.", "Les cuire 15 minutes à l'eau salée : elles prennent une teinte rosée.", "Égoutter et faire dorer au beurre, parsemer de persil."]
      },
      {
        titre: "Salade aux fleurs d'onagre",
        type: "cuisine",
        ingredients: ["Une dizaine de fleurs d'onagre cueillies le soir", "Une salade verte", "Vinaigrette douce"],
        etapes: ["Cueillir les fleurs juste ouvertes et vérifier qu'elles ne contiennent pas d'insectes.", "Assaisonner la salade et déposer les fleurs au dernier moment."]
      }
    ],
    confusions: [
      {
        nom: "Digitale pourpre (rosette)",
        latin: "Digitalis purpurea",
        danger: "mortel",
        differences: ["Feuilles de rosette larges et veloutées, à réseau de nervures en creux.", "Pas de nervure centrale blanchâtre ou rosée nette.", "Racine sans collet rose ; en fleur, clochettes pourpres pendantes.", "Ne récolter que des rosettes certaines, de préférence avec des restes de tiges sèches d'onagre à proximité."]
      },
      {
        nom: "Onagre à grandes fleurs",
        latin: "Oenothera glazioviana",
        danger: "sans-danger",
        differences: ["Fleurs plus grandes, style dépassant les étamines, sépales rougeâtres.", "Usages comparables."]
      }
    ],
    precautions: [
      "Racine à récolter uniquement sur des plantes de première année : elle devient ligneuse à la floraison.",
      "Huile d'onagre en complément : avis médical en cas de traitement anticoagulant, d'épilepsie ou avant une opération.",
      "Les jeunes feuilles et la racine crue peuvent irriter la gorge : préférer la cuisson."
    ],
    sources: [
      { titre: "Wikipédia : Onagre bisannuelle", url: "https://fr.wikipedia.org/wiki/Oenothera_biennis" },
      { titre: "Wikipédia : Digitale pourpre", url: "https://fr.wikipedia.org/wiki/Digitalis_purpurea" }
    ]
  },
  {
    id: "epilobe-en-epi",
    nom: "Épilobe en épi",
    latin: "Chamaenerion angustifolium",
    famille: "Onagracées",
    autresNoms: ["Épilobe à feuilles étroites", "Laurier de saint Antoine", "Osier fleuri", "Thé d'Ivan"],
    statut: "comestible-medicinale",
    resume: "Grande plante qui couvre de taches roses les coupes forestières et les talus. Ses jeunes pousses se mangent comme des asperges et ses feuilles fermentées donnent le célèbre thé d'Ivan de Russie.",
    habitat: "Coupes forestières, clairières, lisières, talus, friches, éboulis, bords de chemins en montagne.",
    habitats: ["foret", "friche", "bord-chemin", "montagne"],
    regions: "Commun dans une grande partie de la France, surtout en montagne et dans le Nord-Est ; plus rare en plaine dans l'Ouest et le Midi.",
    recolte: [4, 5, 6, 7, 8],
    floraison: [6, 7, 8, 9],
    couleurFleur: ["rose", "violet"],
    typeFeuille: "Feuilles alternes, étroites et allongées comme celles du saule, à nervures secondaires qui se rejoignent en boucles près du bord.",
    reconnaissance: [
      "Grandes grappes dressées de fleurs rose pourpre de 2 à 3 cm, au sommet de tiges de 50 cm à 2 m.",
      "Quatre pétales un peu inégaux, fleurs légèrement asymétriques.",
      "Feuilles alternes, en lanière, disposées en spirale, à nervures formant des boucles qui ne touchent pas le bord.",
      "Fruits en longues capsules fines qui libèrent des graines à houppe soyeuse blanche.",
      "Forme de vastes colonies grâce à ses rhizomes."
    ],
    partiesUtilisees: ["jeunes pousses", "feuilles", "fleurs", "moelle des tiges"],
    bienfaits: [
      "Les feuilles sont traditionnellement utilisées en infusion contre les diarrhées légères et comme adoucissantes des muqueuses digestives.",
      "Réputées apaisantes en usage externe sur les petites irritations de la peau."
    ],
    usages: ["jeunes pousses cuites comme des asperges", "jeunes feuilles en salade ou cuites", "feuilles fermentées puis séchées en thé d'Ivan", "fleurs en gelée ou en décoration"],
    recettes: [
      {
        titre: "Thé d'Ivan maison (feuilles fermentées)",
        type: "infusion",
        ingredients: ["Plusieurs poignées de feuilles d'épilobe en épi cueillies avant ou pendant la floraison"],
        etapes: ["Laisser flétrir les feuilles une demi-journée à l'ombre.", "Les rouler fortement entre les paumes jusqu'à ce qu'elles noircissent et deviennent humides.", "Les tasser dans un bocal couvert d'un linge humide et laisser fermenter 1 à 2 jours à température ambiante, jusqu'à une odeur fruitée.", "Sécher au four très doux (50 °C) ; infuser 1 cuillère à café par tasse 5 minutes."]
      },
      {
        titre: "Pousses d'épilobe façon asperges",
        type: "cuisine",
        ingredients: ["Une botte de jeunes pousses de 15 à 20 cm", "Beurre", "Sel"],
        etapes: ["Retirer les feuilles du bas et peler si besoin.", "Cuire 5 minutes à l'eau bouillante salée.", "Servir avec du beurre fondu."]
      }
    ],
    confusions: [
      {
        nom: "Salicaire commune",
        latin: "Lythrum salicaria",
        danger: "sans-danger",
        differences: ["Fleurs rose pourpre à six pétales froissés, en épis serrés.", "Feuilles souvent opposées ou en verticilles, tige carrée.", "Pousse au bord de l'eau."]
      },
      {
        nom: "Épilobe hérissé",
        latin: "Epilobium hirsutum",
        danger: "sans-danger",
        differences: ["Plante velue, feuilles opposées dentées.", "Fleurs régulières à stigmate en croix, en grappes lâches, au bord de l'eau.", "Moins agréable en cuisine."]
      }
    ],
    precautions: [
      "Pas de toxicité connue ; les pousses deviennent vite amères et fibreuses, à récolter jeunes.",
      "Par manque de données, éviter l'usage en tisane régulière pendant la grossesse et l'allaitement.",
      "Une diarrhée qui dure plus de 2 jours, avec fièvre ou sang, nécessite un avis médical."
    ],
    sources: [
      { titre: "Wikipédia : Épilobe en épi", url: "https://fr.wikipedia.org/wiki/%C3%89pilobe_en_%C3%A9pi" },
      { titre: "Althea Provence : épilobe en épi", url: "https://www.altheaprovence.com/epilobe-epilobium-angustifolium/" }
    ]
  },
  {
    id: "epilobe-a-petites-fleurs",
    nom: "Épilobe à petites fleurs",
    latin: "Epilobium parviflorum",
    famille: "Onagracées",
    autresNoms: ["Épilobe parviflore", "Petit épilobe"],
    statut: "medicinale",
    resume: "Épilobe velu des lieux humides aux minuscules fleurs roses, rendu célèbre au XXe siècle comme tisane du confort urinaire masculin.",
    habitat: "Bords de ruisseaux et de fossés, prairies humides, friches fraîches, berges, lisières humides.",
    habitats: ["bord-eau", "friche", "prairie"],
    regions: "Commun dans toute la France.",
    recolte: [6, 7, 8],
    floraison: [6, 7, 8, 9],
    couleurFleur: ["rose"],
    typeFeuille: "Feuilles lancéolées, finement dentées, couvertes de poils doux, les inférieures opposées, sans pétiole mais n'embrassant pas la tige.",
    reconnaissance: [
      "Petites fleurs rose pâle de 5 à 10 mm à quatre pétales échancrés, à l'aisselle des feuilles supérieures.",
      "Stigmate en croix à quatre branches au centre de la fleur.",
      "Plante de 30 à 80 cm, entièrement couverte de poils mous.",
      "Feuilles sans pétiole qui n'embrassent pas la tige (contrairement à l'épilobe hérissé).",
      "Longues capsules fines libérant des graines à houppe soyeuse."
    ],
    partiesUtilisees: ["parties aériennes fleuries"],
    bienfaits: [
      "Traditionnellement utilisé en tisane pour le confort urinaire et prostatique masculin, usage popularisé par l'herboriste autrichienne Maria Treben.",
      "Réputé légèrement anti-inflammatoire et astringent."
    ],
    usages: ["parties aériennes séchées en tisane"],
    recettes: [
      {
        titre: "Tisane d'épilobe à petites fleurs",
        type: "infusion",
        ingredients: ["1 cuillère à café de parties aériennes séchées (environ 1,5 g)", "250 ml d'eau frémissante"],
        etapes: ["Verser l'eau sur la plante.", "Infuser 10 minutes à couvert.", "Filtrer ; 2 tasses par jour, en cure de quelques semaines, après avis médical."]
      }
    ],
    confusions: [
      {
        nom: "Épilobe hérissé",
        latin: "Epilobium hirsutum",
        danger: "sans-danger",
        differences: ["Plante plus grande (jusqu'à 1,5 m), fleurs bien plus grandes (1,5 à 2,5 cm), rose vif.", "Feuilles embrassant à demi la tige.", "Sans danger, mais moins recherché en herboristerie."]
      },
      {
        nom: "Lysimaque commune",
        latin: "Lysimachia vulgaris",
        danger: "sans-danger",
        differences: ["Fleurs jaunes à cinq pétales.", "Feuilles opposées ou en verticilles de 3, ponctuées de points noirs ou orangés."]
      }
    ],
    precautions: [
      "Les symptômes urinaires (envies fréquentes, jet faible, brûlures, sang) doivent toujours être évalués par un médecin avant toute tisane.",
      "Les épilobes à petites fleurs s'hybrident et se ressemblent : en cas de doute, acheter la plante en herboristerie.",
      "Pas d'usage pendant la grossesse, l'allaitement ou chez l'enfant, faute de données."
    ],
    sources: [
      { titre: "Wikipédia : Epilobium parviflorum", url: "https://fr.wikipedia.org/wiki/Epilobium_parviflorum" },
      { titre: "Althea Provence : épilobe", url: "https://www.altheaprovence.com/epilobe-epilobium-angustifolium/" }
    ]
  },
  {
    id: "petite-centauree",
    nom: "Petite centaurée",
    latin: "Centaurium erythraea",
    famille: "Gentianacées",
    autresNoms: ["Érythrée petite centaurée", "Herbe à la fièvre", "Fiel de terre"],
    statut: "medicinale",
    resume: "Petite plante des clairières aux bouquets plats de fleurs rose vif, parmi les plus amères de notre flore. Tonique amer traditionnel pour réveiller l'appétit et la digestion.",
    habitat: "Clairières, coupes forestières, pelouses sèches, talus, prairies maigres, bords de chemins.",
    habitats: ["prairie", "bord-chemin", "foret", "friche"],
    regions: "Assez commune dans toute la France.",
    recolte: [6, 7, 8],
    floraison: [6, 7, 8, 9],
    couleurFleur: ["rose"],
    typeFeuille: "Rosette de base de feuilles ovales à 3 à 7 nervures parallèles ; feuilles de la tige opposées, plus petites et étroites.",
    reconnaissance: [
      "Fleurs rose vif de 1 à 1,5 cm à cinq pétales étalés en étoile au bout d'un tube étroit, groupées en bouquet plat au sommet.",
      "Fleurs qui ne s'ouvrent qu'au soleil.",
      "Rosette de feuilles ovales à nervures parallèles à la base de la tige.",
      "Tige carrée, dressée, de 10 à 40 cm, ramifiée vers le haut.",
      "Amertume extrême au mâchonnement d'une feuille."
    ],
    partiesUtilisees: ["sommités fleuries"],
    bienfaits: [
      "Traditionnellement utilisée comme tonique amer pour stimuler l'appétit et soulager les digestions lentes.",
      "Ce fut un fébrifuge populaire de la tradition, l'herbe à la fièvre, usage cité par Cazin et aujourd'hui abandonné.",
      "Réputée stimuler la sécrétion de bile."
    ],
    usages: ["sommités fleuries séchées en infusion avant les repas", "vin apéritif amer"],
    recettes: [
      {
        titre: "Infusion amère de petite centaurée",
        type: "infusion",
        ingredients: ["1/2 cuillère à café de sommités séchées (environ 1 g)", "200 ml d'eau frémissante"],
        etapes: ["Verser l'eau sur la plante.", "Infuser 5 à 10 minutes.", "Filtrer et boire tiède, sans sucrer, une demi-heure avant les deux principaux repas."]
      }
    ],
    confusions: [
      {
        nom: "Érythrée élégante",
        latin: "Centaurium pulchellum",
        danger: "sans-danger",
        differences: ["Plante plus petite et grêle, sans rosette de base.", "Fleurs portées sur de petits pédoncules, en inflorescence lâche."]
      },
      {
        nom: "Mouron rouge",
        latin: "Lysimachia arvensis",
        danger: "toxique",
        differences: ["Plante couchée, fleurs isolées orange rouge ou bleues, sans tube.", "Feuilles ponctuées de noir dessous, sans rosette."]
      }
    ],
    precautions: [
      "Éviter en cas d'ulcère de l'estomac ou du duodénum et de brûlures gastriques : les amers stimulent l'acidité.",
      "Par prudence, pas d'usage pendant la grossesse et l'allaitement.",
      "Plante parfois rare localement : prélever seulement quelques tiges par station, en coupant au-dessus de la rosette."
    ],
    sources: [
      { titre: "Wikipédia : Centaurium erythraea", url: "https://fr.wikipedia.org/wiki/Centaurium_erythraea" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes (1868), article Centaurée (petite)", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "tanaisie",
    nom: "Tanaisie commune",
    latin: "Tanacetum vulgare",
    famille: "Astéracées",
    autresNoms: ["Tanaisie", "Herbe aux vers", "Barbotine", "Herbe amère"],
    statut: "medicinale",
    resume: "Grande plante très odorante aux boutons jaune d'or sans pétales. Ancien vermifuge populaire, elle est toxique à dose élevée et n'est plus guère utilisée qu'en répulsif contre les insectes.",
    habitat: "Friches, talus, bords de chemins et de rivières, voies ferrées, haies.",
    habitats: ["friche", "bord-chemin", "bord-eau", "haie"],
    regions: "Commune dans la plus grande partie de la France, plus rare dans le Midi.",
    recolte: [7, 8, 9],
    floraison: [7, 8, 9, 10],
    couleurFleur: ["jaune"],
    typeFeuille: "Feuilles alternes, profondément découpées en segments dentés comme une fougère, vert sombre, très aromatiques.",
    reconnaissance: [
      "Capitules jaune d'or en petits boutons plats de 6 à 10 mm, sans languettes, groupés en bouquet plat au sommet.",
      "Forte odeur camphrée et amère au moindre froissement.",
      "Feuilles découpées en segments dentés, comme des frondes de fougère.",
      "Tiges dressées, raides, souvent rougeâtres, de 50 cm à 1,5 m.",
      "Pousse en touffes denses grâce à ses rhizomes."
    ],
    partiesUtilisees: ["sommités fleuries", "feuilles"],
    bienfaits: [
      "Était autrefois un vermifuge majeur, notamment chez l'enfant : usage abandonné car la plante est neurotoxique à dose élevée.",
      "Réputée répulsive pour les insectes, mouches, fourmis et mites, en bouquets séchés ou en décoction au jardin."
    ],
    usages: ["bouquets séchés dans les placards contre les mites", "décoction ou purin au jardin contre certains insectes", "ancienne plante tinctoriale pour le jaune"],
    recettes: [
      {
        titre: "Décoction répulsive de tanaisie pour le jardin",
        type: "macerat",
        ingredients: ["300 g de tiges fleuries fraîches de tanaisie", "1 litre d'eau", "Gants"],
        etapes: ["Hacher grossièrement la plante avec des gants.", "Laisser macérer 24 heures dans l'eau, puis faire bouillir 20 minutes à couvert.", "Filtrer, diluer 5 fois et pulvériser sur les plantes atteintes ; usage externe au jardin uniquement, ne pas ingérer."]
      }
    ],
    confusions: [
      {
        nom: "Séneçon jacobée",
        latin: "Jacobaea vulgaris",
        danger: "toxique",
        differences: ["Capitules jaunes avec des languettes (rayons) autour du cœur.", "Pas d'odeur camphrée forte, plutôt désagréable et faible.", "Feuilles découpées en lobes frisés et non en segments réguliers de fougère.", "Toxique pour le foie ; la tanaisie l'est aussi pour le système nerveux : aucune des deux ne se consomme."]
      },
      {
        nom: "Achillée millefeuille",
        latin: "Achillea millefolium",
        danger: "sans-danger",
        differences: ["Fleurs blanches ou rosées à petites languettes.", "Feuilles très finement divisées en fils."]
      }
    ],
    precautions: [
      "Contient de la thuyone, neurotoxique : l'usage interne est déconseillé en automédication, des convulsions et des intoxications graves ont été décrites.",
      "Formellement contre-indiquée pendant la grossesse (elle était utilisée comme abortive) et l'allaitement, ainsi que chez l'enfant et les personnes épileptiques.",
      "Ne jamais utiliser l'huile essentielle de tanaisie, très toxique.",
      "Peut provoquer des allergies de contact : manipuler avec des gants si la peau est sensible."
    ],
    sources: [
      { titre: "Wikipédia : Tanaisie commune", url: "https://fr.wikipedia.org/wiki/Tanacetum_vulgare" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes (1868), article Tanaisie", url: "https://archive.org/details/traitpratiquee1868cazi" },
      { titre: "Wikipédia : Séneçon jacobée", url: "https://fr.wikipedia.org/wiki/Jacobaea_vulgaris" }
    ]
  },
  {
    id: "armoise-commune",
    nom: "Armoise commune",
    latin: "Artemisia vulgaris",
    famille: "Astéracées",
    autresNoms: ["Armoise", "Herbe de la Saint-Jean", "Remise", "Herbe aux cent goûts"],
    statut: "comestible-medicinale",
    resume: "Grande plante des friches aux feuilles vert sombre dessus et blanc argenté dessous. Aromate traditionnel des viandes grasses et plante emblématique des règles difficiles, elle contient un peu de thuyone.",
    habitat: "Friches, décombres, talus, bords de chemins et de routes, berges, terrains vagues.",
    habitats: ["friche", "bord-chemin", "bord-eau"],
    regions: "Très commune dans toute la France.",
    recolte: [4, 5, 7, 8, 9],
    floraison: [7, 8, 9, 10],
    couleurFleur: ["jaune", "vert", "rouge"],
    typeFeuille: "Feuilles profondément découpées en lobes pointus, vert foncé et glabres dessus, couvertes d'un feutre blanc dessous.",
    reconnaissance: [
      "Revers des feuilles d'un blanc cotonneux contrastant avec le dessus vert sombre.",
      "Feuilles découpées en lobes lancéolés pointus, les supérieures plus simples.",
      "Tige dressée, rougeâtre, striée, de 60 cm à 1,5 m.",
      "Minuscules capitules ovoïdes jaunâtres à rougeâtres, en longues panicules.",
      "Odeur aromatique discrète au froissement, beaucoup moins forte que l'absinthe."
    ],
    partiesUtilisees: ["jeunes pousses", "feuilles", "sommités fleuries"],
    bienfaits: [
      "Traditionnellement utilisée pour faciliter des règles peu abondantes, irrégulières ou douloureuses.",
      "Réputée tonique amer de la digestion, notamment des repas gras.",
      "Les feuilles séchées servent à fabriquer les bâtons de moxa de la médecine chinoise."
    ],
    usages: ["sommités en aromate pour l'oie, le canard ou le porc", "jeunes pousses en petite quantité dans les farces", "infusion des sommités", "aromate de la bière avant le houblon"],
    recettes: [
      {
        titre: "Infusion d'armoise",
        type: "infusion",
        ingredients: ["1 cuillère à café de sommités séchées (environ 1,5 g)", "250 ml d'eau frémissante"],
        etapes: ["Verser l'eau sur la plante.", "Infuser 5 à 10 minutes.", "Filtrer ; 1 à 2 tasses par jour, quelques jours avant les règles, sans dépasser une semaine."]
      },
      {
        titre: "Rôti de porc à l'armoise",
        type: "cuisine",
        ingredients: ["1 rôti de porc", "3 ou 4 sommités d'armoise", "Ail, sel, poivre", "Huile"],
        etapes: ["Glisser quelques feuilles d'armoise et l'ail sous la ficelle du rôti.", "Saler, poivrer, huiler.", "Cuire au four comme d'habitude ; retirer l'armoise avant de servir."]
      }
    ],
    confusions: [
      {
        nom: "Ambroisie à feuilles d'armoise",
        latin: "Ambrosia artemisiifolia",
        danger: "irritant",
        differences: ["Feuilles vertes sur les deux faces, sans feutre blanc dessous, très finement découpées.", "Tige velue, plante plus basse.", "Épis de petites fleurs vertes en coupelles renversées ; pollen très allergisant en fin d'été.", "Plante invasive à signaler, à ne pas manipuler à mains nues en fleur."]
      },
      {
        nom: "Armoise des frères Verlot",
        latin: "Artemisia verlotiorum",
        danger: "sans-danger",
        differences: ["Fleurit plus tard (octobre-novembre), forme de grandes colonies.", "Odeur plus forte et plus agréable ; feuilles à lobes plus étroits."]
      }
    ],
    precautions: [
      "Contre-indiquée pendant la grossesse (elle stimule l'utérus) et l'allaitement.",
      "Contient de la thuyone en petite quantité : usage modéré et bref, jamais d'huile essentielle par voie interne ; éviter en cas d'épilepsie.",
      "Son pollen est allergisant ; allergie croisée possible avec le céleri et d'autres Astéracées.",
      "Peut parfois augmenter le flux des règles chez certaines femmes."
    ],
    sources: [
      { titre: "Wikipédia : Artemisia vulgaris", url: "https://fr.wikipedia.org/wiki/Artemisia_vulgaris" },
      { titre: "Althea Provence : armoise commune", url: "https://www.altheaprovence.com/armoise-commune-artemisia-vulgaris-regles-absentes-difficiles/" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes (1868), article Armoise", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "grande-absinthe",
    nom: "Grande absinthe",
    latin: "Artemisia absinthium",
    famille: "Astéracées",
    autresNoms: ["Absinthe", "Herbe aux vers", "Armoise amère", "Alvine"],
    statut: "medicinale",
    resume: "Plante argentée et soyeuse, extrêmement amère, ingrédient de la fameuse liqueur du XIXe siècle. Tonique digestif traditionnel puissant, elle doit être employée à très petite dose à cause de la thuyone.",
    habitat: "Friches sèches, rocailles, talus, décombres, abords des villages, pentes ensoleillées de montagne.",
    habitats: ["friche", "bord-chemin", "montagne"],
    regions: "Disséminée en France, plus fréquente dans les Alpes, les Pyrénées et les régions sèches ; souvent échappée de jardins.",
    recolte: [6, 7, 8],
    floraison: [7, 8, 9],
    couleurFleur: ["jaune"],
    typeFeuille: "Feuilles divisées deux ou trois fois en lobes arrondis, gris argenté et soyeuses sur les deux faces.",
    reconnaissance: [
      "Toute la plante est gris argenté, couverte de poils soyeux, sur les deux faces des feuilles.",
      "Amertume intense et persistante au simple contact d'une feuille avec la langue.",
      "Odeur aromatique forte et caractéristique.",
      "Petits capitules globuleux jaunes et pendants, en panicule feuillée.",
      "Plante vivace un peu ligneuse à la base, de 40 cm à 1 m."
    ],
    partiesUtilisees: ["feuilles", "sommités fleuries"],
    bienfaits: [
      "Traditionnellement utilisée comme tonique amer puissant pour stimuler l'appétit et la digestion.",
      "Réputée vermifuge dans la tradition populaire.",
      "Cazin décrit déjà les effets nerveux de son abus, l'absinthisme, observés chez les buveurs de la liqueur."
    ],
    usages: ["infusion très légère avant les repas", "vin apéritif amer à petite dose", "répulsif pour les insectes au jardin"],
    recettes: [
      {
        titre: "Infusion légère d'absinthe",
        type: "infusion",
        ingredients: ["1 pincée de feuilles séchées (environ 0,5 à 1 g)", "200 ml d'eau frémissante"],
        etapes: ["Verser l'eau sur la plante.", "Infuser 5 minutes seulement.", "Filtrer ; une petite tasse avant le repas, quelques jours au plus, sans dépasser 2 tasses par jour."]
      }
    ],
    confusions: [
      {
        nom: "Armoise commune",
        latin: "Artemisia vulgaris",
        danger: "sans-danger",
        differences: ["Feuilles vert foncé dessus et blanches seulement dessous, à lobes pointus.", "Amertume faible."]
      },
      {
        nom: "Armoise arborescente",
        latin: "Artemisia arborescens",
        danger: "toxique",
        differences: ["Arbrisseau méditerranéen de 1 à 2 m, très ligneux.", "Feuilles argentées plus finement divisées ; très riche en thuyone, à ne pas employer."]
      }
    ],
    precautions: [
      "Contient de la thuyone, convulsivante : ne jamais dépasser de très petites doses ni prolonger l'usage au-delà de quelques jours.",
      "Contre-indiquée pendant la grossesse, l'allaitement, chez l'enfant, en cas d'épilepsie, d'ulcère de l'estomac et de maladie du foie ou des voies biliaires.",
      "Ne jamais utiliser l'huile essentielle d'absinthe.",
      "Allergie possible chez les personnes sensibles aux Astéracées."
    ],
    sources: [
      { titre: "Wikipédia : Absinthe (plante)", url: "https://fr.wikipedia.org/wiki/Artemisia_absinthium" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes (1868), article Absinthe", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "grande-camomille",
    nom: "Grande camomille",
    latin: "Tanacetum parthenium",
    famille: "Astéracées",
    autresNoms: ["Partenelle", "Matricaire officinale", "Chrysanthème matricaire", "Herbe aux mites"],
    statut: "medicinale",
    resume: "Petite marguerite touffue aux feuilles jaune vert très odorantes, souvent échappée des jardins. Plante traditionnelle des migraines, aux contre-indications à bien connaître.",
    habitat: "Vieux murs, pieds de façades, friches, décombres, bords de chemins, abords des villages et jardins.",
    habitats: ["jardin", "friche", "bord-chemin"],
    regions: "Naturalisée un peu partout en France à partir des jardins.",
    recolte: [5, 6, 7, 8],
    floraison: [6, 7, 8, 9],
    couleurFleur: ["blanc", "jaune"],
    typeFeuille: "Feuilles alternes, vert jaunâtre, découpées en segments larges et dentés, à forte odeur amère et camphrée.",
    reconnaissance: [
      "Nombreux petits capitules de 1,5 à 2 cm à cœur jaune et courtes languettes blanches, en bouquets plats.",
      "Feuilles vert tendre un peu jaunâtre, découpées en segments assez larges (et non en fils).",
      "Odeur forte, amère, un peu camphrée au froissement.",
      "Plante touffue de 30 à 60 cm.",
      "Cœur des capitules plat, non creux."
    ],
    partiesUtilisees: ["feuilles", "sommités fleuries"],
    bienfaits: [
      "Traditionnellement utilisée en prévention des migraines, usage qui a fait l'objet d'études aux résultats modestes et variables.",
      "Cazin la décrit comme emménagogue et tonique, employée contre les règles difficiles."
    ],
    usages: ["infusion des sommités", "répulsif pour les mites en bouquets secs"],
    recettes: [
      {
        titre: "Infusion de grande camomille",
        type: "infusion",
        ingredients: ["1/2 cuillère à café de feuilles et sommités séchées (environ 0,5 à 1 g)", "200 ml d'eau frémissante"],
        etapes: ["Verser l'eau sur la plante.", "Infuser 5 à 10 minutes.", "Filtrer ; 1 tasse par jour, après avis médical si l'usage doit durer."]
      }
    ],
    confusions: [
      {
        nom: "Matricaire inodore",
        latin: "Tripleurospermum inodorum",
        danger: "sans-danger",
        differences: ["Feuilles découpées en fins filaments, presque sans odeur.", "Capitules plus grands et souvent isolés."]
      },
      {
        nom: "Camomille puante",
        latin: "Anthemis cotula",
        danger: "irritant",
        differences: ["Odeur fétide et non camphrée.", "Feuilles finement découpées en lanières étroites.", "Peut irriter la peau au contact."]
      }
    ],
    precautions: [
      "Contre-indiquée pendant la grossesse et l'allaitement, et chez l'enfant.",
      "Peut interagir avec les anticoagulants et antiagrégants : avis médical, et arrêt avant une opération.",
      "Mâcher les feuilles fraîches peut provoquer des aphtes et des irritations de la bouche.",
      "Allergie fréquente chez les personnes sensibles aux Astéracées ; un arrêt brutal après un long usage peut provoquer des maux de tête."
    ],
    sources: [
      { titre: "Wikipédia : Tanacetum parthenium", url: "https://fr.wikipedia.org/wiki/Tanacetum_parthenium" },
      { titre: "Althea Provence : partenelle", url: "https://www.altheaprovence.com/partenelle-grande-camomille-tanacetum-parthenium/" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes (1868), article Matricaire", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "souci-des-champs",
    nom: "Souci des champs",
    latin: "Calendula arvensis",
    famille: "Astéracées",
    autresNoms: ["Souci sauvage", "Souci des vignes", "Petit souci"],
    statut: "comestible-medicinale",
    resume: "Petit souci sauvage aux capitules orangés des vignes et des cultures, surtout dans le Midi. Ses fleurs s'emploient comme celles du souci des jardins, en cuisine et en huile adoucissante pour la peau.",
    habitat: "Vignes, vergers, champs cultivés, friches, bords de chemins, sols chauds et secs.",
    habitats: ["friche", "jardin", "bord-chemin"],
    regions: "Surtout dans la moitié sud de la France et en région méditerranéenne ; en régression ailleurs.",
    recolte: [2, 3, 4, 5, 6, 9, 10],
    floraison: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    couleurFleur: ["orange", "jaune"],
    typeFeuille: "Feuilles alternes, oblongues à lancéolées, un peu épaisses, finement poilues et collantes, à odeur résineuse.",
    reconnaissance: [
      "Capitules jaune orangé de 1 à 2 cm, plus petits que le souci des jardins.",
      "Fleurs qui s'ouvrent vers le milieu de la matinée et se ferment dans l'après-midi ou par temps couvert.",
      "Feuilles un peu collantes au toucher, à odeur aromatique résineuse.",
      "Fruits recourbés en croissant ou en nacelle, hérissés de petites épines sur le dos.",
      "Plante basse et étalée de 10 à 30 cm."
    ],
    partiesUtilisees: ["fleurs", "jeunes feuilles"],
    bienfaits: [
      "Ses propriétés sont réputées analogues à celles du souci officinal (Cazin) : fleurs traditionnellement utilisées en huile ou pommade pour apaiser et aider à cicatriser les petites plaies et irritations de la peau.",
      "Anciennement considéré comme sudorifique et emménagogue."
    ],
    usages: ["pétales crus pour colorer et décorer les salades et le riz", "huile de fleurs macérées pour la peau", "jeunes feuilles en petite quantité dans une salade"],
    recettes: [
      {
        titre: "Huile de fleurs de souci",
        type: "macerat",
        ingredients: ["Fleurs de souci cueillies par temps sec et séchées quelques heures", "Huile d'olive ou de tournesol"],
        etapes: ["Remplir un bocal propre de fleurs sans tasser.", "Couvrir entièrement d'huile.", "Laisser macérer 3 à 4 semaines à l'abri en remuant de temps en temps.", "Filtrer et conserver à l'abri de la lumière ; en application sur les peaux sèches et irritées."]
      },
      {
        titre: "Riz aux pétales de souci",
        type: "cuisine",
        ingredients: ["200 g de riz", "1 poignée de capitules de souci", "1 noix de beurre", "Sel"],
        etapes: ["Cuire le riz comme d'habitude.", "Effeuiller les capitules pour ne garder que les languettes.", "Mélanger les pétales au riz chaud avec le beurre : ils lui donnent une couleur dorée."]
      }
    ],
    confusions: [
      {
        nom: "Souci des jardins",
        latin: "Calendula officinalis",
        danger: "sans-danger",
        differences: ["Capitules bien plus grands (4 à 7 cm), orange vif.", "Plante cultivée, parfois échappée des jardins ; mêmes usages."]
      },
      {
        nom: "Séneçon commun",
        latin: "Senecio vulgaris",
        danger: "toxique",
        differences: ["Capitules jaunes en pinceau, sans languettes, entourés de bractées à pointe noire.", "Feuilles découpées, non collantes, sans odeur résineuse.", "Fruits à aigrette blanche."]
      }
    ],
    precautions: [
      "Allergie possible chez les personnes sensibles aux Astéracées : tester l'huile sur une petite zone de peau.",
      "Par prudence, pas d'usage interne pendant la grossesse.",
      "Plante en régression dans une partie de la France : cueillir avec modération et préférer le souci des jardins cultivé pour les grandes quantités."
    ],
    sources: [
      { titre: "Wikipédia : Calendula arvensis", url: "https://fr.wikipedia.org/wiki/Calendula_arvensis" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes (1868), article Souci des champs", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "bleuet",
    nom: "Bleuet",
    latin: "Centaurea cyanus",
    famille: "Astéracées",
    autresNoms: ["Bleuet des champs", "Barbeau", "Casse-lunettes", "Aubifoin"],
    statut: "comestible-medicinale",
    resume: "Fleur bleu intense des moissons, devenue plus rare avec les herbicides. Ses fleurs se mangent en décoration et leur infusion est une lotion traditionnelle des yeux fatigués.",
    habitat: "Champs de céréales, moissons, friches, bords de champs, jachères fleuries.",
    habitats: ["friche", "prairie", "bord-chemin"],
    regions: "Dans toute la France, mais en net recul ; plus fréquent sur sols siliceux et dans les cultures peu traitées.",
    recolte: [5, 6, 7, 8],
    floraison: [5, 6, 7, 8],
    couleurFleur: ["bleu", "violet"],
    typeFeuille: "Feuilles étroites et allongées, gris vert, couvertes d'un fin duvet cotonneux, les inférieures parfois lobées.",
    reconnaissance: [
      "Capitules bleu vif de 2 à 3 cm, les fleurs du bord grandes et en entonnoir dentelé, celles du centre plus petites et violacées.",
      "Bractées de l'involucre bordées de petites franges brunes ou argentées.",
      "Tige fine, ramifiée, cotonneuse, de 30 à 80 cm.",
      "Feuilles linéaires gris vert, duveteuses.",
      "Plante annuelle des cultures, souvent mêlée aux coquelicots."
    ],
    partiesUtilisees: ["fleurs"],
    bienfaits: [
      "Les fleurs sont traditionnellement utilisées en compresses ou lotion pour les yeux fatigués et les paupières irritées, d'où le nom de casse-lunettes.",
      "Réputées légèrement astringentes et anti-inflammatoires ; Cazin décrit l'eau de bleuet comme un collyre populaire de son temps."
    ],
    usages: ["fleurs crues pour décorer salades, desserts et gâteaux", "fleurs séchées dans les mélanges de tisane pour la couleur", "compresses tièdes sur les paupières fermées"],
    recettes: [
      {
        titre: "Compresses de bleuet pour les paupières",
        type: "infusion",
        ingredients: ["1 cuillère à soupe de fleurs séchées (environ 1 g)", "200 ml d'eau bouillante", "Compresses stériles"],
        etapes: ["Verser l'eau sur les fleurs et infuser 10 minutes à couvert.", "Filtrer très soigneusement à travers un filtre en papier et laisser tiédir.", "Imbiber deux compresses et les poser 10 minutes sur les paupières fermées.", "Préparer chaque jour une nouvelle infusion et jeter le reste."]
      }
    ],
    confusions: [
      {
        nom: "Centaurée des montagnes",
        latin: "Centaurea montana",
        danger: "sans-danger",
        differences: ["Capitules plus grands et lâches, aux fleurs du bord très découpées, au cœur rouge violacé.", "Feuilles larges qui se prolongent sur la tige ; plante vivace de montagne."]
      },
      {
        nom: "Chicorée sauvage",
        latin: "Cichorium intybus",
        danger: "sans-danger",
        differences: ["Capitules bleu ciel plats faits de languettes dentées, collés à la tige.", "Latex blanc à la cassure."]
      }
    ],
    precautions: [
      "Pour les yeux, n'utiliser qu'une infusion fraîche, parfaitement filtrée, en compresses sur les paupières fermées et non en gouttes : une infection oculaire, une douleur ou une baisse de vision nécessitent un médecin.",
      "Allergie possible chez les personnes sensibles aux Astéracées.",
      "Espèce en régression : ne prélever que quelques fleurs, et jamais dans les cultures traitées."
    ],
    sources: [
      { titre: "Wikipédia : Bleuet (Cyanus segetum)", url: "https://fr.wikipedia.org/wiki/Centaurea_cyanus" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes (1868), article Bluet", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "grande-marguerite",
    nom: "Grande marguerite",
    latin: "Leucanthemum vulgare",
    famille: "Astéracées",
    autresNoms: ["Marguerite commune", "Marguerite des prés", "Leucanthème", "Fleur de la Saint-Jean"],
    statut: "comestible",
    resume: "La marguerite des prés, grand capitule blanc à cœur jaune. Ses jeunes feuilles au goût aromatique et ses boutons floraux se mangent en salade ou confits au vinaigre.",
    habitat: "Prairies de fauche, talus, bords de chemins, pelouses, jusqu'en montagne.",
    habitats: ["prairie", "bord-chemin", "montagne"],
    regions: "Commune dans toute la France.",
    recolte: [3, 4, 5, 6],
    floraison: [5, 6, 7, 8, 9],
    couleurFleur: ["blanc", "jaune"],
    typeFeuille: "Feuilles de base en spatule à long pétiole, crénelées ; feuilles de la tige étroites, dentées, sans pétiole, embrassant la tige.",
    reconnaissance: [
      "Un seul grand capitule de 3 à 6 cm par tige ou rameau : languettes blanches autour d'un cœur jaune plat.",
      "Tige dressée de 30 à 80 cm, peu ramifiée.",
      "Feuilles de base spatulées et dentées, feuilles de la tige oblongues, embrassantes et dentées.",
      "Bractées du capitule bordées d'une fine marge brune.",
      "Feuilles à odeur légèrement aromatique au froissement."
    ],
    partiesUtilisees: ["jeunes feuilles", "boutons floraux", "fleurs"],
    bienfaits: [
      "Anciennement réputée apéritive, diurétique et adoucissante de la toux ; Cazin note qu'elle était déjà tombée dans l'oubli à son époque.",
      "Les fleurs étaient utilisées en tradition populaire en lotion pour les yeux irrités."
    ],
    usages: ["jeunes feuilles crues en salade en petite quantité", "boutons floraux confits au vinaigre comme des câpres", "pétales pour décorer"],
    recettes: [
      {
        titre: "Câpres de boutons de marguerite",
        type: "cuisine",
        ingredients: ["2 poignées de boutons floraux bien fermés", "Gros sel", "Vinaigre de cidre"],
        etapes: ["Rincer les boutons et les couvrir de gros sel pendant une nuit.", "Les rincer, les sécher et les tasser dans un petit bocal.", "Couvrir de vinaigre bouillant, fermer et attendre 3 semaines avant de déguster."]
      }
    ],
    confusions: [
      {
        nom: "Matricaire inodore",
        latin: "Tripleurospermum inodorum",
        danger: "sans-danger",
        differences: ["Feuilles découpées en fins filaments.", "Capitules plus petits, cœur bombé."]
      },
      {
        nom: "Camomille puante",
        latin: "Anthemis cotula",
        danger: "irritant",
        differences: ["Feuilles très découpées en lanières, odeur fétide.", "Petits capitules nombreux à cœur conique.", "Peut irriter la peau."]
      }
    ],
    precautions: [
      "Allergie possible chez les personnes sensibles aux Astéracées, y compris par contact.",
      "Ne consommer les feuilles qu'en petite quantité, leur goût étant assez fort.",
      "Éviter les bords de routes et les prairies traitées."
    ],
    sources: [
      { titre: "Wikipédia : Marguerite commune", url: "https://fr.wikipedia.org/wiki/Leucanthemum_vulgare" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes (1868), mention de la grande marguerite", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "brunelle-commune",
    nom: "Brunelle commune",
    latin: "Prunella vulgaris",
    famille: "Lamiacées",
    autresNoms: ["Brunelle", "Herbe au charpentier", "Prunelle", "Charbonnière"],
    statut: "comestible-medicinale",
    resume: "Petite plante des pelouses aux épis trapus de fleurs violettes. Vulnéraire de la tradition, l'herbe au charpentier, ses jeunes feuilles se mangent aussi en salade.",
    habitat: "Pelouses, prairies, bords de chemins, lisières, clairières, sols frais.",
    habitats: ["prairie", "jardin", "bord-chemin", "foret"],
    regions: "Très commune dans toute la France.",
    recolte: [4, 5, 6, 7, 8, 9],
    floraison: [6, 7, 8, 9, 10],
    couleurFleur: ["violet", "bleu"],
    typeFeuille: "Feuilles opposées, ovales, entières ou à peine dentées, à court pétiole, peu ou pas velues.",
    reconnaissance: [
      "Épi floral trapu et carré de 2 à 4 cm, au sommet de la tige, directement sous une paire de feuilles.",
      "Fleurs violettes en gueule, à lèvre supérieure en casque, entre des bractées vertes à bord pourpre.",
      "Tige carrée, couchée puis redressée, de 10 à 30 cm.",
      "Feuilles opposées, ovales, à peu près entières.",
      "Odeur faible, saveur légèrement amère et astringente."
    ],
    partiesUtilisees: ["sommités fleuries", "jeunes feuilles"],
    bienfaits: [
      "Traditionnellement utilisée comme vulnéraire, en usage externe sur les petites plaies et coupures, d'où son nom d'herbe au charpentier.",
      "Réputée astringente en gargarisme contre les maux de gorge et les inflammations de la bouche, usage cité par Cazin.",
      "Ses épis sont utilisés en médecine chinoise."
    ],
    usages: ["jeunes feuilles en salade ou dans les soupes", "sommités séchées en infusion ou gargarisme", "compresses sur les petites plaies"],
    recettes: [
      {
        titre: "Gargarisme de brunelle",
        type: "infusion",
        ingredients: ["1 cuillère à soupe de sommités fleuries séchées (environ 2 g)", "250 ml d'eau frémissante", "1 cuillère à café de miel"],
        etapes: ["Infuser la plante 10 minutes à couvert.", "Filtrer et ajouter le miel.", "Se gargariser avec la préparation tiède 3 fois par jour."]
      }
    ],
    confusions: [
      {
        nom: "Bugle rampante",
        latin: "Ajuga reptans",
        danger: "sans-danger",
        differences: ["Longs stolons rampants feuillés.", "Fleurs bleues à lèvre supérieure presque absente, en épi feuillé plus allongé.", "Usages proches."]
      },
      {
        nom: "Brunelle à grandes fleurs",
        latin: "Prunella grandiflora",
        danger: "sans-danger",
        differences: ["Fleurs bien plus grandes (2 à 3 cm).", "Épi sans paire de feuilles juste en dessous ; pelouses calcaires."]
      }
    ],
    precautions: [
      "Pas de toxicité connue aux doses traditionnelles ; par manque de données, éviter l'usage interne prolongé pendant la grossesse et l'allaitement.",
      "Une plaie profonde, sale ou qui s'infecte nécessite des soins médicaux.",
      "Éviter les pelouses traitées."
    ],
    sources: [
      { titre: "Wikipédia : Brunelle commune", url: "https://fr.wikipedia.org/wiki/Prunella_vulgaris" },
      { titre: "Althea Provence : brunelle", url: "https://www.altheaprovence.com/brunelle-prunella-vulgaris/" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes (1868), article Brunelle", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "bugle-rampante",
    nom: "Bugle rampante",
    latin: "Ajuga reptans",
    famille: "Lamiacées",
    autresNoms: ["Bugle", "Consoude moyenne", "Herbe de saint Laurent", "Petite consoude"],
    statut: "comestible-medicinale",
    resume: "Plante tapissante aux épis de fleurs bleues au printemps, qui se propage par stolons. Vulnéraire traditionnelle, ses jeunes feuilles se mangent en salade ou cuites.",
    habitat: "Prairies fraîches, lisières, sous-bois clairs, pelouses, bords de chemins humides.",
    habitats: ["prairie", "foret", "jardin", "bord-chemin"],
    regions: "Très commune dans toute la France.",
    recolte: [3, 4, 5, 6],
    floraison: [4, 5, 6],
    couleurFleur: ["bleu", "violet"],
    typeFeuille: "Feuilles de base en rosette, ovales, luisantes, souvent teintées de pourpre ; feuilles de la tige opposées.",
    reconnaissance: [
      "Longs stolons feuillés qui rampent au sol et s'enracinent, formant des tapis.",
      "Épi dressé de 10 à 30 cm de fleurs bleues en verticilles étagés, entre des bractées souvent bleutées.",
      "Fleurs à lèvre supérieure très courte, presque absente, et grande lèvre inférieure à trois lobes.",
      "Tige carrée, poilue sur deux faces opposées.",
      "Rosette de feuilles ovales, souvent luisantes et bronzées."
    ],
    partiesUtilisees: ["jeunes feuilles", "sommités fleuries"],
    bienfaits: [
      "Traditionnellement utilisée comme vulnéraire et astringente, en compresses sur les petites plaies et contusions ; Cazin la range parmi les vulnéraires.",
      "Réputée en gargarisme pour les inflammations de la bouche."
    ],
    usages: ["jeunes feuilles en salade mélangée ou cuites", "sommités séchées en infusion ou gargarisme", "compresses sur les petites plaies"],
    recettes: [
      {
        titre: "Infusion de bugle",
        type: "infusion",
        ingredients: ["1 cuillère à soupe de sommités fleuries séchées (environ 2 g)", "250 ml d'eau frémissante"],
        etapes: ["Verser l'eau sur la plante.", "Couvrir et infuser 10 minutes.", "Filtrer ; en bain de bouche ou en compresses tièdes sur la peau."]
      }
    ],
    confusions: [
      {
        nom: "Lierre terrestre",
        latin: "Glechoma hederacea",
        danger: "sans-danger",
        differences: ["Feuilles rondes en rein, crénelées, très aromatiques.", "Fleurs bleu violet par 2 ou 3 à l'aisselle des feuilles, sans épi dressé."]
      },
      {
        nom: "Brunelle commune",
        latin: "Prunella vulgaris",
        danger: "sans-danger",
        differences: ["Épi trapu et court, fleurs à lèvre supérieure en casque.", "Pas de stolons feuillés en tapis."]
      }
    ],
    precautions: [
      "Pas de toxicité connue chez l'humain ni chez les animaux domestiques.",
      "Par prudence, pas d'usage interne prolongé pendant la grossesse.",
      "Une plaie profonde ou qui s'infecte nécessite des soins médicaux."
    ],
    sources: [
      { titre: "Wikipédia : Bugle rampante", url: "https://fr.wikipedia.org/wiki/Ajuga_reptans" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes (1868), article Bugle", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "veronique-officinale",
    nom: "Véronique officinale",
    latin: "Veronica officinalis",
    famille: "Plantaginacées",
    autresNoms: ["Thé d'Europe", "Herbe aux ladres", "Véronique mâle"],
    statut: "medicinale",
    resume: "Petite plante rampante des sous-bois clairs et des landes aux épis de fleurs bleu pâle. Elle fut le thé d'Europe, une tisane digestive et pectorale très populaire.",
    habitat: "Bois clairs, lisières, landes, pelouses et talus sur sols acides et secs.",
    habitats: ["foret", "prairie", "bord-chemin", "montagne"],
    regions: "Commune dans une grande partie de la France, surtout sur sols siliceux.",
    recolte: [5, 6, 7, 8],
    floraison: [5, 6, 7, 8],
    couleurFleur: ["bleu", "violet"],
    typeFeuille: "Feuilles opposées, ovales, finement dentées, velues et rêches, à court pétiole.",
    reconnaissance: [
      "Tiges couchées et velues qui s'enracinent, d'où partent des rameaux dressés.",
      "Fleurs bleu lilas pâle veinées de bleu foncé, de 6 à 8 mm, à quatre lobes inégaux et deux étamines.",
      "Fleurs en épis serrés dressés naissant à l'aisselle des feuilles, et non au sommet.",
      "Feuilles opposées, ovales, dentées, rêches et velues.",
      "Saveur légèrement amère et astringente."
    ],
    partiesUtilisees: ["parties aériennes fleuries"],
    bienfaits: [
      "Traditionnellement utilisée en tisane pour faciliter la digestion et apaiser la toux, comme substitut du thé (thé d'Europe).",
      "Réputée légèrement expectorante et dépurative ; Cazin rapporte qu'on a proposé en Allemagne de la boire à la place du thé de Chine.",
      "Employée en tradition populaire en lotion sur les petites affections de la peau."
    ],
    usages: ["parties aériennes séchées en infusion", "mélangée à d'autres plantes dans les tisanes digestives"],
    recettes: [
      {
        titre: "Thé d'Europe",
        type: "infusion",
        ingredients: ["1 cuillère à soupe de parties aériennes fleuries séchées (environ 2 g)", "250 ml d'eau frémissante", "Miel au goût"],
        etapes: ["Verser l'eau sur la plante.", "Infuser 10 minutes à couvert.", "Filtrer ; 2 à 3 tasses par jour après les repas."]
      }
    ],
    confusions: [
      {
        nom: "Véronique petit-chêne",
        latin: "Veronica chamaedrys",
        danger: "sans-danger",
        differences: ["Fleurs bleu vif plus grandes, en grappes lâches.", "Tige portant deux lignes de poils opposées.", "Sans danger, moins utilisée."]
      },
      {
        nom: "Mouron rouge (forme bleue)",
        latin: "Lysimachia arvensis",
        danger: "toxique",
        differences: ["Fleurs isolées à cinq pétales égaux, sur de longs pédoncules, jamais en épis.", "Feuilles glabres, sans pétiole, ponctuées de noir dessous.", "Tige carrée glabre."]
      }
    ],
    precautions: [
      "Pas de toxicité connue aux doses usuelles ; éviter l'usage prolongé pendant la grossesse et l'allaitement par manque de données.",
      "Une toux persistante ou des troubles digestifs durables nécessitent un avis médical."
    ],
    sources: [
      { titre: "Wikipédia : Véronique officinale", url: "https://fr.wikipedia.org/wiki/Veronica_officinalis" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes (1868), article Véronique", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  },
  {
    id: "euphraise-officinale",
    nom: "Euphraise officinale",
    latin: "Euphrasia officinalis",
    famille: "Orobanchacées",
    autresNoms: ["Euphraise", "Casse-lunettes", "Herbe aux myopes", "Luminet"],
    statut: "medicinale",
    resume: "Minuscule plante des prairies maigres, demi-parasite des graminées, aux petites fleurs blanches marquées de violet et d'une tache jaune comme un œil. La plante traditionnelle des yeux irrités.",
    habitat: "Prairies maigres, pelouses, pâturages de montagne, landes, bords de chemins herbeux.",
    habitats: ["prairie", "montagne", "bord-chemin"],
    regions: "Dans une grande partie de la France, surtout en montagne ; le nom regroupe plusieurs espèces proches difficiles à séparer.",
    recolte: [7, 8, 9],
    floraison: [6, 7, 8, 9, 10],
    couleurFleur: ["blanc", "violet", "jaune"],
    typeFeuille: "Petites feuilles opposées, ovales, à dents aiguës, sans pétiole, souvent teintées de bronze.",
    reconnaissance: [
      "Plante annuelle de 5 à 25 cm, souvent ramifiée, qui vit en demi-parasite sur les racines des graminées.",
      "Fleurs de 6 à 10 mm à deux lèvres : la lèvre inférieure à trois lobes échancrés, blanche striée de violet, avec une tache jaune au centre.",
      "Petites feuilles opposées, ovales, aux dents pointues, rapprochées vers le haut.",
      "Fleurs à l'aisselle des feuilles supérieures.",
      "Plante discrète qu'on repère surtout en fleur."
    ],
    partiesUtilisees: ["parties aériennes fleuries"],
    bienfaits: [
      "Traditionnellement utilisée en compresses pour les yeux fatigués, rouges ou irrités et les paupières gonflées ; Cazin rapporte que sa réputation contre la faiblesse de la vue était exagérée.",
      "Réputée apaisante dans les rhumes avec écoulement nasal et larmoiement."
    ],
    usages: ["infusion en compresses sur les paupières", "infusion en usage interne en cas de rhume des foins"],
    recettes: [
      {
        titre: "Compresses d'euphraise",
        type: "infusion",
        ingredients: ["1 cuillère à café de plante séchée (environ 1 g)", "200 ml d'eau bouillante", "Compresses stériles"],
        etapes: ["Verser l'eau sur la plante et infuser 10 minutes à couvert.", "Filtrer très soigneusement à travers un filtre en papier et laisser tiédir.", "Appliquer 10 minutes sur les paupières fermées, une compresse neuve par œil.", "Jeter le reste : préparer chaque jour une nouvelle infusion."]
      }
    ],
    confusions: [
      {
        nom: "Odontite rouge",
        latin: "Odontites vernus",
        danger: "sans-danger",
        differences: ["Fleurs rose rougeâtre en épis unilatéraux allongés.", "Feuilles étroites et lancéolées ; plante plus haute."]
      },
      {
        nom: "Mélampyre des prés",
        latin: "Melampyrum pratense",
        danger: "toxique",
        differences: ["Fleurs jaune pâle tubulaires, longues de 1 à 2 cm, par paires tournées d'un seul côté.", "Feuilles étroites, lancéolées, presque entières.", "Plante des bois acides ; ses graines sont réputées toxiques."]
      }
    ],
    precautions: [
      "Ne jamais mettre de préparation maison dans l'œil en gouttes : les infusions ne sont pas stériles. Compresses sur paupières fermées uniquement.",
      "Une douleur oculaire, un écoulement purulent, une baisse de vision ou une rougeur qui dure nécessitent un médecin.",
      "Plante petite et demi-parasite : la cueillette détruit les populations ; préférer la plante séchée d'herboristerie."
    ],
    sources: [
      { titre: "Wikipédia : Euphrasia officinalis", url: "https://fr.wikipedia.org/wiki/Euphrasia_officinalis" },
      { titre: "Althea Provence : euphraise", url: "https://www.altheaprovence.com/euphraise-euphrasia-officinalis-inflammations-oculaires-rhinites-otites/" },
      { titre: "F.-J. Cazin, Traité pratique et raisonné des plantes médicinales indigènes (1868), article Euphraise officinale", url: "https://archive.org/details/traitpratiquee1868cazi" }
    ]
  }
);
