# EZOP 3 Contributor Notes

Start with `docs/CODEMAP.md` and edit the smallest relevant module first. Avoid loading all of `src/legacy/runtime.js` unless the UI wiring itself must change.

Keep production math in `src/domain/productionFlow.ts`; the legacy runtime should only call those helpers.
