/* Astuces, idées reçues vérifiées et guide de diagnostic général des plantes d'intérieur.
   Textes rédigés en français à partir des sources citées. */
(function () {
  var S = {
    guide: { titre: "RHS : How to grow houseplants", url: "https://www.rhs.org.uk/plants/types/houseplants/growing-guide" },
    media: { titre: "RHS : Compost mixes for houseplants", url: "https://www.rhs.org.uk/plants/types/houseplants/growing-media-houseplants" },
    hol: { titre: "RHS : Houseplants, holiday care", url: "https://www.rhs.org.uk/plants/types/houseplants/holiday-care" },
    light: { titre: "RHS : Artificial lighting for indoor plants", url: "https://www.rhs.org.uk/plants/types/houseplants/artificial-lighting" },
    cut: { titre: "RHS : How to take cuttings from houseplants", url: "https://www.rhs.org.uk/plants/types/houseplants/how-to-take-cuttings-from-houseplants" },
    health: { titre: "RHS : Houseplants for health and wellbeing", url: "https://www.rhs.org.uk/plants/types/houseplants/for-human-health" },
    cact: { titre: "RHS : How to grow cacti and succulents", url: "https://www.rhs.org.uk/plants/types/cacti-succulents/houseplants/growing-guide" },
    arum: { titre: "RHS : Monsteras and more", url: "https://www.rhs.org.uk/plants/types/houseplants/monsteras-and-more" },
    gnats: { titre: "RHS : Fungus gnats", url: "https://www.rhs.org.uk/biodiversity/fungus-gnats" },
    mites: { titre: "RHS : Glasshouse red spider mite", url: "https://www.rhs.org.uk/biodiversity/glasshouse-red-spider-mite" },
    mealy: { titre: "RHS : Mealybug", url: "https://www.rhs.org.uk/biodiversity/mealybug" },
    scale: { titre: "RHS : Scale insects", url: "https://www.rhs.org.uk/biodiversity/scale-insects" },
    thrips: { titre: "RHS : Thrips", url: "https://www.rhs.org.uk/biodiversity/thrips" },
    aphids: { titre: "RHS : Aphids", url: "https://www.rhs.org.uk/biodiversity/aphids" },
    nasaW: { titre: "Wikipédia (en) : NASA Clean Air Study", url: "https://en.wikipedia.org/wiki/NASA_Clean_Air_Study" },
    nasaRev: { titre: "Cummings et Waring (2019), Potted plants do not improve indoor air quality, J. Exposure Science & Environmental Epidemiology", url: "https://www.nature.com/articles/s41370-019-0175-9" },
    rusDep: { titre: "Rustica : Plantes dépolluantes", url: "https://www.rustica.fr/autres-plantes-vertes/24-plantes-depolluantes-qui-ameliorent-votre-maison,2136.html" },
    rusSec: { titre: "Rustica : Pourquoi les feuilles de ma plante d'intérieur sont sèches", url: "https://www.rustica.fr/autres-plantes-vertes/pourquoi-feuilles-ma-plante-d-interieur-sont-elles-seches,20807.html" },
    jmRemp: { titre: "Jardiner Malin : Rempoter une plante d'intérieur", url: "https://www.jardiner-malin.fr/fiche/rempotage-plantes-interieur.html" },
    jmCact: { titre: "Jardiner Malin : Erreurs avec les cactus et succulentes", url: "https://www.jardiner-malin.fr/fiche/cactus-succulente-erreurs.html" },
    osuCafe: { titre: "Oregon State University Extension : Coffee grounds boost soil health", url: "https://extension.oregonstate.edu/news/coffee-grounds-boost-soil-health-help-control-slugs" },
    wsuCafe: { titre: "WSU Extension : Using coffee grounds in gardens and landscapes", url: "https://pubs.extension.wsu.edu/product/using-coffee-grounds-in-gardens-and-landscapes-home-garden-series/" },
    ncsuOeuf: { titre: "NC State Extension : Gardening MythBusters, eggshells for calcium", url: "https://chowan.ces.ncsu.edu/news/gardening-mythbusters-eggshells-for-calcium/" },
    banane: { titre: "Homedit (d'après UC Master Gardeners) : banana-peel water", url: "https://www.homedit.com/you-think-banana-peel-water-is-feeding-your-houseplants-but-university-experts-say-something-is-missing/" },
    osuGlace: { titre: "Ohio State University : Watering Phalaenopsis orchids with ice cubes", url: "https://u.osu.edu/greenhouse/2018/07/12/watering-phalaenopsis-orchids-with-ice-cubes/" },
    hortGlace: { titre: "HortScience 52(9) : Ice cube irrigation of potted Phalaenopsis orchids", url: "https://journals.ashs.org/view/journals/hortsci/52/9/article-p1271.xml" },
    guardEau: { titre: "The Guardian : should I let tap water stand before watering?", url: "https://www.theguardian.com/lifeandstyle/2026/apr/21/houseplant-hacks-let-tap-water-stand-overnight-before-watering" },
    guardGravier: { titre: "The Guardian : does gravel at the bottom of pots improve drainage?", url: "https://www.theguardian.com/lifeandstyle/2026/jun/23/houseplant-hacks-gravel-bottom-pots-improve-drainage" },
    gkhGravier: { titre: "Gardening Know How : Garden mythbusters, gravel in the bottom of pots", url: "https://www.gardeningknowhow.com/special/containers/garden-mythbusters-does-gravel-in-bottom-of-pot-help-drainage" },
    wsuMythes: { titre: "Linda Chalker-Scott, Washington State University : mythes horticoles", url: "https://puyallup.wsu.edu/lcs/" },
    cannelle: { titre: "The Spruce : Does cinnamon stop damping off?", url: "https://www.thespruce.com/does-cinnamon-stop-damping-off-11935574" },
    sangSeche: { titre: "Wikipédia (en) : Blood meal (sang séché)", url: "https://en.wikipedia.org/wiki/Blood_meal" },
    aufem: { titre: "aufeminin : Arroser ses plantes avec le sang de ses règles, ça marche ?", url: "https://www.aufeminin.com/societe/dossiers/jarrose-mes-plantes-avec-le-sang-de-mes-regles-cest-juste-bizarre-ou-ca-marche-vraiment-2650192.html" },
    biomens: { titre: "Projet biomenstrual (N. Campo Woytuk) : The use and scale of menstrual blood", url: "https://nadiacw.github.io/biomenstrual/reflections/2021/03/29/the-use-and-scale.html" },
    guttW: { titre: "Wikipédia : Guttation", url: "https://fr.wikipedia.org/wiki/Guttation" },
    aspca: { titre: "ASPCA : Toxic and non-toxic plants", url: "https://www.aspca.org/pet-care/animal-poison-control/toxic-and-non-toxic-plants" },
    jmFen: { titre: "Jardiner Malin : Monstera, fenestration des feuilles", url: "https://www.jardiner-malin.fr/fiche/monstera-fenestration.html" }
  };

  window.ASTUCES = [
  {
    id: "sang-menstruel", titre: "Arroser ses plantes avec du sang menstruel dilué", categorie: "engrais-maison", verdict: "nuance",
    resume: "Le sang apporte surtout de l'azote et du fer, comme le sang séché vendu en jardinerie, mais aucune étude sérieuse n'a mesuré l'effet du sang menstruel sur les plantes. Plausible en petite quantité au jardin ou au compost, peu adapté à un pot d'intérieur.",
    detail: "Le sang contient des protéines (donc de l'azote), du fer et un peu de phosphore et de potassium. Le sang séché d'abattoir est d'ailleurs un engrais organique reconnu, à environ 12 % d'azote et moins de 1 % de phosphore et de potassium. Le flux menstruel est cependant un mélange de sang, de mucus, de fragments d'endomètre et de sécrétions vaginales, dont la composition varie d'une personne et d'un cycle à l'autre, et le volume total d'un cycle est faible (quelques dizaines de millilitres). Une fois dilué dans un arrosoir, l'apport nutritif est donc modeste et non dosé, bien inférieur à celui d'un engrais liquide classique dont l'étiquette garantit les teneurs en azote, phosphore et potassium. À ce jour, la pratique repose sur des témoignages et des articles de presse, pas sur des essais publiés : son efficacité n'est ni démontrée ni réfutée. Côté hygiène, des gynécologues interrogés par la presse rappellent que ce fluide peut contenir des micro-organismes, dont ceux d'infections sexuellement transmissibles, ce qui déconseille son usage sur des légumes à consommer. Dans un pot d'intérieur, cette matière organique fraîche se décompose dans un petit volume de terre : risque d'odeurs, de moisissures en surface et d'attraction des sciarides. Au jardin ou sur un tas de compost, les micro-organismes du sol la dégradent bien plus facilement. Le choix relève de la préférence personnelle ; il n'y a pas de danger particulier pour la plante à petite dose, mais pas de bénéfice prouvé non plus.",
    commentFaire: ["Si vous souhaitez essayer, utiliser le flux frais (coupe menstruelle ou eau de trempage de protections lavables sans lessive), pas un liquide stocké plusieurs jours qui fermente.", "Diluer fortement dans l'eau d'arrosage (les témoignages parlent d'environ 1 volume pour 10 volumes d'eau ou plus).", "Le verser de préférence au pied de plantes ornementales du jardin ou sur le compost plutôt que dans un pot d'intérieur.", "Éviter les légumes et herbes aromatiques proches de la récolte.", "En pot, surveiller odeur, moisissure et moucherons ; arrêter s'ils apparaissent.", "Se laver les mains après manipulation, comme pour tout engrais organique."],
    sources: [S.sangSeche, S.aufem, S.biomens]
  },
  {
    id: "marc-de-cafe", titre: "Le marc de café comme engrais", categorie: "engrais-maison", verdict: "nuance",
    resume: "Le marc de café est une bonne matière à composter, mais un mauvais engrais direct en pot : il apporte peu d'éléments disponibles et peut moisir ou freiner la croissance s'il est mis en couche.",
    detail: "Après infusion, le marc est presque neutre (pH 6,5 à 6,8 selon l'Université d'État de l'Oregon) : il n'acidifie pas la terre comme on le croit souvent. Il contient 1 à 2 % d'azote, mais sous une forme qui doit d'abord être décomposée par les micro-organismes. Étalé en couche sur un pot, il forme une croûte qui retient l'humidité, favorise les moisissures et les sciarides, et peut gêner l'arrivée de l'eau. La caféine résiduelle peut aussi freiner la germination et la croissance de certaines plantes. Les spécialistes recommandent de le composter ou d'en incorporer de petites quantités dans un sol de jardin, pas d'en faire l'engrais des plantes d'intérieur.",
    commentFaire: ["Le mettre au compost, où il se décompose avec les autres déchets.", "En pot, au maximum une cuillère à café de marc sec bien mélangée à la terre lors d'un rempotage, jamais en couche en surface.", "Pour nourrir une plante d'intérieur, préférer un engrais liquide dosé."],
    sources: [S.osuCafe, S.wsuCafe]
  },
  {
    id: "peau-de-banane", titre: "La peau de banane ou l'eau de banane comme engrais", categorie: "engrais-maison", verdict: "nuance",
    resume: "La peau de banane contient du potassium, et une partie passe dans l'eau de trempage, mais l'apport est faible, non dosé et sans azote ni oligo-éléments. Utile au compost, pas un engrais complet.",
    detail: "Le potassium est soluble : en faisant tremper des peaux, une partie se retrouve dans l'eau, tandis que la plupart des autres éléments restent dans la peau. Les Master Gardeners de l'Université de Californie rappellent que ce liquide n'a pas de concentration mesurée et ne couvre pas les besoins d'une plante, en particulier en azote. Enterrer une peau entière dans un pot d'intérieur est pire : elle pourrit lentement, sent mauvais et attire moucherons et moisissures.",
    commentFaire: ["Composter les peaux plutôt que les enterrer dans les pots.", "Si vous utilisez une eau de trempage, la verser fraîche (moins de 48 h) et en complément d'un vrai engrais, pas à sa place."],
    sources: [S.banane]
  },
  {
    id: "coquilles-oeufs", titre: "Les coquilles d'œufs pour apporter du calcium", categorie: "engrais-maison", verdict: "faux",
    resume: "Les coquilles sont bien faites de calcium, mais elles se décomposent extrêmement lentement : broyées dans un pot, elles n'apportent presque rien à la plante pendant des mois, voire des années.",
    detail: "Le carbonate de calcium des coquilles n'est libéré que très progressivement, d'autant plus lentement que les morceaux sont gros. Les services de vulgarisation agricole (Caroline du Nord) montrent que cette astuce ne corrige pas une carence rapide, par exemple chez la tomate. Les terreaux du commerce contiennent déjà du calcium, et l'eau du robinet calcaire en apporte aussi. En intérieur, des morceaux de coquilles mal rincés peuvent sentir mauvais. Réduites en poudre très fine et ajoutées au compost, elles ne posent pas de problème, mais n'en attendez pas d'effet visible.",
    commentFaire: ["Les mettre au compost, broyées.", "Pour une plante d'intérieur, s'en tenir à un engrais complet pendant la saison de pousse."],
    sources: [S.ncsuOeuf]
  },
  {
    id: "eau-de-cuisson", titre: "Arroser avec l'eau de cuisson des légumes ou des pâtes", categorie: "engrais-maison", verdict: "nuance",
    resume: "Une eau de cuisson non salée et refroidie peut être réutilisée, mais elle n'apporte que très peu de nutriments. Salée, elle est à proscrire : le sel s'accumule dans le pot et brûle les racines.",
    detail: "Lors de la cuisson, une petite partie des minéraux des légumes passe dans l'eau, ce qui en fait au mieux un apport anecdotique. L'eau des pâtes contient surtout de l'amidon, qui peut favoriser moisissures et odeurs dans un pot. Le vrai danger est le sel : en pot, il n'est pas lessivé par la pluie, il se concentre à chaque arrosage et provoque des pointes brûlées, des feuilles qui jaunissent et un dépérissement des racines. Réutiliser l'eau est un bon geste d'économie, à condition qu'elle soit non salée, sans matière grasse et refroidie.",
    commentFaire: ["Ne garder que l'eau non salée, sans huile ni bouillon.", "La laisser refroidir à température ambiante.", "L'utiliser dans les 24 h, en alternance avec de l'eau claire.", "Ne jamais utiliser l'eau des pâtes salée ou l'eau de cuisson de légumes salée."],
    sources: [S.media, S.guide]
  },
  {
    id: "eau-de-riz", titre: "L'eau de rinçage du riz pour nourrir les plantes", categorie: "engrais-maison", verdict: "nuance",
    resume: "L'eau de rinçage du riz contient un peu d'amidon, de phosphore et de potassium. Quelques petits essais montrent un léger effet, mais elle reste un apport faible et peut fermenter dans un pot.",
    detail: "Quelques études universitaires, surtout sur des légumes en culture, signalent un effet léger de cette eau, attribué aux traces de minéraux et à l'amidon qui nourrit les micro-organismes du sol. En pot d'intérieur, l'amidon peut aussi favoriser les moisissures en surface, les mauvaises odeurs et les sciarides si l'eau est utilisée souvent ou après avoir fermenté. Ce n'est pas nuisible en usage occasionnel, mais cela ne remplace pas un engrais.",
    commentFaire: ["Utiliser l'eau du premier rinçage, fraîche, non salée.", "Au plus une fois toutes les 2-3 semaines, en alternance avec de l'eau claire.", "Arrêter si une moisissure ou une odeur apparaît."],
    sources: [S.media]
  },
  {
    id: "glacons-orchidees", titre: "Arroser les orchidées avec des glaçons", categorie: "arrosage", verdict: "nuance",
    resume: "Une étude des universités de l'Ohio et de Géorgie a montré que 3 glaçons par semaine n'abîment pas les Phalaenopsis en écorce. C'est une méthode pratique, mais pas meilleure qu'un trempage.",
    detail: "Les chercheurs ont comparé pendant plusieurs mois des orchidées arrosées avec trois glaçons par semaine et d'autres avec le même volume d'eau à température ambiante : pas de différence notable sur la durée de floraison, les feuilles ou les racines. L'intérêt des glaçons est de doser une petite quantité d'eau qui fond lentement, ce qui évite les arrosages excessifs. Les limites : la quantité est fixe quelle que soit la saison ou la taille du pot, et l'étude ne concerne que les Phalaenopsis en écorce. Les glaçons ne doivent pas toucher les feuilles ni les racines aériennes.",
    commentFaire: ["Poser 3 glaçons sur l'écorce, loin des feuilles, une fois par semaine.", "Adapter si les racines restent argentées longtemps (plus d'eau) ou vertes en permanence (moins).", "Pour un arrosage plus complet, préférer un trempage de 10-15 min tous les 7-10 jours."],
    sources: [S.osuGlace, S.hortGlace]
  },
  {
    id: "lait-biere-lustrer", titre: "Lait ou bière pour faire briller les feuilles", categorie: "nettoyage", verdict: "faux",
    resume: "Le lait et la bière laissent un film qui retient la poussière, peut sentir mauvais, attirer des moisissures et gêner la respiration de la feuille. Une microfibre humide suffit.",
    detail: "Le brillant obtenu vient des graisses, protéines ou sucres déposés sur la feuille. Ce dépôt bouche en partie les stomates, retient la poussière et peut se couvrir de moisissures ou de fumagine, surtout dans une pièce chaude. Les spécialistes recommandent simplement de l'eau claire (de préférence peu calcaire pour éviter les traces blanches). Une feuille propre est naturellement brillante chez les espèces à feuilles vernissées.",
    commentFaire: ["Essuyer avec une microfibre humidifiée à l'eau tiède peu calcaire.", "Soutenir la feuille par-dessous pour ne pas la casser.", "Sécher les traces de calcaire avec un chiffon sec si besoin."],
    sources: [S.guide]
  },
  {
    id: "huile-briller", titre: "Huile ou lustrant pour des feuilles brillantes", categorie: "nettoyage", verdict: "faux",
    resume: "Huile d'olive, huile de coco ou lustrants aérosols bouchent les pores, retiennent la poussière et peuvent brûler les feuilles au soleil. À éviter.",
    detail: "Les feuilles respirent et transpirent par leurs stomates, surtout au revers. Un film gras réduit ces échanges, colle la poussière et, sous une vitre ensoleillée, peut provoquer des brûlures. Les lustrants du commerce sont particulièrement déconseillés sur les jeunes feuilles, les feuilles velues et les succulentes. Le seul cas où une huile est utilisée volontairement est le traitement insecticide (huile de colza ou de paraffine émulsionnée), dosé et ponctuel, ce qui n'a rien à voir avec un lustrage.",
    commentFaire: ["Nettoyer à l'eau claire avec une microfibre.", "Rincer à la douche tiède les plantes à petites feuilles."],
    sources: [S.guide]
  },
  {
    id: "cannelle-fongicide", titre: "La cannelle comme fongicide naturel", categorie: "idee-recue", verdict: "nuance",
    resume: "La cannelle contient des composés antifongiques actifs en laboratoire, mais saupoudrée sur un pot elle ne remplace ni un substrat sain, ni un bon arrosage. Utile surtout pour sécher une petite plaie de coupe.",
    detail: "Le cinnamaldéhyde de la cannelle freine certains champignons en laboratoire, et quelques essais sur les fontes de semis montrent un effet partiel. Saupoudrée en surface d'un pot, la poudre agit peu en profondeur et ne corrige pas la cause des moisissures, qui est presque toujours un substrat trop humide et mal aéré. Sur une coupe de bouture ou une racine taillée, elle aide à sécher la plaie, comme le ferait le charbon de bois en poudre.",
    commentFaire: ["Sur une coupe de bouture ou de racine : tamponner légèrement de cannelle, laisser sécher.", "Contre la moisissure de surface : retirer la couche atteinte, laisser sécher le substrat, aérer ; la cannelle est un complément facultatif."],
    sources: [S.cannelle]
  },
  {
    id: "savon-noir", titre: "Le savon noir contre pucerons et cochenilles", categorie: "ravageurs", verdict: "vrai",
    resume: "Une solution de savon noir agit par contact sur les insectes à corps mou (pucerons, jeunes cochenilles, aleurodes). Il faut toucher les insectes et répéter le traitement.",
    detail: "Le savon dissout la couche protectrice des insectes à corps mou et les fait mourir par dessèchement. Il n'agit que par contact direct et n'a pas d'effet durable, d'où la nécessité de pulvériser sur toutes les faces et de répéter. Il est peu efficace sur les cochenilles adultes protégées par leur carapace ou leur cire, qu'il faut d'abord retirer mécaniquement. Utiliser un vrai savon noir liquide sans additifs, pas un liquide vaisselle parfumé ou dégraissant qui peut brûler les feuilles. Toujours tester sur une feuille et éviter le plein soleil après traitement.",
    commentFaire: ["Diluer environ 1 cuillère à soupe (15 ml) de savon noir liquide dans 1 litre d'eau tiède.", "Tester sur une feuille et attendre 24 h.", "Pulvériser le dessus et le dessous des feuilles et les tiges, à l'abri du soleil.", "Rincer à l'eau claire 1 à 2 jours plus tard pour éviter les dépôts.", "Renouveler tous les 5-7 jours pendant 3 semaines pour toucher les nouvelles générations."],
    sources: [S.aphids, S.mealy]
  },
  {
    id: "alcool-coton-tige", titre: "Alcool à 70° et coton-tige contre les cochenilles", categorie: "ravageurs", verdict: "vrai",
    resume: "Tamponner chaque cochenille avec un coton-tige imbibé d'alcool à 70° dissout leur protection cireuse et les tue. Efficace sur de petites infestations, à répéter.",
    detail: "Les cochenilles farineuses et à bouclier se protègent par une couche de cire ou une carapace qui résiste aux pulvérisations. L'alcool traverse cette protection. La méthode est minutieuse mais très sûre sur les plantes à feuilles coriaces (orchidées, hoyas, ficus, cactus). Sur les feuilles fines ou velues, tester d'abord sur une petite zone. Les œufs et les individus cachés dans les aisselles ou sur les racines échappent souvent au premier passage : il faut inspecter chaque semaine pendant un mois.",
    commentFaire: ["Isoler la plante.", "Tremper un coton-tige dans de l'alcool à 70° (ou alcool ménager dilué) et tamponner chaque cochenille.", "Retirer les amas avec le coton-tige.", "Essuyer les feuilles collantes à l'eau savonneuse.", "Recommencer chaque semaine jusqu'à disparition complète, en inspectant aisselles, revers et collet."],
    sources: [S.mealy, S.scale]
  },
  {
    id: "plantes-depolluantes", titre: "Les plantes dépolluent l'air de la maison (étude NASA)", categorie: "idee-recue", verdict: "nuance",
    resume: "L'étude NASA de 1989 a mesuré l'absorption de polluants en petites chambres closes. Dans une vraie pièce ventilée, il faudrait des centaines de plantes pour égaler l'effet d'une fenêtre ouverte.",
    detail: "L'étude de la NASA testait des plantes dans des chambres hermétiques de petite taille, où elles réduisaient effectivement certains composés organiques volatils, en grande partie grâce aux micro-organismes du substrat. Une revue de 2019 de Cummings et Waring a recalculé ces résultats à l'échelle d'un logement : l'aération naturelle renouvelle l'air bien plus vite que des plantes en pot, au point qu'il faudrait de 10 à 1000 plantes par mètre carré pour un effet comparable. Les plantes apportent en revanche des bienfaits démontrés sur l'humeur, le stress et le bien-être, comme le rappelle la RHS. Pour la qualité de l'air, la solution reste d'aérer 10 minutes par jour et de limiter les sources de pollution.",
    commentFaire: ["Aérer chaque jour, même en hiver.", "Choisir ses plantes pour le plaisir et le bien-être, pas pour purifier l'air."],
    sources: [S.nasaW, S.nasaRev, S.health, S.rusDep]
  },
  {
    id: "parler-aux-plantes", titre: "Parler aux plantes les fait mieux pousser", categorie: "idee-recue", verdict: "nuance",
    resume: "Aucune preuve solide qu'une voix ou une musique fasse pousser une plante d'intérieur. En revanche, la personne qui parle à ses plantes les observe plus souvent, et c'est cela qui les aide.",
    detail: "Quelques expériences ont rapporté des réactions de plantes aux vibrations sonores, mais les résultats sont peu reproductibles et ne concernent pas une conversation ordinaire. L'effet le plus réaliste est indirect : passer du temps près de ses plantes permet de repérer tôt une terre sèche, un ravageur ou une feuille qui jaunit. Le CO2 expiré en parlant est négligeable par rapport à celui de l'air ambiant.",
    commentFaire: ["Profiter du moment pour inspecter le revers des feuilles et toucher la terre."],
    sources: [S.guide]
  },
  {
    id: "eau-robinet-reposee", titre: "Laisser reposer l'eau du robinet avant d'arroser", categorie: "arrosage", verdict: "nuance",
    resume: "Une nuit dans un récipient ouvert laisse s'échapper le chlore et ramène l'eau à température ambiante, mais ne retire ni le calcaire ni la chloramine utilisée par certains réseaux.",
    detail: "Le chlore libre ajouté pour désinfecter l'eau est volatil et s'évapore en quelques heures dans un récipient à large ouverture. Certaines distributions utilisent de la chloramine, plus stable, qui ne part pas ainsi. Le calcaire, lui, reste dissous : c'est souvent lui qui provoque les croûtes blanches et les pointes brunes des plantes sensibles (calatheas, fougères, plantes carnivores). Pour ces plantes, l'eau de pluie, une eau filtrée sur carafe ou une eau peu minéralisée sont plus efficaces. Pour la majorité des plantes robustes, l'eau du robinet à température ambiante convient très bien.",
    commentFaire: ["Remplir un arrosoir ou une carafe à large ouverture la veille.", "Pour les plantes sensibles au calcaire, utiliser de l'eau de pluie ou filtrée.", "Rincer la motte à grande eau 2 fois par an si une croûte blanche apparaît."],
    sources: [S.guardEau, S.guide]
  },
  {
    id: "arroser-matin-soir", titre: "Arroser le matin ou le soir ?", categorie: "arrosage", verdict: "nuance",
    resume: "En intérieur, l'heure compte peu : ce qui compte, c'est d'arroser quand la terre en a besoin. Le matin reste un peu préférable pour que les feuilles mouillées sèchent dans la journée.",
    detail: "Dehors, arroser aux heures chaudes fait perdre de l'eau par évaporation et le soir peut favoriser les maladies si le feuillage reste mouillé la nuit. En appartement, la température varie peu et l'eau versée au pied n'est pas concernée. Le matin a deux petits avantages : la plante dispose de l'eau quand elle transpire le plus, et une goutte tombée au cœur d'une rosette (orchidée, broméliacée) sèche avant la nuit.",
    commentFaire: ["Vérifier la terre plutôt que l'heure.", "Arroser au pied, sans mouiller le cœur des rosettes.", "Si possible le matin pour les plantes sensibles aux maladies du feuillage."],
    sources: [S.guide]
  },
  {
    id: "bassiner-feuilles", titre: "Brumiser les feuilles pour augmenter l'humidité", categorie: "arrosage", verdict: "nuance",
    resume: "La brumisation ne relève l'humidité que quelques minutes. Elle rafraîchit et dépoussière, mais ne remplace pas un humidificateur ou un regroupement de plantes, et peut favoriser des taches sur certaines espèces.",
    detail: "Les fines gouttelettes s'évaporent vite dans un air chauffé : l'humidité autour de la plante revient à son niveau initial en peu de temps. Des brumisations fréquentes sont utiles aux plantes épiphytes (tillandsias, racines aériennes d'orchidées) et pour gêner les araignées rouges, mais elles sont déconseillées sur les feuilles velues (saintpaulias, bégonias à poils), les succulentes et les plantes sensibles à l'oïdium. Pour une humidité durable : humidificateur, plateau de billes d'argile humides sous le pot (sans contact avec l'eau), regroupement de plantes, salle de bain lumineuse.",
    commentFaire: ["Brumiser le matin à l'eau douce et tiède si vous le faites.", "Pour les plantes de forêt tropicale, préférer un plateau humide ou un humidificateur réglé vers 50-60 %.", "Ne pas brumiser feuilles velues, succulentes ni fleurs."],
    sources: [S.guide, S.mites]
  },
  {
    id: "billes-argile-fond", titre: "Une couche de billes d'argile au fond du pot pour le drainage", categorie: "rempotage", verdict: "nuance",
    resume: "Une couche grossière au fond ne fait pas descendre l'eau : elle remonte la zone saturée d'eau dans le terreau, plus près des racines. Le vrai drainage, c'est un trou au fond et un substrat aéré dans tout le pot.",
    detail: "La physique des sols explique qu'au fond d'un pot, le terreau reste gorgé d'eau sur une certaine hauteur (nappe perchée). Lorsqu'on ajoute des graviers ou des billes d'argile sous le terreau, l'eau ne passe dans cette couche grossière qu'une fois le terreau saturé : la zone détrempée est simplement déplacée vers le haut et la place disponible pour les racines diminue. La couche reste utile dans un cas : surélever le pot dans un cache-pot ou une soucoupe pour que la motte ne trempe pas dans l'eau d'écoulement. Les billes d'argile sont en revanche excellentes mélangées dans le substrat, ou en plateau humide sous le pot.",
    commentFaire: ["Toujours utiliser un pot percé.", "Mélanger perlite, pierre ponce ou billes d'argile dans tout le substrat plutôt qu'en couche au fond.", "Placer éventuellement quelques billes au fond du cache-pot pour surélever le pot de culture.", "Vider la soucoupe 15 minutes après l'arrosage."],
    sources: [S.guardGravier, S.gkhGravier, S.wsuMythes, S.media]
  },
  {
    id: "pot-sans-trou", titre: "Planter directement dans un pot sans trou", categorie: "rempotage", verdict: "faux",
    resume: "Sans trou, l'eau en excès s'accumule au fond et fait pourrir les racines. La bonne pratique est un pot de culture percé posé dans un cache-pot décoratif.",
    detail: "Dans un pot fermé, il est impossible de savoir combien d'eau stagne au fond, et l'eau ne peut pas emporter les sels d'engrais et le calcaire, qui s'accumulent. C'est l'une des premières causes de pourriture racinaire en intérieur. Quelques jardiniers expérimentés y parviennent avec des arrosages très mesurés, mais le risque est élevé. Un cache-pot permet de garder l'aspect décoratif tout en gardant le contrôle : on sort le pot pour arroser, on le laisse égoutter et on le remet en place.",
    commentFaire: ["Garder la plante dans son pot de culture percé.", "Le glisser dans un cache-pot légèrement plus grand.", "Après l'arrosage, vérifier au bout de 15 minutes qu'il ne reste pas d'eau au fond du cache-pot."],
    sources: [S.guide, S.jmRemp]
  },
  {
    id: "microfibre", titre: "Nettoyer les feuilles à la microfibre : quelles plantes, lesquelles jamais", categorie: "nettoyage", verdict: null,
    resume: "La poussière réduit la lumière captée par les feuilles. Une microfibre humide convient aux grandes feuilles lisses, mais jamais aux feuilles velues ni aux succulentes couvertes de pruine.",
    detail: "Les plantes à grandes feuilles lisses et coriaces (monstera, ficus caoutchouc, figuier lyre, philodendrons, zamioculcas, sansevieria, aspidistra, anthurium, strelitzia) gagnent à être essuyées toutes les 2 à 4 semaines. Les feuilles fines ou très découpées (fougères, palmiers à folioles, ficus benjamina) se nettoient mieux à la douche. Les feuilles velues ou duveteuses (saintpaulia, bégonia à poils, certains alocasias veloutés, Philodendron micans, Gynura) retiennent l'eau et se tachent : on les dépoussière au pinceau doux sec. Enfin, les succulentes recouvertes de pruine (echeverias, certains kalanchoes et sedums, Senecio) ne doivent jamais être frottées : la poudre bleutée qui les protège du soleil ne repousse pas.",
    commentFaire: ["Humidifier légèrement une microfibre propre à l'eau tiède peu calcaire.", "Soutenir la feuille d'une main, essuyer de la base vers la pointe, dessus puis dessous.", "Rincer la microfibre entre deux plantes pour ne pas transporter de ravageurs.", "Pinceau doux sec pour les feuilles velues ; rien pour les succulentes pruineuses."],
    sources: [S.guide, S.cact]
  },
  {
    id: "douche-tiede", titre: "La douche tiède pour les plantes d'intérieur", categorie: "nettoyage", verdict: "vrai",
    resume: "Une douche tiède 2 à 4 fois par an dépoussière, rince les ravageurs et réhydrate le feuillage. Idéale pour les plantes à petites ou nombreuses feuilles.",
    detail: "L'eau tiède emporte la poussière, une bonne partie des araignées rouges et des pucerons, et le miellat collant. C'est aussi l'occasion d'arroser à fond et de lessiver les sels accumulés dans la motte. Éviter l'eau chaude ou froide, et le jet puissant sur les feuilles fines. À éviter sur les succulentes pruineuses, les feuilles velues et les plantes en fleurs.",
    commentFaire: ["Couvrir la terre d'un sac ou d'un film si on ne veut pas la mouiller.", "Doucher à l'eau tiède (environ 25-30 °C) en jet doux, dessus et dessous des feuilles.", "Laisser égoutter dans la baignoire avant de remettre en place.", "Garder la plante hors du soleil direct le temps que les feuilles sèchent."],
    sources: [S.guide, S.mites]
  },
  {
    id: "meche-capillaire-vacances", titre: "La mèche capillaire pour les vacances", categorie: "vacances", verdict: "vrai",
    resume: "Une mèche reliant un réservoir d'eau à la terre du pot fournit de l'eau en continu par capillarité. La RHS la recommande pour les absences de plus d'une semaine.",
    detail: "Une mèche en tissu absorbant (feutre capillaire, cordon en coton ou acrylique, lacet) puise l'eau dans un récipient placé plus haut ou au même niveau que le pot et la diffuse dans la terre. Pour un groupe de petits pots, la RHS conseille aussi de les poser sur un tapis capillaire dont une extrémité trempe dans un évier ou une baignoire remplis. La méthode ne convient pas aux cactus et succulentes, qui supportent de toute façon 2 à 3 semaines sans eau.",
    commentFaire: ["Tester le système une semaine avant le départ.", "Humidifier la mèche puis enfoncer une extrémité de 5 cm dans la terre et plonger l'autre au fond d'une bouteille ou d'une bassine d'eau.", "Placer le réservoir au même niveau ou légèrement plus haut que le pot.", "Arroser normalement le jour du départ et éloigner les plantes des fenêtres ensoleillées."],
    sources: [S.hol]
  },
  {
    id: "bouteille-retournee", titre: "La bouteille retournée plantée dans le pot", categorie: "vacances", verdict: "nuance",
    resume: "Une bouteille d'eau plantée goulot vers le bas fournit de l'eau quelques jours, mais le débit est irrégulier : elle peut se vider en une nuit dans une terre légère ou ne pas couler dans une terre compacte.",
    detail: "Le débit dépend de la porosité de la terre et de la taille du goulot. Les cônes d'arrosage en terre cuite ou les pics à visser sur la bouteille régulent mieux l'écoulement. C'est une solution pour une absence courte (une semaine environ) et pour des pots assez grands. Toujours tester avant de partir.",
    commentFaire: ["Arroser la plante normalement avant d'installer la bouteille.", "Percer le bouchon d'un petit trou ou utiliser un cône d'arrosage en terre cuite.", "Enfoncer le goulot à quelques centimètres dans la terre humide.", "Vérifier la vitesse de vidage sur 2-3 jours avant le départ."],
    sources: [S.hol]
  },
  {
    id: "aspirine-eau-oxygenee", titre: "Aspirine et eau oxygénée pour soigner les plantes", categorie: "idee-recue", verdict: "nuance",
    resume: "L'aspirine n'a pas d'intérêt prouvé pour les plantes d'intérieur. L'eau oxygénée très diluée peut aider à assainir des racines après une pourriture, mais elle ne répare rien et trop concentrée elle brûle.",
    detail: "L'acide salicylique joue un rôle dans les défenses des plantes, ce qui a inspiré l'idée de l'aspirine dans l'eau des fleurs coupées ou des plantes. Les essais existants concernent surtout des cultures agricoles en conditions contrôlées ; pour une plante d'intérieur, aucun bénéfice clair n'est démontré et une dose mal choisie peut stresser la plante. L'eau oxygénée (peroxyde d'hydrogène) se décompose en eau et oxygène : diluée, elle est parfois utilisée pour rincer des racines après avoir coupé les parties pourries, ou contre les larves de sciarides. Elle ne remplace pas la vraie solution, qui est de corriger l'arrosage et le substrat.",
    commentFaire: ["Oublier l'aspirine pour les plantes en pot.", "Si vous utilisez l'eau oxygénée : produit à 3 %, dilué à environ 1 volume pour 4 volumes d'eau, en usage ponctuel.", "Après une pourriture : couper les racines molles, rincer, rempoter dans un substrat neuf et drainant."],
    sources: [S.guide, S.gnats]
  },
  {
    id: "cure-lumiere-hiver", titre: "La cure de lumière en hiver", categorie: "lumiere", verdict: "vrai",
    resume: "En hiver, la lumière naturelle baisse fortement : rapprocher les plantes des fenêtres et, si besoin, ajouter une lampe horticole LED évite l'étiolement et la chute des feuilles.",
    detail: "De novembre à février, les journées sont courtes et le soleil bas : une plante bien éclairée en été peut se retrouver en lumière faible au même endroit. On peut la rapprocher de la vitre (sans contact avec le verre froid), nettoyer les vitres et les feuilles, et éviter de la placer derrière un rideau épais. Une lampe LED horticole placée à 30-60 cm au-dessus du feuillage et allumée 10 à 12 heures par jour compense efficacement, comme l'explique la RHS. En même temps, on réduit l'arrosage et l'engrais car la croissance ralentit.",
    commentFaire: ["Rapprocher les plantes des fenêtres les plus lumineuses en octobre.", "Installer une LED horticole à 30-60 cm des feuilles, sur minuterie 10-12 h par jour.", "Réduire l'arrosage et supprimer l'engrais jusqu'en mars."],
    sources: [S.light, S.guide]
  },
  {
    id: "tourner-le-pot", titre: "Tourner le pot régulièrement", categorie: "lumiere", verdict: "vrai",
    resume: "Les plantes poussent vers la lumière. Un quart de tour toutes les 1 à 2 semaines garde une silhouette équilibrée, sauf pour les plantes en boutons.",
    detail: "Ce phénomène, appelé phototropisme, fait pencher la plante vers la fenêtre et dégarnit le côté opposé. Tourner le pot répartit la lumière. Exception : les plantes en formation de boutons (hoya, cactus de Noël, gardénia, orchidées dans une moindre mesure) peuvent laisser tomber leurs boutons si on les change d'orientation.",
    commentFaire: ["Faire une marque sur le pot pour suivre la rotation.", "Tourner d'un quart de tour dans le même sens toutes les 1-2 semaines.", "Ne pas tourner les plantes en boutons."],
    sources: [S.guide]
  },
  {
    id: "sciarides", titre: "Sciarides : sable en surface, pièges jaunes, nématodes", categorie: "ravageurs", verdict: "vrai",
    resume: "Les petites mouches noires qui volent autour des pots sont des sciarides. Elles pondent dans une terre humide : laisser sécher la surface, la couvrir de sable, piéger les adultes et traiter les larves aux nématodes ou au Bti.",
    detail: "Les adultes sont surtout gênants ; leurs larves vivent dans les premiers centimètres de terreau humide riche en matière organique et peuvent abîmer les boutures et les semis, rarement les plantes adultes, comme le rappelle la RHS. Le plus efficace est de couper leur cycle : laisser sécher davantage la surface, couvrir la terre d'1 à 2 cm de sable ou de gravier fin pour empêcher la ponte, piéger les adultes aux panneaux jaunes englués, et en cas de forte infestation arroser avec des nématodes Steinernema feltiae ou une bactérie Bti (Bacillus thuringiensis israelensis) qui tuent les larves.",
    commentFaire: ["Espacer les arrosages pour que les 2-3 premiers cm sèchent.", "Planter un piège jaune englué dans chaque pot touché.", "Couvrir la surface de 1-2 cm de sable, de gravier fin ou de pouzzolane.", "En cas de forte population, arroser avec des nématodes Steinernema feltiae ou un produit au Bti, selon la notice.", "Vider les soucoupes et retirer les débris végétaux en surface."],
    sources: [S.gnats]
  },
  {
    id: "araignees-rouges-humidite", titre: "Araignées rouges : l'humidité comme arme", categorie: "ravageurs", verdict: "vrai",
    resume: "Ces acariens minuscules prolifèrent dans l'air chaud et sec du chauffage. Douches, humidité plus élevée et acariens prédateurs en viennent à bout.",
    detail: "Les acariens Tetranychus urticae piquent les cellules des feuilles et provoquent une décoloration en fines marbrures claires, puis de fines toiles dans les cas graves. Ils se multiplient très vite au chaud et au sec. La RHS indique que les conditions chaudes, sèches et confinées favorisent les attaques. Augmenter l'humidité, doucher régulièrement le revers des feuilles et isoler la plante limitent la population. En lutte biologique, l'acarien prédateur Phytoseiulus persimilis est très efficace en intérieur.",
    commentFaire: ["Isoler la plante.", "Doucher à l'eau tiède en insistant sur le revers des feuilles, 1 fois par semaine pendant un mois.", "Augmenter l'humidité de l'air (humidificateur, regroupement, plateau humide).", "Pulvériser du savon noir dilué en complément, ou lâcher des acariens prédateurs.", "Vérifier à la loupe : petits points jaunâtres en mouvement au revers."],
    sources: [S.mites]
  },
  {
    id: "quarantaine", titre: "Mettre les nouvelles plantes en quarantaine", categorie: "ravageurs", verdict: "vrai",
    resume: "Beaucoup d'infestations arrivent avec une plante achetée. Deux à trois semaines à l'écart des autres permettent de repérer cochenilles, thrips ou sciarides avant qu'ils ne se propagent.",
    detail: "Les cochenilles, thrips et acariens sont souvent invisibles au moment de l'achat, à l'état d'œufs ou de larves. Isoler la plante dans une autre pièce ou à au moins 1-2 m des autres, l'inspecter chaque semaine et la doucher dès l'arrivée réduit fortement le risque de contaminer toute la collection.",
    commentFaire: ["Inspecter la plante en magasin : revers des feuilles, aisselles, collet, surface de la terre.", "À la maison, la doucher et la placer à l'écart 2 à 3 semaines.", "Contrôler chaque semaine à la loupe ; poser un piège jaune dans le pot.", "Ne l'intégrer aux autres qu'après ce délai sans signe suspect."],
    sources: [S.mealy, S.thrips]
  },
  {
    id: "pot-trop-grand", titre: "Rempoter dans un pot beaucoup plus grand", categorie: "rempotage", verdict: "faux",
    resume: "Un pot trop grand contient beaucoup de terre que les racines n'explorent pas : elle reste humide longtemps et provoque la pourriture. On augmente de 2 à 4 cm de diamètre à la fois.",
    detail: "La plante boit l'eau de la zone où se trouvent ses racines. Le reste de la terre d'un pot surdimensionné sèche très lentement, s'asphyxie et favorise les champignons et les sciarides. Les grands pots conviennent aux plantes vigoureuses en pleine croissance ; pour la plupart des plantes d'intérieur, le pot suivant doit être juste un peu plus large. Certaines plantes fleurissent même mieux à l'étroit (hoya, clivia, spathiphyllum, strelitzia).",
    commentFaire: ["Choisir un pot de 2 à 4 cm de diamètre de plus que l'ancien.", "Rempoter au printemps, quand les racines sortent du pot ou tournent au fond.", "Arroser modérément les premières semaines."],
    sources: [S.jmRemp, S.guide]
  },
  {
    id: "engrais-hiver", titre: "Mettre de l'engrais en hiver", categorie: "engrais-maison", verdict: "faux",
    resume: "En hiver, la plupart des plantes d'intérieur poussent très peu : l'engrais n'est pas absorbé, les sels s'accumulent et brûlent les racines. On arrête d'octobre à février.",
    detail: "La croissance dépend surtout de la lumière. En hiver, avec des journées courtes, la plante consomme peu et l'engrais apporté reste dans le pot. Les sels concentrés provoquent des pointes brunes et une croûte blanche. Exceptions : les plantes qui fleurissent en hiver (cyclamen, cactus de Noël, orchidées en boutons) et les plantes cultivées sous lampe horticole qui continuent à pousser, à demi-dose.",
    commentFaire: ["Arrêter l'engrais d'octobre à février pour les plantes vertes.", "Reprendre progressivement en mars avec les nouvelles pousses.", "Pour les plantes fleuries en hiver ou sous lampe, demi-dose une fois par mois."],
    sources: [S.guide]
  },
  {
    id: "bouture-eau", titre: "Bouturer dans un verre d'eau", categorie: "bouture", verdict: "vrai",
    resume: "Pothos, philodendrons, tradescantia, coleus et monstera racinent facilement dans l'eau, à condition que la bouture comporte un nœud. On les passe en terre quand les racines font 3 à 5 cm.",
    detail: "Les racines naissent au niveau des nœuds, la petite bosse d'où partent la feuille et souvent une racine aérienne. Une bouture de 10 à 15 cm avec un ou deux nœuds immergés et une ou deux feuilles hors de l'eau suffit. Changer l'eau chaque semaine évite le pourrissement. Les racines formées dans l'eau sont plus fragiles : une transition dans un terreau léger maintenu humide quelques semaines facilite la reprise. Les succulentes, en revanche, se bouturent mieux à sec.",
    commentFaire: ["Couper juste sous un nœud avec un outil propre.", "Retirer les feuilles qui tremperaient.", "Placer dans un verre d'eau à température ambiante, en lumière vive sans soleil.", "Changer l'eau chaque semaine.", "Planter en terreau léger quand les racines mesurent 3-5 cm, et garder humide 2-3 semaines."],
    sources: [S.cut, { titre: "Rustica : 4 plantes faciles à multiplier dans l'eau", url: "https://www.rustica.fr/actu-rustica/boutures-decouvrez-4-plantes-faciles-multiplier-dans-l-eau,21139.html" }]
  },
  {
    id: "bouture-succulentes", titre: "Laisser sécher les boutures de succulentes avant de les planter", categorie: "bouture", verdict: "vrai",
    resume: "Une bouture de cactus ou de succulente plantée fraîche pourrit souvent. On la laisse cicatriser à l'air quelques jours avant de la poser sur un substrat sec.",
    detail: "Les tissus gorgés d'eau des succulentes forment une porte d'entrée aux champignons tant que la plaie est fraîche. En laissant la coupe sécher de 2 jours (petites feuilles) à 2 semaines (grosses raquettes ou tiges de cactus), un cal se forme. Les racines apparaissent ensuite sur un substrat minéral à peine humide.",
    commentFaire: ["Couper proprement une tige ou détacher une feuille entière.", "Laisser à l'ombre et à l'air jusqu'à ce que la coupe soit sèche et ferme.", "Poser ou piquer sur un terreau cactées sec.", "Arroser légèrement seulement quand des racines apparaissent."],
    sources: [S.cact, { titre: "Jardiner Malin : Bouturage des succulentes", url: "https://www.jardiner-malin.fr/fiche/succulente-bouturage-ete.html" }]
  },
  {
    id: "test-du-doigt", titre: "Savoir quand arroser : doigt, baguette, poids du pot", categorie: "arrosage", verdict: null,
    resume: "Le calendrier fixe est la première cause d'excès d'eau. Vérifier la terre avant chaque arrosage, avec le doigt, une baguette en bois ou le poids du pot, est bien plus fiable.",
    detail: "Le besoin en eau change avec la saison, la lumière, la température, la taille du pot et le substrat. Le doigt enfoncé sur 2 à 5 cm renseigne sur la surface. Une baguette de bois (pique à brochette) enfoncée jusqu'au fond puis retirée ressort sombre et terreuse si la terre est encore humide, propre et claire si elle est sèche. Soupeser le pot juste après un arrosage puis quelques jours plus tard apprend vite à reconnaître un pot sec. Les humidimètres à aiguille donnent une indication (souvent sur une échelle de 1 à 10), mais ils mesurent la conductivité et sont faussés par l'engrais ou les substrats très minéraux.",
    commentFaire: ["Enfoncer un doigt ou une baguette en bois dans la terre.", "Comparer avec le besoin de la plante (sec, frais ou légèrement humide).", "Arroser abondamment jusqu'à écoulement, puis vider la soucoupe après 15 minutes.", "Attendre de nouveau que la terre atteigne le bon niveau de sécheresse."],
    sources: [S.guide]
  },
  {
    id: "rincer-la-motte", titre: "Rincer la motte pour éliminer le calcaire et les sels", categorie: "arrosage", verdict: null,
    resume: "Une croûte blanche sur la terre ou le pot signale une accumulation de calcaire ou d'engrais. Un rinçage à grande eau deux fois par an assainit le substrat.",
    detail: "À chaque arrosage, une partie des sels minéraux reste dans le pot. Avec le temps, ils brûlent les racines fines et provoquent des pointes brunes. Faire couler lentement un grand volume d'eau (environ trois fois le volume du pot) à travers la motte entraîne ces sels par les trous de drainage.",
    commentFaire: ["Gratter la croûte blanche en surface et la remplacer par du terreau neuf.", "Placer le pot dans l'évier ou la baignoire.", "Verser lentement environ trois fois le volume du pot en eau peu calcaire.", "Laisser égoutter complètement avant de remettre en place."],
    sources: [S.guide, S.media]
  }
  ];

  window.SYMPTOMES = [
  {
    id: "feuilles-jaunes-bas", signe: "Feuilles jaunes en bas de la plante", zone: "feuille",
    details: "Une ou plusieurs feuilles anciennes, situées à la base, jaunissent uniformément puis sèchent, alors que le haut reste vert.",
    causes: [
      { cause: "vieillissement naturel", indices: "une seule feuille à la fois, de temps en temps, la plante fait des feuilles neuves", solution: "retirer la feuille quand elle se détache facilement, rien d'autre à faire" },
      { cause: "excès d'eau", indices: "plusieurs feuilles à la fois, terre humide au toucher depuis longtemps, tiges parfois molles", solution: "laisser sécher davantage entre deux arrosages, vider soucoupe et cache-pot, vérifier les racines" },
      { cause: "manque d'azote", indices: "jaunissement progressif des vieilles feuilles, croissance lente, pas d'engrais depuis longtemps", solution: "engrais plantes vertes au printemps et en été, ou rempotage dans un terreau neuf" },
      { cause: "manque de lumière", indices: "plante loin de la fenêtre, tiges allongées", solution: "rapprocher d'une source lumineuse" }
    ],
    quandSInquieter: "si plusieurs feuilles jaunissent en même temps ou si le jaunissement gagne le haut de la plante",
    normal: "une vieille feuille du bas qui jaunit de temps en temps pendant que la plante produit de nouvelles feuilles"
  },
  {
    id: "feuilles-jaunes-partout", signe: "Feuilles jaunes un peu partout", zone: "plante-entiere",
    details: "Le jaunissement touche des feuilles jeunes et anciennes, parfois avec des tiges ramollies ou une terre qui sent mauvais.",
    causes: [
      { cause: "excès d'eau, asphyxie des racines", indices: "terre détrempée, soucoupe pleine, odeur de vase", solution: "dépoter, couper les racines brunes et molles, rempoter dans un substrat neuf et drainant, arroser moins souvent" },
      { cause: "froid ou courant d'air", indices: "plante près d'une fenêtre ouverte, d'une porte ou d'une vitre glacée", solution: "déplacer dans une zone stable au-dessus de 15 °C" },
      { cause: "changement brutal d'environnement", indices: "plante récemment achetée ou déplacée", solution: "laisser la plante s'adapter quelques semaines sans modifier les soins" },
      { cause: "ravageurs piqueurs (araignées rouges, thrips)", indices: "feuilles piquetées, toiles ou points argentés au revers", solution: "voir les fiches araignées rouges et thrips" }
    ],
    quandSInquieter: "dès que plusieurs feuilles jaunissent rapidement : vérifier la terre et les racines sans attendre",
    normal: "une perte de quelques feuilles après un déménagement ou à l'achat"
  },
  {
    id: "feuilles-jaunes-nervures-vertes", signe: "Feuilles jaunes aux nervures restées vertes", zone: "feuille",
    details: "Les jeunes feuilles jaunissent entre les nervures, qui restent bien vertes et dessinent un réseau (chlorose).",
    causes: [
      { cause: "carence en fer, souvent bloquée par une eau calcaire", indices: "jeunes feuilles touchées en premier, arrosage à l'eau dure, plante acidophile (gardénia, azalée, agrumes)", solution: "arroser à l'eau de pluie ou filtrée, engrais avec fer chélaté, rempoter en terreau adapté" },
      { cause: "carence en magnésium", indices: "vieilles feuilles touchées en premier", solution: "engrais complet contenant du magnésium, pendant la saison de pousse" },
      { cause: "racines abîmées qui absorbent mal", indices: "terre détrempée ou pot très serré", solution: "contrôler les racines, corriger l'arrosage" }
    ],
    quandSInquieter: "si la chlorose s'étend malgré un changement d'eau et d'engrais",
    normal: "certaines variétés panachées ont naturellement des zones claires entre les nervures"
  },
  {
    id: "pointes-brunes", signe: "Pointes et bords des feuilles bruns et secs", zone: "feuille",
    details: "L'extrémité ou le bord des feuilles devient brun, sec et cassant, la limite avec la partie verte est souvent nette.",
    causes: [
      { cause: "air trop sec", indices: "plante tropicale près d'un radiateur, en hiver", solution: "humidificateur, regroupement de plantes, plateau humide, éloigner de la source de chaleur" },
      { cause: "eau calcaire, chlorée ou fluorée", indices: "plantes sensibles (calathea, chlorophytum, dracaena, palmiers), croûte blanche sur la terre", solution: "eau de pluie ou filtrée, rinçage de la motte" },
      { cause: "excès d'engrais", indices: "engrais fréquent, croûte blanche, pointes brunes sur plusieurs feuilles", solution: "rincer la motte, réduire la dose" },
      { cause: "arrosages irréguliers", indices: "terre qui sèche complètement entre des arrosages copieux", solution: "arroser plus régulièrement dès que le niveau de sécheresse adapté est atteint" }
    ],
    quandSInquieter: "si les pointes brunes progressent vite vers la base des feuilles",
    normal: "quelques pointes brunes anciennes sur une plante qui pousse bien ; on peut les recouper en laissant un fin liseré brun"
  },
  {
    id: "taches-brunes-molles", signe: "Taches brunes ou noires molles", zone: "feuille",
    details: "Taches sombres, humides, parfois translucides, qui s'étendent vite ; souvent associées à des tiges molles à la base.",
    causes: [
      { cause: "pourriture liée à l'excès d'eau", indices: "terre détrempée, taches qui partent de la base ou du collet", solution: "réduire l'arrosage, dépoter, couper les parties pourries, rempoter au sec" },
      { cause: "maladie bactérienne ou fongique", indices: "eau stagnante sur les feuilles, air confiné, taches qui s'étendent", solution: "couper les feuilles atteintes avec un outil désinfecté, ne plus mouiller le feuillage, aérer" },
      { cause: "froid", indices: "plante contre une vitre glacée ou transportée par temps froid", solution: "éloigner du froid ; les zones gelées ne se réparent pas" }
    ],
    quandSInquieter: "toujours : une tache molle qui grandit doit être traitée rapidement",
    normal: "aucun cas : une tache molle n'est jamais normale"
  },
  {
    id: "taches-halo-jaune", signe: "Taches brunes entourées d'un halo jaune", zone: "feuille",
    details: "Petites taches brunes ou noires bien délimitées, bordées d'un anneau jaune, parfois en grand nombre.",
    causes: [
      { cause: "maladie fongique ou bactérienne des feuilles", indices: "feuillage souvent mouillé, brumisations fréquentes, air peu renouvelé", solution: "retirer les feuilles atteintes, arroser au pied uniquement, aérer, espacer les plantes" },
      { cause: "excès d'eau prolongé", indices: "terre mouillée en permanence", solution: "corriger l'arrosage et le drainage" }
    ],
    quandSInquieter: "si les taches se multiplient sur les nouvelles feuilles",
    normal: "aucun"
  },
  {
    id: "trous-feuilles", signe: "Trous dans les feuilles", zone: "feuille",
    details: "Trous irréguliers, bords grignotés ou rongés, parfois traces de bave argentée ou petites crottes.",
    causes: [
      { cause: "chenilles ou limaces (plante sortie en extérieur)", indices: "plante passée l'été dehors, traces de mucus, crottes noires", solution: "inspecter le soir et le revers des feuilles, retirer à la main, vérifier la terre avant de rentrer la plante" },
      { cause: "dégât mécanique", indices: "déchirures nettes après un choc, un animal ou un déplacement", solution: "rien à faire, la feuille ne se répare pas" },
      { cause: "zones mortes d'anciennes taches qui tombent", indices: "trous bordés de brun", solution: "voir les causes des taches brunes" }
    ],
    quandSInquieter: "si de nouveaux trous apparaissent chaque jour",
    normal: "les trous et découpes réguliers du monstera ou du Monstera adansonii sont naturels"
  },
  {
    id: "fenestration-monstera", signe: "Feuilles percées ou découpées naturellement (monstera)", zone: "feuille",
    details: "Trous ovales réguliers et découpes profondes symétriques sur des feuilles saines, vertes et lisses.",
    causes: [
      { cause: "fenestration, caractère naturel de l'espèce", indices: "feuilles adultes de Monstera deliciosa ou M. adansonii, bords des trous verts et sains", solution: "rien à faire, c'est un signe de plante adulte et bien éclairée" }
    ],
    quandSInquieter: "jamais pour ces trous réguliers ; s'inquiéter au contraire si les nouvelles feuilles d'une plante adulte restent pleines (manque de lumière)",
    normal: "les jeunes feuilles sont entières, les découpes viennent avec l'âge, la lumière et un tuteur"
  },
  {
    id: "toile-fine", signe: "Fines toiles et feuilles piquetées", zone: "feuille",
    details: "Feuilles ternes couvertes de minuscules points clairs, parfois fines toiles entre les pétioles ; au revers, poussière qui bouge à la loupe.",
    causes: [
      { cause: "araignées rouges (acariens Tetranychus)", indices: "air chaud et sec, hiver avec chauffage, plantes sensibles (calathea, alocasia, palmiers, lierre, croton)", solution: "isoler, doucher le revers des feuilles chaque semaine, augmenter l'humidité, savon noir dilué ou acariens prédateurs Phytoseiulus persimilis" }
    ],
    quandSInquieter: "dès les premiers piquetages : la population double en quelques jours au chaud",
    normal: "une toile isolée d'une vraie araignée dans un coin n'a rien à voir avec ces acariens"
  },
  {
    id: "coton-blanc", signe: "Petits amas de coton blanc", zone: "tige",
    details: "Flocons cotonneux blancs à l'aisselle des feuilles, sur les tiges ou au revers, parfois avec du collant.",
    causes: [
      { cause: "cochenilles farineuses", indices: "sous la cire, insectes ovales rosés de 2-4 mm ; fréquentes sur orchidées, cactus, succulentes, hoyas", solution: "isoler, tamponner chaque amas d'alcool à 70° au coton-tige, puis savon noir ; répéter chaque semaine un mois ; inspecter les racines au rempotage" }
    ],
    quandSInquieter: "dès le premier amas, car elles se cachent et se multiplient vite",
    normal: "aucun, à distinguer d'une moisissure blanche sur la terre"
  },
  {
    id: "boucliers-bruns", signe: "Petits boucliers bruns sur les tiges et le revers des feuilles", zone: "tige",
    details: "Petites bosses brunes ou beiges, rondes ou ovales, fixées le long des nervures et des tiges, qui se détachent à l'ongle.",
    causes: [
      { cause: "cochenilles à bouclier ou lécanines", indices: "feuilles collantes, fumagine noire, plantes coriaces (ficus, palmiers, agrumes, schefflera, olivier)", solution: "gratter à l'ongle ou au coton-tige imbibé d'alcool, nettoyer à l'eau savonneuse, répéter ; les sores des fougères ne se détachent pas, eux" }
    ],
    quandSInquieter: "si les boucliers sont nombreux ou que la plante devient collante",
    normal: "sur les fougères, des points bruns réguliers au revers sont des sores (organes de reproduction)"
  },
  {
    id: "collant-miellat", signe: "Feuilles ou meuble collants, suie noire", zone: "feuille",
    details: "Pellicule brillante et collante sur les feuilles ou sur le sol sous la plante, parfois recouverte d'un dépôt noir (fumagine).",
    causes: [
      { cause: "miellat d'insectes piqueurs (cochenilles, pucerons, aleurodes)", indices: "insectes visibles sur les feuilles situées au-dessus des zones collantes", solution: "traiter les insectes, puis laver les feuilles à l'eau savonneuse pour éliminer le miellat et la fumagine" },
      { cause: "nectar naturel des fleurs", indices: "hoya en fleurs, gouttes sous les ombelles", solution: "normal, protéger le meuble" }
    ],
    quandSInquieter: "si aucune fleur n'explique le collant : chercher les insectes",
    normal: "les gouttes sucrées sous les fleurs de hoya"
  },
  {
    id: "points-argentes-thrips", signe: "Zones argentées avec petits points noirs", zone: "feuille",
    details: "Plages gris argenté sur le dessus des feuilles, parsemées de minuscules points noirs (excréments) ; jeunes feuilles parfois déformées.",
    causes: [
      { cause: "thrips", indices: "insectes allongés de 1-2 mm, clairs (larves) ou bruns, visibles en secouant la plante au-dessus d'une feuille blanche", solution: "isoler, doucher, savon noir répété chaque semaine, panneaux englués bleus ou jaunes, acariens prédateurs Amblyseius" }
    ],
    quandSInquieter: "dès qu'on les repère, car ils se propagent aux plantes voisines",
    normal: "aucun"
  },
  {
    id: "petites-mouches", signe: "Petites mouches noires autour des pots", zone: "terre",
    details: "Moucherons de 3-4 mm qui volent lentement ou courent sur la terre, surtout après l'arrosage.",
    causes: [
      { cause: "sciarides (mouches des terreaux)", indices: "terre souvent humide, riche en matière organique ; larves blanches à tête noire dans les premiers cm", solution: "laisser sécher la surface, sable ou gravier fin en surface, pièges jaunes, nématodes Steinernema feltiae ou Bti en arrosage" },
      { cause: "mouches des fruits", indices: "mouches aux yeux rouges près de la corbeille de fruits ou de la poubelle", solution: "sans lien avec les plantes : supprimer la source sucrée" }
    ],
    quandSInquieter: "sur des boutures et des semis, que les larves peuvent abîmer",
    normal: "quelques individus de passage ; les plantes adultes ne sont pas menacées"
  },
  {
    id: "feuilles-qui-tombent", signe: "Feuilles qui tombent", zone: "plante-entiere",
    details: "Chute de feuilles vertes ou jaunissantes, parfois massive en quelques jours.",
    causes: [
      { cause: "changement d'emplacement ou de lumière", indices: "ficus, croton ou schefflera récemment déplacés ou achetés, début d'automne", solution: "trouver une place lumineuse définitive et ne plus bouger la plante" },
      { cause: "courant d'air froid ou chaud", indices: "près d'une porte, d'une fenêtre ouverte ou d'un radiateur", solution: "déplacer à l'abri" },
      { cause: "excès ou manque d'eau", indices: "terre détrempée ou totalement sèche", solution: "corriger l'arrosage" },
      { cause: "manque de lumière en hiver", indices: "plante loin de la fenêtre, jours courts", solution: "rapprocher de la vitre, lampe horticole" }
    ],
    quandSInquieter: "si la chute continue plus de 3-4 semaines après avoir stabilisé les conditions",
    normal: "quelques feuilles perdues après un achat ou un déménagement, ou en début d'hiver chez le ficus"
  },
  {
    id: "feuilles-pendent-molles", signe: "Feuilles qui pendent, molles", zone: "plante-entiere",
    details: "La plante s'affaisse, les feuilles et les tiges perdent leur fermeté.",
    causes: [
      { cause: "manque d'eau", indices: "terre sèche, pot léger, motte qui se décolle du bord", solution: "arroser abondamment ou faire tremper le pot 15 min ; la plante se redresse en quelques heures" },
      { cause: "excès d'eau et racines pourries", indices: "terre détrempée, odeur, base des tiges molle ; la plante ne se redresse pas après arrosage", solution: "ne surtout pas arroser : dépoter, couper les racines brunes, rempoter au sec" },
      { cause: "chaleur ou soleil trop fort", indices: "flétrissement aux heures chaudes, plante près d'une vitre", solution: "ombrer, rafraîchir la pièce" }
    ],
    quandSInquieter: "si la plante reste molle alors que la terre est humide",
    normal: "le spathiphyllum et le fittonia s'affaissent spectaculairement à la moindre soif puis se redressent vite"
  },
  {
    id: "feuilles-enroulent", signe: "Feuilles qui s'enroulent ou se recroquevillent", zone: "feuille",
    details: "Les feuilles se roulent sur elles-mêmes ou se recourbent, parfois avec des bords secs ou des déformations.",
    causes: [
      { cause: "soif ou air trop sec", indices: "calathea, maranta, strelitzia ; terre sèche, radiateur proche", solution: "arroser, augmenter l'humidité" },
      { cause: "trop de lumière ou de chaleur", indices: "feuilles enroulées côté fenêtre, après une journée chaude", solution: "éloigner du soleil direct" },
      { cause: "ravageurs (thrips, pucerons, acariens)", indices: "jeunes feuilles déformées, points ou insectes au revers", solution: "inspecter à la loupe et traiter" },
      { cause: "froid", indices: "plante près d'une vitre froide", solution: "déplacer au chaud" }
    ],
    quandSInquieter: "si les feuilles enroulées sèchent ou se déforment",
    normal: "les feuilles de calathea et de maranta qui se relèvent ou se replient la nuit"
  },
  {
    id: "etiolement", signe: "Tiges qui s'allongent, plante qui se dégarnit", zone: "tige",
    details: "Entre-nœuds très longs, feuilles plus petites et plus pâles, plante qui penche vers la fenêtre ; succulentes qui s'étirent et s'ouvrent.",
    causes: [
      { cause: "étiolement par manque de lumière", indices: "plante loin de la fenêtre, en hiver, côté nord", solution: "rapprocher de la lumière ou ajouter une lampe horticole, tourner le pot ; tailler les parties étiolées au printemps" },
      { cause: "excès d'engrais azoté en période sombre", indices: "engrais donné en hiver", solution: "arrêter l'engrais en hiver" }
    ],
    quandSInquieter: "si les nouvelles pousses sont de plus en plus pâles",
    normal: "les lianes (pothos, philodendron) qui s'allongent sans se dégarnir quand elles sont bien éclairées"
  },
  {
    id: "moisissure-blanche-terre", signe: "Moisissure blanche ou duvet sur la terre", zone: "terre",
    details: "Duvet blanc ou grisâtre, ou taches farineuses à la surface du terreau, surtout dans un pot récemment rempoté.",
    causes: [
      { cause: "champignons saprophytes favorisés par l'humidité", indices: "terre humide en permanence, air confiné, terreau riche en matière organique", solution: "gratter la couche atteinte, laisser sécher la surface, aérer, espacer les arrosages" },
      { cause: "matière organique en décomposition", indices: "marc de café, peau de banane ou débris en surface", solution: "retirer les déchets organiques des pots" }
    ],
    quandSInquieter: "si la moisissure s'accompagne d'une odeur de pourri ou de tiges molles",
    normal: "un léger voile blanc passager après un rempotage dans un terreau neuf, sans gravité pour la plante"
  },
  {
    id: "croute-blanche", signe: "Croûte blanche sur la terre ou le pot", zone: "terre",
    details: "Dépôt dur, blanc ou jaunâtre, cristallin, sur la terre ou le bord du pot, ne s'étale pas comme une moisissure.",
    causes: [
      { cause: "calcaire de l'eau d'arrosage", indices: "eau dure, traces blanches sur la vaisselle", solution: "gratter et remplacer la surface, arroser à l'eau peu calcaire" },
      { cause: "excès d'engrais", indices: "engrais fréquent, pointes brunes", solution: "rincer la motte à grande eau, réduire l'engrais" }
    ],
    quandSInquieter: "si les feuilles brunissent en même temps",
    normal: "un léger dépôt sur un pot en terre cuite, qui est poreux, est courant"
  },
  {
    id: "odeur-pourri", signe: "Odeur de pourri ou de vase", zone: "racines",
    details: "Le pot dégage une odeur de vase, d'œuf pourri ou de moisi ; racines brunes, molles, qui se détachent en lambeaux.",
    causes: [
      { cause: "pourriture racinaire (manque d'oxygène, champignons)", indices: "terre détrempée, pot sans trou ou cache-pot plein d'eau, plante qui flétrit malgré l'eau", solution: "dépoter, couper toutes les racines brunes et molles, rincer, laisser sécher quelques heures, rempoter dans un substrat neuf drainant et un pot propre, arroser très peu au début" },
      { cause: "déchets organiques en décomposition dans le pot", indices: "peau de banane, marc, eau de cuisson utilisés", solution: "retirer et renouveler la surface" }
    ],
    quandSInquieter: "toujours, il faut agir vite",
    normal: "une légère odeur de sous-bois d'un terreau humide sain"
  },
  {
    id: "brulures-soleil", signe: "Brûlures de soleil", zone: "feuille",
    details: "Plages beiges, blanchies ou brun clair, sèches et papyracées, sur les feuilles les plus exposées côté fenêtre.",
    causes: [
      { cause: "soleil direct derrière une vitre", indices: "plante d'ombre déplacée vers une fenêtre sud ou ouest, ou sortie brutalement au soleil", solution: "déplacer ou voiler la fenêtre ; acclimater progressivement les plantes de soleil ; couper les parties trop abîmées" },
      { cause: "gouttes d'eau faisant loupe", indices: "taches rondes après brumisation au soleil", solution: "brumiser seulement à l'ombre ou le matin" }
    ],
    quandSInquieter: "si les brûlures continuent d'apparaître après le déplacement",
    normal: "les cicatrices anciennes restent visibles, mais ne s'étendent pas"
  },
  {
    id: "guttation", signe: "Gouttes d'eau au bout des feuilles", zone: "feuille",
    details: "Gouttelettes claires perlant à la pointe ou sur le bord des feuilles, surtout le matin ou après un arrosage.",
    causes: [
      { cause: "guttation, phénomène naturel", indices: "monstera, alocasia, philodendron, graminées ; terre bien humide, air humide, nuit fraîche", solution: "rien à faire ; si elle est permanente, espacer légèrement les arrosages ; essuyer si un animal lèche les gouttes chez les aracées" }
    ],
    quandSInquieter: "seulement si elle s'accompagne de feuilles jaunes et d'une terre détrempée",
    normal: "oui : la plante expulse un surplus d'eau par des pores spéciaux (hydathodes)"
  },
  {
    id: "feuilles-pales-decolorees", signe: "Feuilles pâles ou décolorées", zone: "feuille",
    details: "Les feuilles perdent leur vert intense, deviennent vert clair, jaunâtres ou délavées, ou une panachure disparaît.",
    causes: [
      { cause: "trop de lumière directe", indices: "plante d'ombre près d'une fenêtre ensoleillée, motifs qui s'effacent", solution: "placer plus loin de la vitre" },
      { cause: "manque de lumière", indices: "panachure qui disparaît, feuilles toutes vertes et petites", solution: "rapprocher de la lumière" },
      { cause: "carence nutritive", indices: "pas d'engrais ni de rempotage depuis plus d'un an", solution: "engrais au printemps, rempotage" }
    ],
    quandSInquieter: "si la décoloration touche toutes les nouvelles feuilles",
    normal: "les variétés panachées qui font parfois une feuille plus verte"
  }
  ];
})();
