---
layout: project.njk
projectTitle: "AutoTrader"
metaTitle: "AutoTrader - Valentin Dufois"
metaDescription: "AutoTrader: a personal algorithmic trading platform built on Interactive Brokers, featuring AXL — a custom DSL for writing trading algorithms."
---

AutoTrader is a personal project: a full algorithmic trading platform built on top of Interactive Brokers. It started as a way to automate some trading ideas and evolved into a serious, production-grade system.

## AXL — A trading DSL

The core of AutoTrader is **AXL**, a declarative domain-specific language I designed for writing trading algorithms. Instead of coding strategies in PHP or Python, algorithms are written as `.axl` files with a clean, purpose-built syntax:

- **Declarative rules** — strategies are expressed as `when: <conditions> then: <actions>` blocks
- **Built-in indicators** — SMA, EMA, RSI, MACD, Bollinger Bands, ATR, Stochastic, and more
- **Typed parameters** — each algorithm defines tunable parameters with min/max/step metadata, used by both the UI and the optimizer
- **State and series** — persistent key-value state across bars and time-indexed series for charting

The AXL compiler is written in **Rust across 5 crates** (~15K lines): lexer, parser, validator, compiler, and a WASM target. The lexer handles Python-style indentation, the validator enforces a type system with series auto-dereferencing and null safety, and the compiler lowers everything to a JSON AST. That AST is then executed bar-by-bar by a PHP interpreter inside the trading engine.

The WASM build powers an **in-browser code editor** with real-time compilation feedback, so you get instant type errors and validation while writing algorithms.

<div class="images-row">
  <figure>
    <img src="/works/autotrader/axl_editor.png">
    <figcaption>The AXL editor with syntax highlighting, algorithm browser, and language reference</figcaption>
  </figure>
  <figure>
    <img src="/works/autotrader/axl_debug.png">
    <figcaption>Bar-by-bar debug trace of an AXL algorithm execution</figcaption>
  </figure>
</div>

## Architecture

The platform runs as a **microservices architecture** orchestrated with Docker Compose:

- **Laravel** handles the core business logic, API, job queues, and WebSocket events
- **FastAPI (Python)** serves as a thin adapter to the Interactive Brokers API
- **A second FastAPI service** runs Bayesian optimization for algorithm parameter tuning via Optuna
- **React + TypeScript** powers the monitoring dashboard and the AXL code editor
- **PostgreSQL** and **Redis** handle persistence and real-time event distribution
- **Caddy** handles reverse proxying and TLS in production

## Backtesting and optimization

The backtesting engine replays historical data bar-by-bar with realistic fill simulation, slippage, and commission modeling. Results are tracked with snapshots and displayed in the dashboard.

For parameter optimization, the platform uses **Bayesian optimization via Optuna**, allowing algorithms to be tuned across large parameter spaces. It also supports **walk-forward validation** — sequential train/test windows to guard against overfitting — and **algorithm scans** for multi-symbol, multi-timeframe optimization.

<figure>
  <img class="full-width-image" src="/works/autotrader/fitting_run_details.png">
  <figcaption>A fitting run with Bayesian optimization across multiple rounds</figcaption>
</figure>

## The dashboard

The React frontend provides real-time monitoring of positions, orders, and P&L through WebSocket connections. It also exposes the algorithm library with the integrated AXL editor, backtest history, scan results, and optimization runs.

<figure>
  <img class="full-width-image" src="/works/autotrader/session_details.png">
  <figcaption>Backtest session with equity chart, orders, and performance metrics</figcaption>
</figure>

---

This project is where I push my technical boundaries. Building a compiler from scratch in Rust, designing a type-safe DSL, running distributed microservices, real-time data processing, ML-adjacent optimization, and financial modeling — all in one system. It runs in paper trading mode by default, with live trading infrastructure ready to go.
