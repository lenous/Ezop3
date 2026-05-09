# EZOP 3

Modulární Vite + TypeScript verze mobilní výrobní aplikace. Projekt vznikl rozdělením původního jednoho `index.html` z `VyrobaIS` do struktury, která se dá lépe udržovat a postupně dál refaktorovat.

## Spuštění

```bash
npm install
npm run dev
```

Výchozí dev server běží na [http://localhost:8084](http://localhost:8084).

## Build

```bash
npm run build
```

## GitHub Pages

Repozitář obsahuje workflow `.github/workflows/deploy-pages.yml`. Po pushi do `main` se aplikace sestaví a nasadí na [https://lenous.github.io/Ezop3/](https://lenous.github.io/Ezop3/). Pokud se stránka po prvním pushi ještě nezobrazí, zkontrolujte v GitHubu `Settings → Pages`, že je zdroj nastavený na `GitHub Actions`.

## Data a Supabase

První verze zachovává kompatibilitu s původní tabulkou `public.app_state` a řádkem `main`. Provozní data se ukládají ve stejném tvaru, aby šla načíst stávající data. Do cloudu se neposílají hesla, profily uživatelů ani lokální přihlašovací logy.

## Struktura

- `src/main.ts` skládá shell a spouští kompatibilní runtime.
- `src/styles/` drží rozdělené CSS.
- `src/state/` obsahuje typy a store API.
- `src/services/` obsahuje storage/Supabase/PWA facady.
- `src/auth/` obsahuje session a role/permissions API.
- `src/features/` je připravené pro postupný přesun render logiky z legacy runtime.

## PWA

Manifest, ikony a service worker jsou v `public/`. Po buildu se kopírují do `dist/`.
