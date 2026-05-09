# EZOP 3 Code Map

Use this map before opening large files. It keeps future changes focused and cheaper.

## Most Common Changes

- Production count rules: `src/domain/productionFlow.ts`
- Demo users, orders, stations and seed notes: `src/domain/defaultData.ts`
- Order station sequence UI: `src/legacy/runtime.js`, search `manageStationsModal`
- Memory cleanup rules: `src/legacy/runtime.js`, search `cleanupAppMemory`
- Legacy UI wiring for station/order screens: `src/legacy/runtime.js`
- Shell HTML only: `src/ui/shell.ts`
- Visual styling: `src/styles/`
- Supabase/local storage facade: `src/services/storage.ts`
- Shared TypeScript data shapes: `src/state/types.ts`

## Current Runtime Boundary

`src/main.ts` injects `src/legacy/runtime.js` as a raw compatibility script. New pure business rules should go into small modules under `src/domain/` and be exposed to the runtime through `window.EZOP_FLOW`.

## Data Rule

When a station finishes, the next station receives `OK + Oprava`. Scrap does not continue. This lets repaired boards become OK on the next station while preserving scrap loss.

The order workflow follows the array order in `order.stations`. Do not sort it by `stId` unless the user explicitly wants to reset the route.
