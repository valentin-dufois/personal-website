---
layout: project.njk
projectTitle: "Connect"
metaTitle: "Connect - Valentin Dufois"
metaDescription: "Connect: une plateforme que j'ai conçue et construite en tant que seul ingénieur chez NEO-OOH (Québecor Media) pendant quatre ans."
---

J'ai été le **seul ingénieur** sur Connect pendant quatre ans chez <a href="https://neo-ooh.com/" target="_blank" rel="noreferrer">NEO-OOH</a> (maintenant Québecor Media). J'ai conçu et construit cette plateforme entièrement de zéro, du choix du stack et de l'architecture au schéma de base de données, l'interface et le déploiement.

Neo est une entreprise d'affichage numérique opérant des écrans partout au Canada. Connect est devenu le système nerveux central de l'entreprise, gérant tout, de la planification publicitaire à la gestion d'inventaire en passant par les outils de vente. Ce qui a commencé comme un simple remplacement d'un vieux système de planification est devenu une plateforme utilisée quotidiennement par toutes les équipes.

Le stack: **Laravel** en backend, **React** en frontend, **PostgreSQL** pour la base de données, le tout sur **Nginx**. Bilingue (FR/EN), avec une gestion granulaire des utilisateurs et un contrôle d'accès basé sur les rôles.

Connect est construit comme une plateforme modulaire. Chaque module a un objectif précis mais s'intègre profondément aux autres.

## Diffusion

Le module de diffusion a été la première pièce construite. Il fournit une interface unifiée de planification et de suivi des campagnes publicitaires, peu importe le système de diffusion utilisé en dessous.

<figure>
  <img class="full-width-image" loading="lazy" src="/works/connect/connect.broadcast.png" alt="Connect - planification de campagne">
  <figcaption>Vue des planifications d'une campagne</figcaption>
</figure>

J'ai conçu un **système d'adaptateurs** qui décrit les campagnes dans un format neutre, puis les traduit vers l'API native de chaque plateforme de diffusion. Cela permet de gérer un réseau hétérogène d'écrans et de systèmes depuis une seule interface. Connect supporte des adaptateurs pour BroadSign, PiSignage et Navori.

Le suivi des performances est centralisé, permettant de suivre rapidement les résultats sur toutes les plateformes en même temps.

<figure>
  <img class="full-width-image" loading="lazy" src="/works/connect/connect.broadcast-2.png" alt="Connect - performances de campagne">
  <figcaption>Vue des performances d'une campagne</figcaption>
</figure>

## Inventaire

L'inventaire de Neo suit une structure `propriété > produits` que j'ai conçue pour correspondre à la façon dont les équipes pensent réellement leur réseau.

Au fil du temps, les données se sont considérablement enrichies: achalandage, prix, annuaire des locataires, calculs d'impressions, données démographiques, photos, et plus encore.

<figure>
  <img class="full-width-image" loading="lazy" src="/works/connect/connect.inventory.png" alt="Connect - détails d'inventaire produit">
  <figcaption>Toutes les informations sur un produit</figcaption>
</figure>

L'inventaire doit aussi rester synchronisé sur plusieurs plateformes publicitaires programmatiques. J'ai construit un **moteur de synchronisation** qui propage les mises à jour vers Odoo, Hivestack, BroadSign Reach, Atedra et Vistar automatiquement, en supportant les deux directions.

<figure>
  <img class="full-width-image" loading="lazy" src="/works/connect/connect.inventory-2.png" alt="Connect - informations produit étendues">
  <figcaption>Encore plus d'informations sur un produit</figcaption>
</figure>

## Le Planner

Le Planner est l'outil de vente de Neo. Il permet aux commerciaux de construire des campagnes publicitaires détaillées et à grande échelle rapidement.

<figure>
  <img class="full-width-image" loading="lazy" src="/works/connect/connect.planner-1.png" alt="Connect - vue carte du planner">
  <figcaption>La carte du Planner, avec les limites de la ville de Montréal et les Tim Hortons en rouge.</figcaption>
</figure>

Au-delà des fonctions de base (sélection de produits, remises, frais de production), la vraie puissance vient du **système de filtres** que j'ai construit:

* **Points d'intérêt**: Placer des POIs sur la carte par adresse ou par nom (Tim Hortons, banques, etc.) et limiter la sélection aux produits dans un rayon choisi.
* **Polygones**: Dessiner des formes sur la carte pour définir des zones géographiques.
* **Filtres démographiques/Vividata**: Filtrer les propriétés avec plus de 5000 variables démographiques.
* **Délimitations**: Données de recensement pour les villes, régions de tri d'acheminement et circonscriptions électorales.
* Étiquettes, spécifications techniques, et plus.

Les filtres peuvent être groupés avec une logique configurable (ET/OU), et chacun peut être inversé. Les résultats expliquent exactement pourquoi un produit est inclus ou exclu.

<div class="images-row">
  <figure>
    <img loading="lazy" src="/works/connect/connect.planner-2.png" alt="Connect - vue liste du planner">
    <figcaption>La vue en liste montrant les détails calculés pour tous les produits</figcaption>
  </figure>
  <figure>
    <img loading="lazy" src="/works/connect/connect.planner-3.png" alt="Connect - résultats des filtres du planner">
    <figcaption>Résultats des filtres expliquant pourquoi un produit est inclus</figcaption>
  </figure>
</div>

Le Planner est devenu un outil utilisé non seulement par les commerciaux, mais par beaucoup d'équipes différentes chez Neo pour obtenir des informations sur le réseau. Les campagnes peuvent être partagées en externe via un lien simplifié en lecture seule.

## Contrats

Le suivi des contrats permet de suivre les performances des campagnes sur tous les systèmes de diffusion dans une seule vue.

<figure>
  <img class="full-width-image" loading="lazy" src="/works/connect/connect.contracts.png" alt="Connect - suivi des contrats">
  <figcaption>Page d'accueil d'un contrat</figcaption>
</figure>

Avant, les opérateurs devaient vérifier plusieurs interfaces de plateformes différentes. Connect centralise tout et supporte la génération automatique de captures d'écran pour les preuves de diffusion, incluant le montage des captures directement sur des photos des écrans réels.

---

Connect est passé d'un outil à un module à une plateforme qui touche chaque aspect des opérations de Neo. Le construire seul pendant quatre ans m'a donné une expérience profonde dans la conception de systèmes qui évoluent avec les besoins d'une entreprise, et la satisfaction de savoir que ça a fait une vraie différence dans le quotidien des gens.
