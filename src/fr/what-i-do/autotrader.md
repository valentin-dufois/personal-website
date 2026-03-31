---
layout: project.njk
projectTitle: "AutoTrader"
metaTitle: "AutoTrader - Valentin Dufois"
metaDescription: "AutoTrader: une plateforme personnelle de trading algorithmique sur Interactive Brokers, intégrant AXL — un DSL sur mesure pour écrire des algorithmes de trading."
---

AutoTrader est un projet personnel: une plateforme complète de trading algorithmique construite sur Interactive Brokers. Ce qui a commencé comme un moyen d'automatiser quelques idées de trading est devenu un système sérieux, prêt pour la production.

## AXL — Un DSL de trading

Le cœur d'AutoTrader est **AXL**, un langage déclaratif dédié que j'ai conçu pour écrire des algorithmes de trading. Plutôt que de coder les stratégies en PHP ou Python, les algorithmes sont écrits en fichiers `.axl` avec une syntaxe épurée et spécialisée:

- **Règles déclaratives** — les stratégies s'expriment sous forme de blocs `when: <conditions> then: <actions>`
- **Indicateurs intégrés** — SMA, EMA, RSI, MACD, Bandes de Bollinger, ATR, Stochastique, et plus
- **Paramètres typés** — chaque algorithme définit des paramètres ajustables avec des métadonnées min/max/step, utilisés à la fois par l'interface et l'optimiseur
- **État et séries** — état persistant clé-valeur entre les barres et séries temporelles indexées pour le charting

Le compilateur AXL est écrit en **Rust en 5 crates** (~15K lignes): lexer, parser, validateur, compilateur, et une cible WASM. Le lexer gère l'indentation à la Python, le validateur impose un système de types avec auto-déréférencement des séries et null safety, et le compilateur produit un AST JSON. Cet AST est ensuite exécuté barre par barre par un interpréteur PHP dans le moteur de trading.

Le build WASM alimente un **éditeur de code dans le navigateur** avec retour de compilation en temps réel, offrant des erreurs de types et de la validation instantanées pendant l'écriture des algorithmes.

<div class="images-row">
  <figure>
    <img src="/works/autotrader/axl_editor.png">
    <figcaption>L'éditeur AXL avec coloration syntaxique, navigateur d'algorithmes, et référence du langage</figcaption>
  </figure>
  <figure>
    <img src="/works/autotrader/axl_debug.png">
    <figcaption>Trace de débogage barre par barre d'un algorithme AXL</figcaption>
  </figure>
</div>

## Architecture

La plateforme tourne en tant qu'**architecture microservices** orchestrée avec Docker Compose:

- **Laravel** gère la logique métier, l'API, les files d'attente de jobs, et les événements WebSocket
- **FastAPI (Python)** sert d'adaptateur vers l'API d'Interactive Brokers
- **Un second service FastAPI** exécute l'optimisation bayésienne pour le tuning des paramètres via Optuna
- **React + TypeScript** alimente le tableau de bord et l'éditeur de code AXL
- **PostgreSQL** et **Redis** gèrent la persistance et la distribution d'événements en temps réel
- **Caddy** gère le reverse proxy et TLS en production

## Backtesting et optimisation

Le moteur de backtesting rejoue les données historiques barre par barre avec une simulation réaliste des exécutions, du slippage, et des commissions. Les résultats sont suivis avec des snapshots et affichés dans le tableau de bord.

Pour l'optimisation des paramètres, la plateforme utilise l'**optimisation bayésienne via Optuna**, permettant de tuner les algorithmes sur de grands espaces de paramètres. Elle supporte aussi la **validation walk-forward** — des fenêtres séquentielles d'entraînement/test pour se prémunir contre le surapprentissage — et les **scans d'algorithmes** pour une optimisation multi-symboles et multi-timeframes.

<figure>
  <img class="full-width-image" src="/works/autotrader/fitting_run_details.png">
  <figcaption>Un run d'optimisation bayésienne sur plusieurs rounds</figcaption>
</figure>

## Le tableau de bord

Le frontend React offre un suivi en temps réel des positions, ordres, et P&L via des connexions WebSocket. Il expose aussi la bibliothèque d'algorithmes avec l'éditeur AXL intégré, l'historique de backtests, les résultats de scans, et les runs d'optimisation.

<figure>
  <img class="full-width-image" src="/works/autotrader/session_details.png">
  <figcaption>Session de backtest avec courbe d'équité, ordres, et métriques de performance</figcaption>
</figure>

---

Ce projet est là où je pousse mes limites techniques. Construire un compilateur from scratch en Rust, concevoir un DSL typé, opérer des microservices distribués, traiter des données en temps réel, de l'optimisation proche du ML, et de la modélisation financière — le tout dans un seul système. Il tourne en mode paper trading par défaut, avec l'infrastructure de trading live prête à l'emploi.
