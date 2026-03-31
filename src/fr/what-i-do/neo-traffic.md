---
layout: project.njk
projectTitle: "Neo Traffic"
metaTitle: "Neo Traffic - Valentin Dufois"
metaDescription: "Neo-Traffic: projets pour le réseau publicitaire incluant site web, plateforme Ad-Direct, et systèmes de contenu dynamique."
---

Neo-Traffic est un diffuseur de contenu publicitaire statique et dynamique présent sur l'ensemble du territoire Canadien. Son réseau d'écrans se déploie dans plus d'une centaine de centres commerciaux, dans des stations essence et dans des salles de sport. Un dispositif d'une telle envergure nécessite une infrastructure stable et des outils permettant de simplifier le travail des collaborateurs.

## Site-web

En 2016, Neo-Traffic a décidé de faire une refonte complète de son site web, jusqu'alors implémentée en Java. Cette refonte a eu pour but d'apporter une meilleure facilité d'utilisation du site et une présentation exhaustive des produits et marchés de Neo-Traffic. Un autre aspect de cette refonte était de permettre aux collaborateurs de mettre à jour les informations sans avoir besoin de faire appel à un développeur.

<figure>
  <img class="full-width-image" loading="lazy" src="/works/neo-traffic/neo.web.home.png" alt="Neo-Traffic website homepage">
  <figcaption>Page d'accueil du site <a href="https://neo-traffic.com">neo-traffic.com</a>.</figcaption>
</figure>

Afin de répondre aux besoins de Neo-Traffic, j'ai utilisé le CMS Bolt comme base pour le site. Bolt permet de définir clairement le type de contenu de chaque type de page, et propose une interface adaptée aux utilisateurs souhaitant insérer du contenu. De cette manière, les collaborateurs responsables du maintien du site sont aujourd'hui entièrement autonomes dans la gestion des informations présentées.

<figure>
  <img class="full-width-image" loading="lazy" src="/works/neo-traffic/neo.web.markets.png" alt="Neo-Traffic interactive markets map">
  <figcaption>Une carte interactive permet de découvrir facilement tous les marchés où est présent le réseau de Neo-Traffic.</figcaption>
</figure>

Dans le but de fournir à leurs clients et potentiels clients des informations précises sur les centres commerciaux dans lesquels Neo-Traffic est présent, un collaborateur avait pour mission de garder à jour un ensemble de documents PDF, un par centre, contenant un résumé des installations de Neo dans ce centre ainsi que des statistiques. Ces documents, en raison de leur nombre, étaient compliqués à garder à jour, et difficile d'accès. Le nouveau site web est venu répondre à cette problématique en référençant directement les informations de chaque centre dans sa base de données. De cette manière, le site est devenu l'unique source de vérité sur les statistiques des centres, tout en facilitant l'accès à ces informations. L'utilisation du framework mPDF permet par ailleurs de générer des PDF de chaque fiche à la demande. Plusieurs autres sections du site font d'ailleurs appel à mPDF pour distribuer des informations.

<div class="images-row">
  <figure>
    <img loading="lazy" src="/works/neo-traffic/neo.web.mall-sheet.png" alt="Neo-Traffic auto-generated mall PDF">
    <figcaption>Fiche PDF générée automatiquement à la demande, présentant succinctement un centre commercial.</figcaption>
  </figure>
  <figure>
    <img loading="lazy" src="/works/neo-traffic/neo.web.products-list.png" alt="Neo-Traffic products list document">
    <figcaption>Ce document présente les détails d'implantation de Neo-Traffic dans chaque centre commercial.</figcaption>
  </figure>
</div>

Le site de Neo-Traffic permet ainsi de présenter un grand nombre d'informations au travers d'une interface claire et épurée. Une couleur associée à chaque catégorie permet de simplifier la navigation, et un plan du site dans le pied de page offre permet une navigation efficiente et rapide.

## Ad-Direct

En 2016, l'intégralité de la planification des contenus publicitaires sur le réseau de Neo-Traffic se faisait manuellement. Qu'il s'agisse d'une simple annonce spécifique à un unique centre commercial, ou une campagne nationale, chaque publicité devait être planifiée à la main par les collaborateurs de Neo-Traffic. Le souhait était alors de mettre en place un dispositif permettant d'automatiser une partie de ce dispositif. La transmission des contenus publicitaires des clients vers Neo-Traffic ayant toujours été la partie la plus prône aux erreurs, il a été décidé de se concentrer sur celle-ci, donnant naissance à la plateforme Ad-Direct.

<div class="images-row">
  <figure>
    <img loading="lazy" src="/works/neo-traffic/neo.addirect.campaign.png" alt="Ad-Direct campaign view">
    <figcaption>Une campagne sur Ad-Direct.</figcaption>
  </figure>
  <figure>
    <img loading="lazy" src="/works/neo-traffic/neo.addirect.campaign2.png" alt="Ad-Direct creative ready for broadcast">
    <figcaption>Une affiche prête pour la diffusion dans une campagne.</figcaption>
  </figure>
</div>

Ad-Direct est une plateforme de gestion de campagne publicitaire et de diffusion de contenu dynamique: photos ou vidéos. Les collaborateurs de Neo-Traffic utilisent la plateforme pour gérer des comptes clients et des campagnes de diffusions. Chaque client à accès aux campagnes qui le concerne, et peut y placer lui-même le contenu qu'il souhaite diffuser au travers d'un simple glisser-déposer. Les collaborateurs de Neo n'ont plus qu'à approuver le contenu uploadé pour que celui-ci commence automatiquement sa diffusion. La diffusion se fait au travers d'un fichier de diffusion. Chaque campagne possède son propre fichier de diffusion, valable pour l'entièreté de sa durée de vie. Ainsi, il n'y a qu'un unique fichier à planifier, peu importe la taille ou la durée de la campagne. De plus, les fichiers d'affichage sont capables de s'adapter à chaque format d'écran utilisé dans le réseau de Neo-Traffic automatiquement.

<div class="images-row">
  <figure>
    <img loading="lazy" src="/works/neo-traffic/neo.addirect.supports.png" alt="Ad-Direct display format support">
    <figcaption>Ad-Direct supporte tout type de format d'affichage qu'il est possible de personnaliser selon les besoins.</figcaption>
  </figure>
  <figure>
    <img loading="lazy" src="/works/neo-traffic/neo.addirect.params.png" alt="Ad-Direct configuration options">
    <figcaption>Ad-Direct offre de nombreuses options de personnalisation et de paramétrage pour les équipes de Neo-Traffic.</figcaption>
  </figure>
</div>

Ce dispositif permet de laisser les clients choisir eux-mêmes leurs dates de diffusion pour chaque élément de la campagne, ainsi que l'ordre de diffusion. Cette liberté donnée aux clients est cependant encadrée par un système d'approbation des modifications permettant d'assurer la qualité du contenu diffusé. La mise en place de ce dispositif à permis de grandement simplifier le travail des collaborateurs jusqu'alors responsables de la réception et de la planification de chaque élément.

Après plus de quatre ans de fonctionnement, Ad-Direct a affiché du contenu publicitaire plus de 60 millions de fois, démontrant la robustesse et l'efficacité de ce système conçues entièrement en PHP pour l'interface et en JavaScript pour le fichier d'affichage.<br>
Les retours des utilisateurs sont positifs et montrent une réelle satisfaction aussi bien de la part des clients que des collaborateurs de Neo-Traffic.

## Dynamics

En plus du contenu publicitaire, Neo-Traffic utilise son réseau d'écrans pour proposer du contenu informatif, tel que la météo, les informations, et bientôt la bourse. Ces contenus dynamiques utilisent des informations d'API publics et privés pour offrir aux chalands des informations fiables et pertinentes. La gestion des Dynamics se fait au travers d'un tableau de bord spécifique, permettant d'ajuster leurs paramètres.

<div class="images-row">
  <figure>
    <img loading="lazy" src="/works/neo-traffic/neo.dynamics.weather-url.png" alt="Dynamics dashboard URL generator">
    <figcaption>Le tableau de bord des Dynamics permet aux équipes de Neo-Traffic de générer des URL de diffusion très simplement.</figcaption>
  </figure>
  <figure>
    <img loading="lazy" src="/works/neo-traffic/neo.dynamics.news-backgrounds.png" alt="Dynamics background customization">
    <figcaption>Il est possible de modifier les arrière-plans des Dynamics en quelques clics seulement.</figcaption>
  </figure>
</div>

Le tableau de bord et les Dynamics fonctionnent avec le framework React.JS et se basent sur une API en Laravel pour la récupération des données. Un pipeline de déploiement basé sur des hooks Git permet de publier une mise à jour en quelques secondes, sans aucune perturbation dans la diffusion.

<figure>
  <img class="full-width-image" loading="lazy" src="/works/neo-traffic/neo.weather.fcl.png" alt="Weather dynamic on food court screens">
  <figcaption>Le Weather Dynamic tel qu'il apparaît sur les écrans doubles.</figcaption>
</figure>

Le Weather Dynamic propose un affichage de la météo locale, des prévisions à trois ou cinq jours, et de la météo nationale, en français et en anglais. Le tableau de bord permet de contrôler les arrières plans affichés par le dynamique, et même de spécifier des arrière-plans propres à certaines provinces et villes. Les collaborateurs en charge des Dynamics sont libres de les modifier comme bon leur semble.

<figure>
  <img class="full-width-image" loading="lazy" src="/works/neo-traffic/neo.news.shd.png" alt="News dynamic on single screen">
  <figcaption>Le News Dynamic dans sa disposition pour un seul écran.</figcaption>
</figure>

Le News Dynamic permet la diffusion de titres d'articles de la Presse Canadienne classés par différentes catégories. Ces informations sont mises à jour régulièrement au travers d'un FTP dont les données sont parcourues et mises en cache automatiquement par l'API, limitant le nombre d'accès aux informations.

Les Dynamics sont conçus pour s'adapter aux différents supports et contextes d'affichage de Neo-Traffic. Ceci assure une intégration parfaite de chaque Dynamic dans son environnement.
